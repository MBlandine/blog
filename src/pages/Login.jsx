import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../pages/context/Auth provider';
import axios from 'axios';
import Footer from '../components/Footer/Footer'
const LOGIN_URL = 'https://blogapi-wm30.onrender.com/api/v1/signin';
function Login () {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage]= useState("")

  const navigate =useNavigate();

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("")
  }, [email, password])
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "content-type": "application/json" },
        }
      );
      console.log(JSON.stringify(Response?.data));
      //console.log(JSON.stringify(Response));
      const accessToken = response?.data?.token;
      localStorage.setItem("token", accessToken);
      console.log(accessToken);
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);
      console.log(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (!error?.rresponse) {
        setErrorMessage("No Server Response");
      } else if (error.response?.status === 400) {
        setErrorMessage("Missing email or password");
      } else if (error.response?.status === 401) {
        setErrorMessage("Unauthenticated");
      } else if (!email || !password){
        setErrorMessage("email and password are required fields")
      }else if (!/\s+@\s+\.\s+/.test(email)){
        setErrorMessage("email is not in a valid format")
      }
      else{
        setErrorMessage("Login failed")

      } 
      
      }

      console.log(email, password);
        setEmail("");
        setPassword("");
      errRef.current.focus();
    }
  // };
  return(
    <>
      {success ? (
        <section className="loginrespons">
          <h1>success!</h1>
          <p>
            <Link to="/dashboard">Go to Home</Link>
          </p>
        </section>
      ) : (
        <section>
          
          <h2>Login Form</h2>
                
   
          <form onSubmit={handleSubmit} autoComplete="off">
            <p style={{color: "red"}}>{errorMessage}</p>
            <p
              ref={errRef}
              className={errorMessage ? "errormessage" : "offscreen"}
              aria-live="assertive"
            >
              {errorMessage}
            </p>

           <div className="container">
           
           <form action="">
           <div className="formGroup">
             <label htmlFor="">Email</label>             
             <input type="Email"  id="Email" autoComplete='off' value={email} onChange={(event) => setEmail(event.target.value)}  placeholder="Enter your Email"/>
           </div>
            <div className="formGroup">
             <label htmlFor="">PassWord</label>
             <input type="password" id="password"  value={password} onChange={(event) => setPassword(event.target.value)} placeholder='PassWord'/>
            </div>{""}

            <div className="formGroup">
          
            <Link to="/DashBoard"><input type="submit" value="Login"/></Link>
            <button onClick={handleSubmit}>Login</button>
            {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>} 
            
           </div>
           <div className="formLinks">
             <Link to="#">Forgot Password</Link>
             <Link to="/SignUp">Sign Up</Link>
           </div>

           </form>
           </div>
           {/* </form>
           </section> */}


            {/* </p>
            <label>Email</label>
            <input
              type="Email"
              id="Email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder='Enter password"'
            />{" "}
            <br /> */}
            {/* <button>Login</button>
            <p>
              Don't have an account?{" "}
              <Link to="/register"style={{ color: "inherit", textDecoration: "inherit" }}>Signup</Link>
            </p> */}
          </form>

          {/* <section id="footer">
            <div class="container footer">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                {" "}
                <h1>MY BLOG</h1>{" "}
              </Link>
            </div>
            <div class="container footer">
              <p>
                Quality Service Makes Different <br></br>
                Terms Of Service <br></br>
                Privacy Policy <br></br>
                <p>&copy;IC-25</p>
              </p>
            </div>
            <div class="container footer">
              <p>
                <b> NOT QUITE READY FOR BLOG</b> <br></br>
                Join our online blog no-code community for free.No spam.Ever{" "}
                <br></br>
                <input
                  id="footerinput"
                  type="Email"
                  placeholder="Enter your Email"
                />
                <button id="footerbutton">Subscribe</button> <br></br>
              </p> */}
            {/* </div>
          </section> */}

        </section>
        
      )}
      <Footer/>
    </>
  );
// };

        }

export default Login;






// import React from 'react'
// import { Link } from 'react-router-dom'
// import Footer from '../components/Footer/Footer'
// import './pages.css'
// const Login = () => {
//   return (
//     <>
//     <section>
//       <h2>Login Form</h2>
//       <div className="container">
//         {/* login Form */}
//         <form action="">
//           <div className="formGroup">
//             <label htmlFor="">Username</label>
//             <input type="text" placeholder='UserName'/>
//           </div>
//           <div className="formGroup">
//             <label htmlFor="">PassWord</label>
//             <input type="password" placeholder='PassWord'/>
//           </div>
//           <div className="formGroup">
          
//            <Link to="/DashBoard"><input type="submit" value="Login"/></Link> 
//           </div>
//           <div className="formLinks">
//             <Link to="#">Forgot Password</Link>
//             <Link to="/SignUp">Sign Up</Link>
//           </div>
//         </form>
       
//       </div>


//     </section>
//       <Footer />
//       </>
//   )
// }

// export default Login







// import React, { useEffect, useRef, useState,useContext } from 'react'
// import { Link } from 'react-router-dom'
// import AuthContext from '../context/AuthProvider'
// import './Login.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const LOGIN_URL = "https://newblog-m4im.onrender.com/api/auth/login";



// const Loginform = () => {
//   const { setAuth } = useContext(AuthContext);
    
    

//     const [username, setUser] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         // userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [username, password])
//     const navigate= useNavigate();
   
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(username, password);

//         try {
//             const response = await axios.post(LOGIN_URL,
//             { username, password },
//             );
//             //console.log(JSON.stringify(response));
//             const accessToken = response?.data?.jwt;
//             localStorage.setItem("token", accessToken);
            
//             setAuth({ email,password,accessToken });
//             setUser('');
//             setPwd('');
//             setSuccess(true);
//             navigate('/dashboard');
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
           
//         }
//     }


//   return (
//     <>
//     {success ? (
//         <section>
//             <h1>You are logged in!</h1>
//             <br />
//             <p>
//                 <Link to={'/dashboard'}>Go to Home</Link>
//             </p>
//         </section>
//         ) : (  
//     <div>
//       <form className="add-form" onSubmit={handleSubmit} autoComplete="off">
//         <h3>Welcome back</h3>
//         <p>Please enter your details</p>
//       <div className="form-control">
//         <label>User name</label>
//         <input type="text" placeholder='Enter Your user name' value={username}  onChange={(event) => setUser(event.target.value)}/>
//       </div>
//       <div className="form-control">
//         <label>Password</label>
//         <input   type="password"
//                  id="password"
//                  value={password}
//                 onChange={(e) => setPwd(e.target.value)}
//                 required
//         />
//       </div>
//       <Link to="/dashboard"><button type="submit"
//       className="btn btn-block" onClick={handleSubmit}>Login</button></Link>
//       <p>Dont have an account? <Link to='/signup' style={{color: 'inherit', textDecoration: 'inherit'}}><span>SignUp</span></Link> </p>
//     </form>
//     </div>
//   )}
//  </>
//     )
// }

// export default Loginform