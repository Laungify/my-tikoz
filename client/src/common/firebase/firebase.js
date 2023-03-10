// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsFvKfpiR5nvRxer4vVXzwcvKIhJlZrbU",
  authDomain: "tikoz-bd9f2.firebaseapp.com",
  projectId: "tikoz-bd9f2",
  storageBucket: "tikoz-bd9f2.appspot.com",
  messagingSenderId: "140326637885",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  return await setDoc(doc(db, "users", userAuth), {
    ...additionalInformation,
  });
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(() => {
//   // Profile updated!
//   // ...
// }).catch((error) => {
//   // An error occurred
//   // ...
// });

export const updateUserProfile = async (displayName) => {
  return await updateProfile(auth.currentUser, {
    displayName,
  });
};

// callback of authStateChange
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       setAuth(true);
//       console.log(user);
//     } else {
//       setAuth(false);
//       console.log(user);
//     }
//   });
// };

// google sign-in
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      console.log(result.user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      setError(error.code);
      console.log(error.code);
    });
};

// Firebase storage reference
export const storage = getStorage(app);
