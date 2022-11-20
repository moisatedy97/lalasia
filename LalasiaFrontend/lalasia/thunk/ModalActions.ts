import { setRecoil } from "recoil-nexus";
import { EnumTypeModal, TypeModal } from "../interfaces/ModalTypes";
import { modalStore } from "../store/Modal/ModalStore";

const modalActions = {
  SHOW_MODAL: (modal: TypeModal): void => {
    setRecoil(modalStore, modal);
  },

  HIDE_MODAL: (): void => {
    setRecoil(modalStore, {
      isOpen: false,
      name: {
        type: EnumTypeModal.DIALOG_NONE,
      },
    });
  },
};

export { modalActions };
