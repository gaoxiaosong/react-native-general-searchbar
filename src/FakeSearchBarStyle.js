import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    touch: {
        flex: 1,
        height: 35,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e8e8ea',
    },
    image: {
        marginLeft: 10,
        width: 16,
        height: 16,
    },
    text: {
        marginLeft: 6,
        fontSize: 15,
        color: '#999999',
        flex: 1
    },
});