export const PROJECT_ACTIONS = {
    POST_PROJECT: "POST_PROJECT",
    GATHER_PROJECT: "GATHER_PROJECT",
    REQUEST_START: "REQUEST_START",
    REQUEST_DONE: "REQUEST_DONE",
}

export const triggerPost = (project, username) => ({
    type: PROJECT_ACTIONS.POST_PROJECT,
    payload: {
      project,
      username
    },
  });

