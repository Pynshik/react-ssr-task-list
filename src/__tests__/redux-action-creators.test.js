import * as types from '../redux/types';
import * as actions from '../redux/actions';

describe('create actions', () => {
    it('should create an action to add task', () => {
        const newTask = { 
            id: 1,
            name: 'Test',
            surname: 'Test',
            email: 'test@test.com'
        };
        const expectedAction = {
            type: types.ADD_TASK,
            payload: newTask,
        };
        
        expect(actions.actions.addTask(newTask)).toEqual(expectedAction);
    });

    it('should create an action to delete task', () => {
        const id = '1';
        const expectedAction = {
            type: types.DELETE_TASK,
            payload: id
        };

        expect(actions.actions.deleteTask(id)).toEqual(expectedAction);
    });

    it('should create an action to edit task', () => {
        const task = { 
            id: 1,
            name: 'Test',
            surname: 'Test',
            email: 'test@test.com'
        };
        const expectedAction = {
            type: types.EDIT_TASK,
            payload: task
        };

        expect(actions.actions.editTask(task)).toEqual(expectedAction);
    })
})