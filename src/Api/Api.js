import axios from 'axios';
export const getPizza = async () => {
  let option = {
    url: 'http://localhost:5000/get',
    method: 'get',
    headers: { 'content-type': 'application/json' },
  };

  try {
    var response = await axios(option);
    return response
  } catch (error) {
    console.log(error, 'error');
  }
};
