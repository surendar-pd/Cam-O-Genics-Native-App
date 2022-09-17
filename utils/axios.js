/**
 * Axios setup
 */

// Dependencies
import axios from "axios";
// import AsyncStorage from '@react-native-community/async-storage';
import config from "../config"
import { useEffect, useState } from 'react';

const useApi = (url, method, auth, body) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    if(url && method) setLoading(true);
    // if(auth){
    //     const token = '<do async storage here>'
    //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // }
    
    useEffect(() => {
        const callApi = async () => {
            axios({
                url, 
                method: method.toUpperCase(),
            })
            .then((response) => {
                setData(response.data);
                setSuccess(true);
            })
            .catch((err) => {
                setError(err);
                setData(err)
            })
            .finally(() => {
                setLoading(true)
            })
        }

        if(loading) callApi();
    }, [])

    return [data, loading, success, error];
}

export default useApi