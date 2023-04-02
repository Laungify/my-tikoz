import { useEffect, useRef } from "react";

export function ReusableModalHook(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            // checks whether the user clicks on the tooltip (or its children) via the contains
            if (ref.current && !ref.current.contains(event.target)) {
                // executed if a click event occurs outside of the tooltip component instance
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!props.isOpen) return null;

    return (
        <div ref={ref} className="modal-box">
            {props.children}
        </div>
    );
}
export default ReusableModalHook