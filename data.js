// Game Data — organised by topic
const gameData = {

    // ─────────────────────────────────────────
    //  TOPIC 1 · Body & Face  (original content)
    // ─────────────────────────────────────────
    body: {
        name: '🧠 Body & Face',
        translations: {
            'nose':'nariz', 'mouth':'boca', 'tooth':'dente', 'tongue':'língua',
            'hair':'cabelo', 'eyes':'olhos', 'ears':'orelhas', 'face':'rosto',
            'head':'cabeça', 'neck':'pescoço', 'shoulders':'ombros', 'arms':'braços',
            'hands':'mãos', 'fingers':'dedos', 'legs':'pernas', 'feet':'pés',
            'knee':'joelho', 'elbow':'cotovelo',
            'eye':'olho', 'ear':'orelha', 'lip':'lábio', 'cheek':'bochecha',
            'back':'costas', 'arm':'braço', 'hand':'mão', 'thumb':'polegar',
            'wrist':'pulso', 'leg':'perna', 'foot':'pé', 'toe':'dedo do pé',
            'ankle':'tornozelo', 'teeth':'dentes', 'lips':'lábios',
            'toes':'dedos dos pés', 'knees':'joelhos', 'elbows':'cotovelos',
            'nails':'unhas', 'finger':'dedo',
            'hands':'mãos', 'head':'cabeça', 'feet':'pés', 'arms':'braços',
            'legs':'pernas', 'ears':'orelhas', 'eyes':'olhos'
        },
        matchWords: {
            'nose': '👃', 'mouth': '👄', 'tooth': '🦷', 'tongue': '👅',
            'hair': '💇', 'eyes': '👀', 'ears': '👂', 'face': '😊',
            'head': '🧠', 'neck': '🧣', 'shoulders': '🤷', 'arms': '🦾',
            'hands': '✋', 'fingers': '👆', 'legs': '🦵', 'feet': '👣',
            'knee': '🦿', 'elbow': '💪'
        },
        quizQuestions: [
            { question: "I've got short blond hair", options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'], correct: 0, emoji: '👧', hint: 'She is from a frozen kingdom' },
            { question: "I've got big blue eyes", options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'], correct: 2, emoji: '🧔', hint: 'A strong demigod from Polynesia' },
            { question: "I've got small black eyes", options: ['Anna', 'Moana', 'Maui', 'Mr. Incredible'], correct: 1, emoji: '👧🏾', hint: 'A brave ocean explorer' },
            { question: "What do you use to kick a football?", options: ['Hands', 'Head', 'Foot', 'Elbow'], correct: 2, emoji: '⚽', hint: 'You wear a shoe on it' },
            { question: "Which body part has nails that you can paint?", options: ['Toes', 'Knees', 'Elbows', 'Ears'], correct: 0, emoji: '💅', hint: 'They are at the end of your feet' },
            { question: "What do you clap when you're happy?", options: ['Feet', 'Hands', 'Legs', 'Arms'], correct: 1, emoji: '👏', hint: 'You have five fingers on each one' },
            { question: "Where do you wear a hat?", options: ['On your feet', 'On your hands', 'On your head', 'On your legs'], correct: 2, emoji: '🎩', hint: 'It covers your hair' },
            { question: "What do you use to hug someone?", options: ['Legs', 'Arms', 'Feet', 'Head'], correct: 1, emoji: '🤗', hint: 'They go around the person' },
            { question: "She has curly red hair and is from Scotland", options: ['Elsa', 'Merida', 'Rapunzel', 'Cinderella'], correct: 1, emoji: '🏹', hint: 'A brave Scottish princess archer' },
            { question: "What connects your foot to your leg?", options: ['Wrist', 'Ankle', 'Elbow', 'Knee'], correct: 1, emoji: '🦶', hint: 'You can twist it when playing sports' },
            { question: "What do you brush in the morning and at night?", options: ['Hair', 'Teeth', 'Nails', 'Ears'], correct: 1, emoji: '🪥', hint: 'Use toothpaste for them' },
            { question: "I've got very long blonde hair", options: ['Ariel', 'Rapunzel', 'Belle', 'Tiana'], correct: 1, emoji: '👸', hint: 'Her hair is magical and very, very long' },
            { question: "What part of your face gets red when you're embarrassed?", options: ['Ears', 'Nose', 'Cheeks', 'Chin'], correct: 2, emoji: '😊', hint: 'They are on both sides of your nose' },
            { question: "Which superhero has got a mask that covers his eyes?", options: ['Superman', 'Batman', 'Wonder Woman', 'Hulk'], correct: 1, emoji: '🦇', hint: 'He is a hero from Gotham City' },
            { question: "What do you wiggle when you're happy?", options: ['Toes', 'Elbows', 'Knees', 'Shoulders'], correct: 0, emoji: '🎶', hint: 'They are at the end of your feet' }
        ],
        unscrambleWords: [
            { scrambled: 'eey', answer: 'eye', emoji: '👁️', hint: 'You have two of them to see' },
            { scrambled: 'rae', answer: 'ear', emoji: '👂', hint: 'You use it to hear sounds' },
            { scrambled: 'ilp', answer: 'lip', emoji: '💋', hint: 'Your mouth has two of them' },
            { scrambled: 'kehce', answer: 'cheek', emoji: '😊', hint: 'It gets red when you blush' },
            { scrambled: 'hotot', answer: 'tooth', emoji: '🦷', hint: 'You brush them every day' },
            { scrambled: 'toneug', answer: 'tongue', emoji: '👅', hint: 'It is inside your mouth and helps you taste' },
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
        ],
        completeSentences: [
            { sentence: "I use my ___ to eat and talk.", blank: "mouth", options: ["mouth", "nose", "ears", "eyes"], emoji: "👄", hint: "You open it to speak" },
            { sentence: "My ___ helps me taste delicious food.", blank: "tongue", options: ["tongue", "nose", "teeth", "lips"], emoji: "👅", hint: "It's inside your mouth and moves when you talk" },
            { sentence: "I have ten ___ and ten toes on my body.", blank: "fingers", options: ["fingers", "teeth", "eyes", "ears"], emoji: "✋", hint: "You have five on each hand" },
            { sentence: "She has beautiful long curly ___ down to her shoulders.", blank: "hair", options: ["hair", "arms", "legs", "eyes"], emoji: "💇", hint: "It grows on top of your head" },
            { sentence: "I bend my ___ when I want to pick something up from the floor.", blank: "knees", options: ["knees", "elbows", "fingers", "toes"], emoji: "🦿", hint: "They help you bend your legs" },
            { sentence: "You have two ___ to see the beautiful world around you.", blank: "eyes", options: ["eyes", "ears", "hands", "feet"], emoji: "👀", hint: "They help you see colors and shapes" },
            { sentence: "My baby brother has ten tiny ___ on his little feet.", blank: "toes", options: ["toes", "fingers", "teeth", "nails"], emoji: "👶", hint: "They are at the end of your feet" },
            { sentence: "I carry my backpack on my ___.", blank: "shoulders", options: ["shoulders", "head", "knees", "elbows"], emoji: "🎒", hint: "They are between your neck and arms" },
            { sentence: "I wave my ___ to say hello to my friends.", blank: "hand", options: ["hand", "foot", "head", "leg"], emoji: "👋", hint: "You use it to grab things and write" },
            { sentence: "The monster Nessie has got a green body and a big ___.", blank: "mouth", options: ["mouth", "eye", "ear", "nose"], emoji: "🦕", hint: "It's full of big teeth" },
            { sentence: "When I listen to music, I use my ___ to hear the sound.", blank: "ears", options: ["ears", "eyes", "nose", "mouth"], emoji: "🎵", hint: "They are on the sides of your head" },
            { sentence: "My ___ is the longest part of my body from my waist to my foot.", blank: "leg", options: ["leg", "arm", "neck", "finger"], emoji: "🦵", hint: "You use two of them to walk" },
            { sentence: "I scratch my ___ when I'm thinking hard about something.", blank: "head", options: ["head", "foot", "hand", "back"], emoji: "🤔", hint: "Your brain is inside it" },
            { sentence: "The superhero has got strong ___ to lift heavy things.", blank: "arms", options: ["arms", "legs", "eyes", "ears"], emoji: "💪", hint: "They go from your shoulders to your hands" },
            { sentence: "I point with my ___ to show where something is.", blank: "finger", options: ["finger", "toe", "elbow", "knee"], emoji: "👆", hint: "It's one of the five parts of your hand" }
        ]
    },

    // ─────────────────────────────────────────
    //  TOPIC 2 · The Town  (Unit 5)
    // ─────────────────────────────────────────
    town: {
        name: '🏙️ The Town',
        translations: {
            'hospital':'hospital', 'police station':'esquadra de polícia',
            'church':'igreja', 'park':'parque',
            'shopping centre':'centro comercial', 'school':'escola',
            'cafe':'café', 'train station':'estação de comboio',
            'post office':'correios', 'town hall':'câmara municipal',
            'supermarket':'supermercado', 'fire station':'quartel dos bombeiros',
            'next':'ao lado', 'behind':'atrás', 'opposite':'em frente',
            'between':'entre', 'town':'cidade/vila',
            'next to':'ao lado de', 'bus stop':'paragem de autocarro'
        },
        matchWords: {
            'hospital': '🏥',
            'police station': '🚔',
            'church': '⛪',
            'park': '🌳',
            'shopping centre': '🛍️',
            'school': '🏫',
            'cafe': '☕',
            'train station': '🚉',
            'post office': '📮',
            'town hall': '🏛️',
            'supermarket': '🛒',
            'fire station': '🚒'
        },
        quizQuestions: [
            { question: "Where do you go when you are sick?", options: ['hospital', 'school', 'park', 'cafe'], correct: 0, emoji: '🏥', hint: 'Doctors and nurses work here' },
            { question: "Where do children go to study and learn?", options: ['hospital', 'school', 'fire station', 'church'], correct: 1, emoji: '🏫', hint: 'You have your English class here!' },
            { question: "Where can you buy food, fruit and vegetables?", options: ['post office', 'park', 'supermarket', 'cafe'], correct: 2, emoji: '🛒', hint: 'You push a trolley here' },
            { question: "Where do firefighters work?", options: ['police station', 'fire station', 'hospital', 'town hall'], correct: 1, emoji: '🚒', hint: 'They drive a big red truck' },
            { question: "Where do police officers work?", options: ['police station', 'fire station', 'shopping centre', 'church'], correct: 0, emoji: '🚔', hint: 'They keep the town safe' },
            { question: "Where can you get on a train to travel?", options: ['train station', 'post office', 'bus stop', 'cafe'], correct: 0, emoji: '🚉', hint: 'Trains arrive and depart from here' },
            { question: "Where can you send a letter or a parcel?", options: ['supermarket', 'post office', 'school', 'shopping centre'], correct: 1, emoji: '📮', hint: 'You buy stamps here' },
            { question: "Where can you pray? It has a bell tower.", options: ['school', 'church', 'hospital', 'park'], correct: 1, emoji: '⛪', hint: 'A religious building in the town centre' },
            { question: "Where can you buy toys, clothes and shoes?", options: ['post office', 'cafe', 'shopping centre', 'park'], correct: 2, emoji: '🛍️', hint: 'It has lots of different shops inside' },
            { question: "Where can you relax, play and enjoy nature?", options: ['garage', 'park', 'hospital', 'shopping centre'], correct: 1, emoji: '🌳', hint: 'There are trees and grass here' },
            { question: "Where does the mayor of the city work?", options: ['fire station', 'post office', 'town hall', 'church'], correct: 2, emoji: '🏛️', hint: 'An important building in the centre of town' },
            { question: "Where can you drink a hot chocolate or eat a snack?", options: ['cafe', 'supermarket', 'post office', 'hospital'], correct: 0, emoji: '☕', hint: 'You sit at a table and a waiter brings your food' },
            { question: "The police station is ___ the shopping centre.", options: ['next to', 'opposite', 'between', 'behind'], correct: 0, emoji: '🗺️', hint: 'They are side by side' },
            { question: "The school is ___ the train station.", options: ['next to', 'opposite', 'between', 'behind'], correct: 1, emoji: '🗺️', hint: 'They face each other from across the road' },
            { question: "The cafe is ___ the post office and the supermarket.", options: ['next to', 'opposite', 'between', 'behind'], correct: 2, emoji: '🗺️', hint: 'It is in the middle of two places' }
        ],
        unscrambleWords: [
            { scrambled: 'rpka', answer: 'park', emoji: '🌳', hint: 'A place to play and relax outside' },
            { scrambled: 'feac', answer: 'cafe', emoji: '☕', hint: 'You can drink hot chocolate here' },
            { scrambled: 'olhcso', answer: 'school', emoji: '🏫', hint: 'Children go here to learn' },
            { scrambled: 'rchuhc', answer: 'church', emoji: '⛪', hint: 'A place to pray with a bell tower' },
            { scrambled: 'lpahsiot', answer: 'hospital', emoji: '🏥', hint: 'You go here when you are sick' },
            { scrambled: 'tnex', answer: 'next', emoji: '↔️', hint: 'Next ___ means side by side' },
            { scrambled: 'dnheib', answer: 'behind', emoji: '🔙', hint: 'At the back of something' },
            { scrambled: 'ioopstpe', answer: 'opposite', emoji: '🔄', hint: 'Facing each other across the road' },
            { scrambled: 'eenwtbe', answer: 'between', emoji: '🔀', hint: 'In the middle of two things' },
            { scrambled: 'notw', answer: 'town', emoji: '🏙️', hint: 'A place with streets, shops and buildings' }
        ],
        completeSentences: [
            { sentence: "I go to the ___ when I am sick.", blank: "hospital", options: ["hospital", "school", "park", "cafe"], emoji: "🏥", hint: "Doctors and nurses work there" },
            { sentence: "My children study at the ___.", blank: "school", options: ["school", "hospital", "church", "cafe"], emoji: "🏫", hint: "You have English class there" },
            { sentence: "Mum buys milk and bread at the ___.", blank: "supermarket", options: ["supermarket", "post office", "park", "church"], emoji: "🛒", hint: "You can buy food there" },
            { sentence: "I send a letter at the ___.", blank: "post office", options: ["post office", "school", "cafe", "park"], emoji: "📮", hint: "You buy stamps there" },
            { sentence: "The firefighters work at the ___.", blank: "fire station", options: ["fire station", "police station", "hospital", "school"], emoji: "🚒", hint: "They have a big red truck" },
            { sentence: "I relax and play football in the ___.", blank: "park", options: ["park", "church", "hospital", "cafe"], emoji: "🌳", hint: "There is grass and trees there" },
            { sentence: "We travel to the city from the ___.", blank: "train station", options: ["train station", "fire station", "post office", "school"], emoji: "🚉", hint: "Trains arrive and leave from here" },
            { sentence: "I drink hot chocolate at the ___.", blank: "cafe", options: ["cafe", "supermarket", "hospital", "park"], emoji: "☕", hint: "A waiter brings your food to the table" },
            { sentence: "The police station is ___ to the shopping centre.", blank: "next", options: ["next", "behind", "opposite", "between"], emoji: "🗺️", hint: "Side by side" },
            { sentence: "The school is ___ the train station.", blank: "opposite", options: ["opposite", "next", "between", "behind"], emoji: "🗺️", hint: "They face each other across the road" }
        ]
    },

    // ─────────────────────────────────────────
    //  TOPIC 3 · The House  (Unit 5)
    // ─────────────────────────────────────────
    house: {
        name: '🏠 The House',
        translations: {
            'bedroom':'quarto', 'kitchen':'cozinha', 'dining room':'sala de jantar',
            'hall':'entrada', 'bathroom':'casa de banho', 'living room':'sala de estar',
            'garage':'garagem', 'garden':'jardim',
            'laptop':'computador portátil', 'mobile phone':'telemóvel',
            'guitar':'guitarra', 'glasses':'óculos', 'watch':'relógio',
            'bracelet':'pulseira', 'bike':'bicicleta', 'skateboard':'skate',
            'trading cards':'cromos', 'videogame':'videojogo',
            'in':'dentro de', 'on':'em cima de', 'under':'debaixo de',
            'behind':'atrás de', 'in front of':'à frente de'
        },
        matchWords: {
            'bedroom': '🛏️',
            'kitchen': '🍳',
            'dining room': '🍽️',
            'hall': '🚪',
            'bathroom': '🛁',
            'living room': '🛋️',
            'garage': '🚗',
            'garden': '🌸',
            'laptop': '💻',
            'mobile phone': '📱',
            'guitar': '🎸',
            'glasses': '👓',
            'watch': '⌚',
            'bracelet': '📿',
            'bike': '🚲',
            'skateboard': '🛹',
            'trading cards': '🃏',
            'videogame': '🎮'
        },
        quizQuestions: [
            { question: "Where do you sleep at night?", options: ["bedroom", "kitchen", "garage", "bathroom"], correct: 0, emoji: "🛏️", hint: "Your bed is here" },
            { question: "Where does mum cook the dinner?", options: ["kitchen", "living room", "bedroom", "hall"], correct: 0, emoji: "🍳", hint: "There is an oven and a fridge here" },
            { question: "Where does the family have breakfast, lunch and dinner?", options: ["bathroom", "living room", "dining room", "garden"], correct: 2, emoji: "🍽️", hint: "There is a big table with chairs" },
            { question: "Where do you park the car?", options: ["hall", "garage", "kitchen", "bedroom"], correct: 1, emoji: "🚗", hint: "It has a big door for the car" },
            { question: "Where do you have a shower or a bath?", options: ["bedroom", "kitchen", "bathroom", "hall"], correct: 2, emoji: "🛁", hint: "There is a sink and a toilet here" },
            { question: "Where does the family watch TV and relax?", options: ["hall", "garage", "living room", "bedroom"], correct: 2, emoji: "🛋️", hint: "There is a sofa and a TV here" },
            { question: "Where do flowers and plants grow outside the house?", options: ["garden", "kitchen", "hall", "garage"], correct: 0, emoji: "🌸", hint: "You can also play football here" },
            { question: "You enter the house through the front door. Where are you?", options: ["bedroom", "bathroom", "hall", "kitchen"], correct: 2, emoji: "🚪", hint: "It connects all the rooms" },
            { question: "The mobile phone is ___ the schoolbag.", options: ["in", "on", "under", "behind"], correct: 0, emoji: "📱", hint: "It is inside the bag" },
            { question: "The glasses are ___ the chair.", options: ["in", "on", "under", "in front of"], correct: 1, emoji: "👓", hint: "They are on top of the chair" },
            { question: "The videogame is ___ the chair.", options: ["on", "in", "behind", "under"], correct: 3, emoji: "🎮", hint: "It is below the chair" },
            { question: "The guitar is ___ the bike.", options: ["next to", "in front of", "behind", "on"], correct: 2, emoji: "🎸", hint: "The bike is at the front" },
            { question: "The watch is ___ the laptop.", options: ["behind", "on", "in front of", "under"], correct: 2, emoji: "⌚", hint: "It is at the front of the laptop" },
            { question: "The laptop is ___ the desk.", options: ["under", "behind", "on", "in"], correct: 2, emoji: "💻", hint: "It is sitting on top of the desk" },
            { question: "The trading cards are ___ the chair.", options: ["on", "in", "behind", "under"], correct: 3, emoji: "🃏", hint: "They are below the chair" }
        ],
        unscrambleWords: [
            { scrambled: 'dbroome', answer: 'bedroom', emoji: '🛏️', hint: 'You sleep here' },
            { scrambled: 'thinkce', answer: 'kitchen', emoji: '🍳', hint: 'You cook here' },
            { scrambled: 'mhbaroot', answer: 'bathroom', emoji: '🛁', hint: 'You have a shower here' },
            { scrambled: 'graage', answer: 'garage', emoji: '🚗', hint: 'The car lives here' },
            { scrambled: 'endgar', answer: 'garden', emoji: '🌸', hint: 'Flowers grow here outside' },
            { scrambled: 'llah', answer: 'hall', emoji: '🚪', hint: 'The entrance of the house' },
            { scrambled: 'atplpo', answer: 'laptop', emoji: '💻', hint: 'A portable computer' },
            { scrambled: 'thawc', answer: 'watch', emoji: '⌚', hint: 'You wear it on your wrist' },
            { scrambled: 'ratigu', answer: 'guitar', emoji: '🎸', hint: 'A musical instrument with strings' },
            { scrambled: 'ekib', answer: 'bike', emoji: '🚲', hint: 'You ride it with two wheels' },
            { scrambled: 'ssselga', answer: 'glasses', emoji: '👓', hint: 'You wear them to see better' },
            { scrambled: 'egaovmdie', answer: 'videogame', emoji: '🎮', hint: 'You play this on a screen' }
        ],
        completeSentences: [
            { sentence: "I sleep in my ___.", blank: "bedroom", options: ["bedroom", "kitchen", "garage", "bathroom"], emoji: "🛏️", hint: "Your bed is there" },
            { sentence: "My mum cooks in the ___.", blank: "kitchen", options: ["kitchen", "living room", "bedroom", "hall"], emoji: "🍳", hint: "There is an oven here" },
            { sentence: "I have a shower in the ___.", blank: "bathroom", options: ["bathroom", "garage", "kitchen", "hall"], emoji: "🛁", hint: "There is a sink and a tap here" },
            { sentence: "We park the car in the ___.", blank: "garage", options: ["garage", "hall", "garden", "bedroom"], emoji: "🚗", hint: "It has a big door for the car" },
            { sentence: "My family eats dinner together in the ___.", blank: "dining room", options: ["dining room", "bedroom", "bathroom", "garage"], emoji: "🍽️", hint: "There is a big table here" },
            { sentence: "I watch TV and relax in the ___.", blank: "living room", options: ["living room", "kitchen", "bathroom", "hall"], emoji: "🛋️", hint: "There is a sofa and a TV here" },
            { sentence: "I play football in the ___.", blank: "garden", options: ["garden", "bedroom", "hall", "garage"], emoji: "🌸", hint: "It is outside the house" },
            { sentence: "The mobile phone is ___ the schoolbag.", blank: "in", options: ["in", "on", "under", "behind"], emoji: "📱", hint: "It is inside the bag" },
            { sentence: "The glasses are ___ the desk.", blank: "on", options: ["on", "in", "under", "behind"], emoji: "👓", hint: "They are on top of the surface" },
            { sentence: "The trading cards are ___ the chair.", blank: "under", options: ["under", "on", "in", "behind"], emoji: "🃏", hint: "They are below the chair" }
        ]
    },

    // ─────────────────────────────────────────
    //  TOPIC 4 · Animals  (Unit 6)
    // ─────────────────────────────────────────
    animals: {
        name: '🐾 Animals',
        translations: {
            'duck':'pato', 'chicken':'galinha', 'cow':'vaca', 'pig':'porco',
            'horse':'cavalo', 'sheep':'ovelha', 'goat':'cabra', 'donkey':'burro',
            'turkey':'peru', 'giraffe':'girafa', 'elephant':'elefante', 'lion':'leão',
            'eagle':'águia', 'hippo':'hipopótamo', 'penguin':'pinguim', 'monkey':'macaco',
            'crocodile':'crocodilo', 'dolphin':'golfinho', 'koala':'coala',
            'bear':'urso', 'snake':'cobra', 'lizard':'lagarto', 'tiger':'tigre',
            'leopard':'leopardo'
        },
        matchWords: {
            'duck': '🦆',
            'chicken': '🐔',
            'cow': '🐄',
            'pig': '🐷',
            'horse': '🐴',
            'sheep': '🐑',
            'goat': '🐐',
            'donkey': '🫏',
            'turkey': '🦃',
            'giraffe': '🦒',
            'elephant': '🐘',
            'lion': '🦁',
            'eagle': '🦅',
            'penguin': '🐧',
            'monkey': '🐒',
            'crocodile': '🐊',
            'dolphin': '🐬',
            'koala': '🐨'
        },
        quizQuestions: [
            { question: "It is red, blue and orange. It has two wings and two legs.", options: ["duck", "chicken", "turkey", "goat"], correct: 2, emoji: "🦃", hint: "A big farm bird with colourful feathers" },
            { question: "It has four legs and long ears. It is grey and says hee-haw!", options: ["horse", "donkey", "sheep", "goat"], correct: 1, emoji: "🫏", hint: "A smaller grey cousin of the horse" },
            { question: "It is black and white. It has four legs and gives us milk.", options: ["pig", "cow", "sheep", "horse"], correct: 1, emoji: "🐄", hint: "It says moo" },
            { question: "It has four legs and a long nose. It is pink and says oink!", options: ["pig", "duck", "goat", "sheep"], correct: 0, emoji: "🐷", hint: "A pink farm animal with a curly tail" },
            { question: "It is white and fluffy. It has four legs. We get wool from it.", options: ["goat", "sheep", "chicken", "duck"], correct: 1, emoji: "🐑", hint: "It says baa" },
            { question: "It is very tall with a long neck and orange and yellow spots.", options: ["elephant", "giraffe", "crocodile", "hippo"], correct: 1, emoji: "🦒", hint: "The tallest animal in the world" },
            { question: "It is very big and grey. It has a long nose called a trunk.", options: ["hippo", "elephant", "crocodile", "bear"], correct: 1, emoji: "🐘", hint: "The biggest land animal" },
            { question: "It is the king of the jungle. It is big and has a brown mane.", options: ["tiger", "lion", "leopard", "bear"], correct: 1, emoji: "🦁", hint: "It has a very loud roar" },
            { question: "This animal can fly very high. It has big wings and sharp claws.", options: ["penguin", "eagle", "duck", "chicken"], correct: 1, emoji: "🦅", hint: "A big bird of prey" },
            { question: "This bird cannot fly. It lives in cold places and looks like it wears a tuxedo!", options: ["duck", "eagle", "penguin", "turkey"], correct: 2, emoji: "🐧", hint: "A black and white bird from Antarctica" },
            { question: "It lives in Australia and eats eucalyptus leaves.", options: ["koala", "monkey", "elephant", "bear"], correct: 0, emoji: "🐨", hint: "A fluffy grey animal that sleeps a lot" },
            { question: "It can swim very fast and is very intelligent. It lives in the ocean.", options: ["crocodile", "penguin", "dolphin", "hippo"], correct: 2, emoji: "🐬", hint: "A very clever ocean animal" },
            { question: "It has no legs and it slithers on the ground.", options: ["crocodile", "snake", "lizard", "monkey"], correct: 1, emoji: "🐍", hint: "Some of them are very long" },
            { question: "Which of these animals CAN swim?", options: ["eagle", "lion", "sheep", "dolphin"], correct: 3, emoji: "🌊", hint: "It lives in the sea!" },
            { question: "Which farm animal gives us eggs?", options: ["pig", "sheep", "cow", "chicken"], correct: 3, emoji: "🥚", hint: "It says cluck cluck" }
        ],
        unscrambleWords: [
            { scrambled: 'kduc', answer: 'duck', emoji: '🦆', hint: 'A farm bird that swims on the pond' },
            { scrambled: 'owc', answer: 'cow', emoji: '🐄', hint: 'It says moo and gives us milk' },
            { scrambled: 'gip', answer: 'pig', emoji: '🐷', hint: 'A pink farm animal that says oink' },
            { scrambled: 'orshe', answer: 'horse', emoji: '🐴', hint: 'You can ride this animal' },
            { scrambled: 'heeps', answer: 'sheep', emoji: '🐑', hint: 'A white fluffy animal that says baa' },
            { scrambled: 'taog', answer: 'goat', emoji: '🐐', hint: 'A farm animal that eats everything' },
            { scrambled: 'faefirg', answer: 'giraffe', emoji: '🦒', hint: 'The tallest animal with a very long neck' },
            { scrambled: 'phtanele', answer: 'elephant', emoji: '🐘', hint: 'A big grey animal with a trunk' },
            { scrambled: 'olin', answer: 'lion', emoji: '🦁', hint: 'The king of the jungle' },
            { scrambled: 'genpiun', answer: 'penguin', emoji: '🐧', hint: 'A black and white bird that cannot fly' },
            { scrambled: 'keynom', answer: 'monkey', emoji: '🐒', hint: 'It climbs trees and loves bananas' },
            { scrambled: 'nhilpod', answer: 'dolphin', emoji: '🐬', hint: 'A clever ocean animal that can jump' }
        ],
        completeSentences: [
            { sentence: "A ___ has got a very long neck and orange spots.", blank: "giraffe", options: ["giraffe", "elephant", "hippo", "crocodile"], emoji: "🦒", hint: "The tallest animal in the world" },
            { sentence: "A ___ is a big grey animal with a long nose called a trunk.", blank: "elephant", options: ["elephant", "hippo", "lion", "bear"], emoji: "🐘", hint: "The biggest land animal" },
            { sentence: "A ___ can swim very fast and is very intelligent.", blank: "dolphin", options: ["dolphin", "eagle", "lion", "monkey"], emoji: "🐬", hint: "It lives in the ocean" },
            { sentence: "A ___ is the king of the jungle. It has a big mane.", blank: "lion", options: ["lion", "tiger", "bear", "eagle"], emoji: "🦁", hint: "It has a very loud roar" },
            { sentence: "A ___ lays eggs and says cluck cluck on the farm.", blank: "chicken", options: ["chicken", "pig", "cow", "sheep"], emoji: "🐔", hint: "It gives us eggs" },
            { sentence: "A ___ gives us milk. It is black and white and says moo.", blank: "cow", options: ["cow", "pig", "horse", "goat"], emoji: "🐄", hint: "A farm animal that gives us milk" },
            { sentence: "An ___ can fly very high in the sky with its big wings.", blank: "eagle", options: ["eagle", "penguin", "duck", "monkey"], emoji: "🦅", hint: "A big bird of prey" },
            { sentence: "A ___ lives in Australia and eats eucalyptus leaves.", blank: "koala", options: ["koala", "lion", "penguin", "elephant"], emoji: "🐨", hint: "A fluffy grey animal that sleeps a lot" },
            { sentence: "A ___ is a pink farm animal that says oink.", blank: "pig", options: ["pig", "sheep", "goat", "duck"], emoji: "🐷", hint: "It has a curly tail" },
            { sentence: "A ___ has four legs and long ears. It is grey and says hee-haw.", blank: "donkey", options: ["donkey", "horse", "sheep", "goat"], emoji: "🫏", hint: "A smaller cousin of the horse" }
        ]
    }
};
