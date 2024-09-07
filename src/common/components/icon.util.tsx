import ListIcon, { IconProps } from "./ListIcon";
import MainIcon from "./MainIcon";
import UserIcon from "./UserIcon";

type RouteName = "challenge" | "history" | "my-page";

const iconRouteMapping = {
	challenge: MainIcon,
	history: ListIcon,
	"my-page": UserIcon,
};
export const getIconByRoute = (route: RouteName) => (color: IconProps) => {
	return iconRouteMapping[route](color);
};
