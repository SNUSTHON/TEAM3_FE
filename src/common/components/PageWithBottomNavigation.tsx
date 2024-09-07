import { PropsWithChildren } from "react";
import BottomNavigation from "./BottomNavigation";

const PageWithBottomNavigation = ({ children }: PropsWithChildren) => {
	return (
		<div className="h-screen">
			<div className="h-[calc(100vh-80px)] overflow-y-auto mb-6">{children}</div>
			<BottomNavigation />
		</div>
	);
};

export default PageWithBottomNavigation;
