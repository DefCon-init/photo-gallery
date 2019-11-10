import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useAuth0 } from './AuthContext'

interface IPrivateRouteOptions {
    component: React.FC,
    path: string,
}

type PrivateRouteOptions = IPrivateRouteOptions;


const PrivateRoute = ({ component: Component, path, ...rest }: PrivateRouteOptions) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                redirect_uri: window.location.origin,
                appState: { targetUrl: path }
            });
        };
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);

    const render = props => isAuthenticated === true ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;