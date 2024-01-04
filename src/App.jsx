const people = [
    {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "mathematician",
    },
    {
        id: 1,
        name: "Mario José Molina-Pasquel Henríquez",
        profession: "chemist",
    },
    {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "physicist",
    },
    {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "chemist",
    },
    {
        id: 4,
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrophysicist",
    },
];

export default function App() {
    const chemists = people.filter((person) => person.profession === "chemist");

    const listItems = chemists.map((chemist) => (
        <li key={chemist.id}>{chemist.name}</li>
    ));

    return (
        <div>
            <div>{listItems}</div>
        </div>
    );
}
