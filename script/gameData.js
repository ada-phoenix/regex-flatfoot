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
    needle: ['you', 'you'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with each instance of the word 'you'.",
    level: 2,
    levelstage: 1,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  },
  {
    haystack: 'I am watching you. I can see you.',
    needle: ['I', 'I'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with each instance of the word 'I'.",
    level: 2,
    levelstage: 2,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  },
  {
    haystack: "Put you're thinking cap on. Put you're back into it.",
    needle: ['Put', 'Put'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with each instance of the word 'Put'.",
    level: 2,
    levelstage: 3,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot'
  },
  {
    haystack: 'THINKing thInkIng THiNkInG THUNK',
    needle: ['THINKing'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with the word 'thinking'.",
    level: 3,
    levelstage: 1,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: 'Ooph, look at all this water damage.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot',
    notallowed: ['[A-Z]', 'g']
  },
  {
    haystack: 'PONDer, ponDeR, ponDER, POND',
    needle: ['PONDer'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with the word 'ponder'.",
    level: 3,
    levelstage: 2,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: 'Ooph, look at all this water damage.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot',
    notallowed: ['[A-Z]', 'g']
  },
  {
    haystack: 'RumiNATE, rumINate, RUMinATE, rumINate',
    needle: ['RumiNATE'],
    lesson: 'This is how you do all of the things.',
    question:
      " Write a regular expression that matches with the word 'ponder'.",
    level: 3,
    levelstage: 3,
    clusterId: 1,
    hint: 'Think globally, not locally, but always shop local.',
    clue: 'Ooph, look at all this water damage.',
    correct: 'you got it right! Heres some plot!',
    incorrect: 'better luck next time. Heres some plot',
    notallowed: ['[A-Z]', 'g']
  }
]

module.exports = gameData
