import React from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"

firebase.initializeApp({

})

const auth = firebase.auth()
const firestore = firebase.firestore()

const App = () => {
	return <div>oi</div>;
};

export default App;
