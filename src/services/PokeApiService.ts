import { PokemonApiResponse, PokemonResumo } from "../models/Pokemon";

const URL_BASE = "https://pokeapi.co/api/v2/pokemon";

export class PokeApiService {

    async buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
            try {
                const resposta = await fetch(`${URL_BASE}/${nomeOuId.toLowerCase()}`);

                if (!resposta.ok) {
                    console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
                    return null;
                }

                const dados = (await resposta.json()) as PokemonApiResponse;
                const pokemon = this.mapearPokemon(dados);

                console.log(`[OK] Pokémon encontrado: ${pokemon?.nome}`);
                return pokemon;
            } catch (erro) {
                console.error("[ERRO] Não foi possível buscar o Pokémon.");
                return null;
            } 
        }

    private mapearPokemon(dados: PokemonApiResponse): PokemonResumo {
        const tipos = dados.types.map((item) => item.type.name);

        return {
            id: dados.id,
            nome: dados.name,
            tipos,
            altura: dados.height,
            peso: dados.weight,
        }
    }
}