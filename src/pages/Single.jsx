import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import ME from '../image/hair2.jpg'
import ME1 from '../image/hair2.jpg'
import './pages.css'
const Single = () => {
  return (
    <>
    <section id='blog'>
      <h2>Single Blog</h2>
      <div className="container blogContainer">
      <div className="RecentsColumn">
                <div className="RecentsImage">
                <Link to="/single"><img src={ME1} alt="hair" /></Link>    
                </div>
                <div className="RecentsContent">
                <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                </div>
                <div className="RecentProfile">
                        <div className="ReProfile">
                        <Link to="/single"><img src={ME} alt="Log" /></Link>    
                        </div>
                        <div className="ReProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>Your Blog Is Sheet Bro</small>
                        </div>
                    </div>
                <div className="RecentProfile">
                        <div className="ReProfile">
                        <Link to="/single"><img src={ME} alt="Log" /></Link>    
                        </div>
                        <div className="ReProfile-content">
                        <h3>Eric Umukandanzujyi</h3>
                        <small>Nta bizoroha Ndaq</small>
                        </div>
                    </div>
                <div className="RecentProfile">
                        <div className="ReProfile">
                        <Link to="/single"><img src={ME} alt="Log" /></Link>    
                        </div>
                        <div className="ReProfile-content">
                        <h3>Ishimwe Kevin</h3>
                        <small>You Did Greate Job Booo</small>
                        </div>
                    </div>
            </div>
            <div className="form">
              <h5>Comments</h5>
              <form action="#">
                <div className="form-group">
                  <label htmlFor="">UserName</label>
                  <input type="text" className="form-control" placeholder="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="">LeaveMesage</label>
                  <textarea className="form-control" placeholder="Comments" />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="">LeaveMesage</label> */}
                  <input type="submit" className="form-control-btn" placeholder="Comments" />
                </div>
              </form>
      
            </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Single