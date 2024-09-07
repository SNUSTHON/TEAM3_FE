import { Button } from "@nextui-org/react";
import googleLogo from "../assets/google.svg";

const GoogleLoginButton = () => {
	return (
		<Button
			startContent={
				<img src={googleLogo} alt="Google Login" style={{ width: "20px", height: "20px" }} />
			}
		>
			구글로 시작하기
		</Button>
	);
};

export default GoogleLoginButton;
