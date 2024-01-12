const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "iron-man.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "avatar.png",
        "title": "Avatar",
        "description": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 4,
        "price": 200
    }
]

function getAllMovies() {
    return data;
}

export { getAllMovies };