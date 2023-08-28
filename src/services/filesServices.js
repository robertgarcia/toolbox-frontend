import axios from 'axios';

const getDataFiles = () => { 
    return axios.get('http://localhost:8888/data/files');
};

export { getDataFiles }