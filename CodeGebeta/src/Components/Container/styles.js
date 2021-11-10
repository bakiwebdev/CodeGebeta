import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';
import tw from 'tailwind-react-native-classnames';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    height: 50,
    width: 50,
    backgroundColor: ColorSchema.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    
  },
});
