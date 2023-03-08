import { useState, useEffect } from 'react';

function useHrOnSmallScreens() {
  const [isHr, setIsHr] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsHr(true);
      } else {
        setIsHr(false);
      }
    };

    window.addEventListener("resize", handleResize);
    // initialize the component's state as soon as it is mounted
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isHr;
}

export default useHrOnSmallScreens