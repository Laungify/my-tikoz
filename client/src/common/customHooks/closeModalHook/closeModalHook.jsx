import { useEffect, useRef } from "react";

import './closeModalHook.scss'
 const  ReusableModal = (props) =>{
  const { isOpen, onClose, onOverlayClick, children } = props;
  const modalOverlayRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalOverlayRef.current &&
        !modalOverlayRef.current.contains(event.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
        // stop the propagation of the click event when the user clicks inside the modal.
    // e.stopPropagation();
        // This prevents the overlay from triggering the handleOverlayClick function when the user clicks inside the modal.

    e.stopPropagation();
    onOverlayClick && onOverlayClick();
  };

  return isOpen ? (
    <div
      className="modal__overlay-close"
      onClick={handleOverlayClick}
      ref={modalOverlayRef}
    >
      <div className="modal">{children}</div>
    </div>
  ) : null;
}
export default ReusableModal