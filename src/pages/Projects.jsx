import { Link } from 'react-router-dom';
const Projects = () => {
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
					<h2 className="text-3xl">My Projects</h2>
					<div className="my-projects">
						<p>
							Here are some of the projects I have worked on as a Frontend
							Developer. Each project showcases my skills in React, TypeScript,
							and modern JavaScript, along with my ability to create responsive
							and user-friendly web applications.
						</p>
						<ul className="projects-list">
							<li>
								Project 1: A simple TodoList App - A simpleTodoList app created
								with React and TypeScript, allowing users to create, edit, and
								delete tasks with a clean and intuitive UI built in a{' '}
								<b>WEEK</b>.
							</li>
							<a
								href="https://eloquent-piroshki-381c8d.netlify.app/"
								target="_blank"
								className="completed-projects"
							>
								Test App <i className="fas fa-arrow-right"></i>
							</a>

							<li>
								Project 2: Portfolio Website - A personal portfolio website
								built with React and CSS-in-JS, featuring responsive design and
								smooth navigation in a space of <b>TWO WEEKS</b>.
							</li>
							<a href="#" className="completed-projects">
								Check Site <i className="fas fa-arrow-right"></i>
							</a>

							<li>
								Project 3: E-commerce Store - An online store application
								developed using React, Redux for state management, and
								integrated with a mock backend API in <b>ONE MONTH</b>.
							</li>
							<a href="#" className="completed-projects">
								Check Site <i className="fas fa-arrow-right"></i>
							</a>
						</ul>
					</div>
					<footer>
						<p>Dennis Edgestone &copy; 2025</p>
					</footer>
				</section>
			</main>
		</>
	);
};

export default Projects;
