import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorSchema from '../../Constants/ColorSchema';
import CustomModal from '../Modal';
import ModalContainer from '../ModalContainer';
import styles from './styles';

const Container = ({style, children}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    console.log('Container');
  }, []);
  return (
    // View is used to wrap the children to make them scrollable
    <View style={{width: '100%', height: '100%'}}>
      {/* show modal when the float setting button clicked */}
      {
        <CustomModal visible={isModalVisible} toggle={toggleModal}>
          <ModalContainer />
        </CustomModal>
      }
      <ScrollView>
        <View style={[styles.wrapper, style]}>{children}</View>
      </ScrollView>
      {/* float Setting button */}
      <TouchableOpacity onPress={toggleModal} style={styles.floatingButton}>
        <Icon name="settings" size={30} color={ColorSchema.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Container;
