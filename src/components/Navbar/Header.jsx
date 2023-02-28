// import React, { useRef, useState } from "react";
import trend1 from '../../image/post_lg_1.jpg.webp'
import trend3 from '../../image/post_lg_3.jpg.webp'
import trend4 from '../../image/post_lg_4.jpg.webp'
import trend2 from '../../image/post_lg_2.jpg.webp'
import ME from '../../image/hair2.jpg'
import Image1 from '../../image/img_2.jpg'
import Image2 from '../../image/img_3.jpg.webp'
import Image3 from '../../image/img_4.jpg'
import Image4 from '../../image/img_5.jpg.webp'
// import Image5 from '../../image/img_2.jpg'
import Image6 from '../../image/img_6.jpg.webp'

// Import Swiper React components
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Header = () => {
    
  return (
    <section>
        <h2>Trending</h2>

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
                    <img src={trend1} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
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
                    <img src={trend2} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
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
                    <img src={trend3} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
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
                    <img src={trend4} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
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


        {/* recents */}


        <div className="container trendingRecents">
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image1} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image2} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image3} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image3} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image4} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        <div className="trendingcardRecents">
                <div className="trendingcard-image">
                    <img src={Image6} alt="Trending" />
                </div>
                <div className="trendingcard-contentRecents">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy <br/> customers are your greatest <br />source of learning.</h1>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the  coast of the Semantics, a large language ocean
                    </p>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header