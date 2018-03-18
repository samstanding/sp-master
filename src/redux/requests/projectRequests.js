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
  
    return axios.post(`${CONSTANTS.apiBaseUrl}/project/${payload.username}`, body, config)
      .then(response => response.data)
      .catch((error) => {
        throw error.response || error;
      });
  }