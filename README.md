
# Open ai API poetry chatbot aka. Poetic Quill

Poetic Quill is a beginner-friendly creative coding project that blends art, AI, and JavaScript to create a poetic chatbot with personality.

Powered by [p5.js](https://p5js.org/) for visuals and the [OpenAI API](https://platform.openai.com/) for language generation, this “digital quill” writes short, heavy-hearted, double-line poems in response to anything you type. It’s an ideal starter project for learning how to combine creative coding with AI.

## Features

* Beginner-friendly code structure – simple, well-commented, and easy to modify
* Beautiful parchment-inspired interface – designed to feel like an old poet’s journal
* Fully responsive – works on desktop and mobile
* Custom poetic personality – always responds in heartfelt verse

## Prerequisites

Before you start, you will need:

* A web browser (Chrome, Firefox, Edge, etc.)
* A text editor (VS Code, Sublime Text, etc.)
* An OpenAI API key – free with an OpenAI account

## Getting an OpenAI API Key

1. Go to [https://platform.openai.com/](https://platform.openai.com/).
2. Sign up for a free account or log in if you already have one.
3. Click your profile picture in the top right and choose “View API Keys.”
4. Click “Create new secret key.”
5. Copy the key and store it safely. You will need it in the next step.

Important: Never share your API key publicly or commit it to GitHub. Anyone with your key can use your account.

## How to Run the Project

1. Download or clone this repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/poetic-quill.git
   ```

   Or click the green "Code" button on GitHub and select "Download ZIP."

2. Open the project folder in your text editor.

3. In the file `script.js`, find this line:

   ```javascript
   const OPENAI_API_KEY = "YOUR_API_KEY_HERE";
   ```

   Replace `"YOUR_API_KEY_HERE"` with your API key.

4. Open `index.html` in your browser (double-click it, or right-click and choose “Open with” → your browser).

5. Type something into the text box and click “Ask The Poetic Quill.” Your AI poet will respond.

## Tech Stack

* p5.js – creative coding library
* JavaScript Fetch API – to connect with OpenAI
* OpenAI GPT-4o-mini – generates the poems
