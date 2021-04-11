import React,{Fragment,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const TaskItem = () =>{
    const [work,setWork] = useState([
        {
            id:uuidv4(),
            name:'Duy An',
            status: true,
        },
        {
            id:uuidv4(),
            name:'Justin',
            status:false,
        }
    ]);
    let students = work.map((student,index) =>{
        return <tr>
                    <td scope="row">{index+1}</td>
                    <td>{student.name}</td>
                    <td>
                        {student.status ? <span className="badge badge-primary">Online</span> : <span className="badge badge-danger">Offline</span>}
                    </td>
                </tr>
    })
    return (
        <Fragment>
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
                       {students}
        </Fragment>
    )
}

export default TaskItem