import { Button } from "@nextui-org/button";
import { useCategoryStore } from "../../lib/zustand/category";
import pencilIcon from "../../assets/pencil.svg";
import { useGetUserCategoryList } from "../../features/user/user.hook";
import { useEffect } from "react";

const EditButton = () => {
	const { isEditing, setIsEditing } = useCategoryStore();
	const { data } = useGetUserCategoryList();
	const setCategoryIds = useCategoryStore((state) => state.setCategoryIds);

	useEffect(() => {
		if (data) {
			const categoryIds = data.map((category) => category.categoryId);
			setCategoryIds(categoryIds);
		}
	}, [data, setCategoryIds]);

	const handleEdit = () => {
		setIsEditing(true);
	};

	if (isEditing) {
		return null;
	}

	return (
		<Button onClick={handleEdit} isIconOnly className="bg-transparent">
			<img src={pencilIcon} alt="edit" width={16} height={16} />
		</Button>
	);
};

export default EditButton;
