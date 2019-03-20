const gameData = [
  {
    haystack: 'Crimes are afoot!',
    needle: ['Crime'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'Crime'.",
    level: 1,
    levelstage: 1,
    clusterId: 1,
    hint: 'Hit your head against the wall.',
    clue: 'A seagull winks at you. He knows something.',
    correct: 'you got it right! Heres some plot!',
    incorrect:
      'You scan the crowded train station. Is that the mob boss over there?! No, just a well dressed commuter. Keep looking.'
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
    incorrect:
      'You wander through the street fair almost tripping over a small child. That kid is a public nuisance and you should arrest him! But not now, you have bigger fish to fry. Keep searching.'
  },
  {
    haystack: 'Crimes are afoot!',
    needle: ['are'],
    lesson: 'This is how you do the thing.',
    question: " Write a regular expression that matches with the word 'are'.",
    level: 1,
    levelstage: 3,
    clusterId: 1,
    hint: 'Phone a friend.',
    clue: 'A seagull winks at you. He knows something.',
    correct: 'you got it right! Heres some plot!',
    incorrect:
      "You search the laundromat but all you find is socks. Do you have time to do a quick load of unmentionables? No! You must keep searching for the criminals! (plus you don't have any quarters)"
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
