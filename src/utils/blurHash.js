import fs from "fs";
import { createCanvas, loadImage } from "canvas";
import blurhash from "blurhash";

// Function to convert BlurHash to base64
export default async function blurhashToBase64(
  blurhashString,
  width,
  height,
  punch
) {
  // Decode the BlurHash to RGB pixels
  const pixels = blurhash.decode(blurhashString, width, height, punch);

  // Create a canvas to draw the pixels
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // Convert the RGB pixels to ImageData
  const imageData = context.createImageData(width, height);
  imageData.data.set(pixels);

  // Draw the ImageData on the canvas
  context.putImageData(imageData, 0, 0);

  // Convert the canvas to base64
  const base64String = canvas.toDataURL("image/jpeg");

  return base64String;
}

// Example usage:
const blurhashString = "LPBD.+V?t7of4TWBj[WBaeofWBaz";
const width = 100; // Replace with the actual width of the image
const height = 100; // Replace with the actual height of the image
const punch = 1.0; // Adjust the punch value as needed

blurhashToBase64(blurhashString, width, height, punch)
  .then((base64Image) => {
    console.log(base64Image);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
