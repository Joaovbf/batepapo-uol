import React from 'react'
import { StyleSheet, Text, View, TextInput,Button, ScrollView } from 'react-native';

const CardMessage = ({name,message, from }) => {
    return (
      <View style={styles.messageBox}>
        <Text style={styles.nameText}>{name}:</Text>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    );
}

export default CardMessage

const styles = StyleSheet.create({
    nameText:{
        fontSize:16,
        fontWeight:"500",
        marginRight: 12,
    },
    messageText:{
        fontSize:14,
        fontWeight:"400"
    },
    messageBox:{
        backgroundColor:'white',
        padding: 20,
        borderRadius:6,
        borderColor:'#7BB85B',
        borderStyle:"solid",
        borderWidth:1
    }
})