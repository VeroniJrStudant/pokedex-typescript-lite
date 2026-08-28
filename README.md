# Pokédex TypeScript Lite

## Sobre o projeto

O Pokédex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokémon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- interfaces;
- funções tipadas;
- arrays;
- objetos;
- JSON;
- métodos de array;
- classes;
- async/await;
- fetch;
- tratamento de erros;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/VeroniJrStudant/pokedex-typescript-lite
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Também é possível iniciar com:

```bash
npm run start
```

O terminal abre um menu interativo:

```text
=== Pokédex TypeScript Lite ===
Digite o número da opção e pressione Enter.

1 - Buscar Pokémon
2 - Listar catálogo
3 - Remover Pokémon do catálogo
4 - Sair
Escolha uma opção:
```

Para gerar a versão compilada em JavaScript:

```bash
npm run build
```

## Estrutura do projeto

```text
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── BoxService.ts
│   ├── models/
│   │   ├── Pokemon.ts
│   │   ├── CatalogoPokemon.ts
│   │   └── CustomError.ts
│   └── utils/
│       └── textFormatters.ts
│
├── pc_box.json
├── package.json
├── tsconfig.json
└── README.md
```

## Funcionalidades

- Buscar Pokémon por nome ou ID
- Tratar erro de Pokémon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir Pokémon duplicado
- Listar catálogo
- Remover Pokémon por ID
- Exibir mensagens no terminal
- Menu interativo no terminal
- Salvar o catálogo em `pc_box.json`

## Exemplos de execução

A aplicação abre um menu. Você escolhe a opção, digita o valor pedido e pressiona Enter.

### Busca válida

Entrada testada:

```text
1
pikachu
s
```

Saída obtida:

```text
[OK] Pokémon encontrado: pikachu
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
Deseja adicionar ao catálogo? (s/n):
[OK] pikachu adicionado ao catálogo.
```

### Busca inválida

Entrada testada:

```text
1
pokemon-inexistente
```

Saída obtida:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Duplicidade

Entrada testada:

```text
adicionar pikachu duas vezes (opção 1, depois s)
```

Saída obtida:

```text
[AVISO] pikachu já está no catálogo.
```

### Remoção

Entrada testada:

```text
3
25
```

Saída obtida:

```text
[OK] Pokémon removido do catálogo.
```

### Listagem após remoção

Entrada testada:

```text
2
```

Saída obtida:

```text
Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

## Conceitos aplicados

### TypeScript

O projeto usa TypeScript em modo strict. Interfaces descrevem os dados, e as funções têm parâmetros e retornos tipados. Exemplo: `buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null>`.

### Interface PokemonResumo

Representa o Pokémon simplificado usado no catálogo: `id`, `nome`, `tipos`, `altura` e `peso`. Isso evita trabalhar com o JSON completo da PokeAPI.

### Interface PokemonApiResponse

Descreve apenas os campos da PokeAPI que o projeto realmente usa: `id`, `name`, `height`, `weight` e `types`.

### Fetch e async/await

A classe `PokeApiService` consulta `https://pokeapi.co/api/v2/pokemon/{nome-ou-id}` com `fetch` e `await`. O retorno é convertido de JSON para `PokemonResumo`.

### Tratamento de erros

A busca usa `try/catch`. Se a API retornar 404, o sistema exibe `[ERRO] Pokémon não encontrado` e retorna `null`, sem encerrar o programa.

### Métodos de array

- `map`: transforma `types` da API em uma lista de nomes
- `some`: verifica se o Pokémon já existe no catálogo
- `filter`: remove o Pokémon pelo ID
- `forEach`: percorre o catálogo na listagem
- `join`: formata os tipos na exibição

### Classe CatalogoPokemon

Atributo privado `pokemons` guarda o array local. Métodos:

- `adicionar`: inclui um Pokémon e bloqueia duplicidade pelo `id`
- `listar`: exibe o catálogo no terminal
- `remover`: remove um Pokémon pelo `id`
- `obterTodos`: devolve uma cópia do array para persistência

### BoxService

Lê e grava o arquivo `pc_box.json` com `fs/promises`, mantendo o catálogo entre execuções.

## Cronograma

Prazo de entrega no AVA: **31/08/2026 às 22h**.

O mesmo cronograma está nas datas das tarefas no Asana (visão Timeline).

| Dia | Data | Entrega do dia |
| --- | --- | --- |
| Terça | 25/08 | Organizar o Kanban no Asana |
| Quarta | 26/08 | Configurar Node.js, TypeScript, `package.json`, `tsconfig.json` e `src/main.ts` |
| Quinta | 27/08 | Interfaces, busca na PokeAPI, `fetch`, tratamento de erro e mapeamento |
| Sexta | 28/08 | Classe `CatalogoPokemon`: adicionar, duplicidade, listar, remover e métodos de array |
| Sábado | 29/08 | Testar o fluxo, atualizar o README e registrar exemplos de execução |
| Domingo | 30/08 | Repositório no GitHub, branches GitFlow e commits semânticos |
| Segunda | 31/08 | Enviar o link do GitHub e o link do Kanban no AVA (até 22h) |

Melhorias do Backlog (HP, filtros e Express) ficam depois da entrega, se houver tempo.

## Organização do Kanban

Link do Kanban:

https://app.asana.com/1/1217848314402019/project/1217848564139331/timeline/1217848805601259

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`

## Explicação curta dos arquivos

- `src/main.ts`: ponto de entrada. Instancia os serviços e inicia o menu.
- `src/controllers/TerminalController.ts`: lê a opção digitada e orquestra o menu do terminal.
- `src/services/PokeApiService.ts`: busca e mapeia dados da PokeAPI.
- `src/services/BoxService.ts`: lê e salva o catálogo em `pc_box.json`.
- `src/models/Pokemon.ts`: interfaces do Pokémon resumido e da resposta da API.
- `src/models/CatalogoPokemon.ts`: classe do catálogo em memória.
- `src/models/CustomError.ts`: erros customizados da API e do arquivo local.
- `src/utils/textFormatters.ts`: formatação das mensagens no terminal.
- `pc_box.json`: base local do catálogo, iniciada com `[]`.

## Melhorias futuras

- Exibir HP, ataque e defesa
- Criar filtros por tipo de Pokémon
- Criar uma API própria com Express
