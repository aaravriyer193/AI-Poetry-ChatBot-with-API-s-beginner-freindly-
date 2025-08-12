
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


# How Poetic Quill Works

**Poetic Quill** is a simple but creative web application that turns your text prompts into heartfelt, double-line poems. It combines **p5.js** for interactive visuals, **JavaScript** for functionality, and the **OpenAI API** for AI-generated poetry. This section explains how the whole system works from the moment you load the page to the moment you get your poem.

---

## 1. The Technology Behind Poetic Quill

The project is built using three main components:

1. **HTML**

   * Provides the structure of the page.
   * Loads the p5.js library and your JavaScript file.
   * Contains no heavy layout code because p5.js dynamically creates all visible elements.

2. **CSS**

   * Adds the background colors, fonts, and general styling.
   * Makes the interface feel like parchment, matching the poetic theme.
   * Handles small adjustments like margins and shadows.

3. **JavaScript with p5.js**

   * Controls the canvas drawing, input fields, and buttons.
   * Sends your text prompt to the OpenAI API.
   * Displays the AI-generated poem back in the chat window.

4. **OpenAI GPT API**

   * Processes your text prompt and generates a poem according to custom instructions.
   * The GPT-4o-mini model is used here for a balance between speed and quality.

---

## 2. How the Flow Works

Here’s what happens step-by-step when you use Poetic Quill:

**Step 1: Page Load**

* When you open `index.html`, the browser loads:

  * `style.css` (styling)
  * `p5.js` (graphics library)
  * `script.js` (the main logic)
* p5.js automatically calls the `setup()` function once when the page is ready.

**Step 2: Interface Setup (`setup()` function)**

* A fullscreen canvas is created to draw the interface.
* An input box and a button are created with p5.js functions (`createInput()` and `createButton()`).
* These elements are styled for a parchment-like theme.
* The `Ask The Poetic Quill` button is linked to the `handleUserInput()` function.

**Step 3: Drawing the Background (`draw()` function)**

* Every frame, p5.js calls the `draw()` function.
* This function:

  * Draws the parchment background with subtle lines and colors.
  * Displays the title at the top.
  * Shows the chat history (previous questions and poems) in “chat bubbles” with alternating colors for user and bot messages.

**Step 4: Sending a Prompt**

* When you type something and click the button:

  * `handleUserInput()` stores your text in the chat history.
  * It then calls `getPoetryFromAPI()` with your text as the prompt.

**Step 5: Talking to OpenAI**

* `getPoetryFromAPI()` builds a **payload** — a JSON object with:

  * `model`: `"gpt-4o-mini"`
  * `messages`: a list containing:

    * A **system message** telling GPT to act as "The Poetic Quill" and always respond in a two-line heavy-hearted poem.
    * The **user message** containing your prompt.
  * Other parameters like `temperature` for creativity and `max_tokens` for response length.
* It then uses the JavaScript `fetch()` API to send this payload to:

  ```
  https://api.openai.com/v1/chat/completions
  ```
* The request is authorized with your **private API key** (never hardcode this publicly).

**Step 6: Receiving the Response**

* OpenAI sends back a JSON object with the generated text.
* The function extracts the poem from `data.choices[0].message.content` and returns it.

**Step 7: Displaying the Poem**

* The returned poem is stored in the chat history alongside your original question.
* On the next `draw()` frame, the new chat bubble appears containing the AI’s poetic reply.

---

## 3. Why p5.js is Used

p5.js makes it very easy to:

* Create and position interactive elements (input boxes, buttons) without writing raw HTML.
* Draw responsive, custom backgrounds and shapes.
* Automatically scale fonts, margins, and layout for different screen sizes.

In this project, p5.js is used instead of plain HTML/CSS layouts because it gives more visual control and makes the app feel like a creative art project rather than a standard webpage.

---

## 4. How the Poetic Personality Works

The “poetic personality” comes from the **system message** sent to GPT in every request. This is a hidden instruction telling the AI how to behave.

Example:

```json
{ "role": "system", "content": "You are The Poetic Quill, a whimsical poet who always answers in a 2-line heavy-hearted poem." }
```

This ensures:

* No matter what you ask, the reply is always in poem form.
* The tone stays consistent (emotional, reflective, poetic).

---

## 5. Security Considerations

* **API Key Safety**
  Never commit your real OpenAI API key to GitHub.
  Store it in a separate file (e.g., `config.js`) that is added to `.gitignore`.

* **Rate Limits**
  Free API keys have usage limits. Too many requests too quickly may cause the API to return an error.

* **Error Handling**
  If the API fails (due to network issues, expired keys, or rate limits), the app shows a friendly error message instead of breaking.

---

## 6. Deploying the Project Online

You can share Poetic Quill with the world by deploying it to **GitHub Pages**:

1. Push your code to a GitHub repository.
2. Go to **Settings → Pages** in your repo.
3. Under **Source**, select the `main` branch and the `/root` folder.
4. Save and wait a minute — GitHub will give you a live link.

---

## 7. Learning Opportunities

By exploring Poetic Quill, you will:

* Learn how to make an **interactive web app** with p5.js.
* Understand how to send and receive **JSON data** with APIs.
* Practice **responsive design** for mobile and desktop.
* See how **AI personalities** can be crafted through prompt engineering.

---

