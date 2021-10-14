import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';

export default StyleSheet.create({
  wrapper: {
    height: 170,
    width: 340,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: ColorSchema.grey,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  justStyle: {
    flex: 1,
  },
  titleWrapper: {
    height: 50,
    backgroundColor: ColorSchema.secondary,
    opacity: 0.5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
      color: ColorSchema.white,
      fontSize: 20,
      fontWeight: '600',
  }
  
});
