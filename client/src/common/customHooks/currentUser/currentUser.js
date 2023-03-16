import { useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../../firebase/firebase";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
     const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            setCurrentUser(user)
        }
        else{
            setCurrentUser(null)
        }
    });
    return unsubscribe;
  }, []);

  return {currentUser};
};

export default useCurrentUser;
