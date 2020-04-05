import React, { Component } from 'react';
import FloatingTile from './FloatingTile';
import firebase from 'firebase';
import { DB_CONFIG } from './Config';


class Blog extends Component {
	constructor(props){
		super(props);
		this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
		this.database = this.app.database().ref().child('blogs/');

		this.state = {
			entries: []
		}
	}

	componentDidMount() {
		var itemsRef = firebase.database().ref('blogs/');
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
	}
	render() {
		return(
		<div className="App tile is-ancestor">
			<FloatingTile />
			<div className="container tile is-parent" style={{position: "absolute", left: 400 }}>
				<div style={{position: "relative", top: 10}}>Blog:
					<div className="tile is-vertical is-parent" id="tileContainer">
					{this.state.entries.map((entry) => {
						return(
							<div className="tile box is-child" style={{whiteSpace: "pre-line"}}>
								<p className="title is-5">{entry.title}</p>
								<div className="has-text-centered"></div>
								{entry.articleBody}
							</div>
						)
					})}
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Blog;
