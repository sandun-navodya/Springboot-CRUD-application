import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adduser from './users/Adduser';
import EditUser from './users/Edituser'; 
import ViewUser from './users/Viewuser';
import ViewuserByStudentId from './users/ViewuserByStudentId'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/edituser/:id" element={<EditUser/>} />
          <Route path="/viewuser/:id" element={<ViewUser/>} />
          <Route path="/viewuserbystd/:stdId" element={<ViewuserByStudentId />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;