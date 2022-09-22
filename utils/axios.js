/**
 * Axios setup
 */

// Dependencies
import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../config";


const server = ({url = '', method = '', auth = false, token = '', data = {}}) => {
    axios.defaults.baseURL = config.BASE_URL;
    if (auth)
        axios.defaults.headers = {
            Authorization: `Bearer ${token}`,
        };
    return axios[method](url, data);
}


export default server;