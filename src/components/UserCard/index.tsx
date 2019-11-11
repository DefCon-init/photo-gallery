import React from 'react';

import {
    Button,
    Header,
    UserInfo,
    Name,
    Card
} from './styles';

interface User {
    name: string;
    image?: string;
}

const UserCard = (props: User) => {
    return (
        <Card>
            <Button type="button">
                <img src={props.image || 'https://via.placeholder.com/300'} alt={props.name} />
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
