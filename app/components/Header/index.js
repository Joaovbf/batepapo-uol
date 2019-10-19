import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HeaderSection = ({title}) => (
  <View style={styles.header}>
    <Text style={{
      color: "#FFF"
    }}>{title}</Text>
  </View>
);

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    backgroundColor: '#236CEA',
    alignItems: 'center',
    justifyContent: 'center',
    height: "10%",
    width:"100%",
  },
});