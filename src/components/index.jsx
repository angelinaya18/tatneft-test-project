import { createRoutesView } from "atomic-router-react";
import {UsersListRoute} from "./UsersList";

export const Pages=createRoutesView({
    routes: [UsersListRoute]
})