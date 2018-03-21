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
        return response.data;
      }).catch((error) => { throw error;}); 
  }

  export function getUserProject(user) {
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      return axios.get(`${CONSTANTS.apiBaseUrl}/projects/${user.userName}`, config)
      .then(response => response.data)
      .catch((error) => { throw error;});
  }

  export function editProject(payload) {
    const body = ({
      project: payload.project
    });
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    return axios.put(`${CONSTANTS.apiBaseUrl}/projects/${payload.projectId}`, body, config)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
  }