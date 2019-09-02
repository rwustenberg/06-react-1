import React from 'react';
import '../styles/Thumbnail.css';

class Thumbnail extends React.Component{
	render() {
		return (
			<div className="thumbnail">
				<h1>{this.props.place.title}</h1>
				<h3> {this.props.place.price}</h3>
				<p>{this.props.place.location}</p>
			</div>
		)}
	}






export default Thumbnail
