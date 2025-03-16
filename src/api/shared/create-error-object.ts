import { HTTP_INTERNAL_SERVER_ERROR } from ".";

function createErrorObject(
	statusCode = HTTP_INTERNAL_SERVER_ERROR,
	message = "Something went wrong",
) {
	return {
		statusCode,
		message,
	};
}

export { createErrorObject };
