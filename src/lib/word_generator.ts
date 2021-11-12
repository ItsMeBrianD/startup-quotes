const keywords = {
    verbs: ['releasing', 'fixing', 'building', 'revolutionizing', 'reinventing'],
    adjectives: ['broken', 'good', 'desititute', 'fresh', 'dead', 'spicy', 'next-gen', 'last-gen'],
    nouns: [
        { word: 'code', plural: true },
        { word: 'copy', plural: true },
        { word: 'democracy', plural: false },
        { word: 'computer', plural: false },
        { word: 'drugs', plural: true },
        { word: 'synergy', plural: false },
        { word: 'experience', plural: false }
    ]
};


export default function() {
    const adj = keywords.adjectives[Math.floor(keywords.adjectives.length * Math.random())];
    const verb = keywords.verbs[Math.floor(keywords.verbs.length * Math.random())];
    const noun = keywords.nouns[Math.floor(keywords.nouns.length * Math.random())];
    return`${verb}${noun.plural ? ' ' : ' a '}${adj} ${noun.word}`;
}