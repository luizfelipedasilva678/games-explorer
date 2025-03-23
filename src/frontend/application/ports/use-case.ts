interface UseCase<T, R> {
	perform(args: T): Promise<R>;
}

export default UseCase;
