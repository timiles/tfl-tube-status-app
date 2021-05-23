import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  name: string;
  color?: string;
  status: string;
}

const styles = StyleSheet.create({
  statusContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderLeftWidth: 10,
    padding: 10,
  },
  lineName: {
    fontWeight: '700',
  },
  status: {
    fontWeight: '200',
  },
});

export default function LineStatusDisplay(props: IProps) {
  const { name, color, status } = props;

  return (
    <View style={[styles.statusContainer, color ? { borderLeftColor: color } : null]}>
      <Text
        accessibilityRole="header"
        style={styles.lineName}
      >
        {name}
      </Text>
      <Text
        accessibilityRole="summary"
        style={styles.status}
      >
        {status}
      </Text>
    </View>
  );
}
