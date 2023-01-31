import {genSalt, hash, compare} from 'bcryptjs';

const saltRounds = 6;

export async function Hash(text: string) {
    const salt = await genSalt(saltRounds);

   return await hash(text, salt);
}

export async function Compare(text: string, receivedText: string) {
   return await compare(receivedText, text);
}