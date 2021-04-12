import './App.css';
import React,{Fragment,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm';

const App = () => {
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

  return (
    <Fragment>
        <div className="container mt-4">
          <div className="row">
            {/* Tools */}
            {/* <div className="col-md-3">
              
              <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Add Students</h4>
                  <div className="form-group">
                    <label for="">Name</label>
                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  </div>
                  <div className="form-group">
                    <label for="">Status</label>
                    <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  </div>
                  <button type="button" class="btn btn-primary m-4">Add</button>
                  <button type="button" class="btn btn-danger">Cancel</button>
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
               <div className="card">
                 <h1 className="text-center mt-4">Quản Lý Công Việc</h1>
                 <div className="card-body">
                  <button type="button" className="btn btn-primary mb-2">Add Work</button>
                   <h4 className="card-title">List Works</h4>
                   {/* Table */}
                   <TaskForm tasks={work}/>
                   
                 </div>
               </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default App;
