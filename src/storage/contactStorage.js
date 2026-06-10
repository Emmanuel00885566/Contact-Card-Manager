import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'contacts';

export const loadContacts = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load contacts:', error);
    return [];
  }
};

export const saveContact = async (newContact) => {
  try {
    const existing = await loadContacts();
    const updated = [...existing, newContact];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save contact:', error);
  }
};

export const deleteContact = async (id) => {
  try {
    const existing = await loadContacts();
    const updated = existing.filter(contact => contact.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to delete contact:', error);
  }
};