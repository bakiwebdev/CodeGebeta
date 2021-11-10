import {StyleSheet} from 'react-native';
import colors from '../../Constants/ColorSchema';

export default StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
    marginHorizontal: 5,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  textStyle: {
    marginHorizontal: 20,
    fontSize: 16
  }
});
