const mockData = {
  ops: [
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", bold: true },
      insert: "Bria's Mythical Menagerie: Creature-Collecting & Plush",
    },
    { attributes: { align: "center", indent: 1, header: 1 }, insert: "\n" },
    { attributes: { align: "center", indent: 1 }, insert: "\n" },
    {
      attributes: { height: "328", width: "523", align: "center" },
      insert: { video: "https://www.youtube.com/embed/TRGxbp-jlCs?showinfo=0" },
    },
    { attributes: { align: "center", indent: 1 }, insert: "\n\n" },
    {
      attributes: { height: "1293", width: "425", size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/970/965/30f02c2ac605ee8ce29adce36bebe659_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=wYmpqU%2F49bH%2BXaMrtR2Y8G1WHtBV%2FIplowioSJHdMOA%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    { attributes: { size: "large" }, insert: "Get " },
    { attributes: { size: "large", bold: true }, insert: "backer-exclusive savings" },
    {
      attributes: { size: "large" },
      insert: ", early access to everything on offer, and ",
    },
    {
      attributes: { size: "large", bold: true },
      insert: "Kickstarter-exclusive goodies",
    },
    {
      attributes: { size: "large" },
      insert:
        " like the Deluxe Hardcover edition of Bria's, the Giant Slime, and the Art Prints!",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/340/542/25dc97c5c81c6b2846234fcd0eb6b0ed_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=mPETurGxbK7O5BZrY9Lnsk0PGKU1CC9gp0F8uIi5qhc%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/693/2f1c11428e2fd53f6c6bbd6c2397803f_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=5NHQ5BpLdDUK4f0bBVB6Gj537mkKSdisnPcl3L5tW2Q%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large", bold: true },
      insert: "Familiars and Companions in Dungeons and Dragons 5th Edition! ",
    },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: "Bria's Mythical Menagerie is a hardcover tome spanning",
    },
    { attributes: { size: "large", bold: true }, insert: " over 350 pages" },
    { attributes: { size: "large" }, insert: ", packed with " },
    { attributes: { size: "large", bold: true }, insert: "creatures and familiars. " },
    { attributes: { size: "large" }, insert: "Enhance your game with revolutionized" },
    {
      attributes: { size: "large", bold: true },
      insert: " creature-collecting mechanics ",
    },
    { attributes: { size: "large" }, insert: "that will satisfy your players' " },
    { attributes: { size: "large", bold: true }, insert: "monster-taming" },
    { attributes: { size: "large" }, insert: " cravings! " },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/141/632/b86c10782ed2f2bd65f6ef63288a5ff0_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=qvxoKpaFbGzEEOLrqlCwnfK5YfzfCa5y8pP2SURYln4%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "What's in the book?" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "45+ new familiars," },
    { attributes: { size: "large" }, insert: " complete with lore, artwork, and stats" },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "50+ new spells, " },
    { attributes: { size: "large" }, insert: 'including new "Find Familiar" options' },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "45+ new magical items" },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    { attributes: { size: "large" }, insert: "6+ new " },
    { attributes: { size: "large", bold: true }, insert: "subclass options" },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    { attributes: { size: "large" }, insert: "The full new " },
    { attributes: { size: "large", bold: true }, insert: "Summoner" },
    { attributes: { size: "large" }, insert: " " },
    { attributes: { size: "large", bold: true }, insert: "class" },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "8+ campaign-ready NPCs" },
    {
      attributes: { size: "large" },
      insert: " for you to add shops, locations, quests, and more to get the fun started",
    },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    {
      attributes: { size: "large", bold: true },
      insert: "Comprehensive setting information",
    },
    { attributes: { size: "large" }, insert: " on the Isle of Aiselyne" },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        'All the mechanics and ideas GMs need to give games the "Creature Collecting" flair players crave!',
    },
    { attributes: { indent: 1, list: "bullet" }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/340/588/74b16b1f9a09f88bc25ab2fbdb4a4156_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=SYSfEzjMcHeb1KBQz0DHG1xXb2HPOHEJegy9icTuD8w%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Ever wished you could befriend or capture the creatures you encounter in your adventures? Or maybe you want to collect them all? Bria's Mythical Menagerie reworks the Find Familiar spell to be more engaging and versatile, as well as adding over ",
    },
    {
      attributes: { size: "large", bold: true },
      insert: "45 new fully fleshed-out familiar options",
    },
    {
      attributes: { size: "large" },
      insert:
        " - creepy, cute, cuddly, and fierce alike! Each familiar has unique abilities and uses. ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/206/510/87cd8108d53a7f49081967f5913ecc6d_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=EHagAb40r5%2BGUtK0Lg4FUkHdMHA1dYipwJ1FEJZ7sEY%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Befriend sentient items with the " },
    { attributes: { size: "large", bold: true }, insert: "Order of Curators Wizard, " },
    { attributes: { size: "large" }, insert: "protect your cubs with the " },
    {
      attributes: { size: "large", bold: true },
      insert: "Path of the Owlbear Mother Barbarian",
    },
    {
      attributes: { size: "large" },
      insert: ", research and discover creatures of legend with the ",
    },
    { attributes: { size: "large", bold: true }, insert: "Cryptozoologist Rogue" },
    { attributes: { size: "large" }, insert: ", or if you dare, open your mind to the " },
    { attributes: { size: "large", bold: true }, insert: "Gibbering Mother " },
    { attributes: { size: "large" }, insert: "otherworldly patron. " },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/332/550/4262ad98fe5dff7907c1be7c0f9a784a_original.png?fit=scale-down&origin=ugc&width=680&sig=61SZM2uKxywLyDpNo1WqQadwHW8quPycsAHa%2FKCTkvQ%3D",
      },
    },
    { attributes: { size: "large", italic: true }, insert: "New Class: The Summoner" },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: "Collect them all and become the very best. ",
    },
    { attributes: { size: "large", bold: true }, insert: "The Summoner" },
    {
      attributes: { size: "large" },
      insert:
        " is a magic wielder that harnesses the power of their familiars to cast unique spells and abilities determined by the types of creatures in their collection. ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/206/513/05f8a17815e49b6da9c5a28ec7eaa5bc_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=lKW7SOp%2F7VgW4TYecVv6ZOUtS4aRY6HALaY9tDeXFYI%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Bria's includes a collection of 8 robust NPC characters each with their own ",
    },
    {
      attributes: { size: "large", bold: true },
      insert: "creatures, quests, shops, unique locations",
    },
    {
      attributes: { size: "large" },
      insert:
        ", and more. You can use them to introduce creature collecting into your campaign or encounter them in your adventures on the Isle of Aiselyne.  ",
    },
    {
      attributes: { size: "large", bold: true },
      insert: "Trade creatures, strike bargains, take quests, or do battle! ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/700/87ce051627cf5e00e2c3124f164e9678_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=s6YjDkifWt53%2BosTo7Qkgoh9ge0UZzzAxOePDrPmoCc%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/985/211/ac80da3f972e2407a2e227d13e5af808_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=Ng1RhNbVkAz5RBiKaa5a5JgiSFiLpSgH5HKGzmlPxB4%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Bria's Mythical Menagerie is packed with 8 brand-new full-sized plush, 9 Drakelings, the return of 3 fan favorites, and the oversized Giant Slime pillow plush! That's 21 total plushies you can collect both in and out of the game! ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Each plush is super soft, crafted with love and attention to detail, and built into the book as a collectible creature. ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", bold: true },
      insert: "All 21 plushies have lore, artwork, and stats in the book!",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/985/312/e6e1b367933df265f172d92a125afbbb_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=SZa0HQBwz5zSjEqDMy%2Ffkbl81BBQpCJcgyJKrbD%2BtT0%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Playable, Loveable TTRPG Plush!" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        'Our new full-sized plush, "The Familiars Collection," are all around 8 to 12 inches and include Astral Kitty, the Poe the Necro Raven, Margot the Magical Trash-Eating Possum, Halo the Spirit Owlet, Mimi the Mini Giant Jumping Spider, Lydia the Midnight Coeurl Kit, Sonia the Flumphlet, and Kubo the Sky Kraken',
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large" },
      insert: "(Scroll all the way to the bottom for a closer look!)",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", italic: true },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/076/072/c96eb69e569dcf5bc21d6c3621ee52c3_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=ZKZ6nq6jDSJObdQbVPyqenX%2FN0yPdcII2jHfIIf3T9Y%3D",
      },
    },
    {
      attributes: { size: "large", italic: true },
      insert: "Halo the Spirit Owlet - Perfect size for a gaming companion",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/985/418/66e35b208dd0b8b113ea3ed178aeaf79_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=jaJBfXNRT3jWCgxd6R6ABuvJcWsHixyvc44BvvKcmx8%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large" },
      insert:
        "The Isle of Aiselyne is home to nine unique Drakelings. This adorable line of ~6x3-inch plushies each have their own unique features, are made with super-soft spandex, and have satin bellys.",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/079/129/334edbdd15147e09df91c7f8cb9ba46e_original.gif?anim=false&fit=scale-down&origin=ugc&q=92&width=680&sig=wkDG6LDZdRQKmfmL07p8QyJ%2BKefjb5zxJxqibz0nrXE%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/206/643/757fce1016636bfa0a62112be6a3c8dd_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=aJuwgQNQ0l7QEYCEHMa5ilPEKj7N5V38dJPszyK862A%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        'The Baby Stoneshark from "MythCraft TTRPG" Ratu the Bat, and Mori The Reaper from "Veil of the Eternal Night" are making a comeback in the book as plush and familiars! ',
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/340/977/4a4ff978c51f8706731b188134de483d_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=glUbWI5LoGduywKRI45Y8vj7aQLcM7p%2FHc11cf62754%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", italic: true },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/206/623/412dab961cd779f0e574b8e2749dae93_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=SPOcpsI3viXejZVWU8ixQafesIDA%2BnMLhDOmmrhEMJM%3D",
      },
    },
    {
      attributes: { size: "large", italic: true },
      insert: "Just a boy and his Goldhog, in the far reaches of the marshes",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "One day, as if waking from a dream, sailors and travelers alike suddenly remembered the Isle of Aiselyne. It is a resource-rich, mythical, and magical place with a myriad of environments, each home to its own unique creatures and cryptids. Aiselyne had been hidden from memory and frozen in time. This extraordinary island is teeming with life—young dinosaurs, sentient items, tame monsters, beasts, and all kinds of critters. Bria, a mage who had kept Aiselyne hidden and her menagerie safe, has retreated to her tower deep in the Valley of Pale Fog, and her magical protection over the island slowly wanes.",
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/206/595/4abbda19b02049d55094544f9e3d3904_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=81BTtAPJ%2BQUmqgWp8J6m%2B2VCbrfk%2F0ldcLq3YIYuXsg%3D",
      },
    },
    {
      attributes: { size: "large" },
      insert:
        "In their haste to claim this magical land, sailors, traders, explorers, and fortune seekers quickly set sail for Aiselyne. They built a city from shipwrecks and flotsam on the island's southern coast, the only safe entry point to Aiselyne. The race to uncover the secrets of Bria's Mythical Menagerie has begun.",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/707/190923e66b27d8bb44287b12d9713b8f_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=msIan7jQudq37k1%2BTIXKWyyF5r5bAKcwtvfuQ%2BpKZOk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Step right in, and behold our carefully curated collection of enchanting enhancements and amazing additions to your pledge! ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Collectible Pins" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "We have created " },
    { attributes: { size: "large", bold: true }, insert: "four sets of adorable pins" },
    {
      attributes: { size: "large" },
      insert:
        "! Each set includes four unique ~2-inch hard enamel pins, which are a perfect addition to your pledge.",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/994/739/f9f36a6b518afdcfd717ab67461663d4_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=j%2FaVux9NboqqM%2Bqv3UiS07qERIApWWgRi%2BB0k3C6FRE%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Bouncy Silicone Possum Dice" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "A full set of these custom, squishy, tactile, Magical Possum-themed dice by our good friends at FanRoll Dice! ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/076/634/3fccdf1a418f373623c2868666dfc492_original.png?fit=scale-down&origin=ugc&width=680&sig=ZjRRub%2BYV3FD%2F%2BEGs%2B5xcLoZ7%2FOfC6kNUVtV9Bu4iYw%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Mini Figures" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "A 4-pack of ~3 inch familiar figurines! These collectibles are perfect desk or table companions. ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/340/670/f072db20021420f487c90eefede044b0_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=3iM3W69KzqeoYJRvbTuWeas2TzI77pe55BqnyDSEcbA%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "Kickstarter Exclusive Art Prints" },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        "Bria's is packed with adorable artwork in a variety of styles from an all-star art team! Get a pack (or both) of 5 high-quality prints, all around a4 size, for easy shipping and displaying. ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/994/919/079a4723f74a419f6a99da8376df63ff_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=LHTe4E6pvfOGOt3kjSzmJKLFA%2BmigD0Lol%2FJ9bFyfog%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: "The Giant Slime " },
    { attributes: { indent: 1, header: 4 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert:
        'The giant slime (lovingly dubbed "Lil\'bit" internally) is our *deep breath* Kickstarter-exclusive, limited edition, oversized, super-soft offering for backers only! This big fella is about 22 inches in diameter and made with super-soft spandex material. ',
    },
    {
      attributes: { size: "large", bold: true },
      insert: "When they're gone, they're gone! ",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/994/953/b38704d9e4a3e8e423dea101a922649d_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=C8ys%2BRf%2BKeXPLz7BLNh6f5ZlLBzOK%2BZ71qneLBmzd%2BE%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/713/c800fb1badb310c70acb37846b1fd106_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=EiezaEZJ0bFwlHYleIQGJAHpjyYKh2V3XSgZIcDa3lA%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/208/042/10e66b25ed010e7f5e21017a77bdbfe0_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=CS2OwHsjqjgO9YygPXtMESFCCFxO%2BRWnm13pJGZXp%2Fk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/341/307/1ad1ef8eb3630f2797a0d4798caf3cc9_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=pqcqpFKnHWwqnPhg7cCECtz6gNF48Z84TxHHpBluMuY%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/341/313/7710dd43c33de2f9adc3a18ff68b2b30_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=kvDhuJ3S77nCkHVsy%2BVChZ8uwHH2uSFkqiezgIvazuo%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/341/319/8ce1a11610d9cccc796acdc76e8bb505_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=FlHW0oI6KmBT2%2FUahtJxJ4PWXcUguV7kuQypF3b2Hdk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/340/767/fdd19a9decf3ba94acaec08b049c959a_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=vGK4iQORr6Ksc%2FxYJEAfEo7tbaxyhqYuNOeAru47hIk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/341/453/7242fae17c9f016cd84bcd336b8b8074_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=b2ZWBzyPjnT%2Bepege5kjLR0MpbuX6OdnCBZaPjiY5No%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/341/223/6d1a90c922899b639d8515d9327616aa_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=Nn7P%2BTCwX5BwvC6fYUMUFHWdddr%2FFywjDKPWlyUJUBw%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/049/611/32896519b3ba961af7bac55889082de2_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=%2FuimVgy0d%2B3sVNQQWH9s8DSHkqbOYWW9tz85EFqX9YQ%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/367/781/ab5e7db8cc28564c1c276d3a2ab31489_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=Z6brNHX0bll%2Bxrl2nyYOR%2FW7kUzsBHjgBwKXiqFT8bc%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/717/cbdf671a2af178ba44a7fb15c5731e08_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=GBE28hE1e%2FeZ4YPMkO9vm1ExSTcIEIcPJsT4OF8KAZE%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/462/967/2f8006ebe6329d204530feac8840fd23_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=9mNzQsJjTosFN4UI%2Fh%2FG0XR%2FbhQ%2Fpc%2FsO7V%2BdtLZxhc%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", link: "https://discord.gg/MythCraft" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/049/897/be38712e5024f4fb743cfa42e39d665b_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=hIkBFH5udJvivU4vnhLt4X%2FUz54C50PxKrgMaZJGPCM%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/956/721/aa81125f530ce4729c56fce53e835d5a_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=FnwQy0NJJ37KWx37%2BoN9SERp5gS2DHrEA5gJiDi7bKQ%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/613/639/3912534a31b543dad6ba86178883174c_original.png?fit=scale-down&origin=ugc&width=680&sig=dzfVWgLY5d6LaL5nMTdPj5Y5aWeqcvHc5tT4tmY3THU%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "Bria's Mythical Menagerie " },
    { attributes: { size: "large" }, insert: "was " },
    { attributes: { size: "large", bold: true }, insert: "created" },
    { attributes: { size: "large" }, insert: " " },
    { attributes: { size: "large", bold: true }, insert: "by" },
    { attributes: { size: "large" }, insert: " Grant & Heidi Mielke and " },
    { attributes: { size: "large", bold: true }, insert: "designed by" },
    { attributes: { size: "large" }, insert: " Jake Neece." },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "QuasiReal Publishing" },
    {
      attributes: { size: "large" },
      insert: " is Andi Hadfield, Nathan Heard, Grant Mielke, and Jake Neece",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large", bold: true }, insert: "Team & Contributors are" },
    { attributes: { size: "large" }, insert: " " },
    {
      attributes: {
        size: "large",
        link: "https://www.drivethrurpg.com/browse/pub/24555/John-Bilodeau-Stock-Art",
      },
      insert: "John Bilodeau",
    },
    { attributes: { size: "large", bold: true }, insert: ", " },
    {
      attributes: { size: "large", link: "https://www.artstation.com/djbrl" },
      insert: "Jibril Sy",
    },
    { attributes: { size: "large", bold: true }, insert: "," },
    { attributes: { size: "large" }, insert: " " },
    {
      attributes: { size: "large", link: "https://twitter.com/THATracky" },
      insert: "Racky",
    },
    { attributes: { size: "large" }, insert: ", " },
    {
      attributes: { size: "large", link: "https://www.manonmergnat.com/" },
      insert: "Manon Mergnat",
    },
    { attributes: { size: "large" }, insert: ", " },
    { attributes: { size: "large", link: "https://www.ampreh.net/" }, insert: "Ampreh" },
    { attributes: { size: "large" }, insert: ", Myco (Eryn Fitzgerald), " },
    {
      attributes: { size: "large", link: "https://www.instagram.com/_wolfprison_/" },
      insert: "Austin Brady",
    },
    {
      attributes: { size: "large" },
      insert:
        ", Cori Miller-Nye, Tony Zacarias, Gretchen Boley, David Perkins, Rachel Perkins, Stacey Dyer, Sam Miller, ",
    },
    {
      attributes: { size: "large", link: "https://www.instagram.com/vantlyaa/" },
      insert: "Vantlyaa",
    },
    { attributes: { size: "large" }, insert: ", " },
    {
      attributes: { size: "large", link: "https://kaionluong.weebly.com/" },
      insert: "Kaion Luong",
    },
    { attributes: { size: "large" }, insert: ", Frederick Rosado, and " },
    { attributes: { size: "large", bold: true }, insert: "our Partners " },
    {
      attributes: { size: "large" },
      insert:
        "QuasiReal Publishing, The Homebrew Network, Vala Marketing, Backerkit, Jellop, and FanRoll Dice",
    },
    { attributes: { indent: 1 }, insert: "\n\n" },
    {
      attributes: { size: "large" },
      insert: "Bria's Mythical Menagerie features creatures from ",
    },
    {
      attributes: { size: "large", link: "https://mythcraftrpg.com/" },
      insert: "MythCraft TTRPG",
    },
    { attributes: { size: "large" }, insert: ", " },
    {
      attributes: {
        size: "large",
        link: "https://www.kickstarter.com/projects/quasigrant/veil-of-the-eternal-night-dark-fantasy-for-5e-and-mythcraft",
      },
      insert: "Veil of the Eternal Night",
    },
    {
      attributes: { size: "large" },
      insert: ", and the Dungeons & Dragons 5th Edition OGL",
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", link: "https://valamarketing.com/" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/049/988/ae66262749e1ca885bf94e581e3e674e_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=qdgJOZDwOzj7gmDhhJoXK2wF1VOAglLrRazjLy1dxxk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large", link: "http://jellop.com/?utm_source=BriasMythical" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/044/997/830/307d470266ba82957f827a73c8b0c123_original.gif?anim=false&fit=scale-down&origin=ugc&q=92&width=680&sig=nr75nKZnIOm0TxShYi8HEKTLq%2B8%2BNeKmqmDhtGOTXPU%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/781/96de9bcf664774e47daddf14a70e89a5_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=spDRqSXsH9UXJ8sQTCzFshq1SuiVZtAryauev%2Blvg9E%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/792/fda5003e855c29012fd988c92d63643a_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=bpVsTSItsYQ1x8Jcpu%2Bs7qpTcMVAdSqJqpWTmDgTdkM%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { size: "large" }, insert: " " },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/809/393b72130f6fb3790d608fd6a0d7e984_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=A4S6%2FR%2FWgN35XZHnpYzw1oTrh7JCLfDeOnW%2B0QNfOIU%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/814/3711098b5a7b1d71fd4171712d1be669_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=vnkd6I2zwnc8rzai%2FOvo%2Blvux9GMdHyswRPCfLhE444%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/829/833348953ec578e7e2fd83a049b38e59_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=Zrl%2BrceoMw1uvc5KS28TNSSmFy7%2B6PjtTVBMlhJt%2BeA%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/855/784b0440c2fee7af711b78a2344ca25a_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=2a26LAc1m9fbIJLw4XmOXSmTOLfxPgpYtmqOaaNFsB8%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/859/126c7d820e9c6560695aa80040d70e68_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=4LNrJIEQTxQeGFrqmuCeSYgmPO3Qvs9i932K9TTKVGg%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/865/d07a47f57d26028bbd8a7100fc484763_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=WMQNcgjP%2BLC7mV0gf3CKTIsg5w6WgupDhBxBsbIpR6I%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/889/d5ac03add875b083583c449ee8e2d590_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=eqSg0LPzXG9XXrMejugtsZXiThQsv9JRbcBZnNVZIiE%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/896/1c5120f3e9e956e3152125ec0c483bae_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=MLW8Mte4RdakDIdFUC0iHxZHL7VC4aqdYHu8Gk%2FRQx8%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/904/df65aad18e66b988913056f1cf2feedf_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=0Fn2cGMUIyo4txE4%2Ble9zZZLT7ViqHq0wEwmdEh6Sog%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/917/6b477831ecbf6ee7dbd77cc587e0c10d_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=5xA8iilsE5edin1dPL9zOAZqoNoPr9F%2FvqpPdRxbVTU%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/927/216d55a5051d23f7cb7d6f4f387adb0c_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=0Q4iHBVsATybdEDv1gB3RvMCq8rQnhHlJ7RuY6ofvDQ%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/940/7adc4a952dfc7f8207980a29cd945e3f_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=eqN8QCn9WWAqaxNJIecLctbwJPez30audW%2BxINfHAEs%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/960/5b3af0c2dd2d335cc40a7a4171358a44_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=LX%2Fh%2FzgI3WdeAeYiYUUXxsYwl3L%2BY4TqN4LhlhKEwmY%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/970/b7eb1b767812ed83bfc20d2ac23f0851_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=ybyLYALo90bwT6qqS7LlM0uN0alxFYfXBdegYITsjig%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/105/981/0828db49f22424431a0d1c63479890be_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=VXuhrHfJpBg2nHW18g6ktvxjOtduIMySyR8G8h%2FxBC0%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/106/033/c4090d4bed6bc4741a4163bf3687baad_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=wpOXF9sdfql63bpTqfykRrOTjlquITFCsxcz5v7CIs0%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/106/035/80463c3973313d93496f2192b5ce9c6f_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=Y%2FX3LP%2FlcsUAIv2ufs0F9syj8PMJCKQ7XeVPHw1Dgqk%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/106/041/1712a0e7bef42c1c7fe5da623f981dc4_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=zamikXYHyQm7FHNIONWGROkTJ5dCMqeEyBA0tCODedI%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    {
      attributes: { size: "large" },
      insert: {
        image:
          "https://i.kickstarter.com/assets/045/106/045/2ca2a5d60a0a068d7423e701748dad8b_original.jpg?fit=scale-down&origin=ugc&q=92&width=680&sig=5Tn2sbWDl8Subwyv6IAcLhzBs1hfvYYCXuo4rTzWz7Q%3D",
      },
    },
    { attributes: { indent: 1 }, insert: "\n" },
    { attributes: { align: "center", indent: 1, header: 3 }, insert: "\n" },
    { attributes: { align: "center" }, insert: "\n" },
  ],
};

export default mockData;
