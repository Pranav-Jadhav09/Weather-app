/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright jrpranav 2024 All rights reserved
 * @author jrpranav <pranav@jrpranav.com>
 */

"use strict";

const apiKey = "511c0d53e786d6e701870951d85c605d";

/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {function} callback callback
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   * @param {string} query Search query e.g.: "Pune","Mumbai"
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};
