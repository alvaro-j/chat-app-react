import React from "react";

const SignOut = ({ auth }) => {
	return auth.currentUser && <button onClick={() => auth.signOut()}>Sing out</button>;
};

export default SignOut;
