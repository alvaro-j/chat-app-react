import React from "react";

import firebase from "firebase/app";

const SignIn = ({ auth }) => {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider(); //gets the google autentication
		auth.signInWithPopup(provider); //shows google popup
	};
	React.useEffect(() => {
		const whatsIntro = new Audio("./sounds/whats2-intro.mp3");
		whatsIntro.play();
	}, []);
	return (
		<>
			<img src="images/what2-dias.jpg" alt="contagem para whatsapp 2" className="img-count" />
			<button className="sign-in-btn golden-btn" onClick={signInWithGoogle}>
				<span className="material-icons">login</span> Sign in with Google
			</button>
		</>
	);
};

export default SignIn;
