import styled from 'styled-components';

export const PostList = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex: 1;
`;

export const Article = styled.article`
  margin-top: 20px;
  margin-left: 20px;
  max-width: 300px;
  min-width: 250px;

  & > img {
    width: 100%;
    min-height: 400px;
  }
`;

export const NoPost = styled.div``