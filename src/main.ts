import { PokeApiService } from "./services/PokeApiService";
import { BoxService } from "./services/BoxService";
import { CatalogoPokemon } from "./models/CatalogoPokemon";
import { TerminalController } from "./controllers/TerminalController";

async function main(): Promise<void> {
  const pokeApiService = new PokeApiService();
  const boxService = new BoxService();
  const pokemonsSalvos = await boxService.carregar();
  const catalogo = new CatalogoPokemon(pokemonsSalvos);
  const controller = new TerminalController(pokeApiService, boxService, catalogo);

  await controller.iniciarMenu();
}

main().catch((erro) => {
  console.error("[ERRO] Falha ao executar a aplicação.", erro);
  process.exit(1);
});