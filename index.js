let componentHooks = [];
let currentHookIndex = 0;

// catch the DOM elements
let nextButton = document.getElementById("nextButton");
let header = document.getElementById("header");
let moreButton = document.getElementById("moreButton");
let description = document.getElementById("description");
let image = document.getElementById("image");

// our data
let sculptureList = [
    {
        name: "Floralis Genérica",
        artist: "Eduardo Catalano",
        description:
            "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
        url: "./images/ZF6s192m.jpg",
        alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
    },
    {
        name: "Eternal Presence",
        artist: "John Woodrow Wilson",
        description:
            'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        url: "./images/aTtVpES.jpg",
        alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
    },
];

// How useState works inside React (simplified).
function useState(initialState) {
    let pair = componentHooks[currentHookIndex];
    if (pair) {
        // This is not the first render,
        // so the state pair already exists.
        // Return it and prepare for next Hook call.
        currentHookIndex++;
        return pair;
    }

    // This is the first time we're rendering,
    // so create a state pair and store it.
    pair = [initialState, setState];

    function setState(nextState) {
        // When the user requests a state change,
        // put the new value into the pair.
        pair[0] = nextState;
        updateDOM();
    }

    // Store the pair for future renders
    // and prepare for the next Hook call.
    componentHooks[currentHookIndex] = pair;
    currentHookIndex++;
    return pair;
}

function Gallery() {
    // Each useState() call will get the next pair.
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    // This example doesn't use React, so
    // return an output object instead of JSX.
    return {
        onNextClick: handleNextClick,
        onMoreClick: handleMoreClick,
        header: `${sculpture.name} by ${sculpture.artist}`,
        more: `${showMore ? "Hide" : "Show"} details`,
        description: showMore ? sculpture.description : null,
        imageSrc: sculpture.url,
        imageAlt: sculpture.alt,
    };
}

function updateDOM() {
    // Reset the current Hook index
    // before rendering the component.
    currentHookIndex = 0;
    let output = Gallery();

    // Update the DOM to match the output.
    // This is the part React does for you.
    nextButton.onclick = output.onNextClick;
    header.textContent = output.header;
    moreButton.onclick = output.onMoreClick;
    moreButton.textContent = output.more;
    image.src = output.imageSrc;
    image.alt = output.imageAlt;
    if (output.description !== null) {
        description.textContent = output.description;
        description.style.display = "";
    } else {
        description.style.display = "none";
    }
}

// Make UI match the initial state.
updateDOM();
