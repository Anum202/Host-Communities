import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ children, style }) => {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

export default TextComponent;

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
});