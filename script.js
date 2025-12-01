// Tarot cards array with interpretations
console.log('Script loaded successfully');
const tarotCards = [
    { 
        name: "The Chariot", 
        image: "cards/the_chariot.png",
        description: "This card depicts the grueling mechanics of time and transformation. The figure is not driving a vehicle but becoming the journey itself, crawling on hands and knees through a harsh desert. The figure acting as the 'horse' represents the Future, pulling forward with animalistic drive. The figure 'riding'—wearing the heavy skull of a steer—represents the Past, which is slowly dying and being dragged along by the relentless pull of time. The cactus blooming amidst the dust symbolizes resilience and hope, marking this as a process of starting over from the very ground up. It is a portrait of the painful, necessary struggle required to shed who we were in order to travel toward who we will become.",
        interpretations: {
            past: "You have been in motion, moving forward with determination and willpower. This period represents a time when you successfully navigated through conflict or opposition.",
            present: "You are currently harnessing opposing forces and directing them toward your goal. Stay focused and maintain control despite any turbulence.",
            future: "Victory is on the horizon. You will successfully overcome obstacles and achieve your goals through discipline and self-control."
        }
    },
    { 
        name: "The Emperor", 
        image: "cards/the_emperor.png",
        description: "This card radiates raw, physical authority, seated in a posture of unapologetic dominance. Flanking the throne are two blurry, indistinct figures—ghosts of parents or ancestors that fade into the background. They represent a past that is no more; the Emperor has eclipsed his lineage to become the sole source of law and wisdom. He is the new patriarch, leaving the old order behind. The massive golden wings of the throne symbolize the encompassing protection he now confers upon his realm, while the lion mask reveals the savage, animalistic instinct of the 'King of Beasts.' He rules not just through logic, but through the primal force of nature itself.",
        interpretations: {
            past: "You have eclipsed your lineage. The blurry figures in the background indicate you have successfully moved past the expectations of parents or previous generations. You have already broken the old rules to establish your own identity.",
            present: "It is time to put on the 'lion mask.' You are called to embody raw, unapologetic authority. The situation requires you to stop asking for permission and instead rule through your own primal instinct. Stand your ground; you are the patriarch of your own life now.",
            future: "You will become a source of protection. The golden wings suggest that your current struggles for dominance will evolve into a stable, safe structure for others. You are building a kingdom that will last, secured by your own defined laws."
        }
    },
    { 
        name: "The Fool", 
        image: "cards/the_fool.png",
        description: "This card captures the terrifying exhilaration of the first step. The figure walks toward the cliff edge, bathed in the blinding, uncompromising light of a massive sun. He is completely exposed, yet his expression is calm as he steps into the void, trusting the air to hold him. The thorny rose vines he carries in his bindle are not baggage, but intuition—the protective forces and gut feelings he has gathered along the way. They represent the internal wisdom that will guide him when logic fails. This card signifies the queer courage to walk away from the solid ground of societal expectation and step into a fluid, undefined future, armed only with the instinct to survive.",
        interpretations: {
            past: "You took a leap of faith. This represents a time of innocence and spontaneity, where you embraced the unknown without fear.",
            present: "You are standing at the edge of a new beginning. Trust your instincts and embrace the adventure ahead, even if you can't see the full path.",
            future: "A fresh start awaits. You will embark on a new journey with optimism and wonder, free from the burdens of the past."
        }
    },
    { 
        name: "The Hanged Man", 
        image: "cards/the_hanged_man.png",
        description: "The figure hangs upside down, not in torture, but in the natural state of a creature of the night: the Bat. By wearing the bat visage, he reclaims the darkness. Bats navigate not by sight, but by echolocation—listening to the bounce-back of their own voice. The torches burn alongside him, illuminating the cave, suggesting that enlightenment often requires a complete reversal of perspective. To understand his reality, he must invert the world. This card signifies a time of suspension and surrender, waiting in the dark to develop a new way of sensing the truth that the daylight cannot show.",
        interpretations: {
            past: "You experienced a period of suspension or sacrifice. This was a time of seeing things from a completely different perspective, possibly through surrender.",
            present: "You are in a state of pause or limbo. This is not stagnation but rather a sacred waiting period. Let go of control and allow new insights to emerge.",
            future: "A breakthrough through surrender. What seems like a sacrifice now will reveal itself as a necessary transformation, leading to enlightenment."
        }
    },
    { 
        name: "The Hermit", 
        image: "cards/the_hermit.png",
        description: "A figure stands shrouded in a yellow cloak against a deep blue void. Most strikingly, the hood appears empty—the 'head,' the center of ego and chatter, has been removed or silenced. Instead of holding a lantern outward to light the path, the illumination comes from within: a glowing yellow flower blooming directly from the heart center. This Hermit does not seek answers in the external world or through logic. He retreats into silence to let the heart speak. It represents the necessary solitude of the queer experience—withdrawing from the noise of the world to find the light that has always existed inside the chest.",
        interpretations: {
            past: "You withdrew from the world to seek inner wisdom. This solitary period allowed you to discover your own truth and inner light.",
            present: "You are being called to turn inward. This is a time for introspection, meditation, and seeking answers within yourself rather than from external sources.",
            future: "Inner wisdom will illuminate your path. The solitude and self-reflection you engage in now will guide you to profound truth and clarity."
        }
    },
    { 
        name: "The Hierophant", 
        image: "cards/the_hierophant.png",
        description: "This card redefines spiritual authority as a collective act. The Hierophant possesses status and power not by divine right, but because it is freely given by those around him. He is a king only because the people have chosen to elevate him. The two kneeling figures are the true source of this abundance; the vibrant flowers crowning their heads represent the 'fruits of their mind'—ideas, beauty, and devotion—which they offer up to sustain him. It is a portrait of interdependence: the leader is merely the sum of his community's support, emphasizing that true guidance is a gift received from the people, not a rule imposed upon them.",
        interpretations: {
            past: "You did not get here alone. This position acknowledges the community or the relationships that lifted you up. Your foundation was built on the 'flowers' (ideas and support) offered by others, reminding you of your roots in the collective.",
            present: "You are being asked to mediate or listen. The power lies not in your ego, but in the 'kneeling men' around you. Open yourself to the gifts, compliments, and ideas of your community. True authority right now comes from accepting support and acknowledging the beauty in others.",
            future: "You are destined to become a guide. Because you understand that power is a gift freely given, you will attract a 'blind faith' based on mutual respect. You will create a space where others can grow their own 'flowers,' and you will be the vessel that holds that community together."
        }
    },
    { 
        name: "The High Priestess", 
        image: "cards/the_high_priestess.png",
        description: "While traditionally a feminine archetype, this figure reclaims the role as a guardian of male intuition. The background, shifting through a gradient of color, represents the spectrum of 'good' and 'bad'—the duality that usually constrains our thinking. However, the Priestess sits above this binary. The massive crescent moon is depicted physically dripping, signifying a profound change in materiality: the condensation of abstract thought into tangible reality. These drops feed the bed of papayas below, chosen specifically as symbols of the feminine womb and the potential for life. Wearing the traditional lunar headdress, he embodies the understanding that true wisdom is not about judging what is 'good' or 'bad,' but understanding how the ethereal transforms into the fruit of creation.",
        interpretations: {
            past: "You have already moved beyond binary thinking. The gradient background suggests a history of reconciling 'good' and 'bad' within yourself. You likely spent time in introspection or incubation, trusting a gut feeling even when it defied logic.",
            present: "The moon is dripping—this is the critical moment of materialization. Your abstract thoughts and intuition are condensing into physical reality right now. It is a call to trust the process of 'flow' rather than force; let the ideas drop and feed the soil.",
            future: "A time of fertile abundance (the papayas). The seeds you are planting now, fed by your intuition, will bear fruit. This indicates a future where your vulnerability and 'feminine' receptivity become your greatest source of strength and creation."
        }
    },
    { 
        name: "The Lovers", 
        image: "cards/the_lovers.png",
        description: "This image moves beyond human romance into biological destiny. The two figures are locked in an embrace so deep they have lost their human faces, transforming into the Pollinator (the Bee) and the Vessel (the Flower). This surreal symbiosis suggests that true intimacy requires the surrender of the ego. The bee takes nectar but gives life; the flower opens vulnerability to ensure survival. Set against a twilight sky, this is not just a kiss, but a necessary, primal exchange. It speaks to the 'sting' of passion and the sweetness of connection, reminding us that love is the natural force that sustains the ecosystem of the soul.",
        interpretations: {
            past: "You faced an important choice or union. This represents a time when relationships or partnerships played a crucial role in your development.",
            present: "You are at a crossroads. This is about alignment—choosing what resonates with your heart and values, whether in love, career, or personal beliefs.",
            future: "Harmony and union await. The choices you make now will lead to deep connection and alignment with your authentic self and others."
        }
    },
    { 
        name: "The Magician", 
        image: "cards/the_magician.png",
        description: "This card embodies the alchemist's full toolkit, harmonizing the four elements required for creation: Earth in the lush foliage, Fire in the raised torch, Air implied by the flame's breath, and Water manifested in a single, crystalline tear. The imagery reclaims the pursuit of knowledge; the apple represents wisdom acquired, while the serpent is not a villain, but a liberator—alluring us away from the safety of ignorance. Yet, this liberation is a double-edged sword. The tear acknowledges the anxiety that comes with expanded consciousness and the weight of seeing the world through different eyes. The Magician teaches us that this inner struggle is not a weakness, but the essential friction required to create.",
        interpretations: {
            past: "You recently experienced a moment of awakening—biting the apple. This represents a time where you left the 'safety of ignorance' behind. The tear suggests this awakening was painful or anxiety-inducing, but it was the necessary spark that started your current journey.",
            present: "You are currently in the alchemical fire. You have all the elements (fire, earth, air, water) at your disposal, but you are wrestling with the anxiety of how to use them. The card advises you to embrace the 'double-edged sword' of your awareness; the tension you feel is simply the energy of creation looking for a release.",
            future: "You will master your reality. The anxiety will transform into the 'serpent liberator,' allowing you to manifest something entirely new. You are moving toward a state where you no longer fear your own power, but wield it to break constraints."
        }
    },
    { 
        name: "The Strength", 
        image: "cards/the_strength.png",
        description: "This card redefines power not as simple dominance, but as a state of primal wildness. In a bamboo forest—symbolizing flexibility and resilience—two figures engage in a Sumo ritual. The visual emphasizes a 'Goliath vs. the Small' dynamic; the larger figure lifts the smaller one, yet the interaction remains ambiguous: is it a fight, a dance, or an embrace? The nudity emphasizes the raw reality of skin-on-skin contact. Here, strength is the capacity to hold the weight of another and to engage with opposing forces without breaking. It challenges toxic masculinity by showing that true power involves touch, balance, and the physical negotiation of bodies. Ultimately, it symbolizes the art of daring—the instinct to protect oneself and stand firm, no matter the challenge.",
        interpretations: {
            past: "You demonstrated courage and inner fortitude. This was a time when you tamed your inner beasts through compassion rather than force.",
            present: "You possess the strength you need. This is about gentle power—approaching challenges with patience, compassion, and quiet confidence.",
            future: "You will overcome through grace. The obstacles ahead will be conquered not through force, but through your ability to remain calm and centered."
        }
    }
];

// DOM elements
const inputSection = document.getElementById('input-section');
const readingSection = document.getElementById('reading-section');
const startReadingBtn = document.getElementById('start-reading');
const newReadingBtn = document.getElementById('new-reading');
const artistStatementBtn = document.getElementById('artist-statement');
const backFromStatementBtn = document.getElementById('back-from-statement');
const statementSection = document.getElementById('statement-section');
const nameInput = document.getElementById('name');
const questionInput = document.getElementById('question');
const greetingText = document.getElementById('greeting-text');

// Card elements
const cardPast = document.getElementById('card-past');
const cardPresent = document.getElementById('card-present');
const cardFuture = document.getElementById('card-future');
const namePast = document.getElementById('name-past');
const namePresent = document.getElementById('name-present');
const nameFuture = document.getElementById('name-future');

// Store selected cards for interpretation
let selectedCards = {
    past: null,
    present: null,
    future: null
};

// Function to get 3 unique random cards
function getThreeUniqueCards() {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

// Function to display a card with animation
function displayCard(cardElement, nameElement, cardData, delay, position) {
    setTimeout(() => {
        cardElement.innerHTML = `<img src="${cardData.image}" alt="${cardData.name}" class="card-image">`;
        nameElement.textContent = cardData.name;
        
        // Store the card and add click event
        selectedCards[position] = cardData;
        cardElement.style.cursor = 'pointer';
        cardElement.onclick = () => showInterpretation(cardData, position);
    }, delay);
}

// Start reading event
startReadingBtn.addEventListener('click', () => {
    console.log('Button clicked!');
    const name = nameInput.value.trim();
    const question = questionInput.value.trim();
    
    console.log('Name:', name, 'Question:', question);
    
    if (!name || !question) {
        alert('Please enter both your name and question.');
        return;
    }
    
    // Hide input section, show reading section
    inputSection.classList.add('hidden');
    readingSection.classList.remove('hidden');
    
    // Set greeting
    greetingText.textContent = `${name}, let's explore your question: "${question}"`;
    
    // Get three unique cards
    const [past, present, future] = getThreeUniqueCards();
    
    // Display cards with staggered animation
    displayCard(cardPast, namePast, past, 500, 'past');
    displayCard(cardPresent, namePresent, present, 1000, 'present');
    displayCard(cardFuture, nameFuture, future, 1500, 'future');
});

// New reading event
newReadingBtn.addEventListener('click', () => {
    // Reset form
    nameInput.value = '';
    questionInput.value = '';
    
    // Reset cards to back
    cardPast.innerHTML = '<div class="card-back"></div>';
    cardPresent.innerHTML = '<div class="card-back"></div>';
    cardFuture.innerHTML = '<div class="card-back"></div>';
    
    // Reset card names
    namePast.textContent = '';
    namePresent.textContent = '';
    nameFuture.textContent = '';
    
    // Reset selected cards
    selectedCards = { past: null, present: null, future: null };
    
    // Show input section, hide reading section
    readingSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
});

// Function to show interpretation modal
function showInterpretation(cardData, position) {
    const interpretation = cardData.interpretations[position];
    const positionTitle = position.charAt(0).toUpperCase() + position.slice(1);
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${cardData.name}</h2>
            <h3>${positionTitle}</h3>
            <p>${interpretation}</p>
            <button class="btn btn-modal">Close</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    const closeButton = modal.querySelector('.btn-modal');
    
    closeBtn.onclick = () => modal.remove();
    closeButton.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// Gallery functionality
let currentGalleryIndex = 0;

function displayGalleryCard(index) {
    const galleryImage = document.getElementById('gallery-image');
    const galleryCardName = document.getElementById('gallery-card-name');
    const galleryDescription = document.getElementById('gallery-description');
    
    const card = tarotCards[index];
    galleryImage.src = card.image;
    galleryImage.alt = card.name;
    galleryCardName.textContent = card.name;
    galleryDescription.textContent = card.description;
}

function navigateGallery(direction) {
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex < 0) {
        currentGalleryIndex = tarotCards.length - 1;
    } else if (currentGalleryIndex >= tarotCards.length) {
        currentGalleryIndex = 0;
    }
    
    displayGalleryCard(currentGalleryIndex);
}

// Artist statement event
artistStatementBtn.addEventListener('click', () => {
    readingSection.classList.add('hidden');
    statementSection.classList.remove('hidden');
    // Initialize gallery with first card
    currentGalleryIndex = 0;
    displayGalleryCard(currentGalleryIndex);
    
    // Attach gallery navigation listeners
    const galleryPrevBtn = document.getElementById('gallery-prev');
    const galleryNextBtn = document.getElementById('gallery-next');
    galleryPrevBtn.onclick = () => navigateGallery(-1);
    galleryNextBtn.onclick = () => navigateGallery(1);
});

// Back from statement event
backFromStatementBtn.addEventListener('click', () => {
    statementSection.classList.add('hidden');
    readingSection.classList.remove('hidden');
});
