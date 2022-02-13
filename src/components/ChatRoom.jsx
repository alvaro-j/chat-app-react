import React from "react";
import ChatMessage from "./ChatMessage";

const ChatRoom = ({ firebase, firestore, useCollectionData, auth }) => {
	const messagesRef = firestore.collection("messages"); // makes reference to a firestore collection
	const query = messagesRef.orderBy("createdAt").limitToLast(25); // query documents in the firestore collection
	const [messages] = useCollectionData(query, { idField: "id" }); // listen to the date in real time, it returns an array of objects
	//👆 when the data changes, this component will render again

	const [formValue, setFormValue] = React.useState("");

	const scroll = React.useRef();

	const sendMessage = async (e) => {
		e.preventDefault(); // prevents the page from refreshing
		const { uid, photoURL } = auth.currentUser; // get current user id and photo

		await messagesRef.add({
			text: formValue, // text from the input
			createdAt: firebase.firestore.FieldValue.serverTimestamp(), // timestamp
			uid, // user id
			photoURL, // user photo url
		});
		// 👆 creates a new document on firestore. this method takes a object as a argument
		setFormValue("");
		scroll.current.scrollIntoView({ behavior: "smooth" }); // scrolls to back to the input
	};

	return (
		<>
			<div>
				{messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
				<div ref={scroll}></div>
			</div>
			{/*👆 loop for each document in the collection*/}
			<form onSubmit={sendMessage}>
				<input
					autoFocus
					type="text"
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
				/>
				<button type="submit" className="material-icons golden-btn">send</button>
			</form>
		</>
	);
};

export default ChatRoom;
