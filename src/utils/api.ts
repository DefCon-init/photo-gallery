import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

const graphQlAPI = axios.create({
  baseURL: 'http://localhost:8000/graphql',
});

export default graphQlAPI