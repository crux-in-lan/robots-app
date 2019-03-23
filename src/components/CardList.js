import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {sampleRobots} = props;
	return (
		<div>
			{
				sampleRobots.map(robot => {
					return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} imageUrl={robot.image}/>
				})
			}
		</div>
	)
}

export default CardList;