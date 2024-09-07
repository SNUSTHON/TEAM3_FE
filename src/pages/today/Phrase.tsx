import { PhraseProps } from "../../entities/phrase/phrase.model";

const Phrase = ({ author, message }: PhraseProps) => {
	return (
		<div className="pt-6 pb-3 flex flex-col gap-1">
			<h1 className="font-extrabold text-2xl text-default-900 break-keep">{message}</h1>
			<h6 className="font-normal text-sm text-default-400">{author}</h6>
		</div>
	);
};

export default Phrase;
