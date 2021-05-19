import React from 'react';
import { TaskItem } from '../TaskItem';
import { shallow } from 'enzyme';

describe('Task Item', () => {
    const mockEdit = jest.fn();
    const mockDelete = jest.fn();

    const props = {
        index: 1,
        task: {},
        deleteTask: mockDelete,
        edit: mockEdit,
    };

    const taskItem = shallow(<TaskItem {...props}/>)

    it('initial render', () => {
        expect(taskItem.find('li')).toHaveLength(1);
    })

    describe('button "Edit"', () => {
        beforeEach(() => {
            taskItem.find('[value="Edit"]').simulate('click', {
                preventDefault: () => {},
            })
        })

        it('click on button "Edit"', () => {
            expect(mockEdit).toHaveBeenCalledTimes(1);
        })
    })

    describe('button "Delete"', () => {
        beforeEach(() => {
            taskItem.find('[className="rm"]').simulate('click', {
                preventDefault: () => {},
            })
        })

        it('click on button "Delete"', () => {
            expect(mockDelete).toHaveBeenCalledTimes(1);
        })
    })
})