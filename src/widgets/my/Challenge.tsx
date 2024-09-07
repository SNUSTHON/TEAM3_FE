import { Checkbox } from "@nextui-org/checkbox";
import { TChallengeSetting } from "../../entities/user/challenge.model";
import checkIcon from "../../assets/check.svg";
import { cn } from "@nextui-org/theme";
import { useCategoryStore } from "../../lib/zustand/category";

const Challenge = ({ categoryName, selected: isSelected, categoryId }: TChallengeSetting) => {
	const { isEditing, addCategoryIds, removeCategoryIds, categoryIds } = useCategoryStore();
	const handleCheckboxChange = () => {
		if (!isEditing) {
			return;
		}

		if (isSelected) {
			console.log(categoryIds);
			removeCategoryIds(categoryId);
			console.log(categoryIds);
		} else {
			console.log(categoryIds);
			addCategoryIds(categoryId);
			console.log(categoryIds);
		}
	};

	const isChecked = isEditing && categoryIds.includes(categoryId);
	const isSelectedOrChecked = isChecked || isSelected;
	console.log("isEditing", isChecked);

	return (
		<Checkbox
			isSelected={isSelectedOrChecked}
			className="w-full"
			classNames={{
				icon: "hidden",
				label: cn(
					"w-full max-w-full p-4 rounded-xl flex justify-between items-center border border-default",
					isSelected ? "bg-primary-50 border-none" : "border-default"
				),
				base: "w-full max-w-full",
				wrapper: "hidden",
			}}
			onChange={handleCheckboxChange}
		>
			<h6 className="w-full text-sm font-medium">{categoryName}</h6>
			{isSelected && <img src={checkIcon} alt="check" width={16} height={16} />}
		</Checkbox>
	);
};

export default Challenge;
