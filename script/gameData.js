const gameData = [
  {
    haystack:
      'kajdymrpULoDYtlspnsbbwgghhqqqrnekoqwpeoriUTlkahsDKHtrenmlskoshdtGDLDYmtrkodytrenKoqkkshdjjkkdenkokodytrenKoqkkshdjjkkdDYMTrnkenkoDYtlspqrnekoqwpeoriUriUTlkahsDKHtrendmytrenkomlskoshdtGDLDYmtrkovbnnsbbwgghhqqWDOLqqbbwgghhULoDYtlspnsbbwgnekoqwpeoriUriUTlkahsDKHtrenmleoriUTlkahsDKHtrenmlskoshdt',
    needle: ['dmytrenko'],
    lesson:
      "Welcome, Rookie. Bletchley Academy of Decryption tells us that you're their best new grad, and we need your help. We've intercepted an encoded message from the Grepino crime family. They are famous for their complex codes, but we think you can decode their messages using regular expressions.\n\nHave you heard of regular expressions - aka regEx?\n\nClever programmers use Regular Expressions to match character combinations in text.\n\nThe simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word \"doughnut\" in the sentence, \"I'd love a doughnut.\"\n\nNow let's get crackin'!\n\nDon't forget to wrap your regular expressions in forward slashes /like this/!",
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
    haystack:
      "lv u 2 babe lol be there soon you up? sry im gonnabe late OMW lol you got eats? sry busy gotta committ somecrimes 2night lol head'n ovr now lol he's like that guy in diners drive ins and dives yeah bro can we leave now sweet!",
    needle: ['crime'],
    lesson:
      'The simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word "doughnut" in the sentence, "I\'d love a doughnut."',
    question:
      'You\'re in luck. Dmytrenko is sloppy and he left his phone on the bus. Let\'s use a regular expression to see if he mentions the word "crime" in any of his text messages.\n\nWrite a regular expression to match the word "crime".',
    level: 1,
    levelstage: 2,
    clusterId: 1,
    hint:
      'Are you using the back slashes? No need to worry about capitalization for now.',
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie. The boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      'He slipped through our fingers again!? Get it together Rookie! Grab your self a cup of coffee and head back to the station.'
  },
  {
    haystack:
      "I wanna commit\nbut I chose the life of crime\nThe law is gonna catch up with me\nWhen i'm in the clink\nill do some hard time\nbut loving you is not a Crime\nmy heart is like a bus map\nconfusing and funny\nsometimes i wish I hadn't stollen that money$$$$\nin  my mind I'll always be free\nwait for me",
    needle: ['money'],
    lesson:
      'The simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word "doughnut" in the sentence, "I\'d love a doughnut."',
    question:
      "We found Dmytrenko's poetry journal at the reptile zoo. Turns out the guy has a rich inner life and loves lizards. Use a regular expression to see if he mentions the stolen money anywhere in this awful poem.",
    level: 1,
    levelstage: 3,
    clusterId: 1,
    hint:
      'Are you using the back slashes? No need to worry about capitalization for now.',
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie. The boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      "Damnit Rookie! You're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence."
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
