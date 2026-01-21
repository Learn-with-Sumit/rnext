interface Posts {
    [key: string]: {
        title: string;
        description: string;
    };
}

const BlogPosts: Posts = {
    "how-to-debug": {
        title: "How to Debug?",
        description:
            "Have a right mindset to debug youe apps. That's important.",
    },

    "what-is-oop": {
        title: "What is OOP?",
        description:
            "OOP or Object Oriented Programming is a foundational concept.",
    },
};

export { BlogPosts };

