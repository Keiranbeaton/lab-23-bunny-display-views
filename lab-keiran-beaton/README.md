# Lab-23 Lance-Stephenson-Display-Views

## Overview
For this project we used Angular to build different views of the images we used (images of Lance Stephenson in my case), and used angular routing to navigate between those views.

## Running the app
To run the app, type `npm run watch` in the command line. This will create the bundle and serve the app on localhost:8080

To navigate to different views, simply click around the site.
Clicking the home tab in the nav bar will bring you to the home page, which gives you the title, url and a brief description of each picture. From here, you can click the link to view the full page version of this information for each specific picture.

To view every picture as a thumbnail, click the thumbnail tab in the nav bar. This brings you to a page that displays every picture as a 100x100 thumbnail. From here you can click on any picture and it will bring you to the fullsize page for that specific picture.

To navigate directly to any fullsize page, go to localhost:8080/#/fullsize/:id. Each picture has an id that corresponds to it, and they are just 1, 2, 3 and 4.

## BONUS POINT
Putting in another router, for instance localhost:8080/#/fullsize/5, will take you to an error view. 
