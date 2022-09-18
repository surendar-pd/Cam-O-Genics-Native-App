/**
 * Axios setup
 */

// Dependencies
import axios from "axios";
// import AsyncStorage from '@react-native-community/async-storage';
import config from "../config"

const server = ({url = '', method = '', auth = false, data = {}}) => {
    axios.defaults.baseURL = config.BASE_URL;
    if (auth)
        axios.defaults.headers = {
            Authorization: `Bearer ${'token here'}`,
        };
    return axios[method](url, data);
}


export default server;