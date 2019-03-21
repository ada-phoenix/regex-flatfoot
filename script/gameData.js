const gameData = [
  {
    haystack:
      'kajdymrpULoDYtlspnsbbwgghhqqqrnekoqwpeoriUTlkahsDKHtrenmlskoshdtGDLDYmtrkodytrenKoqkkshdjjkkdenkokodytrenKoqkkshdjjkkdDYMTrnkenkoDYtlspqrnekoqwpeoriUriUTlkahsDKHtrendmytrenkomlskoshdtGDLDYmtrkovbnnsbbwgghhqqWDOLqqbbwgghhULoDYtlspnsbbwgnekoqwpeoriUriUTlkahsDKHtrenmleoriUTlkahsDKHtrenmlskoshdt',
    needle: ['dmytrenko'],
    lesson:
      "Welcome, Rookie. Bletchley Academy of Decryption tells us that you're their best new grad, and we need your help. We've intercepted an encoded message from the Grepino crime family. They are famous for their complex codes, but we think you can decode their messages using regular expressions.\n\nHave you heard of regular expressions - aka regEx?\n\nClever programmers use Regular Expressions to match character combinations in text.\n\nThe simplest regular expression is just the character or word you want to match. For example, /Crimes/ would match the word \"Crimes\" in the sentence, \"Crimes are afoot.\"\n\nNow let's get crackin'!\n\nDon't forget to wrap your regular expressions in forward slashes /like this/!",
    question:
      'We might have a lead on a shady character we\'ve been watching downtown. His name is Dmytrenko. Can you use a regular expression to find out if his name is mentioned in this note we intercepted?\n\nWrite a regular expression to match the word "dmytrenko".',
    level: 1,
    levelstage: 1,
    clusterId: 1,
    hint:
      'Are you using the back slashes? No need to worry about capitalization for now.',
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie. The boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      "What happened there, Rookie? I thought you were the best. Let's head back to HQ and see if the boys have anything new for us."
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
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie. The boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
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
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie. The boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
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
    incorrect: 'better luck next time. Heres some plot'
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
    incorrect: 'better luck next time. Heres some plot'
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
    incorrect: 'better luck next time. Heres some plot'
  }
]

module.exports = gameData
