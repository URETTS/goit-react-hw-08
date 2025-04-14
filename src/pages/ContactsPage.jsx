// src/pages/ContactsPage.jsx

import ContactForm from '../components/ContactForm';
import SearchBox from '../components/SearchBox';
import ContactList from '../components/ContactList';

import styles from './ContactsPage.module.css'; // Якщо хочеш стилізувати саму сторінку

const ContactsPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Your Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
