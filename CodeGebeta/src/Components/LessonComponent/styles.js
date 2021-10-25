import { StyleSheet } from "react-native";
import ColorSchema from "../../Constants/ColorSchema";

export default StyleSheet.create(
    {
        wrapper: {
            backgroundColor: ColorSchema.bg,
            width: '100%',
            height: '100%',
        },
        lessonPart: {
            marginHorizontal: 20,
            marginVertical: 10,
            color: ColorSchema.grey,
        },
        lessonTitle: {
            color: ColorSchema.secondary,
            margin: 10,
            padding: 10,
            fontSize: 30,
        },
        lessonDetail: {
            body: {
                padding: 10,                
                color: ColorSchema.secondary,
            },
            code_inline: {
                backgroundColor: ColorSchema.secondary,
                color: ColorSchema.bg
            },
            code_block: {
                backgroundColor: ColorSchema.secondary,
                color: ColorSchema.bg
            },
        }
    }
);