import { ScaledSheet } from 'react-native-size-matters';
import ColorSchema from '../../Constants/ColorSchema';

export default ScaledSheet.create({
  wrapper: {
    height: '150@s',
    width: '280@s',
    marginHorizontal: '10@s',
    marginVertical: '5@s',
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
