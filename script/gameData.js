const gameData = [
  {
    haystack:
      'kajdymrpULoDYtlspnsbbwgghhqqqrnekoqwpeoriUT\nlkahsDKHtrenmlskoshdtGDLDYmtrkodytrenKoqkkshdjjkkd\nenkokodytrenKoqkkshdjjkkdDYMTrnkenk\noDYtlspqrnekoqwpeoriUriUTlkahsDKHtrendmytrenkomlsko\nshdtGDLDYmtrkovbnnsbbwgghhqqWDOLqqbbwgg\nhhULoDYtlspnsbbwgnekoqwpeoriUriUTlkahsDKHt\nrenmleoriUTlkahsDKHtrenmlskoshdt',
    needle: ['dmytrenko'],
    lesson:
      'The simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word "doughnut" in the sentence, "I\'d love a doughnut."',
    question:
      'We might have a lead on a shady character we\'ve been watching downtown. His name is Dmytrenko. Can you use a regular expression to find out if his name is mentioned in this note we intercepted?\n\nWrite a regular expression to match the word "dmytrenko".',
    level: 1,
    levelstage: 1,
    note: '/a/ : matches the string a',
    clusterId: 1,
    hint:
      'Are you using the back slashes? No need to worry about capitalization for now.',
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie.\nThe boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      "What happened there, Rookie?\nI thought you were the best. Let's head back to HQ and see if the boys have anything new for us.",
    sound: '/seagull.wav'
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
      "Good work, Rookie.\nThe boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      'He slipped through our fingers again!?\nGet it together Rookie! Grab your self a cup of coffee and head back to the station.',
    sound: '/seagull.wav'
  },
  {
    haystack:
      "I wanna commit\nbut I chose the life of crime\nThe law is gonna catch up with me\nWhen i'm in the clink\nill do some hard time\nbut loving you is not a Crime\nmy heart is like a bus map\nconfusing and funny\nsometimes i wish I hadn't stollen that money$$$$\nin  my mind I'll always be free\nwait for me",
    needle: ['money'],
    lesson:
      'The simplest regular expression is just the character or word you want to match. For example, /doughnut/ would match the word "doughnut" in the sentence, "I\'d love a doughnut."',
    question:
      "We found Dmytrenko's poetry journal at the reptile zoo. Turns out the guy has a rich inner life and loves lizards.\nUse a regular expression to see if he mentions the stolen money anywhere in this awful poem.",
    level: 1,
    levelstage: 3,
    clusterId: 1,
    hint:
      'Are you using the back slashes? No need to worry about capitalization for now.',
    clue: 'At the parking lot, a seagull winked at me. He knows something.',
    correct:
      "Good work, Rookie.\nThe boys picked up Dmytrenko and he's singing like a canary! Go checkout the parking lot behind the hotdog stand on Ninth and Grand. He said it's one of their drop off points.",
    incorrect:
      "Damnit Rookie!\nYou're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence.",
    sound: '/seagull.wav'
  },
  {
    haystack:
      "Wedding is on Saturday the fourth. Advise guests: No outsiders or friends. We're still working through that stolen shipment of Idaho golds so be prepared to feast on french fries and fritatas. Note, this event is being secured by Guards-In-Charge, so be ready to be frisked before entry.",
    needle: ['fri', 'fri', 'fri', 'fri'],
    lesson:
      'Dmytrenko was just a low-level street tough. But he\'s agreed to play ball and has given us some primo intel on another one of the Grepino family\'s encryption tricks.\n\nSometimes they use the same pattern of characters multiple times in a message to convey important information.\n\nRegular expressions have optional flags that appear outside of the slashes and make them even more powerful! \n\nHere, we need to use the global flag, "g". This flag allows us to do a "global" search of the text and find every instance that matches, not just the first one!\n\nFor example, the regex /cat/g will find three matches of "cat" in the phrase, "My fat cat catches cat naps".\n\n',
    question:
      "Dmytrenko put us on to Bambino Grepino's personal assistant, Terry Lemons. He's as handy with a calendar as he is in a streetfight, but does all his scheduling in code. We think he's planning something BIG for the family at the Old Spaghetti Factory.\n\nCan you use a regular expression to find every instance of \"fri\" in this memo he sent out to the network?",
    level: 2,
    levelstage: 1,
    note: 'g : global flag matches every instance',
    clusterId: 1,
    hint:
      'Regular expressions just match patterns of characters. They can find matches that appear in other words. the g flag will find all the matches.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct:
      'Superb work, Rookie!\nThanks to your hard work we were able to set up heavy surveillance for the fourth Friday of the month and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "You're letting a guy named after a sour yellow fruit make fools of us, kid!\nNow head back to the station and see if any other leads have turned up. Something BIG is going down!",
    sound: '/growl.mp3'
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
      'Superb work, Rookie!\nThanks to your hard work we were able to set up heavy surveillance for the fourth of the month and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "We're supposed to be putting the squeeze on Lemons, Rookie, not the other way around!\nGet your butt back to the station and your head back in the game!",
    sound: '/growl.mp3'
  },
  {
    haystack: 'hospital gospel telegraphe ospreys cosplay goose heron',
    needle: ['osp', 'osp', 'osp', 'osp'],
    lesson:
      'The g flag allows us to do a "global" search of some text and find every instance of a regex that matches, not just the first one!\n\nFor example, the regex /cat/g will find three matches of "cat" in the phrase, "My fat cat catches cat naps".\n\n',
    question:
      'Okay, Rookie. We have just discovered that Lemons has cloned the DNA of the once-thought-extinct passenger pigeon. He\'s using these winged soldiers to gather the family for this meeting. Imagine, using pigeons for crime! Is nothing sacred?Lucky for us, we\'ve got an agent on the inside. Meet Feathers. She brought us this rolled up note. \n\nCan you use a regular expression to find all the instances of the word "osp"?',
    level: 2,
    levelstage: 3,
    clusterId: 1,
    hint:
      'Regular expressions just match patterns of characters. They can find matches that appear in other words. the g flag will find all the matches.',
    clue: "A burly man elbows you out of the way. He's carrying a heavy load.",
    correct:
      'Superb work, Rookie!\nThanks to your hard work we were able to set up heavy surveillance for Old Spaghetti Factory on Fourth and nabbed Lemons! Now, head down to the restaurant and see if any of the staff will talk.',
    incorrect:
      "Damnit Rookie!\nYou're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence.",
    sound: '/growl.mp3'
  },
  {
    haystack:
      "Weight WEIGHT! Don't tell me! Someone else is COMPLAINING about my perfectly good Yoga mats?\n I mean C'MON, everybody knows YOU GET WHAT YOU PAY FOR! Sure they're made out of old subway sandwiches but I thought these YOGIs were all about REduce REuse REcycle?! \n\nDon't even get me STARTED on the gym rats. These rats are worse than snitches. Complain complain COMPLAIN just because the 50LB DUMBBELL I sold only weighs 5LBs. THOSE dummies should thank me for making them feel like superstars! I'm so unappreciated.",
    needle: ['DUMBBELL'],
    lesson:
      "Remember the g flag? What a tricky little minx. Well g has an associate, the i flag. i stands for ignore case. Wait! Stop! Where are you going? The i flag doesn't mean ignore your important casework. It means ignore case sensitivity in your searches (get your head on straight kid, yikes). \n\n\nWhile the regEx /knife/ would only match the exact word 'knife', adding the i flag like so, /knife/i, matches the word with any combination of upper and lowercase letters  such as 'KNIFE, Knife, knife or kNiFe.' Look at all those knives! I'd better get them down to the evidence locker and you'd better get back to work!",
    question:
      "Our next culprit is no small-time crook. Dominique Gold runs the Grepino family's entire counterfeit exercise equipment operation. Lucky for us even pros occasionally make mistakes; she left her journal on the bench press at the YMCA. Oh by the way, I spilled coffee on your keyboard this morning so the shift and caps lock keys are broken, I guess you can't use any capital letters. My Bad!\n\nWrite a regular expression that matches the word 'dumbbell using no capital letters.",
    level: 3,
    levelstage: 1,
    note: 'i : case insensitive flag',
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie!\nWe caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "What's this? The hotshot rookie can't work around an equipment failure?\nBack in my day we did everything with pen and paper so that excuse ain't gonna fly with me bub! Head back to the station and see if there are any new leads.",
    notallowed: ['[A-Z]', 'g'],
    sound: '/drip.mp3'
  },
  {
    haystack:
      'Water, Milk Protein Isolate, Calcium Caseinate, Sodium Caseinate, Alkalized Cocoa Powder, Soluble Vegetable Fiber, Canola Oil, Sunflower Oil, Dipotassium Phosphate, Magnesium Phosphate, Cellulose Gum and Gel, Maltodextrin, Potassium Chloride, Sodium Hexametaphosphate, Carrageenan, Acesulfame Potassium, Potassium Citrate, Medium Chain Triglycerides, Ascorbic Acid, Sodium Phosphate, Sucralose, Vitamin A Palmitate, Vitamin D3',
    needle: ['Hexametaphosphate'],
    lesson:
      'If you need to match any case, use the i flag after your second forward slash. For example /knife/i would match "KNIFE, knife or KnIfE."',
    question:
      "Lucky for you Dom slipped up again. She left the ingredients to her counterfeit Muscle Milk at the vitamin store. Oh by the way you're computer is still broken so no capital letters. Somebody from IT should fix it next week... or next month? That department is always so busy.\n\nCan you search her ingredient list for Hexametaphosphate?",
    level: 3,
    levelstage: 2,
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie!\nWe caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "She got away again!\nI know you want a new computer but it's just not in the budget. This is taxpayer money we're dealing with rookie! You need to figure out how to do this without capitalization or we're never going to catch her.",
    notallowed: ['[A-Z]', 'g'],
    sound: '/drip.mp3'
  },
  {
    haystack:
      "Mr Grepino, I'm so tired of working with these MEATHEADS! I'm sure by now I've proven myself a VALUABLE asset to your crime family. How about I take over the bodega shakedown division of your crime syndicate? Or EVEN the illegal dachshund racing division? I honestly can't take another fitness freak complaining that our jump ropes are too short.",
    needle: ['Meathead'],
    lesson:
      'If you need to match any case, use the i flag after your second forward slash. For example /knife/i would match "KNIFE, knife or KnIfE."',
    question:
      "Dom keeps slipping through our fingers but luckily for us she's left a trail of angry customers. Disgruntled citizen Justin Blaze came down to the precinct this morning to complain about her resistance bands: 'They offer absolutely no resistance! My delts and quads are languishing bro! You may as well call them status quo bands! Anyway she left this letter at my gym, maybe it'll help you guys catch her.' \n\nSearch the note for the word 'Meathead' Sorry, still no capital letters.",
    level: 3,
    levelstage: 3,
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie!\nWe caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "Damnit Rookie!\nYou're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence.",
    notallowed: ['[A-Z]', 'g'],
    sound: '/drip.mp3'
  }
]

module.exports = gameData
