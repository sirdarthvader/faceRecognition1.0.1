import React from 'react';
// import './Register.css'

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: ''
		}
	}

	regsiterUser = () => {
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	render() {
	return(
		<div>
			<article className="br2 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center" >
				<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f3 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
								<input
								 className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								 type="text" 
								 name="name"  
								 id="name"
								 onChange={this.onNameChange}
								 />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								<input 
								className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
								type="email" 
								name="email-address"  
								id="email-address"
								onChange={this.onEmailChange} 
								/>
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								<input 
								className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								type="password" 
								name="password"  
								id="password" 
								onChange={this.onPasswordChange}
								/>
				      </div>				      
				    </fieldset>
				    <div className="">
							<input onClick={this.regsiterUser} 
							className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
							type="submit" 
							value="Register" 
							/>
				    </div>
				  </div>
				</main>
			</article>
		</div>
		);
	}
}

	


export default Register;