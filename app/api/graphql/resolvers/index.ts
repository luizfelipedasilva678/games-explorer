import { gamesResolvers } from "./games/games.resolvers";
import { rootResolvers } from "./root/root.resolvers";

const resolvers = [rootResolvers, gamesResolvers];

export default resolvers;
