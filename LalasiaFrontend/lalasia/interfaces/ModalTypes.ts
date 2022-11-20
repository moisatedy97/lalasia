export type TypeModal = {
  name: TypeModalName;
  isOpen: boolean;
};

export type TypeModalName = TypeModalNone | TypeModalLogin;

export type TypeModalNone = {
  type: EnumTypeModal.DIALOG_NONE;
};

export type TypeModalLogin = {
  type: EnumTypeModal.DIALOG_LOGIN;
};

export enum EnumTypeModal {
  DIALOG_NONE = "NONE",
  DIALOG_LOGIN = "LOGIN",
}
