const gameData = [
  {
    haystack: 'Crimes are afoot!',
    needle: ['Crime'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'crime'.",
    level: 1,
    levelstage: 1,
    clusterId: 1,
    hint: 'Hit your head against the wall.',
    clue: 'A seagull winks at you. He knows something.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  },
  {
    haystack: 'Crimes are afoot!',
    needle: ['foot'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'foot'.",
    level: 1,
    levelstage: 2,
    clusterId: 1,
    hint: 'Phone a friend.',
    clue: 'A seagull winks at you. He knows something.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  },
  {
    haystack: "I'm watching you. I can see you.",
    needle: ['you'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with each instance of the word 'you'.",
    level: 2,
    levelstage: 1,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: 'Is that a deep-fried Oreo I smell? Yum.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  }
]

module.exports = gameData
