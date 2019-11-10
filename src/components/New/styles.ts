import styled from 'styled-components';

export const PostForm = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type='text'] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    border: none;
    color: black;
    background: #ddd !important;
    font-weight: 100;
    text-transform: uppercase;
    border-radius: 8px;
    font-weight: 400;
    display: inline-block;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
`;
