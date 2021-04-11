import './App.css';
import React, {Fragment} from 'react';
import TaskForm from './components/TaskForm';

const App = () => {
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
                   <TaskForm/>
                   {/* <table className="table">
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
                           <div class="dropdown">
                             <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                 aria-expanded="false">
                                   Status
                                 </button>
                             <div class="dropdown-menu" aria-labelledby="triggerId">
                               <a class="dropdown-item" href="#">Online</a>
                               <a class="dropdown-item" href="#">Offline</a>
                               
                             </div>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td scope="row">1</td>
                         <td>Justin young</td>
                         <td>
                           <span class="badge badge-primary">Online</span>
                         </td>
                       </tr>
                       <tr>
                         <td scope="row">2</td>
                         <td>Lena Jawlu</td>
                         <td>
                          <span class="badge badge-danger">Offline</span>
                         </td>
                       </tr>
                     </tbody>
                   </table> */}
                 </div>
               </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default App;
