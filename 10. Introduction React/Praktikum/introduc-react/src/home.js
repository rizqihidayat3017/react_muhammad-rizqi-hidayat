import logoAlta from './logo-ALTA@2x.png'
import logoUser from './matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import './App.css';
import './asset/css/bootstrap.min.css';
import './asset/css/main.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="alterra">
                            <a href="index.html">
                                <img className="logo-atas" src={logoAlta} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        {/* <div className="container"> */}
                        <div className="row align-items-center navig">
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="index.html" className="aktif">HOME</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="about.html">ABOUT</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="form.html">CONTACT</a></div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div class="container h-100">
                <div class="row align-items-center isi-home">
                    <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                        <img id="foto-profil" src={logoUser} />
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div class="main-p">
                            <p class="sapaan">Hi, my name is </p>
                            <p class="nama">Anne Sullivan</p>
                            <p class="hobi">I build things for the web</p>
                            <p class="tombol"><a href="about.html">Get In Touch</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
