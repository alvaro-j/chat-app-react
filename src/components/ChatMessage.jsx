import React from "react";

const ChatMessage = ({ message, auth }) => {
	const { text, uid, photoURL } = message;
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
	// 👆 compares the user id on the firestore document with the current user id to set the css class
	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt="user" />
			<p>{text}</p>
		</div>
	);
};

export default ChatMessage;
