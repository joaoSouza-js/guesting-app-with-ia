import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
    paddingVertical: 24,
    
    
  },

  guestingImageLoader: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    
    borderRadius: 4
  },

  results: {
    
    flex: 1
  }
});