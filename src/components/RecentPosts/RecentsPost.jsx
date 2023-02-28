import {Link} from 'react-router-dom'
import './recents.css'
import ME from '../../image/hair2.jpg'
import Image1 from '../../image/img_7.jpg.webp'
import Image2 from '../../image/img_3.jpg.webp'
import Image3 from '../../image/img_4.jpg'
import Image4 from '../../image/img_5.jpg.webp'
import Image5 from '../../image/img_2.jpg'



// imports Swipers

import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
const RecentsPost = () => {
    const [ setSwiperRef] = useState(null);

  return (
    <section id="rec">
        <h2>Most Popular Posts</h2>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
         className="container Recents mySwiper">
            <SwiperSlide className="RecentsColumn">
                <div className="RecentsImage">
                    <Link to="/single"><img src={Image1} alt="hair" /></Link>
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
                        <small>CEO and Founder</small>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="RecentsColumn">
                <div className="RecentsImage">
                    <Link to="/single"><img src={Image2} alt="hair" /></Link>
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
                        <small>CEO and Founder</small>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="RecentsColumn">
                <div className="RecentsImage">
                <Link to="/single"><img src={Image3} alt="hair" /></Link>    
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
                        <small>CEO and Founder</small>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="RecentsColumn">
                <div className="RecentsImage">
                <Link to="/single"><img src={Image4} alt="hair" /></Link>    
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
                        <small>CEO and Founder</small>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="RecentsColumn">
                <div className="RecentsImage">
                    <Link to="/single"> <img src={Image5} alt="hair" /></Link>
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
                        <Link to="/single">    <img src={ME} alt="Log" /></Link>
                        </div>
                        <div className="ReProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
            </SwiperSlide>

            </Swiper>
    
    
    </section>
  )
}

export default RecentsPost