import wordGen from "$lib/word_generator";

export async function get() {
    return {
        status: 200,
        body: wordGen()
    }
}