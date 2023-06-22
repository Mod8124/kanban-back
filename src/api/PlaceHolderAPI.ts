import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

const PLaceHolderAPI = axios.create({
  baseURL: URL,
});

export default PLaceHolderAPI;
