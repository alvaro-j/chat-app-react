import React from "react";

const SignOut = ({ auth }) => {
	return auth.currentUser && <button className="material-icons golden-btn" onClick={() => auth.signOut()}>logout</button>;
};

export default SignOut;
