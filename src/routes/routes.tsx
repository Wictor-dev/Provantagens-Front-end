import { useState } from "react";
import Tabs from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
    const [isLogged, setIsLogged] = useState(false)

    return isLogged ? <Tabs /> : <AuthRoutes />

}