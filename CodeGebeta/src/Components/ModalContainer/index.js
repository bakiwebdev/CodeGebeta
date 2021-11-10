import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ColorSchema from '../../Constants/ColorSchema';
import styles from './styles';
import CustomButton from '../CustomButton';
import Icon  from 'react-native-vector-icons/Ionicons';

const ModalContainer = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //   language picker state
  const [selectedLanguage, setSelectedLanguage] = useState('Java');

  return (
    <View style={styles.container}>
      {/* General Setting */}
      <View>
        <Text style={styles.settingTitle}>General Settings</Text>
        <View style={styles.lineSeparator} />
      </View>
      {/* Dark mode option */}
      <View style={styles.settingItem}>
        <Text style={styles.darkmodeText}>Dark mode</Text>
        <Switch
          trackColor={{false: ColorSchema.grey, true: '#81b0ff'}}
          thumbColor={isEnabled ? ColorSchema.primary : ColorSchema.secondary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      {/* Language Setting Option  */}
      <View style={styles.settingItem}>
        <Text style={styles.darkmodeText}>Language</Text>
        {/* Picker menu */}
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
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
            icon={<Icon name="create-outline" size={20} color={ColorSchema.dark_gray} />}
          />
        </View>
        {/* Contribuit on the project */}
        <View style={styles.buttonContainerStyle}>
          <CustomButton
            title="Contribute on GitHub"
            textColor={ColorSchema.dark_gray}
            icon={<Icon name="git-branch-outline" size={20} color={ColorSchema.dark_gray} />}
          />
        </View>
      </View>
    </View>
  );
};

export default ModalContainer;
