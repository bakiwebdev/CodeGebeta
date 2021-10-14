import { StyleSheet } from "react-native";
import Colors from '../../Constants/ColorSchema';

export default StyleSheet.create(
    {
        wrapper: {
            marginVertical: 10,
            marginHorizontal: 5,
        },
        default: {
            color: Colors.secondary,
            fontSize: 25
        },
        logo:{
            fontWeight: '600',
            color: Colors.primary,
        }
    }
);