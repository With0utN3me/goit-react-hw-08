import './App.css'
import { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from "./ContactForm/ContactForm"
import Notification from './Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts, selectIsLoading, selectError } from '../redux/contactsSlice';
import { fetchContacts } from '../redux/contactsOps';


const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFilteredContacts);

  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && !error && <p>Request in progress...</p>}
  {visibleContacts.length === 0 ? (
    contacts.length !== 0 ? (
      <Notification text = {"There are no contacts matching your request."}/>) :
      <>
        <Notification text = {"There are no contacts yet, but you can add new one's!"}/>
      </>
    ) : <ContactList/>
}
    </div>)
}
export default App;

