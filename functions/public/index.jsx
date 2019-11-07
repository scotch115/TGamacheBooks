import React from 'react';
import styles from './style.css';

class App extends Component {
	render() {
		return (
			<div className="App">
			<ul>
				<li><a className="active" href="/">Home</a></li>
				<li><a href="about">About Me</a></li>
				<li><a href="blog">Blog</a></li>
			</ul>
			<div style={{position: 'absolute', top: '20', width: '100%', height: '100', backgroundColor: 'black'}}></div>
			<div className="header"></div>
			<div className="title">T Gamache</div>
			<div className="scroll-down"></div>
			<div className="main-wrapper">
				<div className="main">
					<p><img className="cover-photo" data-attachment-id="171" data-permalink="https://tomgamachebooks.com/background_texture_tom-2/" data-orig-file="https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?fit=3150%2C4800&amp;ssl=1" data-orig-size="3150,4800" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;1559359965&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;background_texture_Tom 2&quot;,&quot;orientation&quot;:&quot;1&quot;}" data-image-title="background_texture_Tom 2" data-image-description="" data-medium-file="https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?fit=197%2C300&amp;ssl=1" data-large-file="https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?fit=672%2C1024&amp;ssl=1" className="wp-image-171 alignleft jetpack-lazy-image jetpack-lazy-image--handled" src="https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?resize=300%2C457&amp;ssl=1" alt="" width="300" height="457" data-recalc-dims="1" srcset="https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?resize=672%2C1024&amp;ssl=1 672w, https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?resize=197%2C300&amp;ssl=1 197w, https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?resize=768%2C1170&amp;ssl=1 768w, https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?resize=945%2C1440&amp;ssl=1 945w, https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?w=1454&amp;ssl=1 1454w, https://i2.wp.com/tomgamachebooks.com/wp-content/uploads/2019/07/IMG_0013.jpg?w=2181&amp;ssl=1 2181w" data-lazy-loaded="1" sizes="(max-width: 300px) 100vw, 300px">
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
					<p style="margin-top: 20px;"></p>
					// Embedded Social Feed/Headers
					<div id="fb-root"></div>
					<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0"></script>
					<div className="fb-page" data-href="https://www.facebook.com/tgamachebooks" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/tgamachebooks" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/tgamachebooks">T Gamache</a></blockquote></div>
					<p style={{marginTop: '20px', bordeStyle: 'solid', borderColor: 'black'}}></p>
					<a className="twitter-timeline" href="https://twitter.com/t_gamache?ref_src=twsrc%5Etfw">Tweets by t_gamache</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
			</div>
			</div>
		)
	}

	ReactDOM.render(App, document.getElementById('App'));
}
