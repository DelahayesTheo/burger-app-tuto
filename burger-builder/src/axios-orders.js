import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-43687.firebaseio.com/'
});

export default instance;