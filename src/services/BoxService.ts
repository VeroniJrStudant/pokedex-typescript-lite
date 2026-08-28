import {readFile, writeFile} from "node:fs/promises";
import {PokemonResumo} from "../model/Pokemon";
import {LocalBoxError} from "../model/CustomError";

export class BoxService {

    constructor(private readonly caminhoArquivo: string= "pc_box.json"){}
    
    async carregar(): Promisse<PokemonResumo[]> {

        try {
            const conteudo = await readFile(this.caminhoArquivo, "utf-8");
            const dados = JOSN.parse(conteudo) as PokemonResumo[];
            return Array.isArray(dados) ? dados : [];
        }catch (erro) {
            if (erro instanceof Error && "code" in erro && erro.code === "ENOENT"){
                return [];
            }
            throw new LocalBoxError("Não foi possível ler o arquivo pc_box.json");
        }
    }

    async salvar(pokemons: PokemonResumo[]): Promise<void>{
        try {
            const conteudo = JSON.stringify(pokemons, null, 2);
            await writeFile(this.caminhoArquivo, conteudo, "utf-8");
        } catch (erro) {
            throw new LocalBoxError("Não foi possível salvar o catálogo em pc_box.json.");
        }
    }
}
