import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactElement } from '../ContactElement/ContactElement';
import { fetchContacts } from '../../redux/contacts/contactOperation';
import { deleteContact } from 'redux/contacts/contactOperation';




export const ContactList = () => {
  const dispatch = useDispatch();
  
  const filterContacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter.value);
  
   useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

 
   const filteredElement = () => {
     const normalizedFilter = filter?.toLowerCase();
     return filter
       ? filterContacts.filter(contact =>
           contact.name.toLowerCase().includes(normalizedFilter)
         )
       : filterContacts;
   };
 const contacts = filteredElement()
  const removeContact = el => {
     dispatch(deleteContact(el.id));
   };
  return (
    <ol>
      {contacts?.map(el => {
        return (
          <ContactElement
            onClick={() => removeContact(el)}
            key={el.id}
            el={el}
          />
        );
      })}
    </ol>
  );
};
