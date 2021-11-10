import {StyleSheet} from 'react-native';
import ColorSchema from '../../Constants/ColorSchema';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  settingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorSchema.dark_gray,
    marginTop: 20,
    marginLeft: 20,
  },
  lineSeparator: {
    height: 1,
    backgroundColor: ColorSchema.dark_gray,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  darkmodeText: {
    fontSize: 16,
    color: ColorSchema.dark_gray,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    width: '60%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: ColorSchema.dark_gray,
  },
  picker: {
    width: '100%',
  },
  buttonContainerStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
  }
});
