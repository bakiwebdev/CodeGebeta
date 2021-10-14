import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.default}>የ programming እውቀቶን</Text>
      <Text style={styles.default}>በ <Text style={styles.logo}>Codeገበታ</Text> ያዳብሩ</Text>
    </View>
  );
};

export default Header;
