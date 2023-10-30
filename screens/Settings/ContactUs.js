import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import ContactCardComponent from '../../components/ContactCardComponent';

const ContactUs = ({ navigation }) => {
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
                <Text style={styles.mainText}>Contact Us</Text>
                <Text style={styles.additionalText}>You can reach us via any channels listed below.</Text>
            </View>
            <View style={styles.contactContainer}>
                <Text style={styles.mainText}>Visit our office</Text>
                <Text style={styles.additionalText}>3B, Niger Avenue, Villa Nova Estate, After Cedar Crest Hospital, Apo Dutse Apuja.</Text>
            </View>
            <ContactCardComponent
                imageSource={require('../../assets/images/PhoneIcon.png')}
                name='Phone Number'
                additionalText='+234(0)812 255 6434'
            />
            <ContactCardComponent
                imageSource={require('../../assets/images/EmailIcon.png')}
                name='Email Address'
                additionalText='contact@hostcommunities.ng'
            />
            <ContactCardComponent
                imageSource={require('../../assets/images/TwitterIcon.png')}
                name='Twitter Handle'
                additionalText='@hostcommunities'
            />
            <ContactCardComponent
                imageSource={require('../../assets/images/LinkedinIcon.png')}
                name='LinkedIn Page'
                additionalText='@hostcommunities'
            />
        </View>
    )
}

export default ContactUs;

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
    contactContainer: {
        marginHorizontal: windowWidth * 0.05,
        marginVertical: windowHeight * 0.02,
        padding: 20,
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: Colors.inputBackground

    }
})