// Common word generators
function getRandomAction() {
    const actions = [
        'Attack', 'Defend', 'Investigate', 'Negotiate', 'Explore',
        'Create', 'Destroy', 'Protect', 'Betray', 'Help',
        'Hide', 'Reveal', 'Transform', 'Escape', 'Confront',
        'Pursue', 'Evade', 'Ambush', 'Rescue', 'Sabotage',
        'Infiltrate', 'Extract', 'Interrogate', 'Bargain', 'Threaten',
        'Charm', 'Deceive', 'Persuade', 'Intimidate', 'Inspire',
        'Heal', 'Curse', 'Bless', 'Summon', 'Banish',
        'Teleport', 'Fly', 'Crawl', 'Climb', 'Dig',
        'Build', 'Repair', 'Break', 'Lock', 'Unlock',
        'Search', 'Find', 'Lose', 'Gain', 'Give',
        'Take', 'Steal', 'Buy', 'Sell', 'Trade',
        'Learn', 'Teach', 'Study', 'Research', 'Experiment',
        'Invent', 'Discover', 'Forget', 'Remember', 'Dream',
        'Wake', 'Sleep', 'Rest', 'Work', 'Play',
        'Celebrate', 'Mourn', 'Laugh', 'Cry', 'Sing',
        'Dance', 'Fight', 'Flee', 'Stand', 'Fall',
        'Raise', 'Ascend', 'Descend', 'Enter', 'Exit',
        'Arrive', 'Depart', 'Follow', 'Lead', 'Guide',
        'Command', 'Obey', 'Rebel', 'Submit', 'Resist',
        'Change', 'Preserve', 'Adapt', 'Evolve', 'Regress',
        'Analyze', 'Combine', 'Divide', 'Heal', 'Enforce', 
        'Burn', 'Freeze', 'Build', 'Exhibit', 'Inspire',
    ];
    return actions[Math.floor(Math.random() * actions.length)];
}

function getRandomTheme() {
    const themes = [
        'Love', 'Betrayal', 'Power', 'Justice', 'Revenge',
        'Discovery', 'Sacrifice', 'Redemption', 'Corruption', 'Hope',
        'Fear', 'Loyalty', 'Freedom', 'Destiny', 'Chaos',
        'Order', 'Balance', 'Imbalance', 'Harmony', 'Discord',
        'Peace', 'War', 'Life', 'Death', 'Rebirth',
        'Time', 'Space', 'Reality', 'Illusion', 'Truth',
        'Deception', 'Wisdom', 'Ignorance', 'Knowledge', 'Secrets',
        'Light', 'Darkness', 'Shadow', 'Radiance', 'Twilight',
        'Nature', 'Civilization', 'Technology', 'Mystery', 'Science',
        'Faith', 'Doubt', 'Belief', 'Skepticism', 'Certainty',
        'Courage', 'Cowardice', 'Bravery', 'Fearlessness', 'Timidity',
        'Strength', 'Weakness', 'Power', 'Helplessness', 'Control',
        'Freedom', 'Oppression', 'Liberation', 'Domination', 'Independence',
        'Friendship', 'Animosity', 'Alliance', 'Rivalry', 'Partnership',
        'Family', 'Loneliness', 'Community', 'Isolation', 'Connection',
        'Wealth', 'Poverty', 'Abundance', 'Scarcity', 'Prosperity',
        'Health', 'Sickness', 'Vitality', 'Decay', 'Recovery',
        'Youth', 'Age', 'Innocence', 'Experience', 'Naivete',
        'Beauty', 'Ugliness', 'Agility', 'Clumsiness', 'Elegance',
        'Honor', 'Disgrace', 'Integrity', 'Treachery', 'Nobility',
        'Fate', 'Chance', 'Luck', 'Misfortune', 'Fortune'
    ];
    return themes[Math.floor(Math.random() * themes.length)];
}

// Fantasy Place Name Generator
function generateFantasyPlaceName() {
    const prefixes = [
        'Silver', 'Golden', 'Iron', 'Crystal', 'Shadow', 'Light', 'Dark', 'Bright',
        'Moon', 'Sun', 'Star', 'Sky', 'Cloud', 'Storm', 'Wind', 'River',
        'Forest', 'Wood', 'Stone', 'Mountain', 'Valley', 'Hill', 'Lake', 'Sea',
        'Oak', 'Pine', 'Willow', 'Maple', 'Cedar', 'Birch', 'Ash', 'Elm',
        'Ancient', 'Old', 'New', 'Great', 'Little', 'High', 'Low', 'Deep',
        'White', 'Black', 'Red', 'Blue', 'Green', 'Gray', 'Purple', 'Gold',
        'Dragon', 'Phoenix', 'Griffin', 'Unicorn', 'Wolf', 'Bear', 'Eagle', 'Hawk',
        'Royal', 'Imperial', 'Noble', 'Common', 'Sacred', 'Holy', 'Blessed', 'Cursed',
        'Mystic', 'Magic', 'Enchanted', 'Eldritch', 'Arcane', 'Divine', 'Celestial ', 'Infernal ',
        'Whispering ', 'Silent', 'Echo', 'Singing', 'Dancing', 'Flying', 'Running', 'Sleeping',
        'Lost ', 'Forgotten ', 'Hidden ', 'Secret ', 'Forbidden ', 'Abandoned ', 'Ruined ', 'Deserted '
    ];
    
    const suffixes = [
        'wood', ' forest', 'glade', 'grove', 'vale', ' valley', ' hill', ' mountain',
        'peak', 'ridge', 'cliff', 'crag', 'stone', 'cave',
        ' cavern', ' grotto', 'hollow', 'burrow', 'warren',
        'brook', 'stream', ' river', ' lake', ' spring',
        'field', 'meadow', 'plain', 'prairie', 'marsh', 'swamp', 'bog', 'fen',
        'shore', 'beach', 'bay', 'harbor', 'port', 'dock', 'pier',
        'ton', ' town', ' city', 'burg', 'ville', ' colony',
        ' keep', ' fort', ' castle', ' tower', ' palace', ' manor', ' estate', 'hall',
        'bridge', 'crossing', 'ford', ' pass', 'gate', 'way',
        ' temple', 'shrine', ' altar', ' sanctuary', ' abbey', ' monastery', ' cathedral', ' chapel',
        ' academy', 'garden', 'park', ' vineyard', 'farm', 'mill', 'forge',
        'mine', ' quarry', 
    ];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${prefix}${suffix}`;
}

// Fantasy Location Generator
function generateFantasyLocation() {
    const locations = [
        'Ancient ruins', 'Bustling market', 'Secluded forest', 'Underground cavern',
        'Floating island', 'Desert oasis', 'Mountain peak', 'Abandoned temple',
        'Crystal cave', 'Sunken city', 'Floating market', 'Whispering woods',
        'Volcanic forge', 'Lookout', 'Time-lost library',
        'Enchanted grove', 'Dragon lair', 'Royal castle', 'Wizard tower',
        'Haunted mansion', 'Sacred temple', 'Goblin camp', 'Elven city',
        'Dwarven mine', 'Orc fortress', 'Fairy circle', 'Mystic waterfall',
        'Cursed swamp', 'Golden palace', 'Silver lake', 'Iron fortress',
        'Crystal palace', 'Shadow realm', 'Dream realm', 'Elemental plane',
        'Celestial realm', 'Infernal pit', 'Feywild', 'Shadowfell',
        'Astral sea', 'Ethereal plane', 'Material plane', 'Divine realm',
        'Ancient battlefield', 'Lost civilization', 'Hidden valley', 'Forbidden city',
        'Mystic academy', 'Alchemist lab', 'Necromancer tower', 'Paladin stronghold',
        'Ranger outpost', 'Bard college', 'Druid circle', 'Monk monastery',
        'Rogue hideout', 'Warrior guild', 'Merchant caravan', 'Pilgrim shrine',
        'Oracle cave', 'Prophet temple', 'Seer tower', 'Witch hut',
        'Sorcerer sanctum', 'Warlock pact', 'Cleric cathedral', 'Priest abbey',
        'Knight barracks', 'Squire training ground', 'Royal court', 'Noble estate',
        'Common village', 'Farming hamlet', 'Fishing port', 'Mining town',
        'Trading post', 'Border fort', 'Coastal city', 'Mountain pass',
        'River crossing', 'Forest path', 'Desert caravan', 'Jungle temple',
        'Arctic outpost', 'Volcano crater', 'Undersea city', 'Remote island',
        'Cloud palace', 'Star observatory', 'Moon temple', 'Sun altar',
        'Dimension rift'
    ];
    
    const location = locations[Math.floor(Math.random() * locations.length)];
    const placeName = generateFantasyPlaceName();
    return { location, placeName };
}

// Fantasy Name Generator
function generateFantasyName() {
    const fantasyNames = [
        'Aelar', 'Brianna', 'Caelum', 'Darian', 'Elara',
        'Faelan', 'Gwendolyn', 'Haldir', 'Isolde', 'Jareth',
        'Kaelen', 'Liora', 'Maeve', 'Niamh', 'Orin',
        'Pryderi', 'Quinn', 'Rhiannon', 'Soren', 'Tamsin',
        'Urien', 'Vespera', 'Wynne', 'Xander', 'Yvaine',
        'Zephyr', 'Alistair', 'Branwen', 'Cassian', 'Daphne',
        'Eamon', 'Fiora', 'Gareth', 'Helena', 'Ivor',
        'Jocelyn', 'Kael', 'Lysander', 'Morgana', 'Nyx',
        'Oberon', 'Persephone', 'Quentin', 'Rowan', 'Seraphina',
        'Tristan', 'Ursula', 'Vance', 'Willow', 'Xanthe',
        'Yara', 'Zelda', 'Arion', 'Bryn', 'Cora',
        'Draven', 'Elowen', 'Finnian', 'Ginevra', 'Haven',
        'Ione', 'Juno', 'Kaelith', 'Luna', 'Mireille',
        'Nerys', 'Orla', 'Percival', 'Quorra', 'Riven',
        'Sable', 'Thalia', 'Umbriel', 'Varian', 'Wren',
        'Xylia', 'Yarrow', 'Zinnia', 'Aurelia', 'Bastian',
        'Cressida', 'Dorian', 'Eira', 'Fenris', 'Galen',
        'Hazel', 'Iris', 'Jasper', 'Kaida', 'Lilith',
        'Morwen', 'Nova', 'Orion', 'Phaedra', 'Raven',
        'Sylvia', 'Theron', 'Una', 'Violet', 'Wyatt',
        'Xenia', 'Yseult', 'Zane', 'Aster', 'Briar',
        'Cyrus', 'Delphine', 'Evan', 'Freya', 'Griffin'
    ];
    return fantasyNames[Math.floor(Math.random() * fantasyNames.length)];
}

// Space Location Generator
function generateSpaceLocation() {
    const locations = [
        'Space station', 'Asteroid field', 'Planet surface', 'Moon base',
        'Wormhole', 'Nebula', 'Black hole', 'Solar system',
        'Galaxy cluster', 'Dyson sphere', 'Ring world', 'Orbital habitat',
        'Research outpost', 'Mining colony', 'Trading hub', 'Military base',
        'Alien ruins', 'Derelict ship', 'Generation ship', 'Colony ship',
        'Battlecruiser', 'Exploration vessel', 'Cargo freighter', 'Science lab',
        'Observatory', 'Comms relay', 'Fuel depot', 'Repair dock',
        'Shipyard', 'Dry dock', 
        'Gravity well', 'Quantum anomaly', 'Temporal rift', 'Parallel dimension',
        'Virtual reality', 'Cyberspace', 'Data stream', 'Network hub',
        'AI core', 'Mainframe', 'Server farm', 'Database',
        'Archive', 'Library', 'Museum', 'Memorial',
        'Embassy', 'Consulate', 'Diplomatic station', 'Neutral zone',
        'Border outpost', 'Frontier world', 'Core world', 'Homeworld',
        'Capital city', 'Metropolis', 'Megastructure', 'Arcology',
        'Biodome', 'Terraforming project', 'Atmospheric processor', 'Weather control',
        'Gravity generator', 'Life support', 'Reactor core', 'Engine room',
        'Bridge', 'Command center', 'Control room', 'Operations deck',
        'Medical bay', 'Science lab', 'Engineering bay', 'Cargo bay',
        'Hangar bay', 'Launch bay', 'Docking port', 'Airlock',
        'Corridor', 'Quarters', 'Mess hall', 'Recreation area',
        'Cryo chamber', 'Stasis pod', 'Cloning facility', 'Genetic lab',
        'Robotics factory', 'Nanite swarm', 'Drone hive', 'Android colony',
        'Cyborg enclave', 'Augmentation clinic', 'Neural interface', 'Mind network',
        'Telepathic nexus', 'Psionic chamber', 'Precog facility', 'Clairvoyance lab',
        'Time dilation field', 'Reality bubble', 'Pocket dimension',
        'Simulation world', 'Holographic environment', 'Projection field', 'Illusion matrix'
    ];
    
    const location = locations[Math.floor(Math.random() * locations.length)];
    const placeName = generateSpaceName();
    return { location, placeName };
}

// Fantasy NPC Generator
function generateFantasyNPC() {
    const personalities = [
        'Chivalrous', 'Cunning', 'Wise', 'Foolish', 'Noble',
        'Common', 'Pious', 'Heretical', 'Brave', 'Cowardly',
        'Loyal', 'Treacherous', 'Generous', 'Greedy', 'Honest',
        'Deceitful', 'Humble', 'Arrogant', 'Patient', 'Impulsive',
        'Stoic', 'Emotional', 'Mystical', 'Practical', 'Curious',
        'Suspicious', 'Trusting', 'Witty', 'Serious', 'Playful',
        'Traditional', 'Rebellious', 'Obedient', 'Ambitious', 'Content', 'Wanderlust'
    ];
    
    const descriptors = [
        'Tall', 'Short', 'Slender', 'Stocky', 'Muscular',
        'Lean', 'Broad-shouldered', 'Petite', 'Lanky', 'Stout',
        'Bald', 'Long-haired', 'Curly-haired', 'Bearded', 'Clean-shaven',
        'Scarred', 'Tattooed', 'Pale', 'Tanned', 'Freckled',
        'Aged', 'Youthful', 'Middle-aged', 'Elderly', 'Vibrant',
        'Weathered', 'Graceful', 'Clumsy', 'Agile', 'Imposing',
        'Unassuming', 'Striking', 'Plain', 'Elegant', 'Rugged', 'Delicate'
    ];
    
    const roles = [
        'Knight', 'Mage', 'Rogue', 'Priest', 'Warrior',
        'Healer', 'Ranger', 'Bard', 'Druid', 'Paladin',
        'Monk', 'Necromancer', 'Sorcerer', 'Warlock', 'Wizard',
        'Assassin', 'Spy', 'Mercenary', 'Guard', 'Soldier',
        'Merchant', 'Trader', 'Artisan', 'Blacksmith', 'Farmer',
        'Noble', 'Commoner', 'Peasant', 'Royal', 'Advisor',
        'Explorer', 'Hunter', 'Fisher', 'Miner', 'Scholar', 'Diplomat'
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
        'zi', 'del', 'laa', 'vor', 'nex', 'qua', 'tri', 'zen', 'kor', 'vax',
        'ryl', 'nys', 'pax', 'tor', 'lyn', 'vex', 'dra', 'syl', 'fen', 'gar',
        'hyl', 'jax', 'kyl', 'mor', 'nor', 'pyr', 'qor', 'ryn', 'syn', 'tyr',
        'val', 'wyn', 'xan', 'yor', 'zyl', 'arn', 'bor', 'cet', 'dak', 'el',
        'fir', 'gol', 'hal', 'ion', 'jot', 'kra', 'lor', 'mek', 'nil', 'or',
        'pel', 'qix', 'rak', 'sol', 'tir', 'ul', 'var', 'wol', 'xir', 'yul',
        'zir', 'ban', 'cor', 'dun', 'eth', 'fal', 'gur', 'han', 'ir', 'jon',
        'kel', 'lan', 'mir', 'ner', 'ol', 'par', 'qun', 'ran', 'sar', 'tan',
        'ur', 'van', 'wel', 'xen', 'yol', 'zar', 'bel', 'cron', 'dax', 'el',
        'fen', 'gorn', 'hax', 'il', 'jorn', 'karn', 'lorn', 'max', 'norn', 'or',
        'peln', 'qarn', 'reln', 'sorn', 'teln', 'urn', 'veln', 'worn', 'xeln', 'yorn'
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
        'Calculating', 'Impulsive', 'Logical', 'Intuitive', 'Confident',
        'Anxious', 'Optimistic', 'Pessimistic', 'Friendly', 'Hostile',
        'Curious', 'Indifferent', 'Honest', 'Deceptive', 'Brave',
        'Cautious', 'Patient', 'Arrogant', 'Humble', 'Generous',
        'Greedy', 'Loyal', 'Treacherous', 'Witty', 'Serious',
        'Playful', 'Stoic', 'Emotional', 'Creative', 'Traditional',
        'Rebellious', 'Obedient', 'Suspicious', 'Trusting', 'Ambitious', 'Methodical'
    ];
    
    const descriptors = [
        'Tall', 'Short', 'Slender', 'Stocky', 'Muscular',
        'Lean', 'Broad-shouldered', 'Petite', 'Lanky', 'Stout',
        'Bald', 'Short-haired', 'Slick-haired', 'Bearded', 'Clean-shaven',
        'Scarred', 'Tattooed', 'Pale', 'Tanned', 'Freckled',
        'Aged', 'Youthful', 'Middle-aged', 'Elderly', 'Vibrant',
        'Weathered', 'Graceful', 'Clumsy', 'Agile', 'Imposing',
        'Unassuming', 'Striking', 'Plain', 'Elegant', 'Rugged', 'Enhanced'
    ];
    
    const roles = [
        'Captain', 'Pilot', 'Engineer', 'Scientist', 'Medic',
        'Soldier', 'Marine', 'Security', 'Diplomat', 'Ambassador',
        'Merchant', 'Trader', 'Smuggler', 'Bounty Hunter', 'Pirate',
        'Explorer', 'Scout', 'Surveyor', 'Colonist', 'Settler',
        'Technician', 'Mechanic', 'Programmer', 'Hacker', 'Cyberneticist',
        'Xenobiologist', 'Astrophysicist', 'Psychic', 'Telepath', 'Precog',
        'Android', 'Cyborg', 'Alien', 'Mutant', 'Augmented', 'Specialist'
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
        'Bandits', 'Friendly merchant', 'Lost child', 'Rival adventuring party',
        'Wandering minstrel', 'Pilgrims', 'Bounty hunter', 'Patrol',
        'Mysterious hermit', 'Refugees', 'Traveling healer', 'Noble with entourage',
        'Locals', 'Messenger', 'Mage', 'Smugglers',
        'Lost scholar', 'Bards', 'Knight', 'Suspicious merchant',
        'Cultists', 'Ranger', 'Escaped prisoners', 'Entertainment troupe',
        'Mysterious fortune teller', 'Pilgrims on holy quest', 'Thief', 'Mercenaries',
        'Monk', 'Alchemist', 'Rebels', 'Lone survivor',
        'Traveling diplomat', 'Workers', 'Shapeshifter', 'Locals with discovery'
    ];
    
    // Additional info for encounters
    const encounterInfo = [
        'ambush?', 'offering goods?', 'needing help?', 'intimidating?',
        'sharing news?', 'seeking protection?', 'tracking someone?', 'asking questions?',
        'offering wisdom?', 'offering services?', 'just passing by?',
        'sharing findings?', 'recounting urgent news?', 'working?',
        'seeking knowledge?', 'local?', 'offering assistance?', 'with rare goods?',
        'performing ritual?', 'escaped?', 'resting?', 'eating?',
        'on a quest?', 'trying to steal?', 
        'with potions?', 'planning something?', 'attacks?',
        'needing escort?', 'secretive?', 'wanting help with a quest?',
    ];
    
    // Subjects for obstructions
    const obstructionSubjects = [
        'Collapsed bridge', 'Hidden pit trap', 'Magical barrier', 'Complex lock',
        'Hidden door', 'Hidden compartment', 'False floor', 'Secret passage', 
        'Riddle', 'Pressure plate', 'Complex mechanism', 'Tripwire', 
        'Maze of corridors', 'Portcullis', 
        'Swinging blade trap', 'Rolling boulder', 'Poison dart trap', 
        'Net trap', 'Spike pit', 'Falling ceiling trap', 
        'False treasure', 
        'Magical illusion', 'Magical glyph', 'Magical statue',
        'Magical lock/barrier',
    ];
    
    // Additional info for obstructions
    const obstructionInfo = [
        'discovered?', 'invisible?', 'triggers a memory?', 
        'chain reaction?','found?', 'poorly crafted?', 
        'causes confusion?', 'suddenly appears?', 
        'activates?', 'looks fake?', 
        'captures someone?', 'revealed?', 'requires sacrifice?',
        'requires specific item?', 'triggers alarm?', 
    ];
    
    // Hazards
    const hazards = [
        'Sudden rockslide', 'Magical storm',
        'Sinkhole', 'Flash flood',
        'Fire', 'Fog/mist',
        'Earthquake',
        'Swarm of insects', 'Poisonous plant',
        'Cursed area',
        'Lightning',
        'Geyser', 'Magical field',
        'Sudden temperature drop', 'Magical silence',
        'Magical darkness',
        'Magical field causes memory loss',
        'Gust of wind', 
        'Sleep spell'
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'Hidden cache of supplies', 'Friendly animal',
        'Forgotten shrine', 'Lucky find',
        'Helpful NPC', 
        'Helpful spirit',
        'Magical blessing', 'Surprising ally',
        'Sudden insight'
    ];
    
    const neutralEvents = [
        'Strange omen', 'Mysterious note',
        'Recall a forgotten memory', 'Strange coincidence',
        'Sudden realization', 'Meaningful vision',
    ];
    
    const badEvents = [
        'Foreboding vision',
        'Mysterious illness', 'Bad omen',
        'Something goes missing', 'Something gets damaged',
        'Feeling of unease', 'Ally behaves oddly',
        'Terrible nightmare', 'Discover a dangerous secret',
        'Shadowy figure in the distance'
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
        'Rescue', 'Retrieve', 'Stop', 'Investigate', 'Protect',
        'Sabotage', 'Decode', 'Survive', 'Negotiate', 'Find',
        'Destroy', 'Explore', 'Defend', 'Uncover', 'Escape',
        'Awaken', 'Break', 'Steal', 'Deliver', 'Hunt',
        'Recover', 'Defeat', 'Banish',
        'Heal', 'Cure', 'Repair',
        'Discover', 'Guard', 'Follow', 'Transport', 'Break'
    ];
    
    const adjectives = [
        'kidnapped', 'ancient', 'ritual', 'mysterious', 'frontier',
        'enemy', 'cryptic', 'magical', 'peace', 'lost',
        'corrupted', 'forgotten', 'sacred', 'royal', 'cursed',
        'sleeping', 'ancient', 'legendary', 'vital', 'rogue',
        'stolen', 'demonic', 'magical', 'elemental', 'shadow',
        'poisoned', 'magical', 'defensive', 'broken', 'forbidden',
        'hidden', 'royal', 'prophetic', 'cursed', 'sacred',
        'haunted', 'captured', 'lost', 'undead', 'dragon',
        'mountain', 'spy', 'collapsing', 'stone', 'magical',
        'enemy', 'secret', 'monstrous', 'sunken', 'rival',
        'peace', 'celestial', 'dark', 'wounded', 'mind',
        'magical', 'time', 'ancient', 'secret', 'magical',
        'star', 'evil', 'oracle', 'strange', 'enslaved',
        'philosopher', 'blood', 'stolen', 'crystal', 'hidden',
        'labyrinth', 'forest', 'mind', 'magic', 'peace',
        'ghostly', 'family', 'rival', 'protective', 'weather',
        'plague', 'cursed', 'magical', 'underground', 'magical',
        'secret', 'hidden', 'sacred', 'ancient', 'cursed',
        'magical', 'time', 'trapped', 'legendary', 'planar',
        'stolen', 'holy', 'lost', 'dream', 'mountain', 'soul'
    ];
    
    const nouns = [
        'heir', 'artifact', 'summoning', 'disappearances', 'settlement',
        'weapon', 'message', 'storm', 'treaty', 'colony',
        'creature', 'temple', 'city', 'conspiracy', 'prison',
        'god', 'curse', 'relic', 'message', 'beast',
        'crown', 'lord', 'amulet', 'spirit', 'creature',
        'king', 'plague', 'wall', 'seal', 'spell',
        'library', 'wedding', 'dream', 'idol', 'grove',
        'ruins', 'villagers', 'prophecy', 'invasion', 'egg',
        'pass', 'network', 'mine', 'guardian', 'barrier',
        'plans', 'weapon', 'predator', 'treasure', 'champion',
        'offering', 'being', 'presence', 'dragon', 'control',
        'bridge', 'portal', 'language', 'passage', 'fountain',
        'map', 'cult', 'oracle', 'lights', 'tribe',
        'stone', 'ritual', 'knowledge', 'cave', 'identity',
        'labyrinth', 'spirit', 'control', 'crystal', 'terms',
        'apparition', 'heirloom', 'mage', 'ward', 'spirit',
        'demon', 'land', 'corruption', 'sanctuary', 'device',
        'technique', 'city', 'ritual', 'map', 'tree',
        'creature', 'anomaly', 'spirits', 'sword', 'breach',
        'throne', 'site', 'history', 'realm', 'giant', 'contract'
    ];
    
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return { mainText: `${verb} ${noun}`, extraText: adjective };
}

// Space Plot Hook Generator
function generateSpacePlotHook() {
    const verbs = [
        'Rescue', 'Retrieve', 'Stop', 'Investigate', 'Protect',
        'Sabotage', 'Decode', 'Survive', 'Negotiate', 'Find',
        'Destroy', 'Explore', 'Defend', 'Uncover', 'Escape',
        'Awaken', 'Steal', 'Deliver', 'Hunt', 'Recover',
        'Defeat', 'Banish', 'Heal',
        'Cure', 'Repair', 'Discover',
        'Guard', 'Follow', 'Transport', 'Break'
    ];
    
    const adjectives = [
        'captured', 'stolen', 'pirate', 'derelict', 'mining',
        'enemy', 'alien', 'solar', 'trade', 'lost',
        'rogue', 'asteroid', 'space', 'corporate', 'hostile',
        'cryo-sleep', 'prototype', 'medical', 'space', 'black',
        'rival', 'distant', 'alien', 'cosmic', 'plague',
        'nanite', 'orbital', 'interstellar', 'alien', 'wormhole',
        'diplomatic', 'distress', 'pirate', 'terraforming', 'ghost',
        'stranded', 'ancient', 'superweapon', 'stolen', 'research',
        'spy', 'gravity', 'dormant', 'security', 'star',
        'peace', 'rogue', 'stolen', 'rival', 'planetary',
        'rescue', 'energy', 'radiation', 'memory', 'space',
        'life support', 'hacking', 'hidden', 'fuel', 'energy',
        'smuggling', 'ambassador', 'time', 'captured', 'quantum',
        'medical', 'reactor', 'genetic', 'false',
        'nebula', 'terraforming', 'encryption', 'military', 'emergency',
        'rogue', 'alien', 'rival', 'diplomatic', 'trading',
        'parasitic', 'ecosystem', 'cybernetic', 'deep space', 'sensor',
        'alien', 'hidden', 'cargo', 'comet', 'listening',
        'generation', 'signal', 'captured', 'lost', 'asteroid',
        'stolen', 'comms', 'hidden', 'black', 'ancient', 'illegal'
    ];
    
    const nouns = [
        'diplomat', 'data core', 'raid', 'starship', 'colony',
        'battlecruiser', 'transmission', 'flare', 'agreement', 'generation ship',
        'AI', 'asteroid field', 'space station', 'conspiracy', 'sector',
        'crew', 'weapon', 'supplies', 'anomaly', 'black box',
        'mercenaries', 'gate', 'fleet', 'entity', 'outbreak',
        'infection', 'defense', 'drive', 'language', 'wormhole',
        'summit', 'signal', 'base', 'project', 'ship',
        'colonists', 'artifact', 'activation', 'tech', 'outpost',
        'satellite', 'well', 'AI', 'system', 'charts',
        'envoy', 'asteroid', 'ship', 'corporation', 'shield',
        'fleet', 'being', 'sickness', 'wipe', 'elevator',
        'system', 'protocol', 'base', 'depot', 'signature',
        'ring', 'ambassador', 'dilation', 'scientist', 'computer',
        'supplies', 'relic', 'meltdown', 'samples', 'point',
        'identity', 'storm', 'AI', 'code', 'plans',
        'supplies', 'drone swarm', 'specimen', 'captain', 'channel',
        'convoy', 'organism', 'ecosystem', 'virus', 'relay',
        'array', 'technology', 'colony', 'shipment', 'trail',
        'post', 'ship', 'source', 'crew', 'probe',
        'impact', 'research', 'satellite', 'agenda', 'hole', 'starship', 'blockade'
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
        'Pirates', 'Friendly trader', 'Distress call', 'Bounty hunter',
        'Merchant', 'Refugees', 'Security patrol', 'Lone explorer',
        'Alien/stranger', 'Smugglers', 'Medics', 'Diplomatic envoy',
        'Laborers', 'Messenger drone', 'Rivals', 'Scavengers',
        'Lost scientist', 'Colonists', 'Suspicious dealer', 'Wormhole', 
        'Cult ship', 'Lone scout', 'Escaped prisoners', 'Entertainers',
        'Pilgrims', 'Spy', 'Mercenaries', 'Suspicious character',
        'Spiritual practitioner', 'Scientist', 'Rebel cell', 'Lone survivor',
        'Diplomatic ship', 'Shapeshifter/master of disguise', 'Researchers', 'Hidden data cache', 
    ];
    
    // Additional info for encounters
    const encounterInfo = [
        'demands surrender?', 'offers supplies?', 'from civilian ship?', 'crosses paths?',
        'with rare tech?', 'needs rescue?', 'has questions?', 'shares discoveries?',
        'offers help?', 'at work?', 'wants assistance?', 'needs escort?',
        'has strange ore?', 'has urgent data?', 'makes threats?', 'scavenging debris?',
        'seeks protection?', 'celebrating?', 'offers services?', 'with illegal tech?',
        'performing rituals?', 'tracking something?', 'escaped?', 'on a mission?',
        'suddenly appears?', 'on spiritual quest?', 'infiltrating?', 
        'shares wisdom?', 'performing experiments?', 'planning an operation?', 'attacking?',
        'makes a discovery?'
    ];
    
    // Subjects for obstructions
    const obstructionSubjects = [
        'Debris field', 'Hidden minefield', 'Energy barrier', 'Complex security system',
        'Computer malfunction', 'Proximity sensor', 'Hidden compartment',
        'Tricky maze/asteroid field', 'Logic puzzle', 'Security door', 'Force field',
        'False floor', 'Holographic illusion', 'Laser grid trap', 'Data encryption',
        'Collapsing tunnel', 'Security drone', 'Gas trap', 'Biometric lock',
        'Honeypot', 'Voice recognition system', 'Pressure plate', 'Neural interface',
        'Falling ceiling', 'Quantum encryption', 'Motion sensor', 'DNA lock',
        'False data package', 'Psychic barrier', 'Technological test',
        'Secret passage', 'Robotic guardian', 'Complex circuit', 'Cloaking field',
        'Malfunctioning robot',
    ];
    
    // Additional info for obstructions
    const obstructionInfo = [
        'suddenly appears?', 'detected?', 'activates?', 'triggers defenses?',
        'confusing?', 'is broken?', 'sabotage?', 'double-cross?', 
        'fails?', 'needs repair?', 'blocks the way?', 'fake?', 
    ];
    
    // Hazards
    const hazards = [
        'Solar flare', 'Meteor swarm',
        'Gravity well', 'Radiation storm',
        'Sensor interference', 
        'Sudden ion storm (damages electronics)', 'Plasma discharge',
        'Rogue asteroid field', 'Confusing quantum anomaly',
        'Temporal distortion field', 'Spatial rift opens nearby',
        'Sudden EMP blast disables systems',
        'Dark matter cloud obscures sensors', 
        'Sudden temperature fluctuation', 'Magnetic field disruption',
        'Subspace interference pattern', 'Reality distortion field',
        'Sudden pressure change', 'Radiation spike (leak?)',
        'Dimensional instability',
        'Psychic energy field',
        'Gravitational anomaly', 
        'Sudden energy drain', 
        'Subspace rift appears',
        'Sudden system overload',
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'Hidden supply cache', 'Friendly alien/stranger',
        'Unexpected resources', 'Valuable data',
        'Helpful AI', 'Advanced technology',
        'Hidden skill revealed', 'Helpful hologram appears',
        'Ally ship appears', 'Ally offers help', 
        'Sudden research breakthrough', 'Sudden insight', 
        'Stroke of cosmic luck', 'Sudden realization', 'Helpful dream',
        'Helpful signal appears', 'Found a shortcut',
    ];
    
    const neutralEvents = [
        'Strange phenomenon appears', 'Mysterious data packet discovered',
        'Sudden solar flare', 'The situation is not as it appeared',
        'Forgotten memory returns',
    ];
    
    const badEvents = [
        'Data is corrupted', 'Terrifying vision', 'Alarms ring out',
        'Mysterious system virus', 'Unwanted transmission received',
        'Valuable component malfunctions', 'Ally acts strangely',
        'Sensors show intermittent ghost blips', 'Something/someone disappears',
        'Nightmares', 'Dangerous data found', 'Crew member feels sick',
        'Frightening prophecy/news decoded', 'Shadowy threat follows at distance',
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