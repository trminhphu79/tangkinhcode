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
  id: string;
  email: string;
  credentialType: string; // Consider using an enum if credentialType values are limited
  createdAt: string;
  updatedAt: string;
  profile: Profile;
  tokens: Tokens;
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
  credentialType: 'GITHUB' | 'GOOGLE';
};
