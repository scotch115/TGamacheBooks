import React, { Component } from 'react';
import './App.css';
import profile from './images/profile.png';
import about from './images/about.png';
import FloatingTile from './FloatingTile';
import App from './App';
import Blog from './Blog';

class About extends Component {
	render() {
		return(
			<div className="App tile is-ancestor">
				<FloatingTile />
				<div className="container tile is-parent" style={{position: "absolute", left: 400}}>
					<div className="tile is-child">
						<div>
							<br /><br />
							About me...
							<br /><br />
							<img className="about-pic" src={about} />
							<p>
							Hey there!
							<br /><br /><br />After years of obsessing over my music and bass guitar, I decided to put words to the page and see what comes of it. I would be lying if I said that I wasn’t totally influenced by my musical heroes and their passions and I hope I can have a smidge of their talents as I start into this new journey called writing.
							<br /><br />
							My first release, Not-So-Common-People, will be out in 2019 and available on Amazon. Look for more info soon.
							<br /><br />
							I currently work in the Florida public school system and reside in Davenport, FL with my wife, Melissa, my three boys, and one opinionated cat, Navi. My pastimes include consuming large amounts of coffee, enjoying P.G. Wodehouse novels, and eating hummus.
							</p>
						</div>
					</div>
				</div>
		</div>
		);
	}
}

export default About;
