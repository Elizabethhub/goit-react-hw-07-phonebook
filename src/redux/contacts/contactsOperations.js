import axios from "axios";
import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from "./contactActions";

axios.defaults.baseURL = "https://phonebook-5b0f2-default-rtdb.firebaseio.com";

export const fetchContacts = () => async (dispatch) => {
  dispatch(getContactRequest());

  try {
    const { data } = await axios.get("/contacts.json");
    dispatch(getContactSuccess(Object.keys(data).map((key) => ({ id: key, ...data[key] }))));
  } catch (error) {
    dispatch(getContactError(error.message));
  }
};
export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post("/contacts.json", contact);
    dispatch(addContactSuccess({ id: data.name, ...contact }));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}.json`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};
