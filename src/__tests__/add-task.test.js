import React from 'react';
import { shallow } from 'enzyme';
import { AddTask } from '../AddTask';

describe('Add Task', () => {
  const mockLogin = jest.fn();

  const props = {
    createTask: mockLogin,
  };
  
  describe('Add Task initial', () => {
    const addTask = shallow(<AddTask {...props}/>);

    it('render initial', () => {
      expect(addTask.find('form')).toHaveLength(1);
    });
  });

  // describe('when submitting the form', () => {
  //   const addTask = shallow(<AddTask {...props}/>);

  //   beforeEach(() => {
  //     addTask.find('form').simulate('submit', {
  //       preventDefault: () => {},
  //     })
  //   })

  //   it('calls the props.createTask', () => {
  //     expect(mockLogin).toHaveBeenCalledTimes(1)
  //   });
  // });
})

//   describe('button "more info"', () => {
//     const addTask = shallow(<AddTask {...props}/>);

//     // beforeEach(() => {
//     //     addTask.find('[value="more info"]').simulate('click',{
//     //       preventDefault: () => {},
//     //     });
//     // });

//     it('click on button "more info"', () => {
//         expect(addTask.find('[type="checkbox"]')).toHaveLength(0);
//     });
//   });
// })