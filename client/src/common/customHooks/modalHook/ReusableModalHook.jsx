import { useEffect, useRef } from "react";

import './ReusableModalHook.scss';
const ReusableModalHook = ({children, onClickOutside}) =>  {
    const ref = useRef(null);

    useEffect(() => {
        // const handleClickOutside = (event) => {
        //     // checks whether the user clicks outside the modal
        //     if (ref.current && !ref.current.contains(event.target)) {
        //       // executed if a click event occurs outside of the modal
        //       // check if the click event is not coming from the modal content
        //       if (event.target.closest(".modal_content") === null) {
        //         onClickOutside && onClickOutside();
        //       }
        //     }
        //   };
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          } 
        };
        
          
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);


    return (
        <div ref={ref} className="modal-box">
            {children}
        </div>
    );
}
export default ReusableModalHook