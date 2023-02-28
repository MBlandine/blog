import React from 'react'
import { useNavigate,Link} from 'react-router-dom'
import * as yup  from "yup"
import  {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
import { useForm } from 'react-hook-form';
import Footer from "../components/Footer/Footer"


const REGISTER_URL = "https://blogapi-uvr7.onrender.com/api/v1/user/signup";

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password:yup.string().min(6).max(12).required()
  })
const SignUp = () => {

  const  {register ,handleSubmit ,formState :{errors}} =  useForm({
    resolver:yupResolver(schema)
  })

  const navigate  = useNavigate();
  const   onSubmit  = async  (data) =>{
      console.log(data);

      try {
        const  response  = await  axios.post(REGISTER_URL,data)
        console.log(response);
        navigate("/login")

      } catch (error) {
        console.log(error.response);
      }
  }
  return (
    <div>
          <h1 className="logintop">REGISTER HERE</h1>
        <section>
       <h2>SignUp Form</h2>
       <div className="container">
         {/* login Form */}
         <form action="onSubmit={handleRegister(onSubmit)}" >
           <div className="formGroup">
             <label htmlFor="">Username</label>
             <input type="text" 
             id='names' name='username' 
             placeholder='FullName'
              autoComplete='off' {...register("username")} 
              aria-describedby="uidnote"/>
        
             <span>{errors?.username?.message}</span>
             
           </div>
           <div className="formGroup">
             <label htmlFor="">Email</label>
             <input type="text" id='email' name='email' 
             placeholder='email' aria-describedby='emailnote'
             {...register("email")}/>
             
             
             <span>{errors?.email?.message}</span>
           </div>
        
           <div className="formGroup">
            <label htmlFor="">PassWord</label>
             <input type="password" id='password' name='password'
              placeholder='PassWord' aria-describedby='pwdnote'
              {...register("password")}
             
             />
           </div>

           <div className="formGroup">
            <label htmlFor="">Confirm passWord</label>
             <input type="password" id='confirm_pwd' name='password' 
             placeholder='Confirm PassWord' aria-describedby='Matchpwdnote'
             {...register("coforms password")}
             
             />
           </div>
           <div className="formGroup">
          
            <input type="submit" id="signbutton" value="REGISTER"/>
           </div>
           <div className="formLinks">
            <Link to="#">If You Already have Already Acount</Link>
            <Link to="/Login">Sign In</Link>
      
          </div>
        </form>
        </div>
        </section>
<Footer/>
  </div> 
    
  )}
export default SignUp;









