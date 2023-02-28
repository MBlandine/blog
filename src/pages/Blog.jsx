import React from 'react'
import Footer from '../components/Footer/Footer'
import RecentsPost from '../components/RecentPosts/RecentsPost'

import trend1 from '../image/post_lg_1.jpg.webp'
import trend3 from '../image/post_lg_3.jpg.webp'
import trend4 from '../image/post_lg_4.jpg.webp'
import trend2 from '../image/post_lg_2.jpg.webp'
import ME from '../image/hair2.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Blog = ({posts}) => {
  return (
    <>
    {
        posts.map ((posts) => {
            return(
                <section>
                <h2>Most Trending Blogs</h2>
            
            <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination]}
                    // className="mySwiper"
                  className="container trending mySwiper">
            
                        <SwiperSlide className="trendingcard">
                            <div className="trendingcard-image">
                                <img src={posts.photo} alt="Trending" />
                            </div>
                            <div className="trendingcard-content">
                                <h4>{posts.title}<small>— July 2, 2020</small> </h4>
                                <h1>
                                    {posts.title} <br/> {posts.title} <br />{posts.title}</h1>
                                <p>
                                  {posts.desc}
                                </p>
                                <div className="userTrendProfile">
                                    <div className="treProfile">
                                        <img src={posts.photo} alt="Log" />
                                    </div>
                                    <div className="treProfile-content">
                                    <h3>Sergy Campbell</h3>
                                    <small>CEO and Founder</small>
                                    </div>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            </div>
                        </SwiperSlide>
            
                        <SwiperSlide className="trendingcard">
                            <div className="trendingcard-image">
                                <img src={posts.photo} alt="Trending" />
                            </div>
                            <div className="trendingcard-content">
                                <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                                <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                                <p>
                            {posts.desc}                    
                              </p>
                                <div className="userTrendProfile">
                                    <div className="treProfile">
                                        <img src={posts.photo} alt="Log" />
                                    </div>
                                    <div className="treProfile-content">
                                    <h3>Sergy Campbell</h3>
                                    <small>CEO and Founder</small>
                                    </div>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="trendingcard">
                            <div className="trendingcard-image">
                                <img src={posts.photo} alt="Trending" />
                            </div>
                            <div className="trendingcard-content">
                                <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                                <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                                <p>
                                {posts.desc}                     </p>
                                <div className="userTrendProfile">
                                    <div className="treProfile">
                                        <img src={posts.photo} alt="Log" />
                                    </div>
                                    <div className="treProfile-content">
                                    <h3>Sergy Campbell</h3>
                                    <small>CEO and Founder</small>
                                    </div>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="trendingcard">
                            <div className="trendingcard-image">
                                <img src={posts.photo} alt="Trending" />
                            </div>
                            <div className="trendingcard-content">
                                <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                                <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                                <p>
                                {posts.desc} </p>
                                <div className="userTrendProfile">
                                    <div className="treProfile">
                                        <img src={posts.photo} alt="Log" />
                                    </div>
                                    <div className="treProfile-content">
                                    <h3>Sergy Campbell</h3>
                                    <small>CEO and Founder</small>
                                    </div>
                                </div>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
            
                  <RecentsPost/>
                </section>
            )
        }) 
    
    }
    
      <Footer />
      </>
  )
}

export default Blog