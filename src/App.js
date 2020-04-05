import React, { Component } from 'react';
import './App.css';
import profile from './images/profile.png';
import logo from './images/notsocommoncover.png';
import FloatingTile from './FloatingTile';
import About from './About';
import Blog from './Blog';

class App extends Component {
  render() {
		return (
    <div className="App tile is-ancestor">
			<FloatingTile />
			<div className="container tile is-parent" style={{position: "absolute", left: 400}}>
				<div className="tile is-child">
					<p><img className="cover-photo" style={{padding: 10}} src={logo} width="200"/>
						Welcome to my site!
						My first novel, "Not-So-Common-People" is available now from Amazon!!
						<br /><br />
						Click <a href="http://bit.ly/NSCP_tg">here</a> to order!
						<br /><br />
						Nathan Smythe is a young man with a musical addiction, a stressful family, and 2 roommates who seem to be the only people who understand him. When tragedy strikes his family he finds feelings he didn't know he had, and meets someone who could change the trajectory of his life forever. Only this is not what he had planned at all. But then again, he never really had a plan.
						<br /><br />
						Nathan and his three siblings are all running into life-changing issues that has his head spinning. He is the type of fella who loves consistency and stability in his life, and at every turn he is finding out that those are the last two things he has any control over.
						<br /><br />
						Armed with a playlist to try and bring reason to his world, Nathan will do what he has always done-move forward without a clue. It's worked up to this point, right?
						<br />
						</p>
						<br /><br /><br />
						<p>
						Life.
						<br />
						<br />
						Music.
						<br />
						<br />
						Love.
						<br />
						<br />
						Not necessarily in that order.
						<br />
						<br />
						<br />
						<br />
						Thanks for stopping by and be sure to have a look around. Check out both my Twitter and Facebook feeds and give me a follow! Feel free to drop me line at tgamachebooks@gmail.com
					</p>
				</div>
			</div>
    </div>
  );
 }
}

export default App;
