import React, {useState} from 'react'
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent';

const PortalModal = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
        <button
            className="bg-black text-white p-1 border rounded-md"
            onClick={() => setShowModal(true)}
            >Modal using React Portal</button>

        {
            showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />, document.getElementById('portal-root')
            )
        }
    </div>
  )
}

export default PortalModal