import { StyleSheet } from "react-native";
import ColorSchema from "../../Constants/ColorSchema";

export default StyleSheet.create(
    {
        wrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            height: 45,
            backgroundColor: ColorSchema.white,
            borderRadius: 5,
            borderColor: ColorSchema.primary,
            borderWidth: 0.5,
            paddingHorizontal: 10,
            marginVertical: 5,
        },
        textStyle: {
            overflow: 'hidden',
        },
        lessonText: {
            fontSize: 9,
            color: ColorSchema.grey,
        },
        lessonTitle: {
            color: ColorSchema.secondary,
        },
        iconSize: {

        },
    }
);