import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import LinkButtonComponent from '../../components/LinkButtonComponent';

const Settings = ({ navigation }) => {
    return (
        <View style={StyleSheet.container}>
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
                <Text style={styles.mainText}>Settings</Text>
                <Text style={styles.additionalText}>Change or make updates to your account  easily.</Text>
            </View>

            <View style={styles.outerCardContainer}>
                <View style={styles.cardContainer}>
                    <Image
                        source={require('../../assets/images/ProfileAvatar.png')}
                        style={styles.profileImage}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.mainText}>John Doe</Text>
                        <Text style={styles.summaryText}>john.doe@example.com</Text>
                    </View>
                </View>
                <View style={styles.reportsContainer}>
                    <Text style={styles.mainText}>13 Reports</Text>
                    <Text style={styles.summaryText}>Number of reports you've submitted</Text>
                </View>
            </View>

            <View style={styles.buttonsCardContainer}>
                <LinkButtonComponent
                    iconName='person-outline'
                    iconType='Ionicons'
                    buttonText='Update Profile'
                    onPress={() => navigation.navigate('UpdateProfile')}
                />
                <LinkButtonComponent
                    iconName='person-outline'
                    iconType='Ionicons'
                    buttonText='Update KYC'
                    onPress={() => navigation.navigate('UpdateKYC')}
                />
                <LinkButtonComponent
                    iconName='bell'
                    iconType='Feather'
                    buttonText='Notification Settings'
                    onPress={() => navigation.navigate('NotificationSettings')}
                />
                <LinkButtonComponent
                    iconName='lock'
                    iconType='AntDesign'
                    buttonText='Change Password'
                    onPress={() => navigation.navigate('ChangePassword')}
                />
                <LinkButtonComponent
                    iconName='support-agent'
                    iconType='MaterialIcons'
                    buttonText='Contact Us'
                    onPress={() => navigation.navigate('ContactUs')}
                />
                <LinkButtonComponent
                    iconName='delete'
                    iconType='AntDesign'
                    buttonText='Delete Account'
                    onPress={() => navigation.navigate('DeleteAccount')}
                />
            </View>

        </View>
    )
}
export default Settings;

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

    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    additionalText: {
        fontSize: 13,
        marginTop: windowHeight * 0.01,
    },
    outerCardContainer: {
        backgroundColor: 'white',
        marginTop: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.05,
        borderRadius: 30,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.05,
        paddingVertical: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.04,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    profileInfo: {
        flex: 1,
    },
    mainText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    summaryText: {
        fontSize: 14,
    },
    reportsContainer: {
        marginHorizontal: windowWidth * 0.1,
        marginVertical: windowHeight * 0.01,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: Colors.inputBackground
    },
    buttonsCardContainer: {
        backgroundColor: 'white',
        marginTop: windowHeight * 0.03,
        marginHorizontal: windowWidth * 0.05,
        borderRadius: 30,
    },
});