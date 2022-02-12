import React from "react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

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
	const [user] = useAuthState(auth);
	return (
		<div>
			<header>
				<h1>Whatsapp 2</h1>
				<SignOut auth={auth} />
			</header>
			<section>
				{user ? (
					<ChatRoom
						firebase={firebase}
						auth={auth}
						firestore={firestore}
						useCollectionData={useCollectionData}
					/>
				) : (
					<SignIn auth={auth} />
				)}
			</section>
		</div>
	);
};

export default App;
