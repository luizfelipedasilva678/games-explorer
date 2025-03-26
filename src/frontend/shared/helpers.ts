import type { ErrorObject } from "../presentation/ports";

function isErrorObject(obj: any): obj is ErrorObject {
	return "message" in obj;
}

export { isErrorObject };
