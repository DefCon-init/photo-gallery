import React from 'react';

import loading from '../../assets/loading.svg';
import { Container } from './styles';

const Loader = () => {
    return (
        <Container>
            <img src={loading} alt="loading" />
        </Container>
    );
};

export default Loader;
