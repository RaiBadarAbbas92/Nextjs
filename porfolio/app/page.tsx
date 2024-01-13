import Contactform from "./Form/contactform"

function Portfolio() {
  return(
    <> <header className="header">
    <div className="header__content">
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <img
            src=".\assets\png\john-doe.png"
            alt="Ram Maheshwari Logo Image"
            className="header__logo-img"
          />
        </div>
        <span className="header__logo-sub">Badar Abbas</span>
      </div>
      <div className="header__main">
        <ul className="header__links">
          <li className="header__link-wrapper">
            <a href="/" className="header__link"> Home </a>
          </li>
          <li className="header__link-wrapper">
            <a href="/#about" className="header__link">About </a>
          </li>
          {/* <li className="header__link-wrapper">
            <a href="./index.html#projects" className="header__link">
              Projects
            </a>
          </li> */}
          <li className="header__link-wrapper">
            <a href="/#contact" className="header__link"> Contact </a>
          </li>
        </ul>
        <div className="header__main-ham-menu-cont">
          <img
            src="./assets/svg/ham-menu.svg"
            alt="hamburger menu"
            className="header__main-ham-menu"
          />
          <img
            src="./assets/svg/ham-menu-close.svg"
            alt="hamburger menu close"
            className="header__main-ham-menu-close d-none"
          />
        </div>
      </div>
    </div>
      
  </header>
     <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is Badar Abbas</h1>
        <div className="home-hero__info">
          <p className="text-primary">
          I am a AI powered full stack developer with experience in both front-end and back-end.

          </p>
        </div>
        <div className="home-hero__cta">
          <a href="/#about" className="btn btn--bg">About Me</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/badar-abbas/" className="home-hero__social-icon-link">
            <img
              src="./assets/png/linkedin-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/RaiBadarAbbas92" className="home-hero__social-icon-link">
            <img
              src="./assets/png/github-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://twitter.com/home" className="home-hero__social-icon-link">
            <img
              src="./assets/png/twitter-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="#https://www.youtube.com/" className="home-hero__social-icon-link">
            <img
              src="./assets/png/yt-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://www.instagram.com/badarabbas372/"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
          >
            <img
              src="./assets/png/insta-ico.png"
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
    </section>
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="about__content">
          <div className
          ="about__content-main">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
              <strong>  Badar Abbas - Full Stack Developer (AI Powered)</strong>
Hello, I'm Badar Abbas, a passionate Full Stack Developer with a focus on AI-powered solutions. My expertise lies in crafting robust and scalable applications using a tech stack that includes HTML, CSS, TypeScript, and Next.js. I believe in the power of technology to shape a better future, and I'm dedicated to pushing the boundaries of what's possible. <br/>

🔧 Tech Stack
HTML & CSS: I bring designs to life with clean and efficient HTML and CSS code, ensuring a seamless user experience.

TypeScript: As a language that adds static typing to JavaScript, TypeScript is a key tool in my toolkit, helping me write safer and more maintainable code.

Next.js: Leveraging the power of React, I build dynamic and high-performance web applications with Next.js. Its server-side rendering capabilities contribute to faster load times and improved SEO.
<br/>
🤖 AI-Powered Development
My journey as a developer has been intertwined with the world of Artificial Intelligence. I specialize in integrating AI solutions into web applications, unlocking new possibilities for automation, personalization, and intelligent decision-making.
<br/>
🚀 What Drives Me
I am driven by the belief that technology should be a force for good. My goal is to create innovative solutions that not only meet the functional requirements but also enhance user experiences and make a positive impact on the world.
<br/>
🌐 Let's Connect
I'm always excited to collaborate on new projects, discuss the latest in technology, and explore opportunities to make a difference. If you're looking for a Full Stack Developer who can seamlessly blend AI into your projects, let's connect and bring your ideas to life.

Feel free to reach out through LinkedIn or Email. Let's build something extraordinary together!
              </p>
              <p className="about__content-details-para">
                I'm a bit of a digital product junky. Over the years, I've used
                hundreds of web and mobile apps in different industries and
                verticals. Feel free to
                <strong>contact</strong> me here.
              </p>
            </div>
            <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
              >Contact</a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">TypeScript</div>
              <div className="skills__skill">Next Js</div>
              <div className="skills__skill">Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" className="contact sec-pad dynamicBg">
      <div  className="contactform"><Contactform/></div>
    </section>
    </>
  )
}
export default Portfolio;