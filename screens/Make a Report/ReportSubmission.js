import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import PrimaryButton from '../../components/PrimaryButton';

const ReportSubmission = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Make a Report</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Image
                    source={require('../../assets/images/ThankYouIcon.png')}
                    style={styles.iconStyle}
                    resizeMode='contain'
                />
                <Text style={styles.mainText}>Thank You.</Text>
                <Text style={styles.additionalText}>Your report has been submitted successfully. Required actions will be taken immediately if needed to be.</Text>
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton onPress={() => navigation.navigate('ReportsHomeScreen')}>Go Back Home</PrimaryButton>
            </View>
        </View>
    )
}

export default ReportSubmission;

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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 100,
        height: 100,
    },
    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: windowHeight * 0.02,
    },
    additionalText: {
        fontSize: 14,
        marginTop: windowHeight * 0.01,
        textAlign: 'center',
    },
    signUpContainer: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: windowHeight * 0.3,
    },
});