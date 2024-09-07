import { create } from "zustand";
import { CategoryId } from "../../entities/user/challenge.model";

type IsEditing = boolean;
type CategoryIds = CategoryId[];

type CategoryStore = {
	isEditing: IsEditing;
	categoryIds: CategoryIds;
	setIsEditing: (isEditing: IsEditing) => void;
	setCategoryIds: (categoryIds: CategoryIds) => void;
	addCategoryIds: (categoryId: CategoryId) => void;
	removeCategoryIds: (categoryId: CategoryId) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
	isEditing: false,
	categoryIds: [],
	setIsEditing: (isEditing: IsEditing) => set({ isEditing }),
	setCategoryIds: (categoryIds: CategoryIds) => set({ categoryIds }),
	addCategoryIds: (categoryId: CategoryId) =>
		set((state) => ({ categoryIds: [...state.categoryIds, categoryId] })),
	removeCategoryIds: (categoryId: CategoryId) =>
		set((state) => ({ categoryIds: state.categoryIds.filter((id) => id !== categoryId) })),
}));
