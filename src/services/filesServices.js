import axios from 'axios';

const getDataFiles = () => { 
    return axios.get('http://localhost:8888/files/data', { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origins': '*' } });
};

export { getDataFiles }