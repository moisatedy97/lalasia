import React from "react";
import { useRecoilState } from "recoil";
import {
  EnumTypeModal,
  TypeModal,
  TypeModalName,
} from "../../interfaces/ModalTypes";
import LoginModal from "../../modals/LoginModal";
import { modalStore } from "../../store/Modal/ModalStore";

type Props = {
  modal: TypeModal;
};

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalStore);

  return <>{modal.isOpen ? <ModalDialog modal={modal} /> : null}</>;
};

const ModalDialog = ({ modal }: Props) => {
  switch (modal.name.type) {
    case EnumTypeModal.DIALOG_NONE:
      return <></>;
    case EnumTypeModal.DIALOG_LOGIN:
      return <LoginModal />;
    default:
      return <></>;
  }
};

export default Modal;
