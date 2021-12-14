import React from 'react';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => (
  <TouchableWrapper onPress={onPress}>
    <ButtonTitle>{children}</ButtonTitle>
  </TouchableWrapper>
);

const ButtonTitle = styled.Text`
  font-size: ${scale(20)}px;
  width: 100%;
  text-align: center;
`;

const TouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  border: 1px solid black;
  width: 100%;
  height: ${scale(50)}px;
  justify-content: center;
`;
