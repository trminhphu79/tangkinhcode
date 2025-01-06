type CredentialType = 'GITHUB' | 'GOOGLE' | 'NONE';

export type Profile = {
  id: string;
  accountId: string;
  realmId: string | null;
  fullName: string;
  bio: string;
  avatarUrl: string;
  totalExp: string;
  streak: number;
  isActive: boolean;
  githubLink: string;
  createdAt: string;
  updatedAt: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type Account = {
  createdAt: string;
  credentialType: CredentialType;
  email: string;
  id: string;
  isVerify: boolean;
  profile: Profile;
  tokens: Tokens;
  updatedAt: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type SignUpPayload = SignInPayload & {
  confirmPassword: string;
};

export type OAuthSignInPayload = {
  token: string;
  credentialType: CredentialType;
};
