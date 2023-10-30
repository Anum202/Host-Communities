import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const SecondaryButton = ({ children, style, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={[styles.text, style]}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SecondaryButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.primaryButton,
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        color: Colors.primaryButton,
        fontSize: 18,
        textAlign: 'center',
    },
});



