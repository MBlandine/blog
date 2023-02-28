import React from 'react'
import trend2 from '../../image/post_lg_2.jpg.webp'
import ME from '../../image/hair2.jpg'
import Image1 from '../../image/img_2.jpg'
import Image2 from '../../image/img_3.jpg.webp'
import Image3 from '../../image/img_4.jpg'
import './Cat.css'
const Category = () => {
  return (
    <section>
        <h2>Blog Posts Category</h2>

        <div className="container Catcontainer">
            <div className="catLeft">
                <h3>Sports</h3>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={trend2} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image1} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image2} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image3} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
            </div>


            <div className="catRight">
                <h3>Business</h3>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={trend2} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image1} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image2} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>
                <div className="catLContainer">
                <div className="trendingcard-image">
                    <img src={Image3} alt="Trending" />
                </div>
                <div className="trendingcard-content">
                    <h4>Business, Travel<small>— July 2, 2020</small> </h4>
                    <h1>Your most unhappy  customers are your greatest source of learning.</h1>
                    <div className="userTrendProfile">
                        <div className="treProfile">
                            <img src={ME} alt="Log" />
                        </div>
                        <div className="treProfile-content">
                        <h3>Sergy Campbell</h3>
                        <small>CEO and Founder</small>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Category