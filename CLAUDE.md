# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

**English Adventure** — a static browser-only quiz app for a 10-year-old Portuguese boy learning English (4th grade). No build step, no dependencies, no server. Everything runs from plain HTML/CSS/JS files.

Published at: **https://nankov-ai.github.io/English-Adventure/**

## Running locally

```bash
# Quickest — just open the file
start index.html          # Windows
open index.html           # macOS

# With live reload (recommended when editing CSS/JS)
npm run dev               # uses live-server on port 8000

# Static server without reload
npm start                 # uses http-server on port 8000
```

## Deploy

Push to `main` — GitHub Pages auto-deploys within ~2 minutes. No CI needed.

```bash
git add <files>
git commit -m "..."
git push origin main
```

## Architecture

Five plain JS files loaded in this order by `index.html`:

| File | Role |
|------|------|
| `data.js` | All vocabulary, questions and sentences — the single source of truth |
| `images.js` | HTML strings for in-quiz visual maps and scenes (town map, house objects, animal panels) |
| `app.js` | All game logic; reads `gameData[currentTopic]` via the `td()` helper |
| `styles.css` | All styling; no preprocessor |
| `index.html` | Static shell — topic selector + 4 game tabs + score board |

### Data model (`data.js`)

Everything lives in one object:

```js
const gameData = {
  body:    { name, translations, matchWords, quizQuestions, unscrambleWords, completeSentences },
  town:    { ... },
  house:   { ... },
  animals: { ... }
};
```

**Per topic:**
- `matchWords` — `{ 'english word': 'emoji' }` — used by the Match game
- `translations` — `{ 'english word': 'palavra portuguesa' }` — looked up by `pt(word)` in app.js
- `quizQuestions` — array of `{ question, pt, img?, options[], correct, emoji, hint }`
- `unscrambleWords` — array of `{ scrambled, answer, emoji, hint }`
- `completeSentences` — array of `{ sentence, pt, blank, options[], emoji, hint }`

**Key fields:**
- `pt` on quiz questions and complete sentences → Portuguese translation shown below the English
- `img` on quiz questions → key into `quizImages` in `images.js`; renders a visual map/scene above the options

### How topic switching works (`app.js`)

```js
let currentTopic = 'body';          // global
function td() { return gameData[currentTopic]; }   // shorthand used everywhere
function pt(word) { /* looks up translations */ }   // Portuguese helper
```

`selectTopic(topic, btn)` updates `currentTopic`, re-styles the topic buttons, and re-initialises whichever game tab is currently active.

Each game (`initMatchGame`, `initQuizGame`, `initUnscrambleGame`, `initCompleteGame`) reads exclusively from `td()` — no hardcoded topic references.

### Visual images (`images.js`)

```js
const quizImages = {
  townMap,        // 4×3 CSS grid — town map (📖 p.37)
  houseObjects,   // 2×2 grid — object positions in room (📖 p.40)
  animalSwim,     // 4-panel can/can't swim (📖 p.46–48)
  animalFly,      // 4-panel can/can't fly  (📖 p.48)
};
```

Add a new image here and reference it with `img: 'keyName'` on any quiz question.

## Adding new content

### New topic
1. Add an entry to `gameData` in `data.js` following the existing shape
2. Add a `<button class="topic-btn" onclick="selectTopic('key', this)">` in `index.html`

### New quiz question with a visual
1. Create the HTML string in `images.js` under a new key
2. Add `img: 'yourKey'` to the question object in `data.js`

### New vocabulary (match + translations)
Add to `matchWords` AND `translations` in the same topic — the match game uses `matchWords`, and the `pt()` helper uses `translations` to show Portuguese on all cards, options and word banks.

## Score persistence

`highScore` is saved to `localStorage` under key `ea_highScore`. Everything else resets on page load.

## Audience & tone

- 10-year-old, 4th grade Portuguese student
- UI is bilingual: English primary, Portuguese always shown below as a translation aid
- All instructions in `index.html` are bilingual (EN title + PT subtitle)
- Page references (📖 p.XX) appear on every quiz image so the student can cross-check with the textbook
