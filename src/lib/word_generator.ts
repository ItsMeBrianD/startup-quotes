const keywords = {
    verbs: ['taking home', 'stewing', 'vibrating', 'ordering', 'squeezing out', 'releasing', 'fixing', 'gamifying', 'building', 'revolutionizing', 'reinventing', 'brogramming', 'leading', 'leveraging', 'crowd-sourcing', 'growth-hacking', 'evangalizing', 'disrupting', 'innovating', 'pivotting', 'crowdfunding', 'unicornizing', 'hustling', 'bootstrapping', 'angel investing', 'scaling', 'agile-ing', 'synergizing', 'monetizing', 'AI-fying', 'buzzwording', 'onboarding', 'incubating', 'accelerating', 'gambling'],
    adjectives: ['juiced', 'hot', 'broken', 'good', 'destitute', 'rip', 'bleeding-edge', 'disruptive', 'fresh', 'dead', 'spicy', 'next-gen', 'last-gen', 'freemium', 'game-changing', 'pivotable', 'scaleable', 'disruptopreneurial', 'hypergrowth', 'stealth', 'pivotal', 'cash-bleeding', 'buzzworthy', 'scalable', 'pre-revenue', 'agile', 'cash-burning', 'stealth-mode', 'synergistic', 'bootstrapped'],
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
        { word: "Papa Johns™ cheese sauce", plural: true },
        { word: "podcast", plural: false },
        { word: "caffeine", plural: false },
        { word: "Credit Card Points", plural: true },
        { word: "vibration", plural: true },
        { word: "semicolon", plural: false },
        { word: 'exhaustion', plural: false },
        { word: 'wankel', plural: false },
        { word: 'GFuel™', plural: true },
        { word: 'the Torch', plural: false },
        { word: 'disruption', plural: false },
        { word: 'innovation', plural: false },
        { word: 'startup', plural: true },
        { word: 'exit strategy', plural: false },
        { word: 'valuation', plural: true },
        { word: 'unicorns', plural: true },
        { word: 'hustle', plural: true },
        { word: 'venture capital', plural: false },
        { word: 'pitch deck', plural: false },
        { word: 'angel investor', plural: false },
        { word: 'accelerator', plural: false },
        { word: 'incubator', plural: false },
        { word: 'agile methodology', plural: true },
        { word: 'burn rate', plural: true },
        { word: 'cash flow', plural: true },
        { word: 'disruptive technology', plural: true },
        { word: 'growth hacks', plural: true },
        { word: 'early adopter', plural: true },
        { word: 'beta testing', plural: true },
        { word: 'disruptopreneur', plural: false },
        { word: 'angel round', plural: false },
        { word: 'unicorn hunter', plural: false },
        { word: 'scale-up', plural: false },
        { word: 'pivot', plural: false },
        { word: 'exit strategy', plural: false },
        { word: 'acqui-hire', plural: false },
        { word: 'stealth startup', plural: false },
        { word: 'synergy', plural: false }
    ]
};

const adjective_chance = 0.8

export default function (): string {
    const adj = Math.random() < adjective_chance 
    ? keywords.adjectives[Math.floor(keywords.adjectives.length * Math.random())]
    : '' ;
    const verb = keywords.verbs[Math.floor(keywords.verbs.length * Math.random())];
    const noun = keywords.nouns[Math.floor(keywords.nouns.length * Math.random())];




    return`${verb}${noun.plural ? ' ' : ' a '}${adj ? adj + " " : ""}${noun.word}`;
}
