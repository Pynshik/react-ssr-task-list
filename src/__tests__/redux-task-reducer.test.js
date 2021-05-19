import { tasksReducer } from '../redux/taskReducer';
import * as types from '../redux/types';

describe('task reducer', () => {
    const initialState = {
        tasks: [
          {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'},
          {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
          {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
        ],
    };

    it('should return the initial state', () => {
        expect(tasksReducer(undefined, {})).toEqual(
            {
                tasks: [
                  {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'},
                  {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
                  {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
                ],
            }
        );
    });

    it('should handle add task', () => {
        expect(tasksReducer({ tasks: [] }, {
            type: types.ADD_TASK,
            payload: {id: "4", name: 'Test', surname: 'Test', email: 'test@test.com'}
        })).toEqual(
            {
                tasks: [
                    {id: "4", name: 'Test', surname: 'Test', email: 'test@test.com'}
                ],
            }
        );

        expect(tasksReducer(initialState, {
            type: types.ADD_TASK,
            payload: {id: "4", name: 'Test', surname: 'Test', email: 'test@test.com'}
        })).toEqual({
            tasks: [
                {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'},
                {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
                {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
                {id: "4", name: 'Test', surname: 'Test', email: 'test@test.com'}
              ],
        })
    });

    it('should handle delete task', () => {
        // window.confirm = jest.fn(() => true);
        
        expect(tasksReducer(initialState, {
            type: types.DELETE_TASK,
            payload: "1"
        })).toEqual({
            tasks: [
              {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
              {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
            ],
        });
    });

    it('should handle edit task', () => {
        expect(tasksReducer(initialState, {
            type: types.EDIT_TASK,
            payload: {id: "1", name: 'Test', surname: 'Test', email: 'test@test.com'}
        })).toEqual({
            tasks: [
              {id: "1", name: 'Test', surname: 'Test', email: 'test@test.com'},
              {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
              {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
            ],
        });
    });

    it('should handle edit task', () => {
        expect(tasksReducer(initialState, {
            type: types.EDIT_TASK,
            payload: {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'}
        })).toEqual({
            tasks: [
              {id: "1", name: 'Petr', surname: 'Petrov', email: 'petr@mail.ru'},
              {id: "2", name: 'Ivan', surname: 'Ivanov', email: 'ivan@mail.ru'},
              {id: "3", name: 'Sergei', surname: 'Sergeev', email: 'sergei@mail.ru'},
            ],
        });
    });
});
