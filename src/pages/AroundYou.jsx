import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {Error, Loader, SongCard} from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
const [country, setCountry] = useState('');
const [loading, setLoading] = useState(true);
const{activeSong, isPlaying} = useSelector((state) => state.player );
const {data, isFecting, error} = useGetSongsByCountryQuery(country);
console.log(country)
useEffect(() => {
    // need to made a call to geo api to get your location
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_Ye9ektrsxVHE6h2UO8qQOh4ItIa4o`).then((res) => setCountry(res?.data?.location.country)).catch((err) => console.log(err)).finally(() => setLoading(false));
},[country])
}

export default CountryTracks;
