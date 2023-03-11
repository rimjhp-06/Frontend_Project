import React from 'react';
// import  { useState, useEffect } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
// import Dashboard from './components/Dashboard';

function App() {
    // const [ user, setUser ] = useState([]);
    // const [ profile, setProfile ] = useState([]);

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    // useEffect(
    //     () => {
    //         if (user) {
    //             axios
    //                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${user.access_token}`,
    //                         Accept: 'application/json'
    //                     }
    //                 })
    //                 .then((res) => {
    //                     setProfile(res.data);
    //                 })
    //                 .catch((err) => console.log(err));
    //         }
    //     },
    //     [ user ]
    // );

    // log out function to log the user out of google and set the profile array to null
    // const logOut = () => {
    //     googleLogout();
    //     setProfile(null);
    // };
    const loginn = createBrowserRouter([
        {
          path: "/",
          element:<Login/>,
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
        },
      ]);

      

    return (
        
    //   <Router>
    //     <Routes> 
    //       <Route exact path="/" component={Login} />
    //       {/* <PrivateRoute exact path="./components/dashboard" component={Dashboard} />
    //       <Route render={() => <Navigate to={{ pathname: '/login' }} />} /> */}
    //     </Routes>
    //   </Router>
     
     

    
    // <div>
    <div>
        <RouterProvider router={loginn} />
        {/* <PrivateRoute exact path="./dashboard" component={Dashboard}/> */}
        </div>

        //     <h2>React Google Login</h2>
        //     <br />
        //     <br />
        //     {profile ? (
        //         <div>
        //             <img src={profile.picture} alt="user image" />
        //             <h3>User Logged in</h3>
        //             <p>Name: {profile.name}</p>
        //             <p>Email Address: {profile.email}</p>
        //             <br />
        //             <br />
        //             <button onClick={logOut}>Log out</button>
        //         </div>
        //     ) : (
        //         <button onClick={() => login()}>Sign in with Google 🚀 </button>
        //     )}
        // </div> 
        
       
    );
}
export default App;