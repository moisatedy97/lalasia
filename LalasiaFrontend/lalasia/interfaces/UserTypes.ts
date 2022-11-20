export type TypeUser = {
  username: string;
  password: string;
  status: TypeUserStatus;
};

export type TypeUserStatus = {
  isLoggedIn: boolean;
  isTokenValid: boolean;
};
