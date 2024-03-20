import React from 'react';
import Image from 'next/image';
import SkillBadge from './SkillBadge';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  href: string;
};

// This card is used as an entry item for the portfolio to represent a project, or achievement.
const PortfolioEntryCard = (props: Props) => {
	return (
		<Link href={props.href} passHref={true}>
			<div className="portfolio-entry-card">
				<div className="portfolio-entry-card-image-container">
					<Image layout="responsive" width={100} height={100} objectFit="cover" src={props.image} alt={props.title} />
				</div>
				<div className="portfolio-entry-card-content-container">
					<h2>{props.title}</h2>
					<p>{props.description}</p>	
					<div className="portfolio-entry-card-skills-container">		
						{props.skills && props.skills.map((skill, index) => <SkillBadge key={index} skill={skill} />)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PortfolioEntryCard;