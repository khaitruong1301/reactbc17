import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HeaderHome from './components/HeaderHome/HeaderHome';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import ToDoApp from './pages/DemoAxios/ToDoApp/ToDoApp';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffect/UseEffectDemo';
import UseCallbackDemo from './pages/Hooks/UseCallback/UseCallbackDemo';
import UseMemoDemo from './pages/Hooks/UseMemo/UseMemoDemo';
import UseRefDemo from './pages/Hooks/UseRef/UseRefDemo';
import ReduxHook from './pages/Hooks/ReduxHook/ReduxHook';
import ToDoListHook from './pages/Hooks/ToDoListHook/ToDoListHook';
import DemoHOC from './pages/HOC/DemoHOC/DemoHOC';
import ModalHOC from './pages/HOC/DemoHOC/ModalHOC';
import HomeTemplate from './templates/HomeTempalte/HomeTemplate';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Index from './pages/AdminPage/Index/Index'
import User from './pages/AdminPage/Users/User';
import DemoAntD from './pages/DemoAntD/DemoAntD';
import DemoLayout from './pages/DemoAntD/DemoLayout';
import DemoFormik from './pages/DemoFormik/DemoFormik';
import HomeMobile from './pages/Home/HomeMobile';

function App() {
  return (
    <BrowserRouter>
      {/* <HeaderHome /> */}
      <ModalHOC />
      <Switch>
      
        <HomeTemplate path='/home' component={Home} mobileComponent={HomeMobile} />
        <HomeTemplate path='/about' component={About} />
        <HomeTemplate exact path={'/contact'} component={Contact} />
        <UserTemplate exact path={'/login'} component={Login} />
        <UserTemplate exact path={'/register'} component={Register} />
        <HomeTemplate exact path={'/profile'} component={Profile} />
        <HomeTemplate exact path={'/detail/:id'} component={Detail} />
        <HomeTemplate exact path={'/todoapp'} component={ToDoApp} />
        <HomeTemplate exact path={'/usestate'} component={UseStateDemo} />
        <HomeTemplate exact path={'/useeffect'} component={UseEffectDemo} />
        <HomeTemplate exact path={'/usecallback'} component={UseCallbackDemo} />
        <HomeTemplate exact path={'/usememo'} component={UseMemoDemo} />
        <HomeTemplate exact path={'/useref'} component={UseRefDemo} />
        <HomeTemplate exact path={'/reduxhook'} component={ReduxHook} />
        <HomeTemplate exact path={'/todolisthook'} component={ToDoListHook} />
        <HomeTemplate exact path={'/demohoc'} component={DemoHOC} />
        <HomeTemplate exact path={'/formik'} component={DemoFormik} />

        <AdminTemplate path={'/admin/index'} component={Index} />
        <AdminTemplate path={'/admin/users'} component={User} />
        <AdminTemplate path={'/admin/demoantd'} component={DemoAntD} />

        <Route path={'/admin/demolayout'} component={DemoLayout} />

        <HomeTemplate exact path={'/'} component={Home} mobileComponent={HomeMobile}/>
      </Switch>

    </BrowserRouter>
  );
}



export default App;
