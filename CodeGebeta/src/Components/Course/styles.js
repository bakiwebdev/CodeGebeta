import {ScaledSheet} from 'react-native-size-matters';
import ColorSchema from '../../Constants/ColorSchema';

export default ScaledSheet.create({
  wrapper: {
    width: '150@s',
    height: '130@s',
    margin: '5@s',
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
  },
});
