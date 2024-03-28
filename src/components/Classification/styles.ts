import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: 60,
    backgroundColor: "#333",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 8,
   
     
  },
  position: {
    backgroundColor: theme.colors.purple[500],
    padding: 4,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  probability: {
    
    borderRadius: 8,
    padding: 4,
    
  },
  className: {
    backgroundColor: "#333",
    marginHorizontal: 8,
    padding: 4,

  }
});