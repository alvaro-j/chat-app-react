# Whatsapp 2

![image](https://user-images.githubusercontent.com/86482525/153861132-6d48587e-c615-4e6b-abd7-e262450a64f3.png)

## Getting Started with Create React App ⚛

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of contents✒️

- [Overview](#overview)🎯
  - [Links](#links)🔗
- [My process](#my-process)🧩
  - [Built with](#built-with)🔨
  - [What I learned](#what-i-learned)📝
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

The long awaited app has finally been released. There is no more 12 days of waiting! Welcome to the Whatsapp 2!

### Links🔗

- Live Site URL: [Whatsapp 2](https://chat-app-react-indol.vercel.app/)

## My process🧩

### Built with🔨

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript(React.js)
- Create React App
- Firebase
- Firestore
- Google authentication

### What I learned📝

- Create a document in <strong>Firestore</strong>:
```js
await messagesRef.add({
			text: formValue, // text from the input
			createdAt: firebase.firestore.FieldValue.serverTimestamp(), // timestamp
			uid, // user id
			photoURL, // user photo url
		});
```
- Use the <strong>Firebase authentication</strong>:
```js
const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider(); //gets the google autentication
		auth.signInWithPopup(provider); //shows google popup
	};
``` 
- Transform a normal web app into a <strong>PWA</strong>:
```js
{
	"name": "React chat app",
	"short_name": "Chat app",
	"start_url": "index.html",
	"icons": [
		{
			"src": "images/maskable_icon.png",
			"sizes": "196x196",
			"type": "image/png",
			"purpose": "any maskable"
		},
		{
			"src": "images/whatsapp2.png",
			"sizes": "192x192",
			"type": "image/png"
		},
		{
			"src": "images/whats2-512.png",
			"sizes": "512x512",
			"type": "image/png"
		}
	],
	"background_color": "#000000",
	"display": "standalone",
	"theme_color": "#FFFFFF"
}

```
### Useful resources

- [Firebase authentication](https://www.youtube.com/watch?v=mEF9WRwYDfY) - This helped me understand how the Firebase authentication works. I'd recommend it to anyone who wants to understand this.

## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
