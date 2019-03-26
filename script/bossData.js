const bossData = [
  {
    haystack:
      "This is a very tricky string isn't it? We're talking about String Theory or something here!",
    needle: ['string', 'String'],
    question:
      "find every instance of 'string' in the folowing message upper and lowercase.",
    time: 30000,
    story:
      'You found me you scoundrel!\nGood thing for me I have a failsafe. A bomb! Unless you can decode the instructions for disarming the bomb within 60 seconds it will explode and I will make my escape!',
    picture:
      // 'https://i.pinimg.com/236x/f8/75/7f/f8757f1aae1b4dc7a3eeced04eb51c94--men-portrait-bowties.jpg',
      'https://i.pinimg.com/originals/20/df/f0/20dff03269c1ed88e336f25cb45b4f92.jpg',
    correct:
      'Another monster behind bars! But this low level ruffian was just a pawn. Stay on the case, ace!',
    incorrect:
      "You died. You're a ghost now. But your spirit won't rest until you bring the Grepino Crime Family to justice. Go back to the beginning and try again.",
    clusterId: 1
  }
]

module.exports = bossData
