import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

async function postContact({ name, number }) {
  console.log(name, number);

  const { data } = await axios
    .post('http://localhost:3000/contacts', {
      name,
      number,
    })
    .then(res => res)
    .catch(err => err);

  return data;
}

async function deleteContact(id) {
  const { data } = await axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then(res => res)
    .catch(err => err);
  return data;
}

async function fetchContacts() {
  const { data } = await axios.get('http://localhost:3000/contacts');

  return data;
}

const api = {
  postContact,
  fetchContacts,
  deleteContact,
};

export default api;
