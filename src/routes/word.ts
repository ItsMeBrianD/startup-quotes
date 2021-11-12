import wordGen from "$lib/word_generator";
import type { EndpointOutput } from "@sveltejs/kit";

export async function get(): Promise<EndpointOutput> {
    return {
        status: 200,
        body: wordGen()
    }
}