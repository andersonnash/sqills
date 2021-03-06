import { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom";
import './App.css';
// import './SignUp.css'
import MainContainer from './containers/MainContainer';
import Layout from './components/Layout/Layout'
import SignUp from "./views/SignUp/SignUp"
import Login from "./views/SignIn/SignIn"
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/posts');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/posts');
  };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <SignUp handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
