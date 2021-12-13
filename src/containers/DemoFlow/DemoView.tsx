import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const DemoView: React.FC = () => (
  <View>
    <DemoText>DemoView</DemoText>
  </View>
);

const DemoText = styled.Text`
  color: red;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.Poppins.ExtraBold};
`;
