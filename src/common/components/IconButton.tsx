import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { IconProps } from "./ListIcon";

type IconButtonProps = {
	icon: (color: IconProps) => ReactNode;
	link: string;
	label: string;
};

const IconButton = ({ icon, link, label }: IconButtonProps) => {
	const isActive = useMatch(link);

	return (
		<Link to={link} className="flex flex-col items-center justify-center gap-2">
			{icon({ color: isActive ? "#006FFD" : "#D4D6DD" })}
			<h6 className="text-default-500 font-normal text-xs">{label}</h6>
		</Link>
	);
};

export default IconButton;
