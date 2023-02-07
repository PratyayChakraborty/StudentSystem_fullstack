import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Studentlist from './Component/Studentlist';
import Header from './Component/Header';
import Footer from './Component/Footer';
import AddStudent from './Component/AddStudent';
import UpdateStudent from './Component/Update';
import StudentView from './Component/StudentView';

function App() {
  return (
    
      <Router>
        <Header/>
        <div className="Container">
          <Routes>
            <Route path='/'  element={<Studentlist/>}></Route>
          <Route path='/students'  element={<Studentlist />}></Route>
          <Route path='/add-student' element={<AddStudent />}></Route>
          <Route path={'/update-student/:id'} element={<UpdateStudent />}></Route>
          <Route path={'//view-student/:id'} element={<StudentView />}></Route>
          
          </Routes>
      </div>
      <Footer/>
      </Router>
    
  );
}

export default App;
