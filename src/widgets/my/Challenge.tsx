import { Checkbox } from "@nextui-org/checkbox";
import { TChallengeSetting } from "../../entities/user/challenge.model";
import checkIcon from "../../assets/check.svg";

const Challenge = ({ categoryName, isSelected }: TChallengeSetting) => {
	return (
		<Checkbox
			isSelected={isSelected}
			className="w-full"
			classNames={{
				icon: "hidden",
				label: "w-full max-w-full p-4 group-data-[selected=true]:bg-primary-50 group-data-[selected=true]:border-none rounded-xl flex justify-between items-center border border-default",
				base: "w-full max-w-full",
				wrapper: "hidden",
			}}
		>
			<h6 className="w-full text-sm font-medium">{categoryName}</h6>
			{isSelected && <img src={checkIcon} alt="check" width={16} height={16} />}
		</Checkbox>
	);
};

export default Challenge;
