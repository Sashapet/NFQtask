import React from 'react';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';

export const Error: React.FC<{ error: string }> = ({ error }) => (
  <ErrorText>{error}</ErrorText>
);

const ErrorText = styled.Text`
  width: 100%;
  position: absolute;
  bottom: ${({ theme }) => scale(-22 - theme.spacing.s)}px;
  text-align: center;
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  color: red;
`;
