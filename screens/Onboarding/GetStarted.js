import { View, Image, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../constants/Colors';
import TextComponent from '../../components/TextComponent';
import ButtonIconComponent from '../../components/ButtonIconComponent';

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/hc.png')}
                style={styles.imageStyles}
            />
            <View style={styles.textContainer}>
                <TextComponent style={styles.mainText}>Be a part of the movement towards inclusive community development</TextComponent>
                <TextComponent style={styles.summaryText}>Sign up now to keep track of CDAs projects in your community.</TextComponent>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonIconComponent iconName='trending-up' onPress={() => navigation.navigate('SignUp')}>Get Started</ButtonIconComponent>
            </View>
        </View>
    )
}

export default GetStarted;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundColor,
    },
    imageStyles: {
        width: '100%',
        height: '50%'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        paddingHorizontal: windowWidth * 0.1,
    },
    summaryText: {
        fontSize: 18,
        fontWeight: 'normal',
        color: Colors.lightGrey,
        paddingHorizontal: windowWidth * 0.12,
        marginVertical: windowHeight * 0.02,
    },
    buttonContainer: {
        flex: 0.1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginLeft: windowWidth * 0.2,
        marginBottom: windowHeight * 0.06
    },
})