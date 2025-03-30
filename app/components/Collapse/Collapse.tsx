function Collapse({ content, title }: CollapseProps) {
	return (
		<div className="collapse bg-base-100 border-base-300 border mt-[16]">
			<input type="checkbox" />
			<div className="collapse-title font-semibold text-2xl">{title}</div>
			<div className="collapse-content text-xl">{content}</div>
		</div>
	);
}

interface CollapseProps {
	readonly title: string;
	readonly content: string | React.ReactNode;
}

export default Collapse;
