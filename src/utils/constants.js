const API_ROOT_URL = process.env.REACT_APP_API_ROOT_URL || 'http://localhost:8000';
const API_VERSION = process.env.REACT_APP_API_VERSION || 'v1';
const DEBUG = process.env.REACT_APP_DEBUG || false;

const API_URL = `${API_ROOT_URL}/${API_VERSION}`;


export { API_URL, DEBUG };




