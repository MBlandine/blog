import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Dash.css'
import { useEffect } from 'react'
import axios from 'axios'
const Manage = () => {
const  [posts , setPosts]  =  useState([]);


const  fetchBlogs  =async () =>{

try {
    const response  =  await  axios.get("https://newblog-m4im.onrender.com/api/posts/");
    console.log();
    setPosts(response.data.data);
}
catch(error){
console.log(error.response);
}
   
}

useEffect(() => {
fetchBlogs();
}, [])

const handleDelete = async(id,name)  =>{
    console.log(name);
      try {
        await axios.delete(`https://newblog-m4im.onrender.com/api/posts/${id}`,{
            headers:{
                Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWExN2RlNjI1MDM0MDA3ZjlkNmIxYyIsImlhdCI6MTY3NjI4NTkxOCwiZXhwIjoxNjg0MDYxOTE4fQ.vsRT8O7ZoDlh_XmVo9xn8IKeG-WauqkchXduJxqLyvQ"
            },}

        )
        window.location.reload(true);
      } catch (error) {
        console.log(error.response);
      }
}

  return (
    <>
    <section id='Dashbord'>
        <h2>ADMIN/BlOG CONTROL PANEL</h2>

        <div className="container blogContainer">

          <div className="blogMenu">
            <ul>
                <Link to="/DashBoard"><li>Home</li></Link>
                <Link to="/Manage"><li>Manage</li></Link>
                <Link to="/Create"><li>CreateNewBlog</li></Link>
                <Link to="/CreateNewuser"><li>CreateUser</li></Link>
                <Link to="/logout"><li>logout</li></Link>
            </ul>
          </div>
          <div className="blogContent">   
            <div className="Managecards">
          {posts.map(post  => (
          <div className="mcontents">
                    <div><h3>{post.title}</h3></div>
                    <div><h4>09/feb/2023</h4></div>
                    <div className="actions"><button className='btn'  onClick={()=> {
                       handleDelete(post._id,post.username)
                    }}>Delete</button> <button className='btn'>Update</button> </div>
                </div>
          ))}
            </div>
           
           </div>
        </div>
          




    </section>
        {/* <Footer/> */}
        </>
  )
}

export default Manage