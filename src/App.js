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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;