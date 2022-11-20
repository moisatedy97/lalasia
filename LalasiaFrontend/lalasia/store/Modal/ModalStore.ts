import { atom } from "recoil";
import { EnumTypeModal, TypeModal } from "../../interfaces/ModalTypes";

const modal: TypeModal = {
  name: {
    type: EnumTypeModal.DIALOG_NONE,
  },
  isOpen: false,
};

export const modalStore = atom<TypeModal>({
  key: "modalStore",
  default: modal,
});
