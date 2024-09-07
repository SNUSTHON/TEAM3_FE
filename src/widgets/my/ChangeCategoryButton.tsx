import { Button } from "@nextui-org/button";
import { useCategoryStore } from "../../lib/zustand/category";
import { usePostUserCategoryList } from "../../features/user/user.hook";

const ChangeCategoryButton = () => {
	const { isEditing, categoryIds, setIsEditing } = useCategoryStore();
	const { mutate } = usePostUserCategoryList();

	if (!isEditing) {
		return null;
	}

	const handleSubmit = () => {
		mutate({ categoryIds });
		setIsEditing(false);
	};

	return (
		<Button onClick={handleSubmit} className="bg-primary-500 text-white height-[48px] w-full">
			선택했습니다
		</Button>
	);
};

export default ChangeCategoryButton;
