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
		<div className="tile is-ancestor">
			<div className="tile is-parent" style={{height: "10vh"}}>
			<FloatingTile />
			<div className="container tile is-vertical is-parent">
				<div style={{position: "relative", top: 10}}><div className="title has-text-centered">Blog:</div>
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
		</div>
		);
	}
}

export default Blog;
