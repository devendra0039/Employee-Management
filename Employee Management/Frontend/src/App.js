import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import FrontPage from './components/FrontPage';
import UpdateEmployee from './components/UpdateEmployee';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<FrontPage/>}/>
        <Route path='/AddEmployee' element={<AddEmployee />} />
        <Route path='/UpdateEmployee' element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
