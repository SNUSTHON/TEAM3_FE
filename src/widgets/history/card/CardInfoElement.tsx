import { PropsWithChildren } from "react";

const CardInfoElement = ({ children }: PropsWithChildren) => {
	return <div className="w-full flex items-center justify-center">{children}</div>;
};

export default CardInfoElement;
