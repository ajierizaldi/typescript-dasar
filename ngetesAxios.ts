import axios from 'axios';

const testAxios = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(res.data);
}