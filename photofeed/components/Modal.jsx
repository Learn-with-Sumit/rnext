"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

import Image from "next/image";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
      <dialog
        ref={modalRef}
        onClose={onHide}
        className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
      >
        <span onClick={onHide}
          className="flex justify-end cursor-pointer">
            <Image
              src="/xmark.svg"
              alt="close"
              width={30}
              height={30} />
          </span>
          {children}
      </dialog>
    ,
    document.getElementById("modal-root-content")
  );
};

export default Modal;