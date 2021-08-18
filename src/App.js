import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as action from './components/redux/phonebook/phonebook-actions';
import * as options from './components/redux/phonebook/phonebook-options';

import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(options.fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    if (e.target.name === 'filter') {
      dispatch(action.filterContacts(e.target.value));
      return;
    }
    if (e.target.name === 'name') {
      setName(e.target.value);
      return;
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
      return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(options.postContacts({ name, number }));
    dispatch(options.fetchContacts());

    setName('');
    setNumber('');
  };

  const handleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteItem = async e => {
    const { id } = e.target;

    await dispatch(options.deleteContact(id));
    dispatch(options.fetchContacts());
  };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactList contacts={handleFilter()} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
