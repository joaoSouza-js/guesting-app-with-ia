import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 24,
    backgroundColor: theme.colors.purple[500],
    
  }
});