import './App.css';
import About from './component/About';
import Login from './component/Login';
import Holiday from './component/Holiday';
import Userdata from './component/Userdata';
import Signup from './component/Signup';
import Admin from './component/Admin';
import Adminuserdata from './component/Adminuserdata';

import { BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navb from './component/Navb';
import Navbb from './component/Navbb';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="holiday" element={<Holiday />} />
          <Route path="userdata" element={<Userdata />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
          <Route path="adminuserdata" element={<Adminuserdata />} />
          <Route path="navb" element={<Navb />} />
          <Route path="navbb" element={<Navbb />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
