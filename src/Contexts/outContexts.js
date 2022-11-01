
/*

import { createContext, useCallback, useMemo, useState } from "react";
import  PropTypes from "prop-types";

// tiene un objeto con el cual vamos a rodear los objetos que queremos marcar 
export const AuthContext = createContext();

const MY_AUTH_APP = 'MY_AUTH_APP_1';
// api context permite saber si el usuario inicio seccion 
export function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem('MY_AUTH_APP') ?? false
    );

    const login = useCallback(function () {

        window.localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true);

    }, []);

    const logout = useCallback(function () {

        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false);

    }, []);

    const value = useMemo(

        () => ({
            login,
            logout,
            isAuthenticated
        }),
        [login, logout, isAuthenticated]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
AuthContextProvider.PropTypes = {
    children: PropTypes.object
};


*/

