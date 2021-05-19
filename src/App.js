import React, {useState} from 'react';
import {Route, Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import EditTask from './EditTask';
import {actions} from './redux/actions';

const App = (props) => {
  const history = useHistory();
  const [EditableTask, SetEditableTask] = useState(null);

  const CreateTask = (newTask) => {
    props.addTask(newTask);
    history.push('/list');
  }

  const HandleEditBtn = (id) => {
    const task = props.tasks.find((task) => task.id === id);
    task !== undefined ? SetEditableTask(task) : history.push('/list');
    history.push('/edit');
  }

  const UpdateTask = (task) => {
    props.editTask(task);
    history.push('/list');
  }


  const DeleteTask = (id) => {
    props.deleteTask(id);
    history.push('/list');
  }

  return (
    <div className="App">
      <ul className="link">
        <li>
          <Link to="/add">Create task</Link>
        </li>
        <li>
          <Link to="/list">Task list</Link>
        </li>
      </ul>
      <Route path="/edit">
        <EditTask editableTask={EditableTask} updateTask={UpdateTask} />
      </Route>
      <Route path="/add">
        <AddTask createTask={CreateTask} />
      </Route>
      <ul className="wrapper">
        {props.tasks ?
          props.tasks.map((task, index) => {
            return (
              <Route path="/list">
                <TaskItem
                  edit={HandleEditBtn}
                  deleteTask={DeleteTask}
                  task={task}
                  index={index}
                  key={task.id}
                />
              </Route>
            );
          }) :
          'There is no tasks.'}
      </ul>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  addTask: actions.addTask,
  deleteTask: actions.deleteTask,
  editTask: actions.editTask,
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
