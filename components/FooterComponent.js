import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors';

const FooterComponent = ({ onPress, children, buttonText, showFooterText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={styles.textBorder} />
                <Text style={styles.text}>Or Continue With</Text>
                <View style={styles.textBorder} />
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/googleIcon.png')}
                        style={styles.imageStyles}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/images/facebookIcon.png')}
                        style={styles.imageStyles}
                    />
                </TouchableOpacity>
            </View>
            {showFooterText && (
                <View style={styles.rowContainer}>
                    <Text>{children}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.footerBtn}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default FooterComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBorder: {
        borderBottomColor: Colors.green,
        borderBottomWidth: 2,
        opacity: 0.4,
        flex: 1,
        marginLeft: windowWidth * 0.06,
        marginRight: windowWidth * 0.06,
    },
    text: {
        marginHorizontal: windowWidth * 0.02,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyles: {
        width: 40,
        height: 40,
        margin: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.04,
    },
    footerBtn: {
        color: Colors.green,
        fontWeight: 'bold',
    }
});