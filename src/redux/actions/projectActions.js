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
}

export const triggerPost = (project, username) => ({
    type: PROJECT_ACTIONS.POST_PROJECT,
    payload: {
      project,
      username
    },
  });

  export function fetchProjects() {
    return {type: PROJECT_ACTIONS.GET_PROJECTS};
  }

