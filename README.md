# Get-Social

This web application is built using Next.js and leverages the Unsplash OpenAPI to provide functionalities similar to Instagram's News Feed and Profile sections. It allows users to explore random photos, view user profiles, and interact with image feeds.

## Features

1. News Feed

   Fetches 10 random photos from Unsplash using the API.
   Implements infinite scrolling, loading more photos as the user scrolls down.
   Displays username, profile picture,location, number of likes, and other relevant data for each feed.
   Utilizes caching to improve performance and reduce API calls.

2. Profile Section

   Provides an option to view a user's profile page by clicking on the username of any post from the newsfeed.
   Fetches user details based on the username from the Unsplash API.
   Shows all photos added by the user along with photo descriptions in a grid structure view.
   Offers the option to switch to the list view of the selected image using a component created for the news feed.
   Handles loading, empty, and error states gracefully.

## Snapshots
![Screenshot from 2023-07-31 21-18-12](https://github.com/palakjain21/Get-Social/assets/56087514/90bd74fb-e496-43e5-bfc7-c0237667fbd2)
![Screenshot from 2023-07-31 21-17-54](https://github.com/palakjain21/Get-Social/assets/56087514/81e6276b-83ed-44f8-b796-e555e77a27c5)
![Screenshot from 2023-07-31 21-17-28](https://github.com/palakjain21/Get-Social/assets/56087514/625ec76c-aad3-463e-a105-976649c95c88)
![Screenshot from 2023-07-31 21-17-02](https://github.com/palakjain21/Get-Social/assets/56087514/29bae634-cd6a-4a9b-b414-be28a42f4e26)


## Routing

Implements dynamic routing to navigate to specific user profiles.

## State Management

The application utilizes react-redux and Redux Toolkit as the state management library to handle global application state and asynchronous actions like API calls.

## Folder Structure

The codebase follows a standard, well-defined folder structure for better organization and maintainability. The key directories include:

components: Contains reusable React components used across the application.
app: Includes the pages and routes of the application, such as the News Feed, User Profile, and Home pages.
redux: Contains Redux-related files, such as actions, reducers, and the store configuration.
styles: Holds the CSS files, including native CSS for styling, following the no UI library requirement.
assets: Contains all the images used throught the application

## UI and Responsiveness

The application is made responsive and mobile-friendly to ensure a seamless user experience across different devices.

## Edge Cases and Error Handling

The application considers and handles various edge cases and scenarios to ensure robustness and prevent unexpected behavior. It provides error handling for API calls and gracefully manages loading and empty states in the user interface.

## Caching

The application utilizes caching feature of NextJs(through fetch()) to improve performance and reduce API calls. It caches the user profile data and the news feed data.

## Blurhash Placeholder

The Blurhash technique is used to display placeholder images before the actual images load, enhancing the user experience.

## Technologies Used

-NextJs: Next.js is a React framework that enables several features, such as server-side rendering, static site generation, and automatic code splitting.
-Unsplash API: The Unsplash API is a modern JSON API that surfaces all of the info you'll need to build any experience for your users.
-NextJs API response caching: By default, all fetch() requests are cached and deduplicated automatically in NextJs.
-Blurhash: Blurhash is a compact representation of a placeholder for an image. It is a great alternative to the classic boring spinners.
-React-Redux: React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
-Redux-toolkit: Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development.

## Getting Started

### Prerequsites

    Node version > 14
    Install dependencies by running npm i

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Deployment

The working code is deployed on a platform like Vercel to make the application accessible and showcase the functionalities.
Deployed link: https://get-social-drab.vercel.app/

## Future features

While focusing on the basic functionality, the application has the potential to expand its features, such as adding comments, likes, and reactions to images. It also has the flexibility to introduce dark/light mode for user preference.
