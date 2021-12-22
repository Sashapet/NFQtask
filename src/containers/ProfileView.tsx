import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';
import { DefaultButton, Error } from '@components/.';
import { scale } from '@utils/helpers/dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from '@state/.';
import { COLORS } from '@assets/theme';

export const ProfileView: React.FC = () => {
  const user = useSelector(selectors.auth.user);
  const apiError = useSelector(selectors.auth.apiError);

  const dispatch = useDispatch();
  const handleLogOut = useCallback(() => {
    dispatch(actions.auth.logOut());
  }, []);

  if (!user) {
    return (
      <SetOnSyncWrapper>
        <ActivityIndicator size={'large'} color={COLORS.white} />
      </SetOnSyncWrapper>
    );
  }
  const { image, firstName, lastName, address, phone } = user;
  return (
    <ProfileWrapper>
      <DefaultButton logOut onPress={handleLogOut}>
        Logout
      </DefaultButton>
      <LogoWrapper>
        <Logo source={{ uri: image }} />
      </LogoWrapper>
      <Description>
        <Info>
          {firstName} {lastName}
        </Info>
        <Info>{address}</Info>
        <Info>{phone}</Info>
      </Description>
      <Error error={apiError} apiError={true} bottom={true} />
    </ProfileWrapper>
  );
};
const SetOnSyncWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
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
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;
