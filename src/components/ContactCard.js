import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const avatarColors = [
  '#534AB7', '#E05C3A', '#2A9D8F', '#E9C46A',
  '#F4A261', '#264653', '#8338EC', '#3A86FF',
];

const getAvatarColor = (name) => {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
};

export default function ContactCard({ contact, onDelete }) {
  return (
    <View style={styles.card}>
      <View style={[styles.avatar, { backgroundColor: getAvatarColor(contact.name) }]}>
        <Text style={styles.avatarText}>
          {contact.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{contact.name}</Text>
        <Text style={styles.phone}>{contact.phone}</Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(contact.id)}>
        <Ionicons name="trash-outline" size={22} color="#e05c3a" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});