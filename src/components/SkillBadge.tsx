import React from 'react';
import Image from 'next/image';

type Props = {
  skill: string;
};

// This component is used to represent a skill in the form of a badge.
const SkillBadge = (props: Props) => {
	return (
		<div className="skill-badge">
			<span className="skill-badge-text">{props.skill}</span>
		</div>
	);
};

export default SkillBadge;