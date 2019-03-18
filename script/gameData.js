const gameData = [
  {
    haystack: 'Crimes are afoot!',
    needle: ['crime'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'crime'.",
    level: 1,
    levelstage: 1,
    hint: 'Hit your head against the wall.',
    played: false
  },
  {
    haystack: 'Crimes are afoot!',
    needle: ['foot'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'foot'.",
    level: 1,
    levelstage: 2,
    hint: 'Phone a friend.',
    played: false
  },
  {
    haystack: "I'm watching you. I can see you.",
    needle: ['you'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with each instance of the word 'you'.",
    level: 2,
    levelstage: 1,
    hint: 'Think globally, not locally, but always shop local.',
    played: false
  }
]

module.exports = gameData
