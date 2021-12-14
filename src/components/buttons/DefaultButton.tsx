import React from 'react';
import styled, { css } from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';

interface DefaultButtonProps {
  onPress: (event: unknown) => void;
  logOut?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
  logOut,
}) => (
  <TouchableWrapper logOut={logOut} onPress={onPress}>
    <ButtonTitle logOut={logOut}>{children}</ButtonTitle>
  </TouchableWrapper>
);

const ButtonTitle = styled.Text<{ logOut: boolean }>`
  width: 100%;
  padding-horizontal: ${({ theme }) => scale(theme.spacing.xs)}px;
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  text-align: ${({ logOut }) => (logOut ? 'right' : 'center')};
`;

const TouchableWrapper = styled.TouchableOpacity<{ logOut: boolean }>`
  width: 100%;
  height: ${scale(50)}px;
  justify-content: center;
  ${({ logOut }) =>
    logOut
      ? css`
          border-bottom-width: 1px;
        `
      : css`
          border: 1px solid black;
          border-radius: 6px;
        `};
`;
