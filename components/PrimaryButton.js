import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrimaryButton = ({ children, style, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
                <Text style={[styles.text, style]}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#f22728',
        borderRadius: 20,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});



