const gameData = [
  {
    haystack:
      'kajdymrpULoDYtlspnsbbwgghhqqqrnekoqwpeoriUTlkahsDKHtrenmlskoshdtGDLDYmtrkodytrenKoqkkshdjjkkdenkokodytrenKoqkkshdjjkkdDYMTrnkenkoDYtlspqrnekoqwpeoriUriUTlkahsDKHtrendmytrenkomlskoshdtGDLDYmtrkovbnnsbbwgghhqqWDOLqqbbwgghhULoDYtlspnsbbwgnekoqwpeoriUriUTlkahsDKHtrenmleoriUTlkahsDKHtrenmlskoshdt',
    needle: ['dmytrenko'],
    lesson:
      "Welcome, Rookie. \r\n Bletchley Academy of Decryption tells us that you're their best new grad, and we need your help. We've intercepted an encoded message from the Grepino crime family. They are famous for their complex codes, but we think you can decode their messages using regular expressions.\n\nHave you heard of regular expressions - aka regEx?\n\nClever programmers use Regular Expressions to match character combinations in text.\n\nThe simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word \"doughnut\" in the sentence, \"I'd love a doughnut.\"\n\nNow let's get crackin'!\n\nDon't forget to wrap your regular expressions in forward slashes /like this/!",
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
    haystack:
      "Wedding is on Saturday the fourth. Advise guests: No outsiders or friends. We're still working through that stolen shipment of Idaho golds so be prepared to feast on french fries and fritatas. Note, this event is being secured by Guards-In-Charge, so be ready to be frisked before entry.",
    needle: ['fri', 'fri', 'fri', 'fri'],
    lesson:
      'Dmytrenko was just a low-level street tough. But he\'s agreed to play ball and has given us some primo intel on another one of the Grepino family\'s encryption tricks.\n\nSometimes they use the same pattern of characters multiple times in a message to convey important information.\n\n Regular expressions have optional flags that appear outside of the slashes and make them even more powerful! Here, we need to use the global flag, "g". This flag allows us to do a "global" search of the text and find every instance that matches, not just the first one!\n\nFor example, the regex /cat/g will find three matches of "cat" in the phrase, "My fat cat catches cat naps".\n\n',
    question:
      "Dmytrenko put us on to Bambino Grepino's personal assistant, Terry Lemons. He's as handy with a calendar as he is in a streetfight, but does all his scheduling in code. We think he's planning something BIG for the family at the Old Spaghetti Factory. Can you use a regular expression to find every instance of \"fri\" in this memo he sent out to the network?",
    level: 2,
    levelstage: 1,
    clusterId: 1,
    hint:
      'Regular expressions just match patterns of characters. They can find matches that appear in other words. the g flag will find all the matches.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct:
      'Superb work, Rookie! Thanks to your hard work we were able to set up heavy surveillance for the fourth Friday of the month and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "You're letting a guy named after a sour yellow fruit make fools of us, kid! Now head back to the station and see if any other leads have turned up. Something BIG is going down!"
  },
  {
    haystack:
      'Dominique, this is Terry Lemons. I need your monthly payment by tomorrow or there is going to be some unpleasantness. Leaving work matters for a moment, do you know where I might find a salmon shaped pinata? I have looked everywhere and have called Party City several times and they are being unusually unhelpful. Please call me back. This is Terry Lemons.',
    needle: ['mon', 'mon', 'mon', 'mon'],
    lesson:
      'The g flag allows us to do a "global" search of some text and find every instance of a regex that matches, not just the first one!\n\nFor example, the regex /cat/g will find three matches of "cat" in the phrase, "My fat cat catches cat naps".\n\n',
    question:
      'You get another chance, Rookie. We finally got a wiretap approved for Lemons\' phone. This guy makes a surprising number of calls to Party City.\n\nAnyway, he left this voicemail for someone named Dominique, and we think its about the big meeting.\n\n Use a regular expression to find all the instances of "mon" in this transcript.',
    level: 2,
    levelstage: 2,
    clusterId: 1,
    hint:
      'Regular expressions just match patterns of characters. They can find matches that appear in other words. the g flag will find all the matches.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct:
      'Superb work, Rookie! Thanks to your hard work we were able to set up heavy surveillance for the fourth of the month and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "We're supposed to be putting the squeeze on Lemons, Rookie, not the other way around! Get your butt back to the station and your head back in the game!"
  },
  {
    haystack: 'hospital gospel telegraphe ospreys cosplay goose heron',
    needle: ['osp', 'osp', 'osp', 'osp'],
    lesson:
      'The g flag allows us to do a "global" search of some text and find every instance of a regex that matches, not just the first one!\n\nFor example, the regex /cat/g will find three matches of "cat" in the phrase, "My fat cat catches cat naps".\n\n',
    question:
      'Okay, Rookie. We have just discovered that Lemons has cloned the DNA of the once-thought-extinct passenger pigeon. He\'s using these winged soldiers to gather the family for this meeting. Imagine, using pigeons for crime! Is nothing sacred?\n\nLucky for us, we\'ve got an agent on the inside. Meet Feathers. She brought us this rolled up note. Can you use a regular expression to find all the instances of the word "osp"?',
    level: 2,
    levelstage: 3,
    clusterId: 1,
    hint:
      'Regular expressions just match patterns of characters. They can find matches that appear in other words. the g flag will find all the matches.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct:
      'Superb work, Rookie! Thanks to your hard work we were able to set up heavy surveillance for Old Spaghetti Factory on Fourth and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "Damnit Rookie! You're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence."
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
