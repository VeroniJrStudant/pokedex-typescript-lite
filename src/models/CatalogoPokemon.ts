import { PokemonResumo } from "./Pokemon";
import { formatarPokemon } from "../utils/textFormatters";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    constructor(pokemonsIniciais: PokemonResumo[] = []){
        this.pokemons = pokemonsIniciais;
    }

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

        if(jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já existe no catálogo.`);
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    listar(): void {

        if(this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }

        console.log("Catálogo atual:");

        this.pokemons.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon));
        });
    }

    remover(id:number): void {

        const existe =  this.pokemons.some((pokemon) => pokemon.id === id);

        if(!existe){
            console.log("[AVISO] Nenhum Pókemon encontrado com esse ID");
            return;
        };

        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id );
        console.log("[OK] Pokémon removido com");
    }

    obterTodos(): PokemonResumo[]{
        return [...this.pokemons]
    }
}