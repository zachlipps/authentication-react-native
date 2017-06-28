import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = ({ headerText }) =>
  <View style={styles.headerStyles}>
    <Text style={styles.textStyles}>{headerText}</Text>
  </View>;

const styles = {
  headerStyles: {
    backgroundColor: 'ghostwhite',
    height: 50,
    display: 'flex',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 2,
    position: 'relative',
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
  },
};


export { Header };
