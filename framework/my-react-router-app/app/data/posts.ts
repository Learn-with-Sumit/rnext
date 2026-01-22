export const posts = [
  {
    id: 1,
    title: 'How to Debug?',
    description: 'Have a right mindset to debug youe apps. That is important.',
  },
  {
    id: 2,
    title: 'What is OOP?',
    description: 'OOP or Object Oriented Programming is a foundational concept.',
  },
]

export const getPostById = (id: number) => {
  return posts.find((post) => post.id === id)
}