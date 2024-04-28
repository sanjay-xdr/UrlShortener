# Node.js URL Shortener with Express and MongoDB

This is a simple URL shortener web application built with Node.js, Express, and MongoDB. 
It allows users to shorten long URLs into more manageable shortened versions.
It also tracks the Click on the URL

## Features

- Shorten long URLs into unique, shorter versions.
- Redirect users to the original long URL when they access the shortened URL.
- MongoDB integration to store URL mappings.
- MVC (Model-View-Controller) architecture for better organization and scalability.
- Soon to be upgraded with server-side rendering (SSR) using EJS.

## Requirements

- Node.js
- npm (Node Package Manager)
- MongoDB (Make sure you have MongoDB installed and running on your system)

## Installation

1. Clone this repository:
2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure MongoDB:
   
   - Make sure MongoDB is running on your system.
   - Update the MongoDB connection URI in `connection.js

4. Start the server:

    ```bash
    npm start
    ```

5. Open your web browser and go to `http://localhost:3000` to access the URL shortener application.



## API Endpoints

### Create a Shortened URL

- **URL:** `/url`
- **Method:** `POST`
- **Request Body:** 
  - `url`: The long URL to be shortened
- **Success Response:** 
  - **Code:** 200 
  - **Content:** `{ "message": "URL created successfully" }`

### Get All Shortened URLs

- **URL:** `/url`
- **Method:** `GET`
- **Success Response:** 
  - **Code:** 200 
  - **Content:** An array of shortened URL objects

### Redirect to Original URL

- **URL:** `/url/:shortId`
- **Method:** `GET`
- **URL Parameters:**
  - `shortId`: The unique identifier of the shortened URL
- **Success Response:** 
  - **Redirect:** Redirects to the original long URL associated with the `shortId`