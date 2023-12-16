import { motion } from 'framer-motion';

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  return (
    <>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            {children}
            <div className="flex justify-end mt-4">
              {' '}
              <button className="close" onClick={() => setShowModal(false)}>
                Kapat
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
