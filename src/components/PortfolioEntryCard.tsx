import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  image: string;
};

const PortfolioEntryCard = (props: Props) => {
	return (
		<div className="portfolio-entry-card">
			<div className="portfolio-entry-card-image-container">
				<Image src={props.image} width={100} height={100} alt={props.title} />
			</div>
			<div className="portfolio-entry-card-content-container">
				<h2>{props.title}</h2>
				<p>{props.description}</p>			
			</div>
		</div>
	);
};

export default PortfolioEntryCard;