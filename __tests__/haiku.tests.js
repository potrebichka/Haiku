import { haiku, countSyllables } from '../src/haiku';
import { exportSpecifier, exportAllDeclaration } from '@babel/types';

describe('haiku function', () => {
    test("should return false if input contains not three lines", () => {
        const realHaiku = "I am first with five\n Then seven in the middle\n Five again to end."
        const haiku1 = "An old silent pond\n A frog jumps into the pond\n splash! Silence again."
        const wrongHaiku = "I am first with five\n Then seven in the middle."
        expect(haiku(wrongHaiku)).toEqual(false);
        expect(haiku(realHaiku)).toEqual(true);
        expect(haiku(haiku1)).toEqual(true);
    })
})

describe ('count syllables function', () => {
    test("should count the number of syllables in the word", () => {
        const word1 = "word";
        const word2 = "literal";
        const word3 = "came";
        const word4 = "outside";
        const word5 = "cyst";
        const word6 = "style";
        const word7 = "yummy";
        expect(countSyllables(word1)).toEqual(1);
        expect(countSyllables(word2)).toEqual(3);
        expect(countSyllables(word3)).toEqual(1);
        expect(countSyllables(word4)).toEqual(2);
        expect(countSyllables(word5)).toEqual(1);
        expect(countSyllables(word6)).toEqual(1);
        expect(countSyllables(word7)).toEqual(2);
    })
})