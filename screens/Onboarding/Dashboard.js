import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import CardComponent from '../../components/CardComponent';

const Dashboard = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Settings')}>
                        <AntDesign name="user" size={32} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.nameText}>John Doe</Text>
                        <Text style={styles.welcomeText}>Welcome to HC platform</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity>
                        <Feather name="search" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="bell" size={24} color="black" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.square}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../../assets/images/TotalCDAProjects.png')}
                        style={styles.iconDashboard}
                    />
                </View>
                <Text style={styles.iconText}>Total CDA Projects</Text>
                <Text style={styles.additionalText}>28,608</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.leftSquare}>
                    <View style={styles.smallIconContainer}>
                        <Image
                            source={require('../../assets/images/TotalReports.png')}
                            style={styles.smallIcon}
                        />
                    </View>
                    <Text style={styles.smallIconText}>Total Reports</Text>
                    <Text style={styles.smallAdditionalText}>8,872</Text>
                </View>
                <View style={styles.rightSquare}>
                    <View style={styles.smallIconContainer}>
                        <Image
                            source={require('../../assets/images/TotalResources.png')}
                            style={styles.smallIcon}
                        />
                    </View>
                    <Text style={styles.smallIconText}>Total Resources</Text>
                    <Text style={styles.smallAdditionalText}>288</Text>
                </View>
            </View>
            <Text style={styles.headingText}>Recent CDAs</Text>
            <CardComponent name="Afao-Ekiti CDA - Ekiti" date="28th Mar 2022" />
            <CardComponent name="Daranna CDA - Kebbi" date="1st Dec 2020" />
            <CardComponent name="Ezi Akani CDA - Ebonyi" date="20th Dec 2019" />
            <CardComponent name="Liji CDA - Gombe" date="7th Jul 2020" />
        </View>
    )
}

export default Dashboard;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const squareWidth = windowWidth * 0.9;
const smallSquareWidth = (squareWidth - 2 * 10) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightBackgroundColor,
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.lightBackgroundColor,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight * 0.06,
        marginHorizontal: windowWidth * 0.03,
    },
    rightContainer: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.06,
        marginHorizontal: windowWidth * 0.07,
    },
    profileIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    nameText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    welcomeText: {
        color: 'black',
        fontSize: 12,
    },
    icon: {
        marginLeft: windowWidth * 0.04,
    },
    square: {
        width: squareWidth,
        height: windowWidth * 0.5,
        marginHorizontal: windowWidth * 0.05,
        marginTop: windowHeight * 0.015,
        backgroundColor: Colors.green,
        borderRadius: 20,
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.03,
        marginHorizontal: windowWidth * 0.06,
    },
    iconDashboard: {
        width: 50,
        height: 50,
    },
    iconText: {
        color: '#FFF',
        fontSize: 20,
        marginTop: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.06,
    },
    additionalText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.06,
    },
    smallIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.01,
        marginHorizontal: windowWidth * 0.05,
    },
    smallIcon: {
        width: 50,
        height: 50,
    },
    smallIconText: {
        color: '#FFF',
        fontSize: 14,
        marginHorizontal: windowWidth * 0.05,
    },
    smallAdditionalText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: windowWidth * 0.05,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight * 0.015,
    },
    leftSquare: {
        width: smallSquareWidth,
        height: windowWidth * 0.35,
        marginHorizontal: 10,
        backgroundColor: Colors.square1,
        borderRadius: 20,
    },
    rightSquare: {
        width: smallSquareWidth,
        height: windowWidth * 0.35,
        marginHorizontal: 10,
        backgroundColor: Colors.square2,
        borderRadius: 20,
    },
    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginTop: windowHeight * 0.02,
        marginHorizontal: windowWidth * 0.06,
    },
});
