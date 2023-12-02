function Blog() {
  return(
    <><header>
    <h1>Blog site</h1>
    <div className="nav-links" id="navLinks">
    <ul >
	      <li className="hero_btn"><a href="/">Home</a></li>
	      <li className="hero_btn"><a href="blog">Blog</a></li>
	    
    </ul></div>
  </header>

<ul>
  <li><a href="data" ><img height={350} width={450} src="https://s41256.pcdn.co/wp-content/uploads/2023/02/230222_Generative-AI_Blog_2.jpg"  /></a></li>
  <li><a href="/"><img height={350} width={450} src="https://i.pinimg.com/736x/93/b6/84/93b684e74baa9536bdede5fcb41bdfc2.jpg" /></a></li>
  </ul>      
  
  </>
  )
}
export default Blog;