// Common word generators
function getRandomAction() {
    const actions = [
        'Adapt', 'Ambush', 'Analyze', 'Ascend', 'Attack',
        'Banish', 'Bargain', 'Betray', 'Bless', 'Break',
        'Build', 'Burn', 'Buy', 'Celebrate', 'Change',
        'Charm', 'Climb', 'Combine', 'Command', 'Confront',
        'Create', 'Crawl', 'Cry', 'Curse', 'Dance',
        'Deceive', 'Defend', 'Descend', 'Destroy', 'Discover',
        'Divide', 'Dream', 'Enter', 'Escape', 'Evade',
        'Exhibit', 'Exit', 'Explore', 'Extract', 'Fall',
        'Fight', 'Find', 'Flee', 'Fly', 'Forget',
        'Freeze', 'Gain', 'Give', 'Guide', 'Heal',
        'Help', 'Hide', 'Infiltrate', 'Inspire', 'Interrogate',
        'Intimidate', 'Invent', 'Investigate', 'Laugh', 'Lead',
        'Learn', 'Lock', 'Lose', 'Mourn', 'Negotiate',
        'Obey', 'Persuade', 'Play', 'Preserve', 'Protect',
        'Pursue', 'Raise', 'Rebel', 'Regress', 'Remember',
        'Repair', 'Research', 'Rescue', 'Resist', 'Rest',
        'Reveal', 'Sabotage', 'Search', 'Sell', 'Sing',
        'Sleep', 'Stand', 'Steal', 'Study', 'Submit',
        'Summon', 'Take', 'Teach', 'Teleport', 'Threaten',
        'Trade', 'Transform', 'Unlock', 'Wake', 'Work',
    ];
    return actions[Math.floor(Math.random() * actions.length)];
}

function getRandomTheme() {
    const themes = [
        'Abundance', 'Age', 'Agility', 'Alliance', 'Animosity',
        'Balance', 'Beauty', 'Belief', 'Betrayal', 'Bravery',
        'Certainty', 'Chance', 'Chaos', 'Civilization', 'Clumsiness',
        'Community', 'Connection', 'Control', 'Courage', 'Cowardice',
        'Darkness', 'Death', 'Decay', 'Deception', 'Destiny',
        'Discovery', 'Discord', 'Disgrace', 'Domination', 'Doubt',
        'Elegance', 'Experience', 'Faith', 'Family', 'Fate',
        'Fear', 'Fearlessness', 'Fortune', 'Freedom', 'Friendship',
        'Harmony', 'Health', 'Helplessness', 'Hope', 'Ignorance',
        'Illusion', 'Imbalance', 'Independence', 'Innocence', 'Integrity',
        'Isolation', 'Justice', 'Knowledge', 'Liberation', 'Life',
        'Light', 'Loneliness', 'Love', 'Loyalty', 'Luck',
        'Misfortune', 'Mystery', 'Nature', 'Naivete', 'Nobility',
        'Oppression', 'Order', 'Partnership', 'Peace', 'Poverty',
        'Power', 'Prosperity', 'Radiance', 'Reality', 'Rebirth',
        'Recovery', 'Redemption', 'Revenge', 'Rivalry', 'Sacrifice',
        'Science', 'Scarcity', 'Secrets', 'Shadow', 'Sickness',
        'Skepticism', 'Space', 'Strength', 'Technology', 'Time',
        'Timidity', 'Treachery', 'Truth', 'Twilight', 'Ugliness',
        'Vitality', 'War', 'Weakness', 'Wealth', 'Wisdom',
        'Youth'
    ];
    return themes[Math.floor(Math.random() * themes.length)];
}

// Fantasy Place Name Generator
function generateFantasyPlaceName() {
    const prefixes = [
        'Abandoned ', 'Ancient', 'Arcane', 'Ash', 'Bear',
        'Birch', 'Black', 'Blessed', 'Blue', 'Bright',
        'Cedar', 'Celestial ', 'Cloud', 'Common', 'Crystal',
        'Cursed', 'Dancing', 'Dark', 'Deep', 'Deserted ',
        'Divine', 'Dragon', 'Eagle', 'Echo', 'Eldritch',
        'Elm', 'Enchanted', 'Flying', 'Forest', 'Forgotten ',
        'Forbidden ', 'Golden', 'Gray', 'Great', 'Green',
        'Griffin', 'Hawk', 'Hidden ', 'High', 'Hill',
        'Holy', 'Imperial', 'Infernal ', 'Iron', 'Lake',
        'Light', 'Little', 'Lost ', 'Low', 'Magic',
        'Maple', 'Moon', 'Mountain', 'Mystic', 'New',
        'Noble', 'Oak', 'Old', 'Pine', 'Phoenix',
        'Purple', 'Red', 'River', 'Royal', 'Running',
        'Ruined ', 'Sacred', 'Sea', 'Secret ', 'Shadow',
        'Silent', 'Silver', 'Singing', 'Sleeping', 'Sky',
        'Star', 'Stone', 'Storm', 'Sun', 'Unicorn',
        'Valley', 'Whispering ', 'Willow', 'Wind', 'Wolf',
        'Wood'
    ];
    
    const suffixes = [
        ' abbey', ' academy', ' altar', ' beach', 'bay',
        'bog', 'bridge', 'brook', 'burg', ' burrow',
        ' castle', ' cathedral', ' cave', ' cavern', ' chapel',
        ' city', ' cliff', ' colony', 'crag', ' crossing',
        ' dock', ' estate', ' farm', ' fen', ' field',
        'ford', ' forest', ' fort', ' forge', ' garden',
        ' gate', ' glade', ' grotto', ' grove', 'hall',
        ' harbor', 'hill', ' hollow', 'keep', ' lake',
        ' manor', ' marsh', ' meadow', ' mill', ' mine',
        ' monastery', ' mountain', ' park', ' pass', ' peak',
        ' pier', ' plain', 'port', ' prairie', ' quarry',
        'ridge', ' river', ' sanctuary', ' shore', ' shrine',
        ' spring', ' stone', ' stream', ' swamp', ' temple',
        'ton', ' tower', 'town', 'vale', ' valley',
        ' vineyard', 'ville', ' warren', 'way', 'wood'
    ];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${prefix}${suffix}`;
}

// Fantasy Location Generator
function generateFantasyLocation() {
    const locations = [
        'Abandoned temple', 'Alchemist lab', 'Ancient battlefield', 'Ancient ruins',
        'Arctic outpost', 'Astral sea', 'Bard college', 'Border fort',
        'Bustling market', 'Celestial realm', 'Cleric cathedral', 'Cloud palace',
        'Coastal city', 'Common village', 'Crystal cave', 'Crystal palace',
        'Cursed swamp', 'Desert caravan', 'Desert oasis', 'Dimension rift',
        'Divine realm', 'Dream realm', 'Druid circle', 'Dwarven mine',
        'Elemental plane', 'Elven city', 'Enchanted grove', 'Ethereal plane',
        'Fairy circle', 'Farming hamlet', 'Feywild', 'Fishing port',
        'Floating island', 'Floating market', 'Forbidden city', 'Forest path',
        'Goblin camp', 'Golden palace', 'Haunted mansion', 'Hidden valley',
        'Infernal pit', 'Iron fortress', 'Jungle temple', 'Knight barracks',
        'Lookout', 'Lost civilization', 'Material plane', 'Merchant caravan',
        'Mining town', 'Monk monastery', 'Moon temple', 'Mountain pass',
        'Mountain peak', 'Mystic academy', 'Mystic waterfall', 'Necromancer tower',
        'Noble estate', 'Oracle cave', 'Orc fortress', 'Paladin stronghold',
        'Pilgrim shrine', 'Priest abbey', 'Prophet temple', 'Ranger outpost',
        'Remote island', 'River crossing', 'Rogue hideout', 'Royal castle',
        'Royal court', 'Sacred temple', 'Secluded forest', 'Seer tower',
        'Shadow realm', 'Shadowfell', 'Silver lake', 'Sorcerer sanctum',
        'Squire training ground', 'Sun altar', 'Sunken city', 'Time-lost library',
        'Trading post', 'Underground cavern', 'Undersea city', 'Volcanic forge',
        'Volcano crater', 'Warlock pact', 'Warrior guild', 'Whispering woods',
        'Witch hut', 'Wizard tower'
    ];
    
    const location = locations[Math.floor(Math.random() * locations.length)];
    const placeName = generateFantasyPlaceName();
    return { location, placeName };
}

// Fantasy Name Generator
function generateFantasyName() {
    const fantasyNames = [
        'Aelar', 'Alistair', 'Arion', 'Aster', 'Aurelia',
        'Bastian', 'Branwen', 'Brianna', 'Briar', 'Bryn',
        'Caelum', 'Cassian', 'Cora', 'Cressida', 'Cyrus',
        'Daphne', 'Darian', 'Delphine', 'Dorian', 'Draven',
        'Eamon', 'Eira', 'Elara', 'Elowen', 'Evan',
        'Faelan', 'Fenris', 'Fiora', 'Finnian', 'Freya',
        'Galen', 'Gareth', 'Ginevra', 'Griffin', 'Gwendolyn',
        'Haldir', 'Haven', 'Hazel', 'Helena', 'Ione',
        'Iris', 'Isolde', 'Ivor', 'Jareth', 'Jasper',
        'Jocelyn', 'Juno', 'Kaida', 'Kael', 'Kaelen',
        'Kaelith', 'Lilith', 'Liora', 'Luna', 'Lysander',
        'Maeve', 'Mireille', 'Morgana', 'Morwen', 'Nerys',
        'Niamh', 'Nova', 'Nyx', 'Oberon', 'Orin',
        'Orion', 'Orla', 'Percival', 'Persephone', 'Phaedra',
        'Pryderi', 'Quentin', 'Quinn', 'Quorra', 'Raven',
        'Rhiannon', 'Riven', 'Rowan', 'Sable', 'Seraphina',
        'Soren', 'Sylvia', 'Tamsin', 'Thalia', 'Theron',
        'Tristan', 'Umbriel', 'Una', 'Urien', 'Ursula',
        'Vance', 'Varian', 'Vespera', 'Violet', 'Willow',
        'Wren', 'Wynne', 'Xander', 'Xanthe', 'Xenia',
        'Xylia', 'Yara', 'Yarrow', 'Yseult', 'Yvaine',
        'Zane', 'Zelda', 'Zephyr', 'Zinnia'
    ];
    return fantasyNames[Math.floor(Math.random() * fantasyNames.length)];
}

// Space Location Generator
function generateSpaceLocation() {
    const locations = [
        'AI core', 'Airlock', 'Alien ruins', 'Android colony',
        'Archive', 'Arcology', 'Asteroid field', 'Atmospheric processor',
        'Augmentation clinic', 'Battlecruiser', 'Biodome', 'Black hole',
        'Border outpost', 'Bridge', 'Cargo bay', 'Cargo freighter',
        'Capital city', 'Clairvoyance lab', 'Cloning facility', 'Colony ship',
        'Command center', 'Comms relay', 'Consulate', 'Control room',
        'Core world', 'Corridor', 'Cryo chamber', 'Cyberspace',
        'Cyborg enclave', 'Database', 'Data stream', 'Derelict ship',
        'Diplomatic station', 'Docking port', 'Drone hive', 'Dry dock',
        'Dyson sphere', 'Embassy', 'Engine room', 'Engineering bay',
        'Exploration vessel', 'Frontier world', 'Fuel depot', 'Galaxy cluster',
        'Generation ship', 'Genetic lab', 'Gravity generator', 'Gravity well',
        'Hangar bay', 'Holographic environment', 'Homeworld', 'Illusion matrix',
        'Launch bay', 'Library', 'Life support', 'Mainframe',
        'Medical bay', 'Megastructure', 'Memorial', 'Mess hall',
        'Metropolis', 'Military base', 'Mind network', 'Mining colony',
        'Moon base', 'Museum', 'Nanite swarm', 'Nebula',
        'Neural interface', 'Neutral zone', 'Network hub', 'Observatory',
        'Operations deck', 'Orbital habitat', 'Parallel dimension',
        'Planet surface', 'Pocket dimension', 'Precog facility', 'Projection field',
        'Psionic chamber', 'Quantum anomaly', 'Quarters', 'Reactor core',
        'Reality bubble', 'Recreation area', 'Repair dock', 'Research outpost',
        'Ring world', 'Robotics factory', 'Science lab', 'Server farm',
        'Shipyard', 'Simulation world', 'Solar system', 'Space station',
        'Stasis pod', 'Telepathic nexus', 'Temporal rift', 'Terraforming project',
        'Time dilation field', 'Trading hub', 'Virtual reality', 'Weather control',
        'Wormhole'
    ];
    
    const location = locations[Math.floor(Math.random() * locations.length)];
    const placeName = generateSpaceName();
    return { location, placeName };
}

// Fantasy NPC Generator
function generateFantasyNPC() {
    const personalities = [
        'Ambitious', 'Arrogant', 'Brave', 'Chivalrous', 'Common',
        'Content', 'Cowardly', 'Cunning', 'Curious', 'Deceitful',
        'Emotional', 'Foolish', 'Generous', 'Greedy', 'Heretical',
        'Honest', 'Humble', 'Impulsive', 'Loyal', 'Mystical',
        'Noble', 'Obedient', 'Patient', 'Pious', 'Playful',
        'Practical', 'Rebellious', 'Serious', 'Stoic', 'Suspicious',
        'Traditional', 'Treacherous', 'Trusting', 'Wanderlust', 'Wise', 'Witty'
    ];
    
    const descriptors = [
        'Aged', 'Agile', 'Bald', 'Bearded', 'Broad-shouldered',
        'Clean-shaven', 'Clumsy', 'Curly-haired', 'Delicate', 'Elderly',
        'Elegant', 'Freckled', 'Graceful', 'Imposing', 'Lanky',
        'Lean', 'Long-haired', 'Middle-aged', 'Muscular', 'Pale',
        'Petite', 'Plain', 'Rugged', 'Scarred', 'Short',
        'Slender', 'Stocky', 'Stout', 'Striking', 'Tall',
        'Tanned', 'Tattooed', 'Unassuming', 'Vibrant', 'Weathered', 'Youthful'
    ];
    
    const roles = [
        'Advisor', 'Artisan', 'Assassin', 'Bard', 'Blacksmith',
        'Commoner', 'Diplomat', 'Druid', 'Explorer', 'Farmer',
        'Fisher', 'Guard', 'Healer', 'Hunter', 'Knight',
        'Mage', 'Mercenary', 'Merchant', 'Miner', 'Monk',
        'Necromancer', 'Noble', 'Paladin', 'Peasant', 'Priest',
        'Ranger', 'Rogue', 'Royal', 'Scholar', 'Soldier',
        'Sorcerer', 'Spy', 'Trader', 'Warlock', 'Warrior', 'Wizard'
    ];
    
    const name = generateFantasyName();
    const personality = personalities[Math.floor(Math.random() * personalities.length)];
    const descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    
    return { name, personality, descriptor, role };
}

// Space Name Generator (100 syllables)
function generateSpaceName() {
    const nameFragments = [
        'arn', 'ban', 'bel', 'bor', 'cet',
        'cor', 'cron', 'dak', 'dax', 'del',
        'dra', 'dun', 'el', 'eth', 'fal',
        'fen', 'fir', 'gar', 'gol', 'gorn',
        'gur', 'hal', 'han', 'hax', 'hyl',
        'il', 'ion', 'ir', 'jax', 'jon',
        'jorn', 'jot', 'karn', 'kel', 'kor',
        'kra', 'kyl', 'laa', 'lan', 'lor',
        'lorn', 'lyn', 'max', 'mek', 'mir',
        'mor', 'ner', 'nex', 'nil', 'nor',
        'norn', 'nys', 'ol', 'or', 'par',
        'pax', 'pel', 'peln', 'pyr', 'qarn',
        'qix', 'qor', 'qun', 'qua', 'rak',
        'ran', 'reln', 'ryl', 'ryn', 'sar',
        'sol', 'sorn', 'syl', 'syn', 'tan',
        'teln', 'tir', 'tor', 'tri', 'tyr',
        'ul', 'ur', 'urn', 'val', 'van',
        'var', 'vax', 'veln', 'vex', 'vor',
        'wel', 'wol', 'worn', 'wyn', 'xan',
        'xel', 'xeln', 'xen', 'xir', 'yor',
        'yol', 'yorn', 'yul', 'zar', 'zen',
        'zi', 'zir', 'zyl'
    ];
    
    // Randomly choose between 2 or 3 parts
    const numParts = Math.random() < 0.7 ? 2 : 3;
    const parts = [];
    
    for (let i = 0; i < numParts; i++) {
        let fragment;
        do {
            fragment = nameFragments[Math.floor(Math.random() * nameFragments.length)];
        } while (parts.includes(fragment)); // Avoid duplicate fragments
        parts.push(fragment);
    }
    
    return parts.join('');
}

// Space NPC Generator
function generateSpaceNPC() {
    const personalities = [
        'Ambitious', 'Anxious', 'Arrogant', 'Brave', 'Calculating',
        'Cautious', 'Confident', 'Creative', 'Curious', 'Deceptive',
        'Emotional', 'Friendly', 'Generous', 'Greedy', 'Honest',
        'Hostile', 'Humble', 'Impulsive', 'Indifferent', 'Intuitive',
        'Logical', 'Loyal', 'Methodical', 'Obedient', 'Optimistic',
        'Patient', 'Pessimistic', 'Playful', 'Rebellious', 'Serious',
        'Stoic', 'Suspicious', 'Traditional', 'Treacherous', 'Trusting', 'Witty'
    ];
    
    const descriptors = [
        'Aged', 'Agile', 'Bald', 'Bearded', 'Broad-shouldered',
        'Clean-shaven', 'Clumsy', 'Elderly', 'Elegant', 'Enhanced',
        'Freckled', 'Graceful', 'Imposing', 'Lanky', 'Lean',
        'Middle-aged', 'Muscular', 'Pale', 'Petite', 'Plain',
        'Rugged', 'Scarred', 'Short', 'Short-haired', 'Slender',
        'Slick-haired', 'Stocky', 'Stout', 'Striking', 'Tall',
        'Tanned', 'Tattooed', 'Unassuming', 'Vibrant', 'Weathered', 'Youthful'
    ];
    
    const roles = [
        'Alien', 'Ambassador', 'Android', 'Astrophysicist', 'Augmented',
        'Bounty Hunter', 'Captain', 'Colonist', 'Cyberneticist', 'Cyborg',
        'Diplomat', 'Engineer', 'Explorer', 'Hacker', 'Marine',
        'Mechanic', 'Medic', 'Merchant', 'Mutant', 'Pilot',
        'Pirate', 'Precog', 'Programmer', 'Psychic', 'Scientist',
        'Scout', 'Security', 'Settler', 'Smuggler', 'Soldier',
        'Specialist', 'Surveyor', 'Technician', 'Telepath', 'Trader', 'Xenobiologist'
    ];
    
    const name = generateSpaceName();
    const personality = personalities[Math.floor(Math.random() * personalities.length)];
    const descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    
    return { name, personality, descriptor, role };
}

// Fantasy Random Event Generator
function generateFantasyEvent() {
    // Subjects for encounters
    const encounterSubjects = [
        'Alchemist', 'Bandits', 'Bards', 'Bounty hunter', 'Cultists',
        'Entertainment troupe', 'Escaped prisoners', 'Friendly merchant',
        'Knight', 'Locals', 'Locals with discovery', 'Lone survivor',
        'Lost child', 'Lost scholar', 'Mage', 'Mercenaries',
        'Messenger', 'Monk', 'Mysterious fortune teller', 'Mysterious hermit',
        'Noble with entourage', 'Patrol', 'Pilgrims', 'Pilgrims on holy quest',
        'Ranger', 'Rebels', 'Refugees', 'Rival adventuring party',
        'Shapeshifter', 'Smugglers', 'Suspicious merchant', 'Thief',
        'Traveling diplomat', 'Traveling healer', 'Wandering minstrel', 'Workers'
    ];
    
    // Additional info for encounters
    const encounterInfo = [
        'ambush?', 'asking questions?', 'attacks?', 'eating?',
        'escaped?', 'intimidating?', 'just passing by?', 'local?',
        'needing escort?', 'needing help?', 'offering assistance?',
        'offering goods?', 'offering services?', 'offering wisdom?',
        'on a quest?', 'performing ritual?', 'planning something?',
        'recounting urgent news?', 'resting?', 'seeking knowledge?',
        'seeking protection?', 'secretive?', 'sharing findings?',
        'sharing news?', 'tracking someone?', 'trying to steal?',
        'wanting help with a quest?', 'with potions?', 'with rare goods?', 'working?'
    ];
    
    // Subjects for obstructions
    const obstructionSubjects = [
        'Collapsed bridge', 'Complex lock', 'Complex mechanism',
        'False floor', 'False treasure', 'Falling ceiling trap',
        'Hidden compartment', 'Hidden door', 'Hidden pit trap',
        'Magical barrier', 'Magical glyph', 'Magical illusion',
        'Magical lock/barrier', 'Magical statue', 'Maze of corridors',
        'Net trap', 'Poison dart trap', 'Portcullis', 'Pressure plate',
        'Riddle', 'Rolling boulder', 'Secret passage', 'Spike pit',
        'Swinging blade trap', 'Tripwire'
    ];
    
    // Additional info for obstructions
    const obstructionInfo = [
        'activates?', 'captures someone?', 'causes confusion?',
        'chain reaction?', 'discovered?', 'found?', 'invisible?',
        'looks fake?', 'poorly crafted?', 'requires sacrifice?',
        'requires specific item?', 'revealed?', 'suddenly appears?',
        'triggers a memory?', 'triggers alarm?'
    ];
    
    // Hazards
    const hazards = [
        'Cursed area', 'Earthquake', 'Fire', 'Flash flood',
        'Fog/mist', 'Geyser', 'Gust of wind', 'Lightning',
        'Magical darkness', 'Magical field', 'Magical field causes memory loss',
        'Magical silence', 'Magical storm', 'Poisonous plant',
        'Sinkhole', 'Sleep spell', 'Sudden rockslide',
        'Sudden temperature drop', 'Swarm of insects'
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'Forgotten shrine', 'Friendly animal', 'Helpful NPC',
        'Helpful spirit', 'Hidden cache of supplies', 'Lucky find',
        'Magical blessing', 'Sudden insight', 'Surprising ally'
    ];
    
    const neutralEvents = [
        'Meaningful vision', 'Mysterious note', 'Recall a forgotten memory',
        'Strange coincidence', 'Strange omen', 'Sudden realization'
    ];
    
    const badEvents = [
        'Ally behaves oddly', 'Bad omen', 'Discover a dangerous secret',
        'Feeling of unease', 'Foreboding vision', 'Mysterious illness',
        'Shadowy figure in the distance', 'Something gets damaged',
        'Something goes missing', 'Terrible nightmare'
    ];
    
    const miscellaneous = [...goodEvents, ...neutralEvents, ...badEvents];
    
    // Combine all categories
    const allEvents = [...hazards, ...miscellaneous];
    
    // Randomly decide which format to use
    const randomChoice = Math.random();
    
    let mainText;
    let extraText;
    let eventType;
    
    if (randomChoice < 0.33) {
        // Use the new "Subject (additional info?)" format for encounters
        mainText = encounterSubjects[Math.floor(Math.random() * encounterSubjects.length)];
        extraText = encounterInfo[Math.floor(Math.random() * encounterInfo.length)];
        eventType = 'Fantasy Encounter';
    } else if (randomChoice < 0.66) {
        // Use the new "Subject (additional info?)" format for obstructions
        mainText = obstructionSubjects[Math.floor(Math.random() * obstructionSubjects.length)];
        extraText = obstructionInfo[Math.floor(Math.random() * obstructionInfo.length)];
        eventType = 'Fantasy Obstacle';
    } else {
        // Use existing format for hazards and miscellaneous events
        const event = allEvents[Math.floor(Math.random() * allEvents.length)];
        mainText = event;
        extraText = '';
        // Determine type for hazards and miscellaneous
        if (hazards.includes(event)) {
            eventType = 'Fantasy Hazard';
        } else {
            eventType = 'Fantasy Event';
        }
    }
    
    return { mainText, extraText, type: eventType };
}

// Fantasy Plot Hook Generator
function generateFantasyPlotHook() {
    const verbs = [
        'Awaken', 'Banish', 'Break', 'Capture', 'Cure',
        'Decode', 'Defeat', 'Defend', 'Deliver', 'Destroy',
        'Discover', 'Escape', 'Explore', 'Find', 'Follow',
        'Guard', 'Heal', 'Hunt', 'Infiltrate', 'Investigate',
        'Negotiate', 'Persuade', 'Protect', 'Recover', 'Repair',
        'Rescue', 'Retrieve', 'Sabotage', 'Steal', 'Stop',
        'Survive', 'Transport', 'Uncover'
    ];
    
    const adjectives = [
        'ancient', 'blood', 'broken', 'captured', 'celestial',
        'collapsing', 'corrupted', 'cryptic', 'crystal', 'cursed',
        'dark', 'defensive', 'demonic', 'dragon', 'dream',
        'elemental', 'enemy', 'enslaved', 'evil', 'family',
        'forbidden', 'forgotten', 'forest', 'frontier', 'ghostly',
        'haunted', 'hidden', 'holy', 'kidnapped', 'labyrinth',
        'legendary', 'lost', 'magic', 'magical', 'mind',
        'monstrous', 'mountain', 'mysterious', 'oracle', 'peace',
        'philosopher', 'planar', 'plague', 'poisoned', 'prophetic',
        'protective', 'ritual', 'rogue', 'royal', 'rival',
        'sacred', 'secret', 'shadow', 'sleeping', 'soul',
        'spy', 'star', 'stone', 'stolen', 'strange',
        'sunken', 'time', 'trapped', 'undead', 'underground',
        'vital', 'weather', 'wounded'
    ];
    
    const nouns = [
        'amulet', 'anomaly', 'apparition', 'artifact', 'barrier',
        'beast', 'being', 'breach', 'bridge', 'cave',
        'champion', 'city', 'colony', 'contract', 'control',
        'conspiracy', 'corruption', 'creature', 'crown', 'cult',
        'curse', 'demon', 'device', 'disappearances', 'dragon',
        'dream', 'egg', 'fountain', 'giant', 'god',
        'grove', 'guardian', 'heir', 'heirloom', 'history',
        'identity', 'idol', 'invasion', 'king', 'knowledge',
        'laborinth', 'land', 'language', 'library', 'lights',
        'lord', 'mage', 'map', 'message', 'mine',
        'network', 'offering', 'oracle', 'pass', 'passage',
        'plague', 'plans', 'portal', 'predator', 'presence',
        'prison', 'prophecy', 'realm', 'relic', 'ritual',
        'ruins', 'sanctuary', 'seal', 'settlement', 'site',
        'spell', 'spirit', 'stone', 'storm', 'summoning',
        'sword', 'technique', 'temple', 'terms', 'throne',
        'treaty', 'tree', 'tribe', 'treasure', 'villagers',
        'wall', 'ward', 'weapon', 'wedding'
    ];
    
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return { mainText: `${verb} ${noun}`, extraText: adjective };
}

// Space Plot Hook Generator
function generateSpacePlotHook() {
    const verbs = [
        'Awaken', 'Banish', 'Break', 'Cure', 'Decode',
        'Defeat', 'Defend', 'Deliver', 'Destroy', 'Discover',
        'Escape', 'Explore', 'Find', 'Follow', 'Guard',
        'Heal', 'Hunt', 'Investigate', 'Negotiate', 'Protect',
        'Recover', 'Repair', 'Rescue', 'Retrieve', 'Sabotage',
        'Steal', 'Stop', 'Survive', 'Transport', 'Uncover'
    ];
    
    const adjectives = [
        'alien', 'ambassador', 'ancient', 'asteroid', 'black',
        'captured', 'cargo', 'comet', 'comms', 'corporate',
        'cosmic', 'cryo-sleep', 'cybernetic', 'deep space', 'derelict',
        'diplomatic', 'distant', 'dormant', 'ecosystem', 'emergency',
        'encryption', 'energy', 'false', 'fuel', 'generation',
        'genetic', 'ghost', 'gravity', 'hacking', 'hidden',
        'hostile', 'illegal', 'interstellar', 'life support', 'listening',
        'lost', 'medical', 'memory', 'military', 'mining',
        'nanite', 'nebula', 'orbital', 'parasitic', 'peace',
        'pirate', 'planetary', 'plague', 'prototype', 'quantum',
        'radiation', 'reactor', 'rescue', 'research', 'rival',
        'rogue', 'security', 'sensor', 'signal', 'smuggling',
        'solar', 'space', 'star', 'stolen', 'stranded',
        'superweapon', 'terraforming', 'time', 'trade', 'trading',
        'wormhole'
    ];
    
    const nouns = [
        'agenda', 'agreement', 'AI', 'ambassador', 'anomaly',
        'array', 'artifact', 'asteroid', 'asteroid field', 'base',
        'battlecruiser', 'being', 'black box', 'blockade', 'captain',
        'channel', 'charts', 'code', 'colony', 'colonists',
        'computer', 'conspiracy', 'convoy', 'corporation', 'crew',
        'data core', 'defense', 'depot', 'diplomat', 'dilation',
        'drone swarm', 'drive', 'ecosystem', 'elevator', 'entity',
        'envoy', 'fleet', 'flare', 'gate', 'generation ship',
        'hole', 'identity', 'impact', 'infection', 'language',
        'meltdown', 'mercenaries', 'organism', 'outbreak', 'outpost',
        'plans', 'point', 'post', 'project', 'protocol',
        'raid', 'relay', 'relic', 'research', 'ring',
        'samples', 'satellite', 'scientist', 'sector', 'shield',
        'ship', 'shipment', 'sickness', 'signal', 'source',
        'space station', 'specimen', 'starship', 'storm', 'summit',
        'supplies', 'system', 'tech', 'technology', 'trail',
        'transmission', 'virus', 'weapon', 'well', 'wipe', 'wormhole'
    ];
    
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return { mainText: `${verb} ${noun}`, extraText: adjective };
}

// Main Plot Hook Generator (handles theme selection)
function generatePlotHook(theme = 'fantasy') {
    if (theme === 'space') {
        return generateSpacePlotHook();
    } else {
        return generateFantasyPlotHook();
    }
}

// Space Random Event Generator
function generateSpaceEvent() {
    // Subjects for encounters
    const encounterSubjects = [
        'Alien/stranger', 'Bounty hunter', 'Colonists', 'Cult ship',
        'Diplomatic envoy', 'Diplomatic ship', 'Distress call',
        'Entertainers', 'Escaped prisoners', 'Friendly trader',
        'Hidden data cache', 'Laborers', 'Lone explorer', 'Lone scout',
        'Lone survivor', 'Lost scientist', 'Medics', 'Mercenaries',
        'Merchant', 'Messenger drone', 'Pilgrims', 'Pirates',
        'Rebel cell', 'Refugees', 'Researchers', 'Rivals',
        'Scavengers', 'Scientist', 'Security patrol', 'Shapeshifter/master of disguise',
        'Smugglers', 'Spiritual practitioner', 'Spy', 'Suspicious character',
        'Suspicious dealer', 'Wormhole'
    ];
    
    // Additional info for encounters
    const encounterInfo = [
        'at work?', 'attacking?', 'celebrating?', 'crosses paths?',
        'demands surrender?', 'escaped?', 'from civilian ship?',
        'has questions?', 'has strange ore?', 'has urgent data?',
        'infiltrating?', 'makes a discovery?', 'makes threats?',
        'needs escort?', 'needs rescue?', 'offers help?',
        'offers services?', 'offers supplies?', 'on a mission?',
        'on spiritual quest?', 'performing experiments?', 'performing rituals?',
        'planning an operation?', 'scavenging debris?', 'seeks protection?',
        'shares discoveries?', 'shares wisdom?', 'suddenly appears?',
        'tracking something?', 'wants assistance?', 'with illegal tech?', 'with rare tech?'
    ];
    
    // Subjects for obstructions
    const obstructionSubjects = [
        'Biometric lock', 'Cloaking field', 'Collapsing tunnel',
        'Complex circuit', 'Complex security system', 'Computer malfunction',
        'Data encryption', 'Debris field', 'DNA lock', 'Energy barrier',
        'False data package', 'False floor', 'Falling ceiling',
        'Force field', 'Gas trap', 'Hidden compartment', 'Hidden minefield',
        'Holographic illusion', 'Honeypot', 'Laser grid trap',
        'Logic puzzle', 'Malfunctioning robot', 'Motion sensor',
        'Neural interface', 'Pressure plate', 'Proximity sensor',
        'Psychic barrier', 'Quantum encryption', 'Robotic guardian',
        'Secret passage', 'Security door', 'Security drone',
        'Technological test', 'Tricky maze/asteroid field', 'Voice recognition system'
    ];
    
    // Additional info for obstructions
    const obstructionInfo = [
        'activates?', 'blocks the way?', 'confusing?', 'detected?',
        'double-cross?', 'fails?', 'fake?', 'is broken?',
        'needs repair?', 'sabotage?', 'suddenly appears?', 'triggers defenses?'
    ];
    
    // Hazards
    const hazards = [
        'Confusing quantum anomaly', 'Dark matter cloud obscures sensors',
        'Dimensional instability', 'Gravitational anomaly', 'Gravity well',
        'Magnetic field disruption', 'Meteor swarm', 'Plasma discharge',
        'Psychic energy field', 'Radiation spike (leak?)', 'Radiation storm',
        'Reality distortion field', 'Rogue asteroid field', 'Sensor interference',
        'Solar flare', 'Spatial rift opens nearby', 'Subspace interference pattern',
        'Subspace rift appears', 'Sudden EMP blast disables systems',
        'Sudden energy drain', 'Sudden ion storm (damages electronics)',
        'Sudden pressure change', 'Sudden system overload',
        'Sudden temperature fluctuation', 'Temporal distortion field'
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'Advanced technology', 'Ally offers help', 'Ally ship appears',
        'Found a shortcut', 'Friendly alien/stranger', 'Helpful AI',
        'Helpful dream', 'Helpful hologram appears', 'Helpful signal appears',
        'Hidden skill revealed', 'Hidden supply cache', 'Stroke of cosmic luck',
        'Sudden insight', 'Sudden realization', 'Sudden research breakthrough',
        'Unexpected resources', 'Valuable data'
    ];
    
    const neutralEvents = [
        'Forgotten memory returns', 'Mysterious data packet discovered',
        'Strange phenomenon appears', 'Sudden solar flare',
        'The situation is not as it appeared'
    ];
    
    const badEvents = [
        'Alarms ring out', 'Ally acts strangely', 'Crew member feels sick',
        'Dangerous data found', 'Data is corrupted', 'Frightening prophecy/news decoded',
        'Mysterious system virus', 'Nightmares', 'Sensors show intermittent ghost blips',
        'Shadowy threat follows at distance', 'Something/someone disappears',
        'Terrifying vision', 'Unwanted transmission received', 'Valuable component malfunctions'
    ];
    
    const miscellaneous = [...goodEvents, ...neutralEvents, ...badEvents];
    
    // Combine all categories
    const allEvents = [...hazards, ...miscellaneous];
    
    // Randomly decide which format to use
    const randomChoice = Math.random();
    
    let mainText;
    let extraText;
    let eventType;
    
    if (randomChoice < 0.33) {
        // Use the new "Subject (additional info?)" format for encounters
        mainText = encounterSubjects[Math.floor(Math.random() * encounterSubjects.length)];
        extraText = encounterInfo[Math.floor(Math.random() * encounterInfo.length)];
        eventType = 'Space Encounter';
    } else if (randomChoice < 0.66) {
        // Use the new "Subject (additional info?)" format for obstructions
        mainText = obstructionSubjects[Math.floor(Math.random() * obstructionSubjects.length)];
        extraText = obstructionInfo[Math.floor(Math.random() * obstructionInfo.length)];
        eventType = 'Space Obstacle';
    } else {
        // Use existing format for hazards and miscellaneous events
        const event = allEvents[Math.floor(Math.random() * allEvents.length)];
        mainText = event;
        extraText = '';
        // Determine type for hazards and miscellaneous
        if (hazards.includes(event)) {
            eventType = 'Space Hazard';
        } else {
            eventType = 'Space Event';
        }
    }
    
    return { mainText, extraText, type: eventType };
}

// Attach functions to window object for global access
window.generatePlotHook = generatePlotHook;
window.generateFantasyPlotHook = generateFantasyPlotHook;
window.generateSpacePlotHook = generateSpacePlotHook;
window.generateFantasyLocation = generateFantasyLocation;
window.generateSpaceLocation = generateSpaceLocation;
window.generateFantasyNPC = generateFantasyNPC;
window.generateSpaceNPC = generateSpaceNPC;
window.generateFantasyEvent = generateFantasyEvent;
window.generateSpaceEvent = generateSpaceEvent;
window.getRandomAction = getRandomAction;
window.getRandomTheme = getRandomTheme;