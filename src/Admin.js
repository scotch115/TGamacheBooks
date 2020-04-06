import React, { Component } from 'react';
import FloatingTile from './FloatingTile';
import Hello from './Hello';
import Today from './Date';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import firebase from 'firebase';
import { DB_CONFIG } from './Config';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Admin extends Component {
	constructor(props) {
    super(props);
		// Initialize Firebase App and link to Database
		this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
		this.database = this.app.database().ref().child('blogs/');

		// Get current Date and set format for article titles
		var date = new Date();
    var today = (date.getMonth()+1)+'.'+date.getDate()+'.'+date.getFullYear();
		var title = (date.getMonth()+1)+'.'+date.getDate()+'.'+date.getFullYear().toString().substr(-2);

		// Default state is not logged in
		this.state = {
			isSignedIn: false
		}

		// Specify type of Firebase Auth UI is preferred
		const uiConfig = {
			signInFlow: 'popup',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID
			],
			callbacks: {
				signInSuccessfulWithAuthResult: () => false
			}
		};

		// Current app states
    this.state = {
      name: 'T Gamache Books',
      date: today,
      text: '',
      theme: 'snow',
			title: title,
			entries: [],
			isSignedIn: false,
			uiConfig: uiConfig,
    };
		// Event handler instantiations
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeTags = this.removeTags.bind(this);
  }

	// Editor value change handler
  handleChange (value) {
    this.setState({
			text: value
		});
  }

	// Theme change handler (required by React Quill but totally not necessary)
  handleThemeChange (newTheme) {
    if (newTheme === "core") {
      newTheme = null;
      this.setState({ theme: newTheme });
    }
  }

	// The oh-so-wonderful componentDidMount event handler, basically, if page loads, it be doing stuff
	componentDidMount() {
		const itemsRef = firebase.database().ref('blogs/');
		itemsRef.on('value', (snapshot) => {
			let entries = snapshot.val();
			let newState = [];
			for (let entry in entries) {
				newState.push({
					id: entry,
					title: entries[entry].title,
					articleBody: entries[entry].articleBody
				});
			}
			this.setState({
				entries: newState
			});
		});
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
			(user) => this.setState({isSignedIn: !!user})
		);
	}

	removeTags(str) {
		if ((str===null) || (str===''))
		{
			return false;
		} else {
			str = str.toString();
			return str.replace( /(<([^>]+)>)/ig, '\n');

		}
	}

	// But will it ever stop doing stuff? Yes. The answer is yes.
	componentWillUnmount() {
		this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
			(user) => this.setState({isSignedIn: !!user})
		);
	}

	// New Article post handler
	handleSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref('blogs/');
		var editedTxt = this.removeTags(this.state.text);
		const entry = {
			title: this.state.title,
			articleBody: editedTxt
		}
		itemsRef.push(entry);
		this.setState({
			articleBody: '',
			text: ''
		});
	}

	// Sign Out button handler
	signOutCurrentUser(e) {
		firebase.auth().signOut().then(function() {
			console.log('User signed out');
		}, function(error) {
			console.error('Error signing out', error);
		});
	}

	// Delete entry handler (super important to make sure user is authenticated because otherwise anyone can use this feature)
	removeItem(itemId) {
		const itemRef = firebase.database().ref(`/blogs/${itemId}`);
		itemRef.remove();
	}

  render() {
		// If no one is signed in, pre load the Gmail sign-in UI and wait for a successful login
		if (!this.state.isSignedIn) {
			return(
				<div className="section is-large">
					<div className="box" style={{padding: "10px", position: "relative", top: "30%"}}>
						<div className=" title is-4 has-text-centered">T Gamache Books Database</div>
						<p className="has-text-centered">Please sign in:</p>
						<StyledFirebaseAuth uiConfig={this.state.uiConfig} firebaseAuth={firebase.auth()} />
					</div>
				</div>
			)
		};
		// If the login was a success, but the UID does not match the one associated with my email or Tom's, change render to non authorized.
		if (firebase.auth().currentUser.uid!== '20sKt6TCA4eRXE2s8OxJne9b5y43' && firebase.auth().currentUser.uid !== 'CLzogV62vbaYr1WHtjPGIKSUEAp2') {
			return(
				<div className="section is-large">
					<div className="container box" style={{ padding: "10px"}}>
						<div className="title is-4 has-text-centered">You are not authorized to view this page. Please return <a href="https://trek-noise.web.app">home</a>
						<br />
						<button className="button is-rounded" onClick={this.signOutCurrentUser}>Sign Out</button>
						</div>
					</div>
				</div>
			)
		};

		// Otherwise, load page as normal.
    return (
			<div>
				<div className="tile is-ancestor">
				<FloatingTile />
	      <div className="container tile is-child box">
	        <div className="title">
						<Hello name={firebase.auth().currentUser.displayName} />
	        </div>
					<div className="subtitle">
						Use the provided editor to write an article, and tap save entry to add it to the database! Use the 'x' icon to delete.
						<br />
						The articles can only be sorted chronologically, oldest->newest, in descending order.
					</div>
	        <div>
	          <p>Begin your day here:</p>
	          <ReactQuill
	            theme={this.state.theme}
	            onChange={this.handleChange}
	            value={this.state.text}
	            modules={Admin.modules}
	            formats={Admin.formats}
	            bounds={'.app'}
	            placeholder={this.props.placeholder}
	          />
	         <br />
	         <button className="button" type="submit" onClick={this.handleSubmit}>Save entry</button>
	         </div>
	         <br />
	         <div className="container box" style={{backgroundColor: "white"}}>
	         <p className="title is-4">Posts</p>
	          <div className="tile is-ancestor">
	            <div className="tile is-vertical is-parent" id="tileContainer">
							{this.state.entries.map((entry) => {
								return (
									<div className="tile box is-child notification is-white" style={{ whiteSpace: "pre-line" }}>
									<button className="delete" onClick={() => this.removeItem(entry.id)}></button>
										<p className="title is-5">{entry.title}</p>
										<div className="has-text-centered" style={{padding: "10px"}}></div>
										{entry.articleBody}
									</div>
								)
							})}
							</div>
	          </div>
	         </div>
					 <button className="button is-rounded" onClick={this.signOutCurrentUser}>Sign Out</button>
					 <br /><br />
					 <footer className="hero-foot">
				    <div className="content has-text-centered">
				     Made with <i className="fa fa-heart" style={{color: "rgb(235, 43, 86)"}}></i> & <i className="fa fa-coffee" style={{color: "rgb(44, 31, 22)"}}></i> in Orlando
				    <div className=" content has-text-centered">
				      <a href="https://bulma.io">
				      <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
				      </a>
				    </div>
						</div>
				   </footer>
	       </div>
				 </div>
			 </div>
    );
  }
}

// Module imports for ReactQuill
Admin.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Admin.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/*
 * PropType validation
 */
Admin.propTypes = {
  placeholder: PropTypes.string
}

export default Admin;
