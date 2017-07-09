import axios from 'axios';

const API_KEY = 'b312442a73a4c62ba990566c860678d9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // At this point, request is a promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        /*
            When we pass the request to the reducer, the promise has
            been resolved already thanks to the middleware interceptor.
        */
        payload: request
    };
}
