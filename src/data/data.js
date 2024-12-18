const data = [
  {
    _id: "1",
    name: "Melvor Idle",
    category: "RPG",
    description:
      "Inspired by RuneScape, Melvor Idle takes the core of what makes an adventure game so addictive and strips it down to its purest form! This is a feature-rich, idle/incremental game combining a distinctly familiar feel.",
    price: "11.99$",
    rating: "Very positive",
    image: "/images/melvor.jpg",
  },
  {
    _id: "2",

    name: "Hellblade : Senua's Sacrifice",
    category: "Horror",
    description:
      "From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior’s brutal journey into myth and madness.",
    price: "32.99$",
    rating: "Very positive",
    image: "/images/hellblade.jpg",
  },
  {
    _id: "3",

    name: "Ori and the Blind Forest",
    category: "Platformer",
    description:
      "Ori and the Blind Forest” tells the tale of a young orphan destined for heroics, through a visually stunning action-Platformer crafted by Moon Studios for PC.",
    price: "8.99$",
    rating: "Extremely positive",
    image: "/images/ori_2.jpg",
  },
  {
    _id: "4",

    name: "Dark Souls",
    category: "Souls-like",
    description:
      "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. Prepare to die.",
    price: "42.99$",
    rating: "Very positive",
    image: "/images/ds.jpg",
  },
  {
    _id: "5",

    name: "Dark Souls 2",
    category: "Souls-like",
    description:
      "Developed by FROM SOFTWARE, DARK SOULS™ II is the highly anticipated sequel to the gruelling 2011 breakout hit Dark Souls. The unique old-school action RPG experience captivated imaginations and broke controllers.",
    price: "33.49$",
    rating: "Very positive",
    image: "/images/ds2.jpg",
  },
  {
    _id: "6",

    name: "Dark Souls 3",
    category: "Souls-like",
    description:
      "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness! Praise the sun and all that's holy and bright.",
    price: "79.99$",
    rating: "Very positive",
    image: "/images/ds3.jpg",
  },
  {
    _id: "7",

    name: "Brotato",
    category: "Roguelike",
    description:
      "Brotato is a top-down arena shooter roguelite where you play a potato wielding up to 6 weapons at a time to fight off hordes of aliens. Choose from a variety of traits, weapons and playstyles. Pew pew pew and a lot more pews.",
    price: "6.49$",
    rating: "Overwhelmingly positive",
    image: "/images/brotato.jpg",
  },
  {
    _id: "8",

    name: "Vampire Survivors",
    category: "Roguelike",
    description:
      "Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic Horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball. Warning : Highly addictive.",
    price: "5.99$",
    rating: "Very positive",
    image: "/images/vampire.jpg",
  },
  {
    _id: "9",

    name: "Dragon's Dogma : Dark Arisen",
    category: "RPG",
    description:
      "Set in a huge open world, Dragon’s Dogma: Dark Arisen presents a rewarding action combat experience. One of the best RPG experiences out there, trust me. A lot of hope coming.",
    price: "38.99$",
    rating: "Very positive",
    image: "/images/dogma.jpg",
  },
  {
    _id: "10",

    name: "Skyrim",
    category: "RPG",
    description:
      "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.",
    price: "41.99$",
    rating: "Very positive",
    image: "/images/skyrim.jpg",
  },
  {
    _id: "11",

    name: "Sekiro : Shadows Die Twice",
    category: "Souls-like",
    description:
      "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure. Git gud.",
    price: "79.99$",
    rating: "Extremely positive",
    image: "/images/sekiro.jpg",
  },
  {
    _id: "12",

    name: "Ori and the Will of the Wisps",
    category: "Platformer",
    description:
      "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles.",
    price: "39.99$",
    rating: "Very positive",
    image: "/images/ori_1.jpg",
  },
  {
    _id: "13",

    name: "Kena : Bridge of Spirits",
    category: "Adventure",
    description:
      "A story-driven, action adventure combining exploration with fast-paced combat. Untangle the past as Kena, a young Spirit Guide in search of the sacred Mountain. Cleanse the world with the power of friendship.",
    price: "59.99$",
    rating: "Very positive",
    image: "/images/kena.jpg",
  },
  {
    _id: "14",

    name: "God of War",
    category: "Adventure",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    price: "64.99$",
    rating: "Very positive",
    image: "/images/gow.jpg",
  },
  {
    _id: "15",

    name: "Dead Space",
    category: "Horror",
    description:
      "The sci-fi survival-Horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision.",
    price: "69.99$",
    rating: "Very positive",
    image: "/images/deadspace.jpg",
  },
  {
    _id: "16",

    name: "Hollow Knight",
    category: "Platformer",
    description:
      "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    price: "19.99$",
    rating: "Overwhelmingly positive",
    image: "/images/hollowknight.jpg",
  },
  {
    _id: "17",

    name: "Diviniy : Original Sin 2",
    category: "RPG",
    description:
      "The critically acclaimed RPG that raised the bar, from the creators of Baldur's Gate 3. Gather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God.",
    price: "54.99$",
    rating: "Very positive",
    image: "/images/div2.jpg",
  },
  {
    _id: "18",

    name: "20 Minutes Till Dawn",
    category: "Roguelike",
    description:
      "20 Minutes Till Dawn is a survival roguelite where endless hordes of creatures lurk from the dark. Craft an array of overpowering builds and eradicate waves of Lovecraftian nightmares. Will you be able to survive the night?",
    price: "6.49$",
    rating: "Very positive",
    image: "/images/20m.png",
  },
  {
    _id: "19",

    name: "Elden Ring",
    category: "Souls-like",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A rich lore and chanllenging fights are what await you.",
    price: "79.99$",
    rating: "Extremely positive",
    image: "/images/elden.jpg",
  },
  {
    _id: "20",

    name: "Curse of the Dead Gods",
    category: "Roguelike",
    description:
      "You seek untold riches, eternal life, divine powers - it leads to this accursed temple, a seemingly-infinite labyrinth of bottomless pits, deadly traps, and monsters. Parry your way through the depths of the cursed gods.",
    price: "28.99$",
    rating: "Very positive",
    image: "/images/curse.jpg",
  },
  {
    _id: "21",

    name: "Celeste",
    category: "Platformer",
    description:
      "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight Platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges and piece together the mystery of the mountain.",
    price: "25.99$",
    rating: "Overwhelmingly positive",
    image: "/images/celeste.png",
  },
  {
    _id: "22",

    name: "Enter the Gungeon",
    category: "Roguelike",
    description:
      "Bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon’s ultimate treasure: the gun that can kill the past.",
    price: "19.49$",
    rating: "Very positive",
    image: "/images/gungeon.jpg",
  },
  {
    _id: "23",

    name: "Horizon : Zero Dawn",
    category: "Adventure",
    description:
      "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    price: "64.99$",
    rating: "Very positive",
    image: "/images/horizon.jpg",
  },
];

export default data;
