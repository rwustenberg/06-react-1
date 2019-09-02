import React from 'react'
import '../styles/Places.css'
import Favourites from './Favourites'


class Places extends React.Component {
	state = {
		places:  [
							{title: 'Igloo',
								price: 1000,
								location:'Antarctica'
							},{title: 'Tent',
								price: 20,
								location:'Thailand'
							},{title: 'Ski Lodge',
								price: 350,
								location:'Iceland'
							},{title: 'House',
								price: 200,
								location:'New Zealand'
							},{title: 'Cave',
								price: 50,
								location:'Australia'
							},{title: 'Acropolis',
								price: 600,
								location:'Greece'
							}
						]
}
	render () {
		return (
			<div>
				<h1>{this.state.places.length}</h1>
				<div className="thumbnails" >
					{
						this.state.places.map((element, index)=> {
							return(
							<div>
								<h1>{element.title}</h1>
								<h3> {element.price}</h3>
								<p>{element.location}</p>
							</div>
							)}
						)
					}
				</div>
				<Favourites />
			</div>
		)
	}
}

export default Places
