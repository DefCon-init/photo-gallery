import React from 'react';
import history from '../../utils/history';

import {
    Button,
    Header,
    UserInfo,
    Name,
    Card
} from './styles';

interface User {
    name: string;
    image: string;
    key?: string;
}

const UserCard = (props: User) => {
    const handleUserProfile = (id: string) => {
        console.log('Name', id)
        history.push('/')
    };

    return (
        <Card>
            <Button key={props.key} type="button" onClick={() => handleUserProfile(props.name)}>
                <img src={props.image} alt={props.name} />
                <Header>
                    <UserInfo>
                        <Name>{props.name}</Name>
                    </UserInfo>
                </Header>
            </Button>
        </Card>
    );
}

export default UserCard;
