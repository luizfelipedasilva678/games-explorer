import { gamesResolvers } from "./games/games.resolvers";
import { rootResolvers } from "./root/root.resolvers";
import { genresResolvers } from "./genres/genres.resolvers";

const resolvers = [rootResolvers, gamesResolvers, genresResolvers];

export default resolvers;
