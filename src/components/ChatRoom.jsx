import React from "react";
import ChatMessage from "./ChatMessage";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const ChatRoom = ({ firebase, firestore, useCollectionData, auth }) => {
	const messagesRef = firestore.collection("messages"); // makes reference to a firestore collection
	const query = messagesRef.orderBy("createdAt").limitToLast(25); // query documents in the firestore collection
	const [messages] = useCollectionData(query, { idField: "id" }); // listen to the date in real time, it returns an array of objects
	//👆 when the data changes, this component will render again

	const [formValue, setFormValue] = React.useState("");
	const scroll = React.useRef();
	const input = React.useRef();

	const sendMessage = async (e) => {
		e.preventDefault(); // prevents the page from refreshing
		const { uid, photoURL } = auth.currentUser; // get current user id and photo
		if (input.current.value.replaceAll(" ", "") !== "")
			// remove white spaces
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

	//Voice to Text
	const { transcript, resetTranscript } = useSpeechRecognition()

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
	  return null
	}

	return (
		<>
			<div>
				{messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
				<div ref={scroll}></div>
			</div>
			{/*👆 loop for each document in the collection*/}
			<form onSubmit={sendMessage}>
				<input
					maxLength="100"
					ref={input}
					autoFocus
					type="text"
					value={formValue || transcript}
					onChange={(e) => setFormValue(e.target.value)}
				/>
				<button type="submit" className="material-icons golden-btn">
					send
				</button>
				<button onClick={SpeechRecognition.startListening}>Start</button>
      			<button onClick={SpeechRecognition.stopListening}>Stop</button>
      			<button onClick={resetTranscript}>Reset</button>
			</form>	
				
		</>
	);
};

export default ChatRoom;
