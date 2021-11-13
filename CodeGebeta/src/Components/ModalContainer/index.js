import React, {useState, useContext, useEffect} from 'react';
import { Linking } from 'react-native';
import {View, Text, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ColorSchema from '../../Constants/ColorSchema';
import styles from './styles';
import CustomButton from '../CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ThemeContext from '../../Provider/ThemeProvider';

const ModalContainer = () => {

  //link to url
  const GitHubRepo = "https://github.com/Biruk-hub/CodeGebeta"
  const DataRepo = "https://github.com/Biruk-hub/CodeGebeta/tree/main/CodeGebeta/src/Data"


  // Theme Context
  const {value, setValue} = useContext(ThemeContext);

  //   language picker state
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  function languagePicker(value) {
    alert(value);
    setSelectedLanguage(value);
  }

  function darkModeChange()
  {    
    const mode = !value ? "On" : "Off";
    alert("Dark mode is " + mode);
    setValue(!value);
  }

  // useEffect(() => { // just for testing
  //   alert("Dark mode is " + value);
  // }, [value]);

  return (
    <View style={styles.container}>
      {/* {alert(ColorSchema().dark_gray)} */}
      {/* General Setting */}
      <View>
        <Text style={styles.settingTitle}>General Settings</Text>
        <View style={styles.lineSeparator} />
      </View>
      {/* Dark mode option */}
      <View style={styles.settingItem}>
        <Text style={styles.darkModeText}>
          Dark Mode
        </Text>
        <Switch
          trackColor={{false: ColorSchema.grey, true: '#81b0ff'}}
          thumbColor={value ? ColorSchema.primary : ColorSchema.secondary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => darkModeChange()}
          value={value}
        />
      </View>
      {/* Language Setting Option  */}
      <View style={styles.settingItem}>
        <Text style={styles.darkModeText}>Language</Text>
        {/* Picker menu */}
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => languagePicker(itemValue)}>
            <Picker.Item label="English" value="English" />
            <Picker.Item label="አማርኛ" value="Amaharic" />
            <Picker.Item label="ትግርኛ" value="Tigray" />
            <Picker.Item label="ኦሮምኛ" value="Ormiya" />
          </Picker>
        </View>
      </View>
      {/* Advanced Setting*/}
      <View>
        <Text style={styles.settingTitle}>Advanced Settings</Text>
        <View style={styles.lineSeparator} />
        {/* Content editor section */}
        <View style={styles.buttonContainerStyle}>
          <CustomButton
            title="Edit Courses"
            textColor={ColorSchema.dark_gray}
            icon={
              <Icon
                name="create-outline"
                size={20}
                color={ColorSchema.dark_gray}
              />
            }
            onPress={() => Linking.openURL(DataRepo)}
          />
        </View>
        {/* Contribuit on the project */}
        <View style={styles.buttonContainerStyle}>
          <CustomButton
            title="Contribute on Codeገበታ"
            textColor={ColorSchema.dark_gray}
            icon={
              <Icon
                name="git-branch-outline"
                size={20}
                color={ColorSchema.dark_gray}
              />
            }
            onPress={() => Linking.openURL(GitHubRepo)}
          />
        </View>
      </View>
    </View>
  );
};

export default ModalContainer;
