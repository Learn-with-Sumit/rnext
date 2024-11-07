// src/utils/seeder.js
const bcrypt = require('bcryptjs')
const fs = require('fs').promises
const path = require('path')
const { User, Quiz, Question, Attempt } = require('../models')
const { sequelize } = require('../models')

const sampleUsers = [
  {
    full_name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    full_name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Alice Johnson',
    email: 'alice@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Bob Wilson',
    email: 'bob@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Charlie Brown',
    email: 'charlie@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Diana Prince',
    email: 'diana@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Edward Smith',
    email: 'edward@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Frank Castle',
    email: 'frank@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    full_name: 'Grace Kelly',
    email: 'grace@example.com',
    password: 'password123',
    role: 'user',
  },
]

const sampleQuizzes = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Test your knowledge of JavaScript basics',
    status: 'published',
    questions: [
      {
        question: 'What is JavaScript?',
        options: [
          'A programming language',
          'A markup language',
          'A database',
          'A styling language',
        ],
        correctAnswer: 'A programming language',
        marks: 5,
      },
      {
        question: 'Which keyword is used to declare variables in JavaScript?',
        options: ['var', 'let', 'const', 'All of the above'],
        correctAnswer: 'All of the above',
        marks: 5,
      },
      {
        question: 'What is the result of 2 + "2" in JavaScript?',
        options: ['4', '22', 'NaN', 'Error'],
        correctAnswer: '22',
        marks: 5,
      },
    ],
  },
  {
    title: 'React Basics',
    description: 'Test your understanding of React fundamentals',
    status: 'published',
    questions: [
      {
        question: 'What is React?',
        options: [
          'A JavaScript library',
          'A programming language',
          'A database',
          'A server',
        ],
        correctAnswer: 'A JavaScript library',
        marks: 5,
      },
      {
        question: 'What is JSX?',
        options: [
          'JavaScript XML',
          'Java Syntax Extension',
          'JavaScript Extension',
          'Java XML',
        ],
        correctAnswer: 'JavaScript XML',
        marks: 5,
      },
      {
        question: 'Which hook is used for side effects in React?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 'useEffect',
        marks: 5,
      },
      {
        question: 'What is the virtual DOM?',
        options: [
          'A lightweight copy of the actual DOM',
          'A new web browser',
          'A JavaScript engine',
          'A database system',
        ],
        correctAnswer: 'A lightweight copy of the actual DOM',
        marks: 5,
      },
    ],
  },
  {
    title: 'Node.js Essentials',
    description: 'Basic concepts of Node.js',
    status: 'published',
    questions: [
      {
        question: 'What is Node.js?',
        options: [
          'A runtime environment',
          'A programming language',
          'A framework',
          'A database',
        ],
        correctAnswer: 'A runtime environment',
        marks: 5,
      },
      {
        question: 'What is npm?',
        options: [
          'Node Package Manager',
          'New Programming Method',
          'Node Programming Module',
          'New Package Method',
        ],
        correctAnswer: 'Node Package Manager',
        marks: 5,
      },
      {
        question: 'What is the event loop in Node.js?',
        options: [
          'Handles asynchronous callbacks',
          'A UI rendering engine',
          'A database query system',
          'A file system',
        ],
        correctAnswer: 'Handles asynchronous callbacks',
        marks: 5,
      },
      {
        question: 'Which of these is a core module in Node.js?',
        options: ['fs', 'express', 'mongoose', 'react'],
        correctAnswer: 'fs',
        marks: 5,
      },
    ],
  },
  {
    title: 'Python Programming',
    description: 'Basic Python programming concepts',
    status: 'published',
    questions: [
      {
        question: 'What is Python?',
        options: [
          'An interpreted programming language',
          'A compiled language',
          'A markup language',
          'A database',
        ],
        correctAnswer: 'An interpreted programming language',
        marks: 5,
      },
      {
        question: 'What is a list in Python?',
        options: [
          'A mutable sequence type',
          'A string type',
          'A number type',
          'An immutable type',
        ],
        correctAnswer: 'A mutable sequence type',
        marks: 5,
      },
      {
        question: 'What is the correct way to create a function in Python?',
        options: [
          'def myFunction():',
          'function myFunction():',
          'create myFunction():',
          'new myFunction():',
        ],
        correctAnswer: 'def myFunction():',
        marks: 5,
      },
    ],
  },
  {
    title: 'SQL Basics',
    description: 'Introduction to SQL queries',
    status: 'published',
    questions: [
      {
        question: 'What does SQL stand for?',
        options: [
          'Structured Query Language',
          'Simple Question Language',
          'Structured Question Logic',
          'Simple Query Logic',
        ],
        correctAnswer: 'Structured Query Language',
        marks: 5,
      },
      {
        question: 'Which SQL statement is used to select all columns?',
        options: ['SELECT *', 'SELECT ALL', 'SELECT [ ]', 'SELECT COLUMNS'],
        correctAnswer: 'SELECT *',
        marks: 5,
      },
      {
        question: 'Which SQL keyword is used to filter records?',
        options: ['WHERE', 'FILTER', 'HAVING', 'SEARCH'],
        correctAnswer: 'WHERE',
        marks: 5,
      },
      {
        question: 'What is a primary key?',
        options: [
          'A unique identifier for a record',
          'The first column in a table',
          'The last column in a table',
          'A foreign key reference',
        ],
        correctAnswer: 'A unique identifier for a record',
        marks: 5,
      },
    ],
  },
  {
    title: 'HTML & CSS',
    description: 'Web development basics',
    status: 'published',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hypertext Markup Language',
          'High Text Making Language',
          'Hypertext Making Language',
          'High Text Markup Language',
        ],
        correctAnswer: 'Hypertext Markup Language',
        marks: 5,
      },
      {
        question: 'What is CSS?',
        options: [
          'Cascading Style Sheets',
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
        marks: 5,
      },
      {
        question: 'Which tag is used to define a hyperlink?',
        options: ['<a>', '<link>', '<href>', '<url>'],
        correctAnswer: '<a>',
        marks: 5,
      },
    ],
  },
  {
    title: 'Git Basics',
    description: 'Introduction to version control',
    status: 'published',
    questions: [
      {
        question: 'What is Git?',
        options: [
          'A version control system',
          'A programming language',
          'A web server',
          'A database',
        ],
        correctAnswer: 'A version control system',
        marks: 5,
      },
      {
        question: 'What command creates a new Git repository?',
        options: ['git init', 'git start', 'git create', 'git new'],
        correctAnswer: 'git init',
        marks: 5,
      },
      {
        question: 'What command stages changes for commit?',
        options: ['git add', 'git commit', 'git push', 'git stage'],
        correctAnswer: 'git add',
        marks: 5,
      },
      {
        question: 'What command creates a new branch?',
        options: ['git branch', 'git checkout', 'git create', 'git new'],
        correctAnswer: 'git branch',
        marks: 5,
      },
    ],
  },
  {
    title: 'Docker Fundamentals',
    description: 'Introduction to containerization',
    status: 'published',
    questions: [
      {
        question: 'What is Docker?',
        options: [
          'A containerization platform',
          'A programming language',
          'A database system',
          'A web server',
        ],
        correctAnswer: 'A containerization platform',
        marks: 5,
      },
      {
        question: 'What is a Docker container?',
        options: [
          'A lightweight, standalone package',
          'A virtual machine',
          'A physical server',
          'A storage device',
        ],
        correctAnswer: 'A lightweight, standalone package',
        marks: 5,
      },
      {
        question: 'What file defines a Docker container?',
        options: [
          'Dockerfile',
          'Container.json',
          'Docker.yaml',
          'Config.docker',
        ],
        correctAnswer: 'Dockerfile',
        marks: 5,
      },
    ],
  },
  {
    title: 'MongoDB Basics',
    description: 'Introduction to NoSQL databases',
    status: 'published',
    questions: [
      {
        question: 'What type of database is MongoDB?',
        options: ['NoSQL', 'SQL', 'Graph Database', 'Relational Database'],
        correctAnswer: 'NoSQL',
        marks: 5,
      },
      {
        question: 'What is a document in MongoDB?',
        options: [
          'A record in a collection',
          'A table in database',
          'A query language',
          'A configuration file',
        ],
        correctAnswer: 'A record in a collection',
        marks: 5,
      },
      {
        question: 'What format does MongoDB use to store data?',
        options: ['BSON', 'JSON', 'XML', 'CSV'],
        correctAnswer: 'BSON',
        marks: 5,
      },
      {
        question: 'What is the equivalent of a table in MongoDB?',
        options: ['Collection', 'Table', 'Document', 'Schema'],
        correctAnswer: 'Collection',
        marks: 5,
      },
    ],
  },
  {
    title: 'TypeScript Essentials',
    description: 'Introduction to TypeScript',
    status: 'published',
    questions: [
      {
        question: 'What is TypeScript?',
        options: [
          'A superset of JavaScript',
          'A new programming language',
          'A JavaScript framework',
          'A testing framework',
        ],
        correctAnswer: 'A superset of JavaScript',
        marks: 5,
      },
      {
        question: 'What file extension is used for TypeScript files?',
        options: ['.ts', '.typescript', '.type', '.tsx'],
        correctAnswer: '.ts',
        marks: 5,
      },
      {
        question: 'What command compiles TypeScript to JavaScript?',
        options: ['tsc', 'compile', 'typescript', 'ts'],
        correctAnswer: 'tsc',
        marks: 5,
      },
      {
        question: 'What is an interface in TypeScript?',
        options: [
          'A contract that defines object structure',
          'A class implementation',
          'A module system',
          'A testing framework',
        ],
        correctAnswer: 'A contract that defines object structure',
        marks: 5,
      },
    ],
  },
]

const seedDatabase = async () => {
  try {
    console.log('\n=== Starting Database Seeding ===')

    // 1. Check and remove existing database file
    const dbPath = path.join(__dirname, '../../database.sqlite')
    try {
      await fs.access(dbPath)
      console.log('Found existing database file. Removing...')
      await fs.unlink(dbPath)
      console.log('Existing database removed successfully.')
    } catch (error) {
      console.log('No existing database found. Creating new...')
    }

    // 2. Sync database with force
    console.log('Creating new database structure...')
    await sequelize.sync({ force: true })
    console.log('Database structure created successfully.')

    // 3. Start seeding data
    console.log('\nStarting to seed data...')

    await sequelize.transaction(async (t) => {
      // Just in case, clear any existing data
      console.log('Ensuring clean state...')
      await Promise.all([
        Attempt.destroy({ truncate: { cascade: true }, transaction: t }),
        Question.destroy({ truncate: { cascade: true }, transaction: t }),
        Quiz.destroy({ truncate: { cascade: true }, transaction: t }),
        User.destroy({ truncate: { cascade: true }, transaction: t }),
      ])

      // Create users
      console.log('Creating users...')
      const users = await Promise.all(
        sampleUsers.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10)
          return User.create(
            {
              ...user,
              password: hashedPassword,
            },
            {
              transaction: t,
              hooks: false, // Disable hooks to prevent double hashing
            }
          )
        })
      )
      console.log(`Created ${users.length} users successfully.`)

      // Create quizzes with questions
      console.log('\nCreating quizzes and questions...')
      const quizzes = await Promise.all(
        sampleQuizzes.map(async (quizData) => {
          const { questions, ...quizInfo } = quizData
          const quiz = await Quiz.create(quizInfo, { transaction: t })

          const createdQuestions = await Promise.all(
            questions.map(async (questionData) => {
              return Question.create(
                { ...questionData, quizId: quiz.id },
                { transaction: t }
              )
            })
          )

          return { quiz, questions: createdQuestions }
        })
      )
      console.log(
        `Created ${quizzes.length} quizzes with their questions successfully.`
      )

      // Create attempts for regular users
      console.log('\nCreating quiz attempts...')
      const regularUsers = users.filter((user) => user.role === 'user')
      const publishedQuizzes = quizzes.filter(
        (q) => q.quiz.status === 'published'
      )
      let totalAttempts = 0

      for (const user of regularUsers) {
        // Each user attempts 3-5 random quizzes
        const numberOfQuizzes = Math.floor(Math.random() * 3) + 3
        const selectedQuizzes = publishedQuizzes
          .sort(() => Math.random() - 0.5)
          .slice(0, numberOfQuizzes)

        for (const quizData of selectedQuizzes) {
          const questions = quizData.questions
          const successRate = Math.random() // Random success rate for each attempt

          const submittedAnswers = {}
          let score = 0

          questions.forEach((question) => {
            const isCorrect = Math.random() < successRate
            if (isCorrect) {
              submittedAnswers[question.id] = question.correctAnswer
              score += question.marks
            } else {
              const wrongAnswers = question.options.filter(
                (opt) => opt !== question.correctAnswer
              )
              const randomWrongAnswer =
                wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]
              submittedAnswers[question.id] = randomWrongAnswer
            }
          })

          await Attempt.create(
            {
              userId: user.id,
              quizId: quizData.quiz.id,
              score,
              submittedAnswers,
              completed: true,
            },
            { transaction: t }
          )

          totalAttempts++
        }
      }
      console.log(`Created ${totalAttempts} quiz attempts successfully.`)
    })

    // 4. Print summary and test accounts
    console.log('\n=== Seeding Summary ===')
    console.log(`Total Users: ${sampleUsers.length}`)
    console.log(`Total Quizzes: ${sampleQuizzes.length}`)
    console.log(
      'Average Questions per Quiz:',
      sampleQuizzes.reduce((acc, quiz) => acc + quiz.questions.length, 0) /
        sampleQuizzes.length
    )

    console.log('\n=== Test Accounts ===')
    console.log('\nAdmin Account:')
    console.log('Email: admin@example.com')
    console.log('Password: admin123')

    console.log('\nSample User Accounts:')
    sampleUsers
      .filter((user) => user.role === 'user')
      .forEach((user) => {
        console.log(`\n${user.full_name}:`)
        console.log(`Email: ${user.email}`)
        console.log('Password: password123')
      })

    console.log('\n=== Seeding Completed Successfully ===')
  } catch (error) {
    console.error('\n=== Seeding Failed ===')
    console.error('Error:', error)
    throw error
  }
}

seedDatabase()
  .then(() => {
    console.log('\nProcess completed. You can now start your application.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Failed to seed database:', error)
    process.exit(1)
  })
