import React, { Component } from 'react';
import './App.css';
import profile from './images/profile.png';
import App from './App';
import Blog from './Blog';
import About from './About';

class FloatingTile extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div className="floating-card container tile is-vertical is-4 is-parent">
				<div className="tile is-child is-vertical box">
				 <div className="has-text-centered">
					<hr />
					<a className="title is-centered" href="/">T Gamache</a>
					<hr />
					<p className="title is-6 has-text-centered" style={{color: "grey"}}>
						Official Site of the Author T Gamache
					</p>
					<img className="profile-pic" alt="T Gamache-Author" src={profile} width="300" height="800"/>
				 </div>
					<div className="social">
						<a href="https://www.facebook.com/tgamachebooks/" className="fa fa-facebook"></a>
						<a href="https://twitter.com/t_gamache" className="fa fa-twitter"></a>
						<a href="https://instagram.com/tgamache_books?igshid=5xlkb1vtjkeb" className=" fa fa-instagram"></a>
						<a href="mailto:tgamachebooks@gmail.com" className="fa fa-send"></a>
					</div>
					<div className="linkContainer">
						<a className="links" href="/about">About</a>
						{/* <br />
						<a className="links" href="/blog">Blog</a> */}
						<br />
						<a className="links" href="https://www.amazon.com/T-Gamache/e/B07V3B924K/ref=dp_byline_cont_pop_book_1">Books</a>
					</div>
				</div>
			</div>
		);
	}
}

export default FloatingTile;
