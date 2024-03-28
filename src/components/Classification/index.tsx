import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { CLASSIFICATION } from '../../DTO/CLASSIFICATION_DTO';
import { Text } from '../Text';

type  classificationProps = CLASSIFICATION & {
    position?: number
}
export function Classification({className,probability,position}: classificationProps) {
  return (
    <View style={styles.container}>
        <View style={styles.position}>
            <Text>
                {position}°
            </Text>

        </View>
      
        <View style={styles.className}>
            <Text>
                {className}
            </Text>

        </View>

        <View style={styles.probability}>
          <Text>
            com  {probability.toFixed(8)}
        </Text>

        </View>
      

    </View>
  );
}