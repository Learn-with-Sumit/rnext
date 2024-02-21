import { loremIpsum } from "lorem-ipsum";
import { AutoSizer, List } from "react-virtualized";
import "./App.css";
import ListItem from "./components/ListItem";

export default function App() {
    const rowCount = 5000;
    // const listHeight = 700;
    const rowHeight = 50;
    // const rowWidth = 900;

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

    function renderRow({ index, key, style }) {
        return (
            <ListItem
                key={key}
                name={list[index].name}
                text={list[index].text}
                image={list[index].image}
                style={style}
            />
        );
    }

    return (
        <div className="App">
            <div className="list">
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={rowHeight}
                            rowCount={rowCount}
                            rowRenderer={renderRow}
                            overscanColumnCount={5}
                        />
                    )}
                </AutoSizer>
            </div>
        </div>
    );
}
