import homeIcon from "../../../assets/home.svg";
import exerciseIcon from "../../../assets/exercise.svg";
import pencilIcon from "../../../assets/pencil.svg";
import digitalIcon from "../../../assets/digital.svg";
import heartIcon from "../../../assets/heart.svg";
import mentalHealthIcon from "../../../assets/mental-health.svg";
import routineIcon from "../../../assets/routine.svg";
import targetIcon from "../../../assets/target.svg";
import { TCategoryName } from "../../../entities/challenge/challenge.model";

export type CategoryIcon = typeof homeIcon | typeof exerciseIcon | typeof pencilIcon;
export type TCategoryIconMapping = Record<TCategoryName, CategoryIcon>;

export const categoryIconMapping: TCategoryIconMapping = {
	집안일: homeIcon,
	운동: exerciseIcon,
	학습: pencilIcon,
	"정신 건강": mentalHealthIcon,
	감사: heartIcon,
	"사소한 목표": targetIcon,
	"디지털 디톡스": digitalIcon,
	"생활 습관": routineIcon,
};
