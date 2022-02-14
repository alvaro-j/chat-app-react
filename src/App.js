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
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
	const [user] = useAuthState(auth);
	return (
		<div className="App">
			<header>
				<a href="/" className="logo">
					<img src="images/whatsapp2.png" alt="logo"></img>
				</a>
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
