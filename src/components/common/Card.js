import React from 'react';
import { View } from 'react-native';

// make a component
const Card = props => (
  <View style={styles.cardStyles} >
    {props.children}
  </View>
);


const styles = {
  cardStyles: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};


export { Card };
