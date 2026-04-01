// Game Data Configuration

const faceWords = {
    // Face parts
    'nose': '👃',
    'mouth': '👄',
    'tooth': '🦷',
    'tongue': '👅',
    'hair': '💇',
    'eyes': '👀',
    'ears': '👂',
    'face': '😊',
    // Body parts
    'head': '🧠',
    'neck': '🧣',
    'shoulders': '🤷',
    'arms': '🦾',
    'hands': '✋',
    'fingers': '👆',
    'legs': '🦵',
    'feet': '👣',
    'knee': '🦿',
    'elbow': '💪'
};

const quizQuestions = [
    {
        question: "I've got short blond hair",
        options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'],
        correct: 0,
        emoji: '👧',
        hint: 'She is from a frozen kingdom'
    },
    {
        question: "I've got big blue eyes",
        options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'],
        correct: 2,
        emoji: '🧔',
        hint: 'A strong demigod from Polynesia'
    },
    {
        question: "I've got small black eyes",
        options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'],
        correct: 1,
        emoji: '👧🏾',
        hint: 'A brave ocean explorer'
    },
    {
        question: "What do you use to kick a football?",
        options: ['Hands', 'Head', 'Foot', 'Elbow'],
        correct: 2,
        emoji: '⚽',
        hint: 'You wear a shoe on it'
    },
    {
        question: "Which body part has nails that you can paint?",
        options: ['Toes', 'Knees', 'Elbows', 'Ears'],
        correct: 0,
        emoji: '💅',
        hint: 'They are at the end of your feet'
    },
    {
        question: "What do you clap when you're happy?",
        options: ['Feet', 'Hands', 'Legs', 'Arms'],
        correct: 1,
        emoji: '👏',
        hint: 'You have five fingers on each one'
    },
    {
        question: "Where do you wear a hat?",
        options: ['On your feet', 'On your hands', 'On your head', 'On your legs'],
        correct: 2,
        emoji: '🎩',
        hint: 'It covers your hair'
    },
    {
        question: "What do you use to hug someone?",
        options: ['Legs', 'Arms', 'Feet', 'Head'],
        correct: 1,
        emoji: '🤗',
        hint: 'They go around the person'
    },
    {
        question: "She has curly red hair and is from Scotland",
        options: ['Elsa', 'Merida', 'Rapunzel', 'Cinderella'],
        correct: 1,
        emoji: '🏹',
        hint: 'A brave Scottish princess archer'
    },
    {
        question: "What connects your foot to your leg?",
        options: ['Wrist', 'Ankle', 'Elbow', 'Knee'],
        correct: 1,
        emoji: '🦶',
        hint: 'You can twist it when playing sports'
    },
    {
        question: "What do you brush in the morning and at night?",
        options: ['Hair', 'Teeth', 'Nails', 'Ears'],
        correct: 1,
        emoji: '🪥',
        hint: 'Use toothpaste for them'
    },
    {
        question: "I've got very long blonde hair",
        options: ['Ariel', 'Rapunzel', 'Belle', 'Tiana'],
        correct: 1,
        emoji: '👸',
        hint: 'Her hair is magical and very, very long'
    },
    {
        question: "What part of your face gets red when you're embarrassed?",
        options: ['Ears', 'Nose', 'Cheeks', 'Chin'],
        correct: 2,
        emoji: '😊',
        hint: 'They are on both sides of your nose'
    },
    {
        question: "Which superhero has got a mask that covers his eyes?",
        options: ['Superman', 'Batman', 'Wonder Woman', 'Hulk'],
        correct: 1,
        emoji: '🦇',
        hint: 'He is a hero from Gotham City'
    },
    {
        question: "What do you wiggle when you're happy?",
        options: ['Toes', 'Elbows', 'Knees', 'Shoulders'],
        correct: 0,
        emoji: '🎶',
        hint: 'They are at the end of your feet'
    }
];

const unscrambleWords = [
    // Face parts
    { scrambled: 'eey', answer: 'eye', emoji: '👁️', hint: 'You have two of them to see' },
    { scrambled: 'rae', answer: 'ear', emoji: '👂', hint: 'You use it to hear sounds' },
    { scrambled: 'ilp', answer: 'lip', emoji: '💋', hint: 'Your mouth has two of them' },
    { scrambled: 'kehce', answer: 'cheek', emoji: '😊', hint: 'It gets red when you blush' },
    { scrambled: 'hotot', answer: 'tooth', emoji: '🦷', hint: 'You brush them every day' },
    { scrambled: 'toneug', answer: 'tongue', emoji: '👅', hint: 'It is inside your mouth and helps you taste' },
    // Body parts
    { scrambled: 'dahe', answer: 'head', emoji: '🧠', hint: 'Your brain is inside it' },
    { scrambled: 'ckba', answer: 'back', emoji: '🔙', hint: 'It is behind you, opposite to your chest' },
    { scrambled: 'mar', answer: 'arm', emoji: '🦾', hint: 'From shoulder to hand' },
    { scrambled: 'nadh', answer: 'hand', emoji: '✋', hint: 'You use it to write and grab' },
    { scrambled: 'tbuhm', answer: 'thumb', emoji: '👍', hint: 'The short thick finger on your hand' },
    { scrambled: 'tsriw', answer: 'wrist', emoji: '⌚', hint: 'You wear a watch on it' },
    { scrambled: 'gel', answer: 'leg', emoji: '🦵', hint: 'You use two of them to walk' },
    { scrambled: 'otof', answer: 'foot', emoji: '🦶', hint: 'You wear a shoe on it' },
    { scrambled: 'toe', answer: 'toe', emoji: '🩴', hint: 'You have five on each foot' },
    { scrambled: 'kleann', answer: 'ankle', emoji: '👟', hint: 'Connects your foot to your leg' },
    { scrambled: 'wolbe', answer: 'elbow', emoji: '💪', hint: 'Bend your arm here' },
    { scrambled: 'eenk', answer: 'knee', emoji: '🦿', hint: 'Bend your leg here' }
];

const completeSentences = [
    {
        sentence: "I use my ___ to eat and talk.",
        blank: "mouth",
        options: ["mouth", "nose", "ears", "eyes"],
        emoji: "👄",
        hint: "You open it to speak"
    },
    {
        sentence: "My ___ helps me taste delicious food.",
        blank: "tongue",
        options: ["tongue", "nose", "teeth", "lips"],
        emoji: "👅",
        hint: "It's inside your mouth and moves when you talk"
    },
    {
        sentence: "I have ten ___ and ten toes on my body.",
        blank: "fingers",
        options: ["fingers", "teeth", "eyes", "ears"],
        emoji: "✋",
        hint: "You have five on each hand"
    },
    {
        sentence: "She has beautiful long curly ___ down to her shoulders.",
        blank: "hair",
        options: ["hair", "arms", "legs", "eyes"],
        emoji: "💇",
        hint: "It grows on top of your head"
    },
    {
        sentence: "I bend my ___ when I want to pick something up from the floor.",
        blank: "knees",
        options: ["knees", "elbows", "fingers", "toes"],
        emoji: "🦿",
        hint: "They help you bend your legs"
    },
    {
        sentence: "You have two ___ to see the beautiful world around you.",
        blank: "eyes",
        options: ["eyes", "ears", "hands", "feet"],
        emoji: "👀",
        hint: "They help you see colors and shapes"
    },
    {
        sentence: "My baby brother has ten tiny ___ on his little feet.",
        blank: "toes",
        options: ["toes", "fingers", "teeth", "nails"],
        emoji: "👶",
        hint: "They are at the end of your feet"
    },
    {
        sentence: "I carry my backpack on my ___.",
        blank: "shoulders",
        options: ["shoulders", "head", "knees", "elbows"],
        emoji: "🎒",
        hint: "They are between your neck and arms"
    },
    {
        sentence: "I wave my ___ to say hello to my friends.",
        blank: "hand",
        options: ["hand", "foot", "head", "leg"],
        emoji: "👋",
        hint: "You use it to grab things and write"
    },
    {
        sentence: "The monster Nessie has got a green body and a big ___.",
        blank: "mouth",
        options: ["mouth", "eye", "ear", "nose"],
        emoji: "🦕",
        hint: "It's full of big teeth"
    },
    {
        sentence: "When I listen to music, I use my ___ to hear the sound.",
        blank: "ears",
        options: ["ears", "eyes", "nose", "mouth"],
        emoji: "🎵",
        hint: "They are on the sides of your head"
    },
    {
        sentence: "My ___ is the longest part of my body from my waist to my foot.",
        blank: "leg",
        options: ["leg", "arm", "neck", "finger"],
        emoji: "🦵",
        hint: "You use two of them to walk"
    },
    {
        sentence: "I scratch my ___ when I'm thinking hard about something.",
        blank: "head",
        options: ["head", "foot", "hand", "back"],
        emoji: "🤔",
        hint: "Your brain is inside it"
    },
    {
        sentence: "The superhero has got strong ___ to lift heavy things.",
        blank: "arms",
        options: ["arms", "legs", "eyes", "ears"],
        emoji: "💪",
        hint: "They go from your shoulders to your hands"
    },
    {
        sentence: "I point with my ___ to show where something is.",
        blank: "finger",
        options: ["finger", "toe", "elbow", "knee"],
        emoji: "👆",
        hint: "It's one of the five parts of your hand"
    }
];
