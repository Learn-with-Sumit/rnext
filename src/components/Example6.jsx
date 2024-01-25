import { useState } from "react";
import { getRandomBoolean, getRandomInteger } from "../utils/getRandomId";

export default function Example6() {
    const [card, setCard] = useState(null);
    const [goldCardCount, setGoldCardCount] = useState(0);
    const [round, setRound] = useState(1);

    // ✅ Calculate what you can during rendering
    const isGameOver = round > 5;

    function handlePlaceCard(nextCard) {
        if (isGameOver) {
            throw Error("Game already ended.");
        }
        // ✅ Calculate all the next state in the event handler
        setCard(nextCard);
        if (nextCard.gold) {
            if (goldCardCount <= 3) {
                setGoldCardCount(goldCardCount + 1);
            } else {
                setGoldCardCount(0);
                setRound(round + 1);
                if (round === 5) {
                    console.log("Good game!");
                }
            }
        }
    }

    return (
        <div>
            <h1>Gold Game</h1>
            <div>
                <button
                    onClick={() =>
                        handlePlaceCard({
                            id: getRandomInteger(1, 100),
                            gold: getRandomBoolean(),
                        })
                    }
                >
                    Place Random Card
                </button>
            </div>
            <div className="result">
                <span className="gold">Gold Card: {goldCardCount}</span>
                <span className="round">Round: {round}</span>
            </div>
        </div>
    );
}
