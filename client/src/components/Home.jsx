import React from 'react'
// import "./Style.css";
import imagesrc1 from "../image/showcase-photo3.jpg";
import imagesrc2 from "../image/showcase-photo1.jpg";

const Home = () => {
  return (
    <div>
        <section className="showcase" id="explore-places">
        <div className="container">
            <div className="row row1">
                <div className="img-box">
                    <img src={imagesrc1} alt="not found" />
                </div>
                <div className="text-box">
                    <h2 className="lg-header text-black">DEGANVY, U.K</h2>
                    <p color="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minima ex.
                        Itaque maxime, libero
                        similique autem id debitis quod nesciunt.</p>
                    <a href="https://github.com/sudippal7778872" className="btn2 btn-primary text-red">more</a>
                </div>
            </div>
            <div className="row row2">
                <div className="img-box">
                    <img src={imagesrc2} alt="not found" />
                </div>
                <div className="text-box">
                    <h2 className="lg-header text-black">
                        DESERT, EGYPT
                    </h2>
                    <p color="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, ipsa veritatis
                        delectus saepe ad
                        quidem maiores. Quod cumque minus eligendi?</p> <a href="https://github.com/sudippal7778872"
                        className="btn2 text-red btn-primary">more</a>
                </div>
            </div>
        </div>
    </section>
    <section className="features">
        <div className="container">
            <div className="box-wrapper">
                <div className="box box-1">
                    <h2 className="md-heading">Adventure</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, autem.</p>
                </div>
                <div className="box box-2">
                    <h2 className="md-heading">Less Price</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, autem.</p>
                </div>
                <div className="box box-3">
                    <h2 className="md-heading">Experience</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, autem.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home