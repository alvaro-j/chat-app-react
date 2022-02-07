import React from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyDj1QoqOESBmRZ3kLg8DwIAm6CQD59OQgk",
	authDomain: "chat-app-react-1ccb9.firebaseapp.com",
	projectId: "chat-app-react-1ccb9",
	storageBucket: "chat-app-react-1ccb9.appspot.com",
	messagingSenderId: "891542763042",
	appId: "1:891542763042:web:149f3509682e67b7d77c7b",
	measurementId: "G-6BFFC5JYPN",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
	return <div>oi</div>;
};

export default App;
