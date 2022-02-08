import React from "react";

const ChatRoom = ({ firestore, useCollectionData }) => {
	const messagesRef = firestore.collection("messages"); // makes reference to a firestore collection
	const query = messagesRef.orderBy("createdAt").limit(25); // query documents in the firestore collection
	const [messages] = useCollectionData(query, { idField: "id" }); // listen to the date in real time, it returns an array of objects
	//👆 when the data changes, this component will render again
	console.log(messages);
	return (
		<>
			<div>{messages && messages.map((msg) => <ChatMessage key={msg.id} />)}</div>
		</>
	);
};

export default ChatRoom;
