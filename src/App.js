import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Blog from './pages/Blog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Single from './pages/Single'
import DashBord from './components/DashBord/DashBord'
import Manage from './components/DashBord/Manage'
import CreateNewblog from './components/DashBord/CreateNewblog'
import CreateNewuser from './components/DashBord/CreateNewuser'
import Logout from './components/DashBord/Logout'
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {

  const [posts, setPosts] = React.useState([]);

  const getPosts = async () => {
    const response = await axios.get('https://newblog-m4im.onrender.com/api/posts');
    setPosts(response.data.data);
  }
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts)
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={
        <Home posts={posts}/>
      }/>
        <Route path="/Blog" element={<Blog   posts={posts}/>} />
        <Route path="/Login" element={<Login />} posts={posts} />
        <Route path="/SignUp" element={<SignUp />} posts={posts} />
        <Route path="/:blogId" element={<Single posts={posts}/>} posts={posts}/>
        <Route path="/DashBoard" element={<DashBord />} posts={posts} />
        <Route path="/Manage" element={<Manage />} posts={posts}/>
        <Route path="/Create" element={<CreateNewblog   posts={posts}/>}  />
        <Route path="/CreateNewuser" element={<CreateNewuser />} posts={posts}/>
        <Route path="/logout" element={<Logout />} posts={posts} />
    
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App