import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Dimensions, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import PrimaryButton from '../../components/PrimaryButton';
import ContactCardComponent from '../../components/ContactCardComponent';

const Reports = ({ navigation }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <SimpleLineIcons name="arrow-left" size={22} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Reports</Text>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Image
                    source={require('../../assets/images/EmptyStateIcon.png')}
                    style={styles.iconStyle}
                    resizeMode='contain'
                />
                <Text style={styles.mainText}>No reports yet.</Text>
                <Text style={styles.additionalText}>You have not made any report yet.Click on the button below to give reports on the ongoing CDA projects in your host community.</Text>
            </View>
            <View style={styles.signUpContainer}>
                <PrimaryButton onPress={openModal}>Make a Report</PrimaryButton>
            </View>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackgroundOverlay} onTouchEnd={closeModal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalMainText}>Make a Report</Text>
                        <Text style={styles.modalAdditionalText}>Report any breach or give an update on the status of the CDA projects in your community.</Text>
                        <ContactCardComponent
                            imageSource={require('../../assets/images/ReportOnProjectIcon.png')}
                            name='CDA Project'
                            additionalText='Report on projects in your host community.'
                            style={styles.alternateText}
                            onPress={() => navigation.navigate('CDAProjectReport')}
                        />
                        <ContactCardComponent
                            imageSource={require('../../assets/images/ReportViolenceIcon.png')}
                            name='Violence against Women'
                            additionalText='Report incidents of violence & rape.'
                            style={styles.alternateText}
                            onPress={() => navigation.navigate('ViolenceReport')}
                        />
                        <ContactCardComponent
                            imageSource={require('../../assets/images/ReportDegradationIcon.png')}
                            name='Environmental Degradation'
                            additionalText='Report incident of environmental degradation.'
                            style={styles.alternateText}
                            onPress={() => navigation.navigate('DegradationReport')}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Reports;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightBackgroundColor,
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
    modalBackgroundOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        width: '100%',
        height: '60%',
    },
    // modalContainer: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    // },
    // modalContent: {
    //     backgroundColor: 'white',
    //     borderTopLeftRadius: 40,
    //     borderTopRightRadius: 40,
    //     padding: 30,
    // },
    modalMainText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalAdditionalText: {
        fontSize: 13,
        marginBottom: 20,
    },
    closeButton: {
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: 'blue',
    },
    alternateText: {
        fontSize: 10,
    },
});




