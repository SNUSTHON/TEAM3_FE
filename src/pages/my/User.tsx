import { TUser } from "../../entities/user/user.model";
import userImage from "../../assets/avatar.svg";

type UserProps = Pick<TUser, "username">;

const User = ({ username }: UserProps) => {
	return (
		<div className="flex flex-col items-center gap-4">
			<img src={userImage} alt="avatar" width={125} height={125} />
			<h3 className="font-extrabold text-base">{username}</h3>
		</div>
	);
};

export default User;
