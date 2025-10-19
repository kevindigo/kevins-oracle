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