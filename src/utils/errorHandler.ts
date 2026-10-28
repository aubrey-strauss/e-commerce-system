// Custom message for API errors
export class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ApiError";
    }
}

// Prints error message 
export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error(`${error.name}: ${error.message}`);
    } else {
        console.error("Unexpected error.");
    }
}