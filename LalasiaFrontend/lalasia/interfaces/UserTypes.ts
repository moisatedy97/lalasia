export type TypeUser = TypeUserCredentials & TypeUserStatus;

export type TypeUserCredentials = {
  username: string;
  password: string;
};

export type TypeUserStatus = {
  isLoggedIn: boolean;
  isTokenValid: boolean;
};
