import React from "react";

import firebase from "firebase/app";

const SignIn = ({auth}) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider(); //gets the google autentication
    auth.signInWithPopup(provider) //shows google popup
  }
	return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
