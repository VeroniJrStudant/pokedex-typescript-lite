import * as readline from "node:readline/promises";
import {stdin as input, stdout as output } from "node:process";
import {PokeApiService} from "../services/PokeApiService";
import {BoxService} from "../services/BoxService";
import {CatalogoPokemon} from "../models/CatalogoPokemon";

export class TerminalController {
    private readonly rl: readline.Interface;

    constructor(
        private readonly pokeApiService: PokeApiService,
        private readonly boxService: BoxService,
        private readonly catalogoPokemon: CatalogoPokemon,
    ){
        this.rl = readline.createInterface({
            input,
            output,
            terminal: Boolean(input.isTTY),
            crlfDelay: Infinity,
        });
    }


    async iniciarMenu(): Promise<void> {
        console.log("=== Pokédex TypeScript Lite ===\n"); 
   
        let continuar = true;

        while (continuar) {
            console.log("1 - Buscar Pokémon");
            console.log("2 - Listar Pokémon");
            console.log("3 - Remove Pokémon");
            console.log("4 - Sair");

            const opcao = (await this.rl.question("Escolha uma opção: ")).trim();
            console.log("");

            if (opcao === "1") {
                await this.buscarPokemon();
            } else if (opcao === "2") {
                this.catalogoPokemon.listar();
            } else if (opcao === "3") {
                await this.removerPokemon();
            } else if (opcao === "4") {
                continuar =  false;
                console.log("Até a próxima, treinador!");
            } else {
                console.log("[AVISO] Opção inválida. Digite 1, 2, 3 ou 4.");
            }

            console.log("");
        }
        this.rl.close();
    }

    private async buscarPokemon(): Promise<void> {
        const nomeOuId = (await this.rl.question("Digite o nome ou ID do Pokémon: ")).trim();

        if (nomeOuId === "") {
        console.log("[AVISO] Infome um nome ou ID para buscar");
        return;
        }

        const pokemon = await this.pokeApiService.buscarPokemon(nomeOuId);
        if (pokemon === null) {
            return;
        }

        const resposta = (await this.rl.question("Deseja adicionar ao catálogo? (s/n): ")).trim().toLowerCase();

        if (resposta === "s" || resposta === "sim") {
            this.catalogoPokemon.adicionar(pokemon);
            await this.boxService.salvar(this.catalogoPokemon.obterTodos())
            return;
        }
        console.log("[AVISO] Pokémon não foi adicionado ao catálogo.");
    }

    private async removerPokemon(): Promise<void> {
        const entrada = (await this.rl.question("Digite o ID do Pekémon: ")).trim();
        const id = Number(entrada);

        if (!Number.isInteger(id) || id <= 0) {
            console.log("[AVISO] Informe um ID numérico válido.");
            return;
        }

        this.catalogoPokemon.remover(id);
        await this.boxService.salvar(this.catalogoPokemon.obterTodos());
    }
}

