import React,{Fragment,useState} from 'react';
const TaskItem = props =>{
    const {tasks} = props
    let students = tasks.map((student,index) =>{
        return <tr key={index}>
                    <td scope="row">{index+1}</td>
                    <td>{student.name}</td>
                    <td>
                        {student.status ? <span className="badge badge-primary">Online</span> : <span className="badge badge-danger">Offline</span>}
                    </td>
                </tr>
    })
    return (
        <Fragment>
            {students}
        </Fragment>
    )
}

export default TaskItem