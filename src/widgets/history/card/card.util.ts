import { TLevel } from "../../../entities/challenge/challenge.model";

export const getLevelString = (level: TLevel): string => {
	return `Lv ${level}`;
};
