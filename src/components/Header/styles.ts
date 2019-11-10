import styled from 'styled-components';

export const MainHeader = styled.header`
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const UL = styled.ul`
  margin: 1em 0 .5em;
  text-align: center;
`;

export const LI = styled.li`
  display: inline;
`;

export const Button = styled.button`
  border: none;
  margin: 10px;
  color: black;
  background: #ddd !important;
  font-weight: 100;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-weight: 400;
  display: inline-block;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #404040 !important;
    font-weight: 700 !important;
    letter-spacing: 3px;
    background: none;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;