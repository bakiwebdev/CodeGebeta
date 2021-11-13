import { StyleSheet } from "react-native";
import ColorSchema from "../../Constants/ColorSchema";


export default StyleSheet.create(
    {
    container: {
        flex: 1,
        backgroundColor: ColorSchema.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: ColorSchema.secondary,
    },
});