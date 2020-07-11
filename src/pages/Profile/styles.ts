import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 20 : 40}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  align-self: flex-start;
`;

export const UserAvatarButton = styled(RectButton)``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const SignOutButtonText = styled.Text`
  font-size: 18px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;
