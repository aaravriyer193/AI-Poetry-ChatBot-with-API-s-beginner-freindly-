// Responsive fullscreen Poetic Quill with adaptive button size
// Paste into a .js file or a p5 sketch (with p5.js loaded)

let userInput;
let submitButton;
let chatHistory = [];

let greetingResponses = [
  "Hello there! How can I inspire your day with poetry?",
  "Greetings! Ask me about any theme, and I'll craft a verse.",
  "Welcome! What poetic journey shall we begin today?",
  "Hi! Share a word or topic, and I'll respond in rhyme."
];

const OPENAI_API_KEY = "YOUR_OPENAI_API_KEY_HERE";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Noto, serif');
  textSize(15);
  textWrap(WORD);

  userInput = createInput();
  userInput.attribute('placeholder', 'Type a theme, word or question for the quill...');
  styleInput(userInput);

  submitButton = createButton('Ask The Poetic Quill');
  styleButton(submitButton);
  submitButton.mousePressed(handleUserInput);

  layoutUI();
}

function draw() {
  drawClassyBackground();

  fill('#5a5139');
  stroke('#d3c9a1');
  strokeWeight(0.8);
  textSize(max(18, width * 0.042));
  textStyle(BOLDITALIC);
  textAlign(CENTER, CENTER);
  textFont('Noto , serif');
  text(" 🪶 The Poetic Quill ", width / 2, height * 0.07);

  let marginX = max(12, width * 0.03);
  let availableW = width - marginX * 2;
  let y = height * 0.14;
  let maxChatHeight = height - (height * 0.22);

  for (let i = chatHistory.length - 1; i >= 0; i--) {
    let botText = chatHistory[i].bot || "";
    let botH = calcBubbleHeight(botText, availableW, 15);
    drawChatBubble(marginX, y, availableW, botH, '#f7f3ec', '#8a7d68', "The Poetic Quill:", botText, true);
    y += botH + max(10, height * 0.02);

    let userText = chatHistory[i].user || "";
    let userH = calcBubbleHeight(userText, availableW, 15);
    drawChatBubble(marginX, y, availableW, userH, '#796953', '#6b5e43', "The Noble Summoner of Verse:", userText, false);
    y += userH + max(10, height * 0.02);

    if (y > maxChatHeight) break;
  }

  noStroke();
  fill('#f7f3ec');
  rect(0, height - max(90, height * 0.14), width, max(90, height * 0.14));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  layoutUI();
}

function layoutUI() {
  let margin = max(12, width * 0.04);
  let inputHeight = constrain(floor(height * 0.06), 40, 70);
  let inputWidth = constrain(floor(width * 0.67), 220, width - 260);
  let buttonWidth = constrain(floor(width * 0.27), 120, 320);
  let buttonHeight = constrain(floor(height * 0.1), 20, 20);
  // adjusted for better scaling
  let bottomY = height - max(18, height * 0.06) - inputHeight;

  userInput.position(margin, bottomY);
  userInput.size(inputWidth, inputHeight);
  let inputFontSize = max(13, floor(width * 0.017));
  userInput.style('font-size', inputFontSize + 'px');

  submitButton.position(margin + inputWidth + max(7, width * 0.01), bottomY);
  submitButton.size(buttonWidth, inputHeight +4);
  let btnFontSize = max(13, floor(width * 0.016)); // adjust button font size
  submitButton.style('font-size', btnFontSize*1.2 + 'px');
}

function styleInput(input) {
  input.style('padding', '1px 5px');
  input.style('border-radius', '10px');
  input.style('border', '1.5px solid #7a6f5f');
  input.style('font-family', 'Georgia, serif');
  input.style('box-shadow', '2px 2px 6px rgba(0,0,0,0.1)');
  input.style('background-color', '#f7f3ec');
  input.style('color', '#3e3a32');
}

function styleButton(button) {
  button.style('background-color', '#796953');
  button.style('color', '#f0e9d2');
  button.style('border', 'none');
  button.style('border-radius', '12px');
  button.style('font-family', 'Georgia, serif');
  button.style('font-weight', '600');
  button.style('cursor', 'pointer');
  button.style('box-shadow', '3px 3px 8px rgba(0,0,0,0.12)');
  button.mouseOver(() => button.style('background-color', '#685d4e'));
  button.mouseOut(() => button.style('background-color', '#796953'));
}

function drawClassyBackground() {
  background('#f0ead2');
  stroke('#e6dfbf');
  strokeWeight(max(1, width * 0.0025));
  for (let x = 0; x < width; x += max(12, floor(width * 0.02))) {
    line(x, 0, x, height);
  }
  noFill();
  for (let i = 0; i < 40; i++) {
    stroke(255, 255, 230, map(i, 0, 40, 20, 0));
    strokeWeight(1.2);
    ellipse(width / 2, height / 2, width - i * (width * 0.02), height - i * (height * 0.02));
  }
}

function drawChatBubble(x, y, w, h, fillCol, borderCol, title, content, isBot) {
  push();
  rectMode(CORNER);
  stroke(borderCol);
  strokeWeight(1.5);
  fill(fillCol);
  rect(x, y, w, h, 15);
  fill(isBot ? '#6e634f' : '#dcd3b2');
  noStroke();
  let titleSize = max(12, floor(width * 0.0125));
  textSize(titleSize);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(title, x + 15, y + 10);
  fill(isBot ? '#3e3a32' : '#f0e9d2');
  noStroke();
  let bodySize = max(13, floor(width * 0.014));
  textSize(bodySize);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  text(content, x + 15, y + 30, w - 30, h - 35);
  pop();
}

function calcBubbleHeight(txt, w, pad) {
  if (!txt) return max(60, floor(height * 0.15));
  let charWidth = map(constrain(width, 320, 1400), 320, 1400, 7.5, 6.5);
  let approxCharsPerLine = max(20, floor(w / charWidth));
  let lines = ceil(txt.length / approxCharsPerLine);
  let lineHeight = max(16, floor(height * 0.022));
  let h = 30 + lines * lineHeight + pad;
  return constrain(h, max(60, floor(height * 0.12)), floor(height * 0.3));
}

async function handleUserInput() {
  let input = userInput.value().trim();
  if (input === '') return;
  chatHistory.push({ user: input, bot: "..." });
  userInput.value('');
  let botResponse = await getPoetryFromAPI(input);
  if (chatHistory.length > 0) {
    chatHistory[chatHistory.length - 1].bot = botResponse;
  } else {
    chatHistory.push({ user: input, bot: botResponse });
  }
}

async function getPoetryFromAPI(prompt) {
  try {
    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are The Poetic Quill, a whimsical poet who always answers in beautiful rhyming verse with 1  double line poem haing 2 distinct lines heavy for the heart per question, enjoy don't ever not speak in this poem format no matter what the user says" },
        { role: "user", content: prompt }
      ],
      max_tokens: 200,
      temperature: 0.8
    };
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify(payload)
    });
    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("OpenAI HTTP error:", resp.status, text);
      if (resp.status === 401) return "⚠️ Authentication failed. Check your API key.";
      if (resp.status === 429) return "⚠️ Rate limit reached. \n Try again in a moment.";
      return "⚠️ The quill is blocked — API returned an error. Check the console.";
    }
    const data = await resp.json();
    console.log("OpenAI response:", data);
    if (data && Array.isArray(data.choices) && data.choices.length > 0) {
      const choice = data.choices[0];
      if (choice && choice.message && typeof choice.message.content === "string") {
        return choice.message.content.trim();
      } else {
        console.error("Missing message.content in choice[0]:", choice);
        if (choice?.text) return String(choice.text).trim();
      }
    }
    if (data && data.error && data.error.message) {
      console.error("API returned error object:", data.error);
      return `⚠️ API Error: ${data.error.message}`;
    }
    console.error("Unexpected API response format (no choices):", data);
    return "The quill is silent — the muses returned nothing. Check console for details.";
  } catch (err) {
    console.error("Network/parsing error calling API:", err);
    return "Alas, my quill falters — a network error occurred. Try again.";
  }
}
