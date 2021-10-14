import { StyleSheet } from "react-native";
import ColorSchema from "../../Constants/ColorSchema";

export default StyleSheet.create(
    {
        wrapper: {
            width: '100%',
            height: 50,
            borderColor: ColorSchema.grey,
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 20,
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        lesson: {
            fontSize: 20,
            fontWeight: '600',
            color: ColorSchema.secondary,
        }
    }
);