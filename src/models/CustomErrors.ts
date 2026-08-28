export class APIError extends Error {
    constructor(message: string) {
        super(messager);
        this.name = "APIError";
    }
}

esporta class LocalBoxError extends Error {
    constructor(message: string){
        super(message);
        this.name = "LocalBoxError";
    }
}

