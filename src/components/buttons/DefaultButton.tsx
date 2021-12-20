import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { scale } from '@utils/helpers/dimensions';
import { useSelector } from 'react-redux';
import { selectors } from '@state/.';
import { COLORS } from '@assets/theme';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
  logOut?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
  logOut,
}) => {
  const setOnSync = useSelector(selectors.auth.setOnSync);
  return (
    <TouchableWrapper disabled={setOnSync} logOut={logOut} onPress={onPress}>
      {setOnSync ? (
        <ActivityIndicator size={'large'} color={COLORS.black01} />
      ) : (
        <ButtonTitle logOut={logOut}>{children}</ButtonTitle>
      )}
    </TouchableWrapper>
  );
};

const ButtonTitle = styled.Text<{ logOut: boolean }>`
  width: 100%;
  padding-horizontal: ${({ theme }) => scale(theme.spacing.xs)}px;
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  text-align: ${({ logOut }) => (logOut ? 'right' : 'center')};
  color: ${({ theme }) => theme.colors.white};
`;

const TouchableWrapper = styled.TouchableOpacity<{ logOut: boolean }>`
  width: 100%;
  height: ${scale(50)}px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ logOut }) => (logOut ? 'null' : '6px')};
`;
