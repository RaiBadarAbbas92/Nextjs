function contect(){
    return( 
    <><section className="Sub-header">
            <nav>
                <a href="Home" className="logo">Xplore
                    <i className="fab fa-staylinked"></i>kill
                </a>
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times"></i>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="course">Course</a></li>
                        <li><a href="blog">Blog</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                <i className="fa fa-bars"></i>
            </nav>
            <h1>Contact Us</h1>
        </section><section className="loacation">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111989.31313237658!2d77.32498792347556!3d28.699635117457326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1630495771496!5m2!1sen!2sin"
                    width="600" height="450" loading="lazy"></iframe>
            </section><section className="contact-us">
                <div className="row">
                    <div className="content-col">
                        <div>
                            <i className="fa fa-home"></i>
                            <span>
                                <h5>NH9 Road, ABC Building</h5>
                                <p>Ghaziabad, Uttar Pradesh, IN</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <span>
                                <h5>+91 7445546525</h5>
                                <p>Monday To Saturday, 9AM To 6PM</p>
                            </span>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <span>
                                <h5>xyz@email.com</h5>
                                <p>Email Us Yor Query</p>
                            </span>
                        </div>
                    </div>
                    <div className="content-col">
                        <form>
                            <input type="text" placeholder="Enter Name" required />
                            <input type="email" placeholder="Enter Email" required />
                            <input type="text" placeholder="Enter Subject" required />
                            <textarea rows={8} placeholder="Message" required></textarea>
                            <button type="submit" className="hero_btn btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section><section className="footer">
                <hr />
                <h4>About Us</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                    <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae
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
                        )}
export default contect