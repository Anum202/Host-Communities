import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';

const CardComponent = ({ name, date }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={styles.leftContent}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.middleContent}>
                <Text style={styles.dateText}>{date}</Text>
            </View>
            <TouchableOpacity style={styles.rightContent}>
                <Text style={styles.dotsText}>...</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.lightGrey,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginHorizontal: windowWidth * 0.06,
        marginVertical: windowHeight * 0.004,
        padding: 10,
    },
    leftContent: {
        flex: 4,
    },
    middleContent: {
        flex: 2.5,
        alignItems: 'center',
    },
    rightContent: {
        flex: 1,
        alignItems: 'flex-end',
    },
    nameText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 11,
        color: Colors.placeholderText,
    },
    dotsText: {
        fontSize: 25,
        color: Colors.placeholderText,
        textAlign: 'center',
    },
});

export default CardComponent;

