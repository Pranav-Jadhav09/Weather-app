<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
![GitHub repo size](https://img.shields.io/github/repo-size/Pranav-Jadhav09/Weather-app)
[![Twitter Follow](https://img.shields.io/twitter/follow/Pranav_Jadhav09?style=social)](https://twitter.com/Pranav_Jadhav09)

<img src="./favicon.svg" alt="Logo" height="80"  >

## Weather App

Explore accurate and real-time weather information for cities around the world with Weatherio. Get current weather conditions, 5-day forecasts, wind speed, sunrise and sunset times, air quality, humidity, and more. Stay informed about weather changes effortlessly. Visit Weatherio now!

<a href="https://modern-weather-app.vercel.app"><strong>➥ Live on Vercel.app</strong></a>

</div>

<br />

## Functionality

- Users can search for a city to view its weather information.
- The application fetches real-time weather data from the OpenWeather API.
- The current weather section displays the temperature, weather icon, and description.
- The 5-day forecast shows the weather conditions for the next five days.
- The hourly forecast provides wind speed and temperature details for the current day.
- Sunrise and sunset times are displayed for the selected city.
- Additional weather details, including air quality, humidity, visibility, feels like temperature, and atmospheric pressure, are shown.
- The application is responsive and adapts to different screen sizes.

<br />

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, etc.).
- Internet connection to fetch weather data from the OpenWeather API.

### Installation

1. Clone the repository or download the project files to your local machine.
2. Open `index.html` in your web browser.

## Project Structure

The project is organized into multiple files for better code organization and separation of concerns:

- `index.html`: The main HTML file that contains the user interface.
- `style.css`: The CSS file that defines the styling for the web application.
- `api.js`: Contains functions to interact with the OpenWeather API.
- `module.js`: Contains utility functions related to weather data conversion and calculations.
- `app.js`: Contains the main application logic, including event handling and rendering.
- `route.js`: Defines the application routes and handles URL hash changes.

<br />

## HTML

### index.html

The main HTML file contains the structure of the Weather Website. It consists of different sections, including a search bar, current weather display, forecast section, and additional weather details. The page is designed to be responsive and adapts to different screen sizes.

<br />

## CSS

### style.css

The `style.css` file contains all the CSS styles used to create a visually appealing and user-friendly interface. It defines global variables, reset styles, and custom styles for various components like buttons, cards, headers, and footers. The CSS is organized using class selectors for specific components and follows a mobile-first approach with media queries for responsive design.

<br />

## JavaScript

### api.js

The `api.js` file contains functions to interact with the OpenWeather API. It includes functions to fetch weather data based on city names and coordinates using asynchronous JavaScript (async/await) and the Fetch API. The API key required for accessing the OpenWeather API is stored as a constant.

### module.js

The `module.js` file defines utility functions related to weather data conversion and calculations. It includes functions to convert temperature units from Kelvin to Celsius and Fahrenheit, convert wind speed units, and calculate air quality index (AQI) level and its corresponding message.

### app.js

The `app.js` file contains the main application logic. It defines functions to update the weather information on the user interface based on the data fetched from the API. This file handles event listeners for user interactions, such as searching for a city, updating the UI for current weather and forecast, and displaying error messages when necessary.

### route.js

The `route.js` file manages the application's routing system. It defines routes for different sections of the website and handles URL hash changes. The routes are associated with specific functions in `app.js` to render the appropriate content based on the user's actions.

<br />

## Cloning Project

This project require some prequesites and dependenscies to be installed, you can view it online using this [demo](https://modern-weather-app.vercel.app). or you can find the instructions below

> To get a local copy, follow these simple steps :

### Installation

1. Clone the repo

```sh
git clone https://github.com/Pranav-Jadhav09/Weather-app
```

2. Install Dependencies

```bash
npm install
```

3. Run start script

```bash
npm run start
```

<br />

## License

This project is licensed under [GNU GENERAL PUBLIC LICENSE](./LICENSE).
