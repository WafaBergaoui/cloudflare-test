import { cfTeamsAccessAuthMiddleware } from "../../../../utils/cfAccess";

export const onRequest = [
    cfTeamsAccessAuthMiddleware
]