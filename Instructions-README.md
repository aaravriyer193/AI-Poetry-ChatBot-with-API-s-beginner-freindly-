I am calling this chatbot the Poetic Quill
Poetic Quill is a beginner-friendly creative coding project that blends art, AI, and JavaScript to bring a poetic chatbot to life.

Using p5.js for visuals and the OpenAI API for language generation, this project creates a whimsical digital “quill” that writes short, heavy-hearted double-line poems in response to anything you type.

Features
Beginner-friendly code structure – easy to read and modify

Beautiful parchment-inspired interface

Fully responsive design (desktop + mobile)

Custom poetic personality that always answers in verse

Prerequisites
Before you start, you will need:

A web browser (Chrome, Firefox, Edge, etc.)

A text editor (VS Code, Sublime Text, etc.)

An OpenAI API key – free to get with an OpenAI account.

Getting an OpenAI API Key
Go to https://platform.openai.com/

Sign up for a free account (or log in if you already have one).

Once logged in, click on your profile picture in the top right and go to "View API Keys".

Click "Create new secret key".

Copy the key and keep it somewhere safe – you’ll need it in the next step.

Important: Never share your API key publicly or commit it to GitHub. Anyone with your key can use your account.

How to Run the Project
Download or clone this repository:

Or click the green "Code" button on GitHub and select Download ZIP.

Open the project folder in your text editor.

In the file script.js, find this line:

const OPENAI_API_KEY = "YOUR_API_KEY_HERE";
Replace "YOUR_API_KEY_HERE" with the API key you got from OpenAI.

Open index.html in your browser (double-click it, or right-click and choose “Open with” → browser).

Type something into the text box and click Ask The Poetic Quill – your AI poet is ready!

Tech Stack
p5.js – creative coding library

JavaScript Fetch API – to connect with OpenAI

OpenAI GPT-4o-mini – generates the poems

Deploying Online (Optional)
You can make your Poetic Quill available online for free using GitHub Pages:

Push your code to GitHub.

In your repo settings, go to Pages.

Under "Source", select main branch and /root folder.

Save – you’ll get a public link in a few minutes.
