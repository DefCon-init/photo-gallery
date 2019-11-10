import React, { useEffect } from 'react';

import { useAuth0 } from '../../utils/auth/useAuth_old';

import loading from '../../assets/loading.svg';
import { Container } from './styles';

const Callback = props => {
    const { handleAuthentication } = useAuth0();
    const { location } = props;

    useEffect(() => {
        if (/access_token|id_token|error/.test(location.hash)) {
            handleAuthentication();
        }
    }, [handleAuthentication, location]);

    return (
        <Container>
            <img src={loading} alt="loading" />
        </Container>
    );
};

export default Callback;
