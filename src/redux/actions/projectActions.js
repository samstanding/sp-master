export const PROJECT_ACTIONS = {
    POST_PROJECT: "POST_PROJECT",
    GATHER_PROJECT: "GATHER_PROJECT",
    REQUEST_START: "REQUEST_START",
    REQUEST_DONE: "REQUEST_DONE",
    GET_PROJECTS: "GET_PROJECTS",
    GET_PROJECTS_START: "GET_PROJECTS_START",
    GET_PROJECTS_DONE: "GET_PROJECTS_DONE",
    GET_PROJECTS_SET: "GET_PROJECTS_SET",
    GET_PROJECTS_FAILED: "GET_PROJECTS_FAILED",
    GET_USER_PROJECT: "GET_USER_PROJECT",
    GET_USER_PROJECT_START: "GET_USER_PROJECT_START",
    GET_USER_PROJECT_DONE: "GET_USER_PROJECT_DONE",
    GET_USER_PROJECT_SET: "GET_USER_PROJECT_SET",
    GET_USER_PROJECT_FAILED: "GET_USER_PROJECT_FAILED",
    EDIT_PROJECT: "EDIT_PROJECT",
    GATHER_EDITED_PROJECT: "GATHER_EDITED_PROJECT",
    REQUEST_EDIT_START: "REQUEST_START",
    REQUEST_EDIT_DONE: "REQUEST_DONE",

}

export const triggerPost = (project, username) => ({
    type: PROJECT_ACTIONS.POST_PROJECT,
    payload: {
      project,
      username,
    },
  });

  export const fetchProjects = () => {
    return {type: PROJECT_ACTIONS.GET_PROJECTS};
  };

  export const fetchUserProject = (username) => ({
    type: PROJECT_ACTIONS.GET_USER_PROJECT,
    payload: {
      username
    },
  });

  export const triggerPut = (project, projectId) => ({
    type:PROJECT_ACTIONS.EDIT_PROJECT,
    payload: {
      project,
      projectId,
    },
  });
