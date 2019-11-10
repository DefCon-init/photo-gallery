import styled from 'styled-components';

export const Card = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Button = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  & > img {
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  
`;

export const Header = styled.header`
  padding: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 13px;
`;