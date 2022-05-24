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
	apiKey: "AIzaSyBR3z7IFcuKRWBP7o6iNqF7GKQ0ARqOXo4",
	authDomain: "chat-app-7020f.firebaseapp.com",
	databaseURL: "https://chat-app-7020f-default-rtdb.firebaseio.com",
	projectId: "chat-app-7020f",
	storageBucket: "chat-app-7020f.appspot.com",
	messagingSenderId: "997567316961",
	appId: "1:997567316961:web:9b5546af70395556b548a0"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {
	const [user] = useAuthState(auth);
	return (
		<div className="App">
			<main>
				<header>
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
			</main>
		</div>
	);
};

export default App;
