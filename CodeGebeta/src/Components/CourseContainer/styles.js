import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';

export default StyleSheet.create({
  wrapper: {},
  title: {
    color: ColorSchema.secondary,
    fontWeight: '500',
    marginVertical: 5,
  },
  courseContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
