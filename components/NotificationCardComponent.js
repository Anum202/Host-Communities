import React, { useState } from 'react';
import { View, Text, Switch, Dimensions, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const NotificationCardComponent = ({ notificationName, additionalText, initialValue }) => {
    const [isEnabled, setIsEnabled] = useState(initialValue);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.notificationName}>{notificationName}</Text>
                <Text style={styles.additionalText}>{additionalText}</Text>
            </View>
            <View style={styles.switchContainer}>
                <Switch
                    trackColor={{ true: Colors.green, false: Colors.lightGrey }}
                    thumbColor={isEnabled ? "#FFF" : "#FFF"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
}

export default NotificationCardComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 30,
        marginHorizontal: windowWidth * 0.05,
        marginTop: windowHeight * 0.02,
    },
    textContainer: {
        flex: 1,
    },
    switchContainer: {
        marginLeft: 10,
    },
    notificationName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    additionalText: {
        fontSize: 14,
        color: '#888',
    },
});
