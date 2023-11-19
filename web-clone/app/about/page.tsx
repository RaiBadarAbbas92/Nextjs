 function about(){
    return(
        <><section className="Sub-header">
            <nav>
                <a href="Home" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times"></i>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="course">Course</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                <i className="fa fa-bars"></i>
            </nav>
            <h1>About Us</h1>
        </section><section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>We are the world's largest University</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                        <a href="#" className="hero_btn btn">EXPLORE NOW</a>
                    </div>
                    <div className="about-col">
                        <img src="img/about.png" alt="" />
                    </div>
                </div>
            </section><section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    <br/> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
                        dolorem.
                    </p>

                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <p>Made with <i className="fas fa-heart"></i> by <a href="#">Badar Developer</a></p>
                <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
            </section></>
    )
 }
 export default about;