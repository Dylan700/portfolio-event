import React from 'react';

type Props = {
	title: string;
	description: string;
};

const Heading = (props: Props) => {
	return (
		<div className='heading-container'>
			<h1 className='title'>{props.title}</h1>
			<p className='description'>{props.description}</p>
		</div>
	);
};

export default Heading;