import React from "react";

const ChatMessage = ({ message }) => {
	const { text, uid } = message;
	return <p>{text}</p>;
};

export default ChatMessage;
