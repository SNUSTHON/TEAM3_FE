import EditButton from "./EditButton";

const ChallengeTitle = () => {
	return (
		<div className="flex justify-between items-center">
			<h3 className="p-4 text-sm font-bold">도전 과제를 설정하세요!</h3>
			<EditButton />
		</div>
	);
};

export default ChallengeTitle;
