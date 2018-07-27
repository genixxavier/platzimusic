import config from './config';

const {apikey} = config;
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=b5df30955909e1fb7181c8cbc6a64c39&format=json';

export default function  getartistas(country){
    const url = URL.replace(':country',country)
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}