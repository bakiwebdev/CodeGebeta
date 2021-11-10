import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../Constants/ColorSchema';
import CustomButton from '../CustomButton';


const CustomModal = ({visible, toggle, children}) => {
  return (
    <View>
      <Modal
        isVisible={visible}
        animationIn="slideInLeft"
        animationInTiming={500}
        animationOutTiming={500}
        animationOut="slideOutRight">
        {/* modal wrapper */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* modal content container */}
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 10,
              padding: 10,
              width: '100%',
              height: '90%',
            }}>
            <View style={{flex: 1,}}>{children}</View>
            <View>
              <CustomButton title="Save" primary rounded onPress={toggle} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
