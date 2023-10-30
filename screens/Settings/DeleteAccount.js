import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import PrimaryButton from '../../components/PrimaryButton';

const DeleteAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Settings</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Image
                    source={require('../../assets/images/DeleteIcon.png')}
                    style={styles.iconStyle}
                />
                <Text style={styles.mainText}>Are you sure you want to delete your account?</Text>
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton>Update Profile</PrimaryButton>
            </View>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DeleteAccount;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightBackgroundColor,
        paddingHorizontal: 16,
        height: windowHeight * 0.15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
    textContainer: {
        paddingHorizontal: windowWidth * 0.06,
        // marginTop: windowHeight * 0.2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 70,
        height: 90,
    },
    mainText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: windowHeight * 0.02,
    },
    signUpContainer: {
        width: '80%',
        alignSelf: 'center',
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btnText: {
        color: Colors.primaryButton,
        padding: 10,
        borderRadius: 8,
        marginVertical: windowHeight * 0.04,
    }
});