import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';

export default StyleSheet.create({
  wrapper: {
    width: 180,
    height: 160,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: ColorSchema.primary,
    backgroundColor: ColorSchema.white,
  },
  courseName: {
    fontSize: 15,
    fontWeight: '500',
    padding: 5,
    color: ColorSchema.secondary,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  lessons: {
      color: ColorSchema.secondary,
  }
});
