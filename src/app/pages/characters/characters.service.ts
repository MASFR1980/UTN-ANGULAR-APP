export class CharactersService {
    async getCharacters(){
        const res = await fetch('https://rickandmortyapi.com/api/character');
        
        const data = await res.json();
        return data.results;
    }
}