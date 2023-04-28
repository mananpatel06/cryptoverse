import React, { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updatePassword, updateEmail, sendPasswordResetEmail } from '@firebase/auth';
import { onSnapshot, doc } from 'firebase/firestore';
import { auth, db } from './firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  // const [loading, setLoading] = useState(true);
  // {console.log("api call");}

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateUserEmail(email) {
    return updateEmail(currentUser, email);
  }

  function updateUserPassword(password) {
    return updatePassword(currentUser, password);
  }

  const [watchlist, setWatchlist] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log('Auth', user);
      setCurrentUser(user);
      if (user) {
        // console.log('Cu user :', user?.uid);
        const uid = user?.uid;
        const coinRef = doc(db, 'watchlist', uid);
        onSnapshot(coinRef, (coin) => {
          if (coin.exists()) {
            setWatchlist(coin.data().coinsId);
            setCount(coin.data().coinnumber);
          }
        });
      }

      // setLoading(true);
    });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     // console.log("Auth",user);

  //     if (user) setCurrentUser(user);
  //     else setCurrentUser(null);
  //     // setLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (currentUser) {
  //     console.log('Cu user :',currentUser?.uid);
  //     const uid =currentUser?.uid;
  //     const coinRef = doc(db, 'watchlist', uid);
  //     let unsubscribe = onSnapshot(coinRef, (coin) => {
  //       if (coin.exists()) {

  //         setWatchlist(coin.data().coinsId);
  //       } else {
  //         console.log('No Items in Watchlist');
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, [currentUser]);

  const value = {
    currentUser,
    watchlist,
    count,
    login,
    signup,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
