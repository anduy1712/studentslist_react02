import React, {Fragment,useState} from 'react';
import TaskItem from './TaskItem';

const TaskList = props => {
    

    

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
                        <tr>
                            <td scope="row">#</td>
                            <td>
                                <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                              
                            </td>
                            <td>
                              <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                      Status
                                    </button>
                                <div className="dropdown-menu" aria-labelledby="triggerId">
                                  <a className="dropdown-item" href="#">Online</a>
                                  <a className="dropdown-item" href="#">Offline</a>
                                  
                                </div>
                              </div>
                            </td>
                        </tr>
                        <TaskItem tasks={props.tasks}/>
                     </tbody>
             </table>
             
        </Fragment>
    )
}

export default TaskList;