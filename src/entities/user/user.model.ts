export type MemberId = number;
export type Username = string;
export type Email = string;
export type ProfileImageUrl = string;
export type SponsorProgress = number;

export type TUser = {
	memberId: MemberId;
	username: Username;
	email: Email;
	profileImageUrl: ProfileImageUrl;
	sponsorProgress: SponsorProgress;
};
