import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [successMessage, setSuccessMessage] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData({ name: '', email: '', message: '' });

		// EmailJS configuration
		const serviceID = 'service_cwtaoxf';
		const templateID = 'template_2zmimuh';
		const publicKey = 'zmDzI9YWG5cQv1NDd';
		emailjs.send(serviceID, templateID, formData, publicKey).then(
			(response) => {
				setSuccessMessage(
					`Thank you ${formData.name}, your message has been sent ✅`
				);
				setTimeout(() => {
					setSuccessMessage('');
				}, 2000);
			},
			(err) => {
				setSuccessMessage(`Oops something went wrong 😒`);
				setTimeout(() => {
					setSuccessMessage('');
				}, 2000);
			}
		);
	};

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
					<h2 className="text-3xl">Contacts me!</h2>
					{successMessage && <p className="successMessage">{successMessage}</p>}

					<form onSubmit={handleSubmit} className="myForm">
						<label>Name</label>
						<input
							type="text"
							name="name"
							id="nameInput"
							placeholder="enter name"
							value={formData.name}
							onChange={handleChange}
						/>

						<label>Email</label>
						<input
							type="email"
							name="email"
							id="nameInput"
							placeholder="enter email"
							value={formData.email}
							onChange={handleChange}
						/>

						<label>Message</label>
						<textarea
							name="message"
							id="message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>

						<button type="submit" id="submitBtn" className="submitBtn">
							Send
						</button>
					</form>

					<footer>
						<a
							href="https://www.linkedin.com/in/dennis-ogaga-5b4462287"
							target="blank"
							className="social"
						>
							<i className="fab fa-linkedin"></i>View my Linked{' '}
							<i className="fab fa-linkedin"></i>
						</a>

						<a
							href="https://github.com/Dennis-Akpochafo"
							target="blank"
							className="social"
						>
							<i className="fab fa-linkedin"></i>View my Github{' '}
							<i className="fab fa-github"></i>
						</a>
						<p>Dennis Edgestone &copy; 2025</p>
					</footer>
				</section>
			</main>
		</>
	);
};

export default Contact;
