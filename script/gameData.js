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
    haystack:
      "Weight WEIGHT! Don't tell me! Someone else is COMPLAINING about my perfectly good Yoga mats?\n I mean C'MON, everybody knows YOU GET WHAT YOU PAY FOR! Sure they're made out of old subway sandwiches but I thought these YOGIs were all about REduce REuse REcycle?! \n\nDon't even get me STARTED on the gym rats. These rats are worse than snitches. Complain complain COMPLAIN just because the 50LB DUMBELL I sold only weighs 5LBs. THOSE dummies should thank me for making them feel like superstars! I'm so unappreciated.",
    needle: ['DUMBELL'],
    lesson:
      "Remember the g flag? What a tricky little minx. Well g has an associate, the i flag. i stands for ignore case. Wait! Stop! Where are you going? The i flag doesn't mean ignore your important casework. It means ignore case sensitivity in your searches (get your head on straight kid, yikes). \n\n\nWhile the regEx /knife/ would only match the exact word 'knife', adding the i flag like so, /knife/i, matches the word with any combination of upper and lowercase letters  such as 'KNIFE, Knife, knife or kNiFe.' Look at all those knives! I'd better get them down to the evidence locker and you'd better get back to work!",
    question:
      "Our next culprit is no smalltime crook. Dominique Gold runs the Grepino family's entire counterfeit exercise equipment operation. Lucky for us even pros occasionally make mistakes. She left her journal on the bench press at the YMCA. Write a regular expression that matches the word 'dumbell' and by the way, I spilled coffee on your keyboard this morning so the shift and caps lock keys are broken, I guess you can't use any capital letters. My Bad!",
    level: 3,
    levelstage: 1,
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie! We caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "What's this? The hotshot rookie can't work around an equitment failure? Back in my day we did everything with pen and paper so that excuse ain't gonna fly with me bub! Head back to the station and see if there are any new leads.",
    notallowed: ['[A-Z]', 'g']
  },
  {
    haystack:
      'Water, Milk Protein Isolate, Calcium Caseinate, Sodium Caseinate, Alkalized Cocoa Powder, Soluble Vegetable Fiber, Canola Oil, Sunflower Oil, Dipotassium Phosphate, Magnesium Phosphate, Cellulose Gum and Gel, Maltodextrin, Potassium Chloride, Sodium Hexametaphosphate, Carrageenan, Acesulfame Potassium, Potassium Citrate, Medium Chain Triglycerides, Ascorbic Acid, Sodium Phosphate, Sucralose, Vitamin A Palmitate, Vitamin D3',
    needle: ['Hexametaphosphate'],
    lesson:
      'If you need to match any case, use the i flag after your second forward slash. For example /knife/i would match "KNIFE, knife or KnIfE."',
    question:
      "Lucky for you Dom slipped up again. She left the ingredients to her counterfeit Muscle Milk at the vitamin store. Can you search the ingredient list for Hexametaphosphate? Too much of it could be bad news for her customers. Oh by the way you're computer is still broken so no capital letters. Somebody from IT should fix it next week... or next month? That department is always so busy.",
    level: 3,
    levelstage: 2,
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie! We caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "She got away again! I know you want a new computer but it's just not in the budget. This is taxpayer money we're dealing with rookie! You need to figure out how to do this without capitalization or we're never going to catch her.",
    notallowed: ['[A-Z]', 'g']
  },
  {
    haystack:
      "Mr Grepino, I'm so tired of working with these MEATHEADS! I'm sure by now I've proven myself a VALUABLE asset to your crime family. How about I take over the bodega shakedown division of your crime syndicate? Or EVEN the illegal dachshund racing division? I honestly can't take another fitness freak complaining that our jumpropes are too short.",
    needle: ['Meathead'],
    lesson:
      'If you need to match any case, use the i flag after your second forward slash. For example /knife/i would match "KNIFE, knife or KnIfE."',
    question:
      "Dom keeps slipping through our fingers but luckily for us she's left a trail of angry customers. Disgruntled citizen Justin Blaze came down to the precinct this morning to complain about her resistance bands: 'They offer absolutely no resistance! My delts and quads are languishing bro! You may as well call them status quo bands! Anyway she left this letter at my gym, maybe it'll help you guys catch her.' Search the note for the word 'Meathead.' Sorry, still no capital letters.",
    level: 3,
    levelstage: 3,
    clusterId: 1,
    hint:
      'There is no i in team but um, detective work is kind of a solo activity',
    clue:
      'No wonder this subway station was abandoned. Ooph, look at all this water damage.',
    correct:
      'Good work Rookie! We caught up with Gold on her way to the bodybuilding convention. Just think about all the unsatisfactory workouts that were prevented with your sleuthing. Everyone is going to get so swole! Anyway, Dominique gave us a hot tip on The Grepinos. She said to check out the abandoned subway station on the north side of town.',
    incorrect:
      "Damnit Rookie! You're on desk duty. Maybe these trails haven't gone completely cold. Go back to the beginning and review the evidence.",
    notallowed: ['[A-Z]', 'g']
  }
]

module.exports = gameData
