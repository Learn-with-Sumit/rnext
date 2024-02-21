import { loremIpsum } from "lorem-ipsum";
import "./App.css";
import ListItem from "./components/ListItem";

export default function App() {
    const rowCount = 5000;

    const list = Array(rowCount)
        .fill()
        .map((val, id) => {
            return {
                id,
                name: "Sumit Saha",
                image: "https://via.placeholder.com/40",
                text: loremIpsum({
                    count: 1,
                    units: "sentences",
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8,
                }),
            };
        });

    return (
        <div className="App">
            <div className="list">
                {list.map((item) => (
                    <ListItem
                        key={item.id}
                        name={item.name}
                        text={item.text}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}
