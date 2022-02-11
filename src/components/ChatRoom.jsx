import React from "react";
import ChatMessage from "./ChatMessage";

import "firebase/compat/firestore";

const ChatRoom = ({ firestore, useCollectionData }) => {
	const messagesRef = firestore.collection("messages"); // makes reference to a firestore collection
	const query = messagesRef.orderBy("createdAt").limitToLast(25); // query documents in the firestore collection
	const [messages] = useCollectionData(query, { idField: "id" }); // listen to the date in real time, it returns an array of objects
	//👆 when the data changes, this component will render again
	console.log(query);
	return (
		<>
			<div>{messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}</div>
			{/*👆 loop for each document in the collection*/}
		</>
	);
};

export default ChatRoom;
