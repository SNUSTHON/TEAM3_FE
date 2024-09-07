type CardInfoProps = {
	label: string;
	value: string;
};

const CardInfoElement = ({ label, value }: CardInfoProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h4 className="">{label}</h4>
			<h6 className="">{value}</h6>
		</div>
	);
};

export default CardInfoElement;
