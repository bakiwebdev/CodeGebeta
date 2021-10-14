import { StyleSheet } from "react-native";
import ColorSchema from "../../Constants/ColorSchema";

export default StyleSheet.create(
    {
        wrapper: {
            marginVertical: 10,
        },
        title: {
            color: ColorSchema.secondary,
            fontWeight: '500',
            fontSize: 15,
        },
        courseContainer: {
            paddingVertical: 10,
        }
    }
);