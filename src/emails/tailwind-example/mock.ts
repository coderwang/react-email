export interface VercelInviteUserEmailProps {
	username?: string;
	userImage?: string;
	invitedByUsername?: string;
	invitedByEmail?: string;
	teamName?: string;
	teamImage?: string;
	inviteLink?: string;
	inviteFromIp?: string;
	inviteFromLocation?: string;
}

export const mockData: VercelInviteUserEmailProps = {
	username: 'alanturing',
	userImage: `/static/vercel-user.png`,
	invitedByUsername: 'Alan',
	invitedByEmail: 'alan.turing@example.com',
	teamName: 'Enigma',
	teamImage: `/static/vercel-team.png`,
	inviteLink: 'https://vercel.com/teams/invite/foo',
	inviteFromIp: '204.13.186.218',
	inviteFromLocation: 'São Paulo, Brazil',
};
