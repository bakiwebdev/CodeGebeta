import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 250,
    backgroundColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    height: 40,
    backgroundColor: ColorSchema.secondary,
    opacity: 0.5,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    color: ColorSchema.white,
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
});
