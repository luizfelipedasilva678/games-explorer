function createErrorObject(statusCode = 500, message = "Something went wrong") {
	return {
		statusCode,
		message,
	};
}

export { createErrorObject };
