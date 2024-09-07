import crownImage from "../../assets/crown.svg";

const SponserHeader = () => {
	return (
		<div className="flex gap-1 items-center justify-center">
			<img src={crownImage} alt="crown" width={19} height={15} />
			<h3 className="text-xs font-bold">후원 진척도</h3>
		</div>
	);
};

export default SponserHeader;
