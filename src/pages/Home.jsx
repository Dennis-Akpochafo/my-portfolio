import { Link } from 'react-router-dom';
import myPicture from '../Images/my-picture.jpg';
const Home = () => {
	return (
		<>
			<main className="outter">
				<section className="showcase">
					<nav className="navbar">
						<h1 className="title">Dennis</h1>
						<Link to="/">Home</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</nav>
						<h2 className="text-3xl">About Me!</h2>
						<div className="comment-box">
							<img src={myPicture} alt="Dennis" className="comment-img" />
							<p className="comment-text">
								A dedicated Frontend Developer with a passion for creating
								intuitive and dynamic user experiences, with a strong foundation
								in modern web technologies. I thrive on bringing designs to
								life, optimizing user experience, and solving complex problems
								with clean, maintainable code. I enjoy collaborating with
								cross-functional teams to bring innovative ideas to life and
								continuously strive to stay updated with the latest industry
								trends and best practices.
							</p>
						</div>
					
          <h2 className="text-3xl">My Skills!</h2>
					<div className="comment-box1">
						<p className="comment-text">
							My core technical stack is centered around React, Typescript, and
							modern Javascript(ES6+). I am proficient in state management (e.g,
							Redux, ContextAPI), responsive design with CSS -in-JS/SCSS, and
							building reuseable components. I've applied these skills in
							projects focusing on single-page applications (SPAs) and
							performance optimization.
						</p>
					</div>

					<footer>
						<a
							href="https://www.linkedin.com/in/dennis-ogaga-5b4462287"
							target="blank"
							className="social"
						>
							<i></i>View my Linked{' '}
							<i className="fab fa-linkedin"></i>
						</a>

						<a
							href="https://github.com/Dennis-Akpochafo"
							target="blank"
							className="social"
						>
							<i></i>View my Github{' '}
							<i className="fab fa-github"></i>
						</a>
						<p>Dennis Edgestone &copy; 2025</p>
					</footer>
				</section>
			</main>
		</>
	);
};

export default Home;
