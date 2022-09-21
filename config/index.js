const isProduction = process.env.NODE_ENV === 'production';

const BASE_URL = isProduction ? "https://cogc.kunalkeshan.dev" : "https://cogc-dev.onrender.com";

const config = {
    isProduction,
    BASE_URL,
    GITHUB_URL: 'https://github.com/surendar-pd/Cam-O-Genics-Native-App/',
}



export default config;