import { selectContacts } from "../../redux/contacts/contacts-selectors";

export const selectFilter = (state) => state.filter;

export const selectFilteredContacts = (state) => {
    const filter = selectFilter(state)
    // console.log(filter)
    const contact = selectContacts(state)
    // console.log(contact)
    return contact.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase().trim()))
}