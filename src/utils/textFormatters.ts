import { PokemonResumo } from "../models/Pokemon";

export function formatarPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${formatarTipos(pokemon.tipos)} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

export function formatarTipos(tipos: string[]): string {
  return tipos.join(", ");
}

export function montarMenu(): string {
  return [
    "1 - Buscar Pokémon",
    "2 - Listar catálogo",
    "3 - Remover Pokémon do catálogo",
    "4 - Sair",
  ].join("\n");
}
