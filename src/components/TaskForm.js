import React, {Fragment,useState} from 'react';
import TaskList from './TaskList';

const TaskForm = props => {
    

    

    return (
      <TaskList tasks={props.tasks}/>
    )
}

export default TaskForm;