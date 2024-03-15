const data = [
  {
    id: 1,
    name: "Melvor Idle",
    category: "rpg",
    description:
      "Inspired by RuneScape, Melvor Idle takes the core of what makes an adventure game so addictive and strips it down to its purest form! This is a feature-rich, idle/incremental game combining a distinctly familiar feel.",
    price: "11.99$",
    rating: "Very positive",
    image: "/images/melvor.jpg",
  },
  {
    id: 2,
    name: "Hellblade : Senua's Sacrifice",
    category: "horror",
    description:
      "From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior’s brutal journey into myth and madness.",
    price: "32.99$",
    rating: "Very positive",
    image: "/images/hellblade.jpg",
  },
  {
    id: 3,
    name: "Ori and the Blind Forest",
    category: "platformer",
    description:
      "“Ori and the Blind Forest” tells the tale of a young orphan destined for heroics, through a visually stunning action-platformer crafted by Moon Studios for PC.",
    price: "8.99$",
    rating: "Extremely positive",
    image: "/images/ori_2.jpg",
  },
  {
    id: 4,
    name: "Dark Souls",
    category: "souls-like",
    description:
      "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps. Prepare to die.",
    price: "42.99$",
    rating: "Very positive",
    image: "/images/ds.jpg",
  },
  {
    id: 5,
    name: "Dark Souls 2",
    category: "souls-like",
    description:
      "Developed by FROM SOFTWARE, DARK SOULS™ II is the highly anticipated sequel to the gruelling 2011 breakout hit Dark Souls. The unique old-school action RPG experience captivated imaginations and broke controllers.",
    price: "33.49$",
    rating: "Very positive",
    image: "/images/ds2.jpg",
  },
  {
    id: 6,
    name: "Dark Souls 3",
    category: "souls-like",
    description:
      "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness! Praise the sun and all that's holy and bright.",
    price: "79.99$",
    rating: "Very positive",
    image: "/images/ds3.jpg",
  },
  {
    id: 7,
    name: "Brotato",
    category: "roguelike",
    description:
      "Brotato is a top-down arena shooter roguelite where you play a potato wielding up to 6 weapons at a time to fight off hordes of aliens. Choose from a variety of traits, weapons and playstyles. Pew pew pew and a lot more pews.",
    price: "6.49$",
    rating: "Overwhelmingly positive",
    image: "/images/brotato.jpg",
  },
  {
    id: 8,
    name: "Vampire Survivors",
    category: "roguelike",
    description:
      "Mow down thousands of night creatures and survive until dawn! Vampire Survivors is a gothic horror casual game with rogue-lite elements, where your choices can allow you to quickly snowball. Warning : Highly addictive.",
    price: "5.99$",
    rating: "Very positive",
    image: "/images/vampire.jpg",
  },
  {
    id: 9,
    name: "Dragon's Dogma : Dark Arisen",
    category: "rpg",
    description:
      "Set in a huge open world, Dragon’s Dogma: Dark Arisen presents a rewarding action combat experience. One of the best RPG experiences out there, trust me. A lot of hope coming.",
    price: "38.99$",
    rating: "Very positive",
    image: "/images/dogma.jpg",
  },
  {
    id: 10,
    name: "Skyrim",
    category: "rpg",
    description:
      "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.",
    price: "41.99$",
    rating: "Very positive",
    image: "/images/skyrim.jpg",
  },
  {
    id: 11,
    name: "Sekiro : Shadows Die Twice",
    category: "souls-like",
    description:
      "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure. Git gud.",
    price: "79.99$",
    rating: "Extremely positive",
    image: "/images/sekiro.jpg",
  },
  {
    id: 12,
    name: "Ori and the Will of the Wisps",
    category: "platformer",
    description:
      "Play the critically acclaimed masterpiece. Embark on a new journey in a vast, exotic world where you’ll encounter towering enemies and challenging puzzles.",
    price: "39.99$",
    rating: "Very positive",
    image: "/images/ori_1.jpg",
  },
  {
    id: 13,
    name: "Kena : Bridge of Spirits",
    category: "adventure",
    description:
      "A story-driven, action adventure combining exploration with fast-paced combat. Untangle the past as Kena, a young Spirit Guide in search of the sacred Mountain. Cleanse the world with the power of friendship.",
    price: "59.99$",
    rating: "Very positive",
    image: "/images/kena.jpg",
  },
  {
    id: 14,
    name: "God of War",
    category: "adventure",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    price: "64.99$",
    rating: "Very positive",
    image: "/images/gow.jpg",
  },
  {
    id: 15,
    name: "Dead Space",
    category: "horror",
    description:
      "The sci-fi survival-horror classic returns, completely rebuilt to offer an even more immersive experience — including visual, audio, and gameplay improvements — while staying faithful to the original game’s thrilling vision.",
    price: "69.99$",
    rating: "Very positive",
    image: "/images/deadspace.jpg",
  },
  {
    id: 16,
    name: "Hollow Knight",
    category: "platformer",
    description:
      "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
    price: "19.99$",
    rating: "Overwhelmingly positive",
    image: "/images/hollowknight.jpg",
  },
  {
    id: 17,
    name: "Diviniy : Original Sin 2",
    category: "rpg",
    description:
      "The critically acclaimed RPG that raised the bar, from the creators of Baldur's Gate 3. Gather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God.",
    price: "54.99$",
    rating: "Very positive",
    image: "/images/div2.jpg",
  },
  {
    id: 18,
    name: "20 Minutes Till Dawn",
    category: "roguelike",
    description:
      "20 Minutes Till Dawn is a survival roguelite where endless hordes of creatures lurk from the dark. Craft an array of overpowering builds and eradicate waves of Lovecraftian nightmares. Will you be able to survive the night?",
    price: "6.49$",
    rating: "Very positive",
    image: "/images/20m.png",
  },
  {
    id: 19,
    name: "Elden Ring",
    category: "souls-like",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A rich lore and chanllenging fights are what await you.",
    price: "79.99$",
    rating: "Extremely positive",
    image: "/images/elden.jpg",
  },
  {
    id: 20,
    name: "Curse of the Dead Gods",
    category: "roguelike",
    description:
      "You seek untold riches, eternal life, divine powers - it leads to this accursed temple, a seemingly-infinite labyrinth of bottomless pits, deadly traps, and monsters. Parry your way through the depths of the cursed gods.",
    price: "28.99$",
    rating: "Very positive",
    image: "/images/curse.jpg",
  },
  {
    id: 21,
    name: "Celeste",
    category: "platformer",
    description:
      "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges and piece together the mystery of the mountain.",
    price: "25.99$",
    rating: "Overwhelmingly positive",
    image: "/images/celeste.png",
  },
  {
    id: 22,
    name: "Enter the Gungeon",
    category: "roguelike",
    description:
      "Bullet hell dungeon crawler following a band of misfits seeking to shoot, loot, dodge roll and table-flip their way to personal absolution by reaching the legendary Gungeon’s ultimate treasure: the gun that can kill the past.",
    price: "19.49$",
    rating: "Very positive",
    image: "/images/gungeon.jpg",
  },
  {
    id: 23,
    name: "Horizon : Zero Dawn",
    category: "adventure",
    description:
      "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    price: "64.99$",
    rating: "Very positive",
    image: "/images/horizon.jpg",
  },
];

export default data;
