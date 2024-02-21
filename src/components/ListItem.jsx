export default function ListItem({ name, text, image, style }) {
    return (
        <div className="row" style={style}>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="content">
                <div>{name}</div>
                <div>{text}</div>
            </div>
        </div>
    );
}
