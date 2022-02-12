import React from "react";

const ChatMessage = ({ message, auth }) => {
	const { text, uid } = message;
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
	console.log(messageClass);
	return <p>{text}</p>;
};

export default ChatMessage;
