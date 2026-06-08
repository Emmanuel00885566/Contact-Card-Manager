# ContactManager

A simple offline contact manager built with React Native and Expo.
This was built as a group capstone project for the TechCrush Mobile Development Bootcamp.

## What it does

A personal phonebook app that works completely offline. You can add, view, search,
and delete contacts — and everything stays saved even when you close the app.

## Features

- Add contacts with name and phone number
- View all saved contacts in a clean list
- Search contacts by name in real time
- Delete contacts with a confirmation prompt
- Data persists locally using AsyncStorage (no internet needed)

## Tech Stack

- React Native
- Expo
- React Navigation (Native Stack)
- AsyncStorage

## Project Structure

```
ContactManager/
  src/
    components/
      ContactCard.js
    screens/
      ContactListScreen.js
      AddContactScreen.js
    storage/
      contactStorage.js
  App.js
```

## Getting Started

### Prerequisites
- Node.js installed
- Expo CLI
- Expo Go app on your phone (for testing)

### Installation

Clone the repo:
git clone <your-repo-url>
cd ContactManager

Install dependencies:
npm install
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-native-async-storage/async-storage
```

Run the app:
npx expo start

Scan the QR code with Expo Go on your phone or press `a` for Android emulator.

## Team
Group 5 — TechCrush Mobile Dev Bootcamp
## Notes
All contact data is stored locally on the device using AsyncStorage.
No backend, no database, no internet connection required.