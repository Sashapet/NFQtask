import React from 'react';
import styled, { css } from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';

export const Error: React.FC<{
  error: string;
  apiError?: boolean;
  bottom?: boolean;
}> = ({ apiError, bottom, error }) => (
  <ErrorText bottom={bottom} apiError={apiError}>
    {error}
  </ErrorText>
);

const ErrorText = styled.Text<{ apiError: boolean; bottom: boolean }>`
  width: 100%;
  position: absolute;
  /* bottom: ${scale(25)}px; */
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  color: ${({ theme }) => theme.colors.red};
  ${({ bottom }) =>
    bottom
      ? css`
          bottom: ${scale(25)}px;
        `
      : css`
          top: ${scale(-25)}px;
        `}
  ${({ apiError }) => apiError && 'text-align: center;'};
`;
