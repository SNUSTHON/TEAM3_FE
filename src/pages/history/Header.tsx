import { Button } from "@nextui-org/react";
import leftIcon from "../../assets/arrow-left.svg";
import rightIcon from "../../assets/arrow-right.svg";

const Header = () => {
	return (
		<div className="flex items-center mt-4">
			<h1 className="font-bold text-2xl text-default-900 w-full">Sep 2024</h1>
			<Button isIconOnly variant="light">
				<img src={leftIcon} alt="left" width={12} height={12} />
			</Button>
			<Button isIconOnly variant="light">
				<img src={rightIcon} alt="right" width={12} height={12} />
			</Button>
		</div>
	);
};

export default Header;
