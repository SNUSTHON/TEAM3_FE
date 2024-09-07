import { useGetUserInformation } from "../../features/user/user.hook";
import Sponser from "./Sponser";
import User from "./User";

const UserInfo = () => {
	const { data: user, isLoading } = useGetUserInformation();
	if (isLoading) {
		return <div>Loading</div>;
	}

	if (!user) {
		return <div>Not Found</div>;
	}

	return (
		<>
			<User username={user.username} />
			{Sponser(user.sponsorProgress)}
		</>
	);
};

export default UserInfo;
