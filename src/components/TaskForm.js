import React, {Fragment,useState} from 'react';
import TaskItem from './TaskItem';

const TaskForm = () => {
    
    

    return (
        <Fragment>
            <table className="table">
                     <thead>
                       <tr>
                         <th>ID</th>
                         <th>Name</th>
                         <th>Status</th>
                       </tr>
                     </thead>
                     <tbody>
                        <TaskItem/>
                     </tbody>
                   </table>
        </Fragment>
    )
}

export default TaskForm;