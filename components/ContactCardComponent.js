import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ContactCardComponent = ({ imageSource, name, additionalText, style, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={imageSource} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>{name}</Text>
                <Text style={[styles.additionalText, style]}>{additionalText}</Text>
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name="chevron-right" size={24} color="red" style={styles.expandIcon} />
            </TouchableOpacity>

        </TouchableOpacity>
    );
};

export default ContactCardComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.01,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: windowWidth * 0.04,
    },
    textContainer: {
        flex: 1,
    },
    mainText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    additionalText: {
        fontSize: 14,
        marginTop: 4,
    },
    expandIcon: {
        marginLeft: windowWidth * 0.02,
    },
});
