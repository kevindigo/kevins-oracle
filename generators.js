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
        'Rise', 'Ascend', 'Descend', 'Enter', 'Exit',
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
        'Honor', 'Dishonor', 'Integrity', 'Treachery', 'Nobility',
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
        'Shipyard', 'Dry dock', 'Jump gate', 'Warp point',
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
        'Time dilation field', 'Space warp', 'Reality bubble', 'Pocket dimension',
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