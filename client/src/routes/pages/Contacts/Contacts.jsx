import React, {useRef, useState, useEffect} from 'react'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { Button } from '../../../common/sharedComponents';

import './Contacts.scss';
const Contacts = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // add event listener to detect clicks outside popup
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      // close popup if click detected outside
      setShowPopup(false);
    }
  };

  const handlePopupClick = (event) => {
    // do not close popup if clicked inside itself
    event.stopPropagation();
  };

  return (
    <div className="contacts_container" ref={popupRef} onClick={handlePopupClick}>
      <Button classType='activity' onClick={() => setShowPopup(true)}>Open Popup</Button>
      <div  className="modal-box">
      </div>

      {showPopup && (
          <ModalOverlay />
      )}
    </div>
  );
}

export default Contacts