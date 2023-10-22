import { Text, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const ButtonIconComponent = ({ children, iconName, style, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{children}</Text>
                <View style={styles.iconContainer}>
                    <Feather
                        name={iconName}
                        size={26}
                        color="white"
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIconComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: windowWidth * 0.6,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth * 0.1,
    },
    text: {
        color: Colors.green,
        fontSize: 18,
    },
    iconContainer: {
        width: 60,
        height: 60,
        backgroundColor: Colors.green,
        borderRadius: 30,
        position: 'absolute',
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});
