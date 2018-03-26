import axios from 'axios';
import CONSTANTS from '../../constants';

export function callProject(payload) {
    console.log(payload.project);
    const body = ({
      project: payload.project,
    });
  
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
  
    return axios.post(`${CONSTANTS.apiBaseUrl}/projects/`, body, config)
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
        return response.data;
      }).catch((error) => { throw error;}); 
  }

  export function getUserProject() {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      return axios.get(`${CONSTANTS.apiBaseUrl}/projects/userproject`, config)
      .then(response => response.data)
      .catch((error) => { throw error;});
  }

  export function editProject(payload) {
    console.log(payload.project);
    const body = ({
      project: payload.project
    });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    return axios.put(`${CONSTANTS.apiBaseUrl}/projects`, body, config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
  }