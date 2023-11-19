import React from "react"

export default function Home() {
  return (
    <><section className="header">
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

          <div className="text_box">
              <h2>GET READY</h2>
              <p id="headtext">TO DISCOVER CAMPUS</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                  <br /> esse blanditiis in quae perspiciatis quo.
              </p>
              <a href="#" className="hero_btn"> Visit Us To Know More</a>
          </div>
      </section><section className="course">
              <div className="PageBlock">
                  <div className="verticalLine"></div>
                  <div className="Clear"></div>
              </div>

              <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              <div className="row">
                  <div className="course-col">
                      <h3>Undergraduate Programs</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                          soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum
                          laborum velit non.</p>
                  </div>
                  <div className="course-col">
                      <h3>Graduate Programs</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                          soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                          laborum velit non.</p>
                  </div>
                  <div className="course-col">
                      <h3>Adult Learning & Degree Completion</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas
                          soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum
                          laborum velit non.</p>
                  </div>
              </div>
          </section><section className="campus">
              <div className="PageBlock">
                  <div className="verticalLine"></div>
                  <div className="Clear"></div>
              </div>
              <h1>TAKE OUR VIRTUAL TOUR</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              <div className="row">
                  <div className="campus-col">
                      <img src="img/Campus1.png" alt="" />
                      <div className="layer">
                          <h3>DELHI</h3>
                      </div>
                  </div>
                  <div className="campus-col">
                      <img src="img/Campus2.png" alt="" />
                      <div className="layer">
                          <h3>HYDERABAD</h3>
                      </div>
                  </div>
                  <div className="campus-col">
                      <img src="img/Campus3.png" alt="" />
                      <div className="layer">
                          <h3>MUMBAI</h3>
                      </div>
                  </div>
              </div>
          </section><section className="facilities">
              <div className="PageBlock">
                  <div className="verticalLine"></div>
                  <div className="Clear"></div>
              </div>
              <h1>Our Facilities</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              <div className="row">
                  <div className="facilities-col">
                      <img src="img/libary.png" alt="" />
                      <h3>Best Libary</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                      </p>
                  </div>
                  <div className="facilities-col">
                      <img src="img/playground.png" alt="" />
                      <h3>Athletics</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                      </p>
                  </div>
                  <div className="facilities-col">
                      <img src="img/food.png" alt="" />
                      <h3>Tasty and Healthy Food</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                      </p>
                  </div>
              </div>
          </section><section className="cta">
              <h1>GET READY FOR A BRIGHT FUTURE</h1>
              <a href="contact.html" className="hero_btn">CONTACT US</a>
          </section><section className="footer">
              <hr />
              <h4>About Us</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi
                  Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.
              </p>

              <div className="icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin"></i>
              </div>
              <p>Made with <i className="fas fa-heart"></i> by <a href="index.html">Badar Developer</a></p>
              <p>Copyright © 2021 <a href="index.html">Xplore Skill</a>. All Rights Reserved</p>
          </section></> 
  )}