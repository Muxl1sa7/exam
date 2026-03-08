class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }

    static NotFound(message = "Not Found") {
        return new CustomError(message, 404);
    }

    static BadRequest(message = "Bad Request") {
        return new CustomError(message, 400);
    }
}

module.exports = CustomError;