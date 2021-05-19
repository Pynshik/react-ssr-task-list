import {ADD_TASK, DELETE_TASK, EDIT_TASK} from './types';

export const actions = {
  addTask: (newTask) => {
    return ({
      type: ADD_TASK,
      payload: newTask,
    });
  },
  deleteTask: (id) => {
    return ({
      type: DELETE_TASK,
      payload: id,
    });
  },
  editTask: (task) => {
    return ({
      type: EDIT_TASK,
      payload: task,
    });
  },
}
