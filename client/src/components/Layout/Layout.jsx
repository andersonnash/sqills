import { Link } from 'react-router-dom';
// import Nav from './Nav/Nav'
import { Route } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      {/* <Route>
      <Nav/>
      </Route> */}
      
      {currentUser ? (
        <div class="flex justify-between">
          <div class='flex justigy-center space-between mr-4'>
  <svg class="h-6 w-6 mr-3" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
            <Link to='/posts'>
          <h1 class='text-xl font-bold'>Sqills</h1>
            </Link>
          </div>
          <p class='font-bold text-lg'> Welcome, {currentUser.username}!</p>
            <button class='mr-4 text-lg font-bold' onClick={handleLogout}>Logout</button>
            </div>
      ) : (
          <>
          <Link to='/signup'>Register</Link>
          <Link to='/Login'>Login</Link>
        </>
      )}
      {/* <hr /> */}
      {currentUser && (
        <div>
          <Link class=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-lg text-gray-900  transition duration-300 m-6" to='/users/1'>Your Activities</Link>
          <Link class=" inline-block px-2 py-1 w-1/3 bg-gray-400 hover:bg-blue-600 p-4 rounded-lg text-lg text-gray-900  transition duration-300" to='/categories'>All Categories</Link>
        </div>
      )}
      {props.children}
    </header>
  );
}