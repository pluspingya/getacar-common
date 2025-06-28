type AccountInvitationTokenData = {
  userInvitation: {
    id: string;
    email: string;
    accountId: string;
    membershipRole: string;
  },
  userExists: boolean;
}

export default AccountInvitationTokenData;