import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import HomePage from './page/HomePage';
import AnnouncementPage from './page/AnnouncementPage'
import MessagePage from './page/MessagePage';
import SettingPage from './page/SettingPage';
import CoursePickPage from './page/CoursePickPage';
import ClassPage from './page/ClassPage';
import Login from './page/login'
import ProfilePage from './page/ProfilePage';
import GradePage from './page/GradePage';
import HelpPage from './page/HelpPage';
import AddMaterialPage from './page/AddMaterialPage';
import AddAssignmentPage from './page/AddAssignmentPage';
import AddAnnouncementPage from './page/AddAnnouncementPage';
import AddModulePage from './page/AddModulePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path='/HomePage' element={<HomePage/>} />
          <Route path='/AnnouncementPage' element={<AnnouncementPage/>} />
          <Route path='/MessagePage' element={<MessagePage/>} />
          <Route path='/SettingPage' element={<SettingPage/>} />
          <Route path='/CoursePickPage' element={<CoursePickPage/>} />
          <Route path='/ClassPage' element={<ClassPage/>} />
          <Route path='/LoginPage' element={<Login/>} />
          <Route path='/ProfilePage' element={<ProfilePage/>} />
          <Route path='/GradePage' element={<GradePage/>}/>
          <Route path='/HelpPage' element={<HelpPage/>}/>
          <Route path='/AddAnnouncementPage' element={<AddAnnouncementPage/>}/>
          <Route path='/AddAssignmentPage' element={<AddAssignmentPage/>}/>
          <Route path='/AddMaterialPage' element={<AddMaterialPage/>}/>
          <Route path='/AddModulePage' element={<AddModulePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;