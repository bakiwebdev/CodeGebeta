import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import colors from '../../Constants/ColorSchema';
import styles from './styles';

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  rounded,
  textColor,
  icon,
  iconPosition,
}) => {
  const getBGColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.blue;
    }
    if (danger) {
      return colors.red;
    } else {
      return colors.white;
    }
  };
  const getBorderRadious = () => {
    if (rounded) {
      return 40;
    } else {
      return 10;
    }
  };
  const getTextColor = () => {
    if (disabled) {
      return colors.secondary;
    }
    if (textColor) {
      return textColor;
    } else {
      return colors.white;
    }
  };

  const getBorderColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.blue;
    }
    if (danger) {
      return colors.red;
    } else {
      return colors.secondary;
    }
  };

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      }
      if (iconPosition === 'right') {
        return 'row-reverse';
      } else {
        return 'row';
      }
    } else {
      return 'row';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        {
          flexDirection: getFlexDirection(),
          backgroundColor: getBGColor(),
          borderRadius: getBorderRadious(),
          borderColor: getBorderColor(),
        },
      ]}>
        {loading && <ActivityIndicator color={getTextColor()} />}
      {icon && icon}
      {title && (
        <Text style={[styles.textStyle, {color: getTextColor()}]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
