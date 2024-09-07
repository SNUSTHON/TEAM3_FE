import homeIcon from "../../../assets/home.svg";
import exerciseIcon from "../../../assets/exercise.svg";
import pencilIcon from "../../../assets/pencil.svg";
import { TCategoryName } from "../../../entities/challenge/challenge.model";

export type CategoryIcon = typeof homeIcon | typeof exerciseIcon | typeof pencilIcon;
export type TCategoryIconMapping = Record<TCategoryName, CategoryIcon>;

export const categoryIconMapping: TCategoryIconMapping = {
	집안일: homeIcon,
	운동: exerciseIcon,
	학습: pencilIcon,
};
