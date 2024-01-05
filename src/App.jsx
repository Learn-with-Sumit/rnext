export default function App() {
    return (
        <Toolbar
            onPlayMovie={() => alert("Playing!")}
            onUploadImage={() => alert("Uploading!")}
        />
    );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onSmash={onPlayMovie}>Play Movie</Button>
            <Button onSmash={onUploadImage}>Upload Image</Button>
        </div>
    );
}

function Button({ onSmash, children }) {
    return (
        <p>
            <button onClick={onSmash}>{children}</button>
        </p>
    );
}
