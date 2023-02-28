import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import Image4 from '../../image/hair2.jpg'
// import Image4 from '../../image/hair2.jpg'
// import Image4 from '../../image/hair2.jpg'
import './Dash.css'
import {FiMoreVertical} from 'react-icons/fi'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';  
import {IoMdStats} from 'react-icons/io'
const DashBord = () => {
  const data = [
  {
    name: 'Sun',
    uv: 4000,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: 'Mon',
    uv: 3000,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: 'Tue',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thur',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sato',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  ];

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
                <Link to="/Projects"><li>Projects</li></Link>
                <Link to="/Statistics"><li>Statistics</li></Link>
                <Link to="/schedules"><li>Schedules</li></Link>
                <Link to="/logout"><li>logout</li></Link>
            </ul>
          </div>

          <div className="blogContent">
            <div className="CardsContainer">

            <div className="cards1">
              <div class="whole">
              <div class='date'><small>16 Feb 2023</small></div>
               <div class="ico"><span><FiMoreVertical/></span></div>
              </div>

              <div class="one"><h5>Web Design</h5></div>
              <div class="firsts"><h5>E-Commerce</h5></div>
              <div className='cont'>
              <div className='small'>
                <small>progress</small>
                <small>90%</small>
              </div>

              <div class="bigcard">
                <div class="insidecard"></div>
              </div>
              </div>
              
              <div class="two">

              <div class="avatars">
                  
              <div class="avatars__item">
             
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              </div>
              </div>

              <div class="smallcard"><small>2 days left</small></div>
              </div>
              </div>



              <div className="cards2">
              <div class="whole">
              <div class='date'><small>16 Feb 2023</small></div>
               <div class="ico"><span><FiMoreVertical/></span></div>
              </div>

              <div class="sec"><h5>Apps Design</h5></div>
              <div class="firsts"><h5>E-Commerce</h5></div>
              <div className='cont'>
              <div className='small'>
                <small>progress</small>
                <small>90%</small>
              </div>

              <div class="bigcard">
                <div class="insidecard"></div>
              </div>
              </div>
              
              <div class="two">

              <div class="avatars">
                  
              <div class="avatars__item">
             
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              </div>
              </div>

              <div class="smallcard"><small>2 days left</small></div>
              </div>
              </div>
            {/* <div className="cards1">
              <h5>Web Design   E-Commerce</h5>
              <div class="bigcard"></div>
              <div class="avatars">
              <div class="avatars__item">

              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
            
           
              
             </div>
             </div>
              <div class="smallcard"></div>
              
            </div>
            <div className="cards2">
              <h5>App Design E-Commerce</h5>
              <div className='small'>
                <small>progress</small>
                <small>90%</small>
              </div>
              <div class="bigcard">
                <div class="insidecard"></div>
              </div>
              <div class="avatars">
                  
              <div class="avatars__item">
                  <div class="avatars__image">
                  <img src={Image4} alt="hair" />
                  </div>
                 
                  <div class="avatars__image">
                  <img src={Image4} alt="hair" />
                  </div>
                  <div class="avatars__image">
                  <img src={Image4} alt="hair" />
                  </div>
              </div>
              </div>
              <div class="smallcard"><small>2 days left</small></div>
              </div> */}
            
              <div className="cards3">
              <div class="whole">
              <div class='date'><small>16 Feb 2023</small></div>
               <div class="ico"><span><FiMoreVertical/></span></div>
              </div>

              <div class="first"><h5>Branding</h5></div>
              <div class="firsts"><h5>E-Commerce</h5></div>
              <div className='cont'>
              <div className='small'>
                <small>progress</small>
                <small>90%</small>
              </div>

              <div class="bigcard">
                <div class="insidecard"></div>
              </div>
              </div>
              
              <div class="two">

              <div class="avatars">
                  
              <div class="avatars__item">
             
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              <div class="avatars__image">
              <img src={Image4} alt="hair" />
              </div>
              </div>
              </div>

              <div class="smallcard"><small>2 days left</small></div>
              </div>
              </div>
            
            {/* <div className="cards">
              <h5>Others</h5>
              <small>5000</small>
            </div> */}
            </div>{/* <Chart/> */}
        <div class="chart">
          <div class="rimwe">
          <AreaChart
          width={500}
          height={400}
          
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
        <div class="kabiri">
           <div className="cards4">
          
            <div class="i"><IoMdStats/></div>
              <div className='id'><small>50+</small></div>
              <h5>Projects</h5>
            </div>
            <div className="cards5">
          
            <div class="i"><IoMdStats/></div>
              <div className='id'><small>50+</small></div>
              <h5>Projects</h5>
            </div>
            <div className="cards6">
          
            <div class="i"><IoMdStats/></div>
              <div className='id'><small>50+</small></div>
              <h5>Projects</h5>
            </div>
            fghdjkd
            <div class="card7">
              <div className='seven'>List Member</div>
              <div className='eight'>
                <div className='nine'></div>
                  
              </div>
            </div>
            
        </div>
        </div>
            
          </div>
        </div>

       







    </section>
       
        <Footer/>
    </>
  )
}

export default DashBord