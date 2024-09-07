import { getIconByRoute } from "./icon.util";
import IconButton from "./IconButton";

const BottomNavigation = () => {
	return (
		<div className="flex justify-between h-[80px] fixed bottom-0 left-0 w-full bg-white items-center px-[60px]">
			<IconButton icon={getIconByRoute("challenge")} link="/" label="도전" />
			<IconButton icon={getIconByRoute("history")} link="/history" label="기록" />
			<IconButton icon={getIconByRoute("my-page")} link="/my-page" label="마이페이지" />
		</div>
	);
};

export default BottomNavigation;
