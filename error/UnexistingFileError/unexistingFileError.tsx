export class UnexistingFileError extends Error {

    constructor(message = "Nous sommes désolé mais le contenu que vous essayez d'atteindre n'est pas disponible.") {
        super(message);
        this.name = "UnexistingFileError";
    }

    
}