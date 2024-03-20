import PortfolioEntryCard from "./PortfolioEntryCard";

type Props = {
	entries: {
		title: string;
		description: string;
		image: string;
		skills: string[];
		href: string;
	}[];
};

// This component is used to represent a group of portfolio entry cards.
const PortfolioEntryCardGroup = (props: Props) => {
	return (
		<div className="portfolio-card-group">
			{props.entries && props.entries.map((entry, index) => (
				<PortfolioEntryCard
					key={index}
					title={entry.title}
					description={entry.description}
					image={entry.image}
					skills={entry.skills}
					href={`/${entry.href}`}
				/>
			))}
		</div>
	);
};

export default PortfolioEntryCardGroup;