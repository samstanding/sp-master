import axios from 'axios';
import CONSTANTS from '../../constants';

export function callProject(payload) {
    const body = ({
      project: payload.project,
    });
  
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    return axios.post(`${CONSTANTS.apiBaseUrl}/projects/${payload.username}`, body, config)
      .then(response => response.data)
      .catch((error) => {
        throw error.response || error;
      });
  }

  export function getProjects () {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      return axios.get(`${CONSTANTS.apiBaseUrl}/projects`, config)
      .then(response => {
        console.log(response.data);
        return response.data;
      }).catch((error) => { throw error;}); 
  }