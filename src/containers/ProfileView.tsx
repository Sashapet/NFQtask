import React from 'react';
import styled from 'styled-components/native';
import { DefaultButton } from '@components/.';
import { scale } from '@utils/helpers/dimensions';

export const ProfileView: React.FC = () => (
  <ProfileWrapper>
    <DefaultButton logOut onPress={() => console.tron.log('logOut')}>
      Logout
    </DefaultButton>
    <LogoWrapper>
      <Logo source={{ uri: 'https://placeimg.com/80/80/tech' }} />
    </LogoWrapper>
    <Description>
      <Info>John Doe</Info>
      <Info>Address line</Info>
      <Info>+370 xxx xxxx</Info>
    </Description>
  </ProfileWrapper>
);
const ProfileWrapper = styled.View`
  flex: 1;
`;
const LogoWrapper = styled.View`
  flex: 1;
  padding: ${({ theme }) => scale(theme.spacing.xs)}px;
`;
const Description = styled.View`
  flex: 1;
  align-items: center;
`;
const Info = styled.Text`
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  padding-bottom: ${({ theme }) => scale(theme.spacing.s)}px;
`;
const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
