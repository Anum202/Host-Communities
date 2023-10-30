import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Ionicons, Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const LinkButtonComponent = ({ iconName, iconType, buttonText, onPress }) => {
    const renderIcon = () => {
        if (iconType === 'Ionicons') {
            return (
                <Ionicons name={iconName} size={23} color='black' style={styles.icon} />
            );
        }
        if (iconType === 'Feather') {
            return (
                <Feather name={iconName} size={22} color='black' style={styles.icon} />
            );
        }
        if (iconType === 'AntDesign') {
            return (
                <AntDesign name={iconName} size={22} color='black' style={styles.icon} />
            );
        }
        if (iconType === 'MaterialIcons') {
            return (
                <MaterialIcons name={iconName} size={22} color='black' style={styles.icon} />
            );
        }
    }


    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {renderIcon(iconType)}
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

export default LinkButtonComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginHorizontal: windowWidth * 0.15,
        marginTop: windowHeight * 0.015,
        marginBottom: windowHeight * 0.01,
        borderBottomWidth: 1,
        borderBottomColor: Colors.inputBackground,
        paddingBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 16,
    },
});
