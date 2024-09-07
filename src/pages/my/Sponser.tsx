import { Progress } from "@nextui-org/progress";
import SponserHeader from "./SponserHeader";
import { SponsorProgress } from "../../entities/user/user.model";

const Sponser = (sponserProgress: SponsorProgress) => {
	return (
		<div className="flex flex-col items-center justify-center gap-3">
			<SponserHeader />
			<Progress value={sponserProgress} className="max-w-[250px]" />
		</div>
	);
};

export default Sponser;
