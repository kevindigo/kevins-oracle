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

// Fantasy Random Event Generator
function generateFantasyEvent() {
    // Encounters (36)
    const encounters = [
        'Bandits ambush the party', 'A friendly merchant offers goods',
        'A lost child needs help', 'A rival adventuring party crosses paths',
        'A wandering minstrel shares news', 'A group of pilgrims seeks protection',
        'A bounty hunter is tracking someone', 'A patrol questions the party',
        'A mysterious hermit offers wisdom', 'A group of refugees needs aid',
        'A traveling healer offers services', 'A noble and their entourage pass by',
        'A group of locals shares their findings', 'A messenger with urgent news',
        'A rival mage challenges to a duel', 'A group of smugglers at work',
        'A lost scholar seeks ancient knowledge', 'A group of bards performs nearby',
        'A wandering knight offers assistance', 'A suspicious merchant with rare goods',
        'A group of cultists performing a ritual', 'A lone ranger tracking prey',
        'A group of escaped prisoners', 'A traveling entertainment troupe sets up camp',
        'A mysterious fortune teller', 'A group of pilgrims on a holy quest',
        'A rival thief trying to steal', 'A group of mercenaries for hire',
        'A wandering monk shares teachings', 'A suspicious alchemist with potions',
        'A group of rebels planning something', 'A lone survivor of an attack',
        'A traveling diplomat needs escort', 'A group of workers with strange findings',
        'A mysterious shapeshifter appears', 'A group of locals with a strange discovery'
    ];
    
    // Hazards (36)
    const hazards = [
        'A sudden rockslide blocks the path', 'A magical storm causes confusion',
        'A sinkhole opens nearby', 'A flash flood washes through',
        'A forest fire spreads rapidly', 'A magical mist causes disorientation',
        'A sudden blizzard hits', 'An earthquake shakes the ground',
        'A swarm of insects attacks', 'A poisonous plant releases spores',
        'A cursed area drains energy', 'A magical vortex appears',
        'A sudden fog limits visibility', 'A thunderstorm with magical lightning',
        'A geyser erupts nearby', 'A magical field causes illusions',
        'A sudden temperature drop', 'A magical silence descends',
        'A river suddenly changes course', 'A magical darkness envelops the area',
        'A sudden sandstorm arises', 'A magical storm of feathers',
        'A sudden ice storm hits', 'A magical field reverses gravity',
        'A sudden mudslide occurs', 'A magical field causes time distortion',
        'A sudden volcanic activity', 'A magical field causes memory loss',
        'A sudden windstorm picks up', 'A magical field causes aging',
        'A sudden hailstorm begins', 'A magical field causes youth',
        'A sudden dust devil forms', 'A magical field causes laughter',
        'A sudden lightning strike', 'A magical field causes sleep'
    ];
    
    // Obstructions/Traps (36)
    const obstructions = [
        'A collapsed bridge blocks progress', 'A hidden pit trap is discovered',
        'A magical barrier blocks the way', 'A complex lock needs picking',
        'A riddle must be solved to proceed', 'A pressure plate triggers something',
        'A magical seal needs breaking', 'A hidden door is found',
        'A maze of corridors confuses', 'A magical puzzle must be solved',
        'A portcullis drops suddenly', 'A magical ward must be dispelled',
        'A false floor gives way', 'A magical mirror shows illusions',
        'A swinging blade trap activates', 'A magical glyph must be deciphered',
        'A rolling boulder blocks the path', 'A magical statue comes to life',
        'A poison dart trap is triggered', 'A magical rune must be activated',
        'A net trap captures someone', 'A magical door requires a password',
        'A spike pit is revealed', 'A magical barrier requires a sacrifice',
        'A falling ceiling trap', 'A magical lock requires a specific item',
        'A tripwire triggers an alarm', 'A magical field requires a spell',
        'A false treasure is a trap', 'A magical puzzle requires intuition',
        'A hidden compartment is found', 'A magical test must be passed',
        'A secret passage is blocked', 'A magical guardian must be defeated',
        'A complex mechanism needs fixing', 'A magical illusion hides the path'
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'A hidden cache of supplies is found', 'A friendly animal offers help',
        'A forgotten shrine provides blessing', 'A lucky find provides advantage',
        'A helpful NPC offers information', 'A magical item is discovered',
        'A hidden talent is revealed', 'A helpful spirit appears',
        'A magical blessing is received', 'A sudden ally appears',
        'A magical gift is given', 'A sudden breakthrough occurs'
    ];
    
    const neutralEvents = [
        'A strange omen appears in the sky', 'A mysterious note is discovered',
        'A sudden insight solves a problem', 'A sudden inspiration strikes',
        'A stroke of good luck occurs', 'A sudden change in weather helps',
        'A forgotten memory returns', 'A helpful coincidence occurs',
        'A sudden realization helps', 'A helpful dream provides guidance',
        'A helpful sign appears', 'A helpful discovery is made'
    ];
    
    const badEvents = [
        'A cursed item is discovered', 'A foreboding vision appears',
        'A mysterious illness strikes', 'A bad omen is seen',
        'A valuable item is lost', 'A trusted contact betrays',
        'A magical curse is placed', 'A haunting presence appears',
        'A terrible nightmare occurs', 'A dangerous secret is uncovered',
        'A frightening prophecy is heard', 'A shadowy figure follows'
    ];
    
    const miscellaneous = [...goodEvents, ...neutralEvents, ...badEvents];
    
    // Combine all categories
    const allEvents = [...encounters, ...hazards, ...obstructions, ...miscellaneous];
    const event = allEvents[Math.floor(Math.random() * allEvents.length)];
    return event;
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
    
    return `${verb} - ${adjective} - ${noun}`;
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
        'rival', 'jump', 'alien', 'cosmic', 'plague',
        'nanite', 'orbital', 'warp', 'alien', 'wormhole',
        'diplomatic', 'distress', 'pirate', 'terraforming', 'ghost',
        'stranded', 'ancient', 'superweapon', 'stolen', 'research',
        'spy', 'gravity', 'dormant', 'security', 'star',
        'peace', 'rogue', 'stolen', 'rival', 'planetary',
        'rescue', 'energy', 'radiation', 'memory', 'space',
        'life support', 'hacking', 'hidden', 'fuel', 'energy',
        'smuggling', 'ambassador', 'time', 'captured', 'quantum',
        'medical', 'reactor', 'genetic', 'jump', 'false',
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
        'mercenary group', 'gate', 'fleet', 'entity', 'outbreak',
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
    
    return `${verb} - ${adjective} - ${noun}`;
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
    // Encounters (36)
    const encounters = [
        'A pirate ship demands surrender', 'A friendly trader offers supplies',
        'A distress call from a civilian ship', 'A rival bounty hunter crosses paths',
        'A wandering merchant with rare tech', 'A group of refugees needs rescue',
        'A corporate security patrol questions', 'A lone explorer shares discoveries',
        'A mysterious alien offers help', 'A group of smugglers at work',
        'A medical ship offers assistance', 'A diplomatic envoy needs escort',
        'A group of workers with strange ore', 'A messenger drone with urgent data',
        'A rival corporation ship challenges', 'A group of scavengers picking debris',
        'A lost scientist seeks protection', 'A group of colonists celebrating',
        'A wandering mercenary offers services', 'A suspicious dealer with illegal tech',
        'A cult ship performing rituals', 'A lone scout tracking something',
        'A group of escaped prisoners', 'A traveling entertainment vessel',
        'A mysterious psychic appears', 'A group of pilgrims on spiritual quest',
        'A rival spy trying to infiltrate', 'A group of mercenaries for hire',
        'A wandering monk shares wisdom', 'A suspicious scientist with experiments',
        'A rebel cell planning operation', 'A lone survivor of attack',
        'A diplomatic ship needs help', 'A group of asteroid workers',
        'A shapeshifting alien appears', 'A group of researchers with discovery'
    ];
    
    // Hazards (36)
    const hazards = [
        'A solar flare threatens systems', 'A meteor swarm approaches',
        'A gravity well pulls ship off course', 'A radiation storm hits',
        'A nebula causes sensor interference', 'The gravity effect of a black hole affects a ship',
        'A sudden ion storm damages electronics', 'A plasma discharge from nearby star',
        'A rogue asteroid field appears', 'A quantum anomaly causes confusion',
        'A temporal distortion field', 'A spatial rift opens nearby',
        'A sudden EMP blast disables systems', 'A cosmic string affects navigation',
        'A dark matter cloud obscures sensors', 'A wormhole instability',
        'A sudden temperature fluctuation', 'A magnetic field disruption',
        'A subspace interference pattern', 'A reality distortion field',
        'A sudden pressure change', 'A chroniton radiation leak',
        'A quantum foam disturbance', 'A dimensional instability',
        'A sudden radiation spike', 'A psychic energy field',
        'A gravitational anomaly', 'A temporal loop begins',
        'A sudden energy drain', 'A phase variance occurs',
        'A subspace rift appears', 'A quantum entanglement event',
        'A sudden system overload', 'A reality bubble forms',
        'A cosmic background radiation spike', 'A quantum probability shift'
    ];
    
    // Obstructions/Traps (36)
    const obstructions = [
        'A debris field blocks navigation', 'A hidden minefield is detected',
        'An energy barrier blocks the way', 'A complex security system activates',
        'A computer puzzle must be solved', 'A proximity sensor triggers defense',
        'A quantum lock needs bypassing', 'A hidden compartment is found',
        'A maze of asteroid tunnels', 'A logic puzzle must be completed',
        'A security door slams shut', 'A force field must be deactivated',
        'A false floor gives way', 'A holographic illusion confuses',
        'A laser grid trap activates', 'A data encryption must be broken',
        'A collapsing tunnel blocks path', 'A security drone activates',
        'A gas trap is triggered', 'A biometric lock needs access',
        'A net launcher captures target', 'A voice recognition system',
        'A pressure plate reveals trap', 'A neural interface challenge',
        'A falling ceiling trap', 'A quantum encryption puzzle',
        'A motion sensor triggers alarm', 'A DNA lock requires sample',
        'A false data package is trap', 'A psychic barrier must be overcome',
        'A hidden data cache found', 'A technological test must be passed',
        'A secret passage is sealed', 'A robotic guardian must be defeated',
        'A complex circuit needs repair', 'A cloaking field hides the path'
    ];
    
    // Miscellaneous (36: 12 good, 12 neutral, 12 bad/scary)
    const goodEvents = [
        'A hidden supply cache is found', 'A friendly alien offers assistance',
        'A forgotten outpost provides resources', 'A lucky scan reveals valuable data',
        'A helpful AI offers information', 'An advanced technology is discovered',
        'A hidden skill is revealed', 'A helpful hologram appears',
        'A technological blessing received', 'A sudden ally ship appears',
        'A technological gift is given', 'A sudden system breakthrough'
    ];
    
    const neutralEvents = [
        'A strange cosmic phenomenon appears', 'A mysterious data packet discovered',
        'A sudden insight solves technical problem', 'A sudden breakthrough in research',
        'A stroke of cosmic luck occurs', 'A sudden solar flare helps escape',
        'A forgotten memory returns', 'A helpful coincidence in navigation',
        'A sudden realization helps mission', 'A helpful dream simulation',
        'A helpful signal appears', 'A helpful discovery in database'
    ];
    
    const badEvents = [
        'A corrupted data file is found', 'A terrifying vision appears on screen',
        'A mysterious system virus infects', 'A bad transmission is received',
        'A valuable component malfunctions', 'A trusted crew member acts strangely',
        'A system curse is detected', 'A ghostly presence appears on sensors',
        'A nightmare simulation occurs', 'A dangerous secret file is uncovered',
        'A frightening prophecy is decoded', 'A shadowy ship follows at distance'
    ];
    
    const miscellaneous = [...goodEvents, ...neutralEvents, ...badEvents];
    
    // Combine all categories
    const allEvents = [...encounters, ...hazards, ...obstructions, ...miscellaneous];
    const event = allEvents[Math.floor(Math.random() * allEvents.length)];
    return event;
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