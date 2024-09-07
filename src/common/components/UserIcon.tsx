import { IconProps } from "./ListIcon";

const UserIcon = ({ color }: IconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<mask id="mask0_27_1610" maskUnits="userSpaceOnUse" x="2" y="0" width="21" height="25">
				<path
					d="M18.0005 6C18.0005 9.31371 15.3142 12 12.0005 12C8.68682 12 6.00052 9.31371 6.00052 6C6.00052 2.68629 8.68682 0 12.0005 0C15.3142 0 18.0005 2.68629 18.0005 6Z"
					fill={color}
				/>
				<path
					d="M2.00047 20.0005C2.00047 16.6868 4.68676 14.0005 8.00047 14.0005H16.0005C19.3142 14.0005 22.0005 16.6868 22.0005 20.0005V21.0005C22.0005 22.6574 20.6573 24.0005 19.0005 24.0005H5.00047C3.34362 24.0005 2.00047 22.6574 2.00047 21.0005V20.0005Z"
					fill={color}
				/>
			</mask>
			<g mask="url(#mask0_27_1610)">
				<rect x="0.000488281" y="-0.00109863" width="24" height="24" fill={color} />
			</g>
		</svg>
	);
};

export default UserIcon;
