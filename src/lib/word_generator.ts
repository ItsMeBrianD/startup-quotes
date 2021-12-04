const keywords = {
    verbs: ['vibrating', 'ordering', 'releasing', 'fixing', 'gamifying', 'building', 'revolutionizing', 'reinventing', 'brogramming', 'leading', 'leveraging', 'crowd-sourcing', 'growth-hacking', 'evangalizing'],
    adjectives: ['hot', 'broken', 'good', 'destitute', 'bleeding-edge', 'disruptive', 'fresh', 'dead', 'spicy', 'next-gen', 'last-gen', 'freemium', 'game-changing'],
    nouns: [
        { word: 'code', plural: true },
        { word: 'copy', plural: true },
        { word: 'democracy', plural: false },
        { word: 'computer', plural: false },
        { word: 'drugs', plural: true },
        { word: 'synergy', plural: false },
        { word: 'experience', plural: false },
        { word: 'passion', plural: true },
        { word: 'MVP', plural: false },
        { word: 'vaporware', plural: true } ,
        { word: 'ROI', plural: true },
        { word: 'platform', plural: false },
        { word: 'blockchain', plural: false },
        { word: 'Chase™ Sapphire Card', plural: false },
        { word: "Free Shopping Bags", plural: true },
        { word: "Nebraska Corn", plural: true },
        { word: "🛫", plural: false },
        { word: "Papa Johns™ cheese sauce", plural: false },
        { word: "podcast", plural: false },
        { word: "caffeine", plural: false },
        { word: "Credit Card Points", plural: true },
        { word: "vibration", plural: true },
        { word: "semicolon", plural: false },
        { word: 'exhaustion', plural: false },
        { word: 'wankel', plural: false },
    ]
};

const adjective_chance = 0.8

export default function (): string {
    const adj = Math.random() < adjective_chance 
    ? keywords.adjectives[Math.floor(keywords.adjectives.length * Math.random())]
    : '' ;
    const verb = keywords.verbs[Math.floor(keywords.verbs.length * Math.random())];
    const noun = keywords.nouns[Math.floor(keywords.nouns.length * Math.random())];




    return`${verb}${noun.plural ? ' ' : ' a '}${adj} ${noun.word}`;
}
