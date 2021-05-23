import React from 'react';
import { ActivityIndicator, ListRenderItem, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useGetLineStatuses, { ILineStatus } from '../data-hooks/useGetLineStatuses';
import getColorForLine from '../utils/getColorForLine';
import LineStatusDisplay from './LineStatusDisplay';

export default function LineStatusesScreen() {
  const { loading, error, data } = useGetLineStatuses();

  const renderLineStatusItem: ListRenderItem<ILineStatus> = ({ item }) => (
    <LineStatusDisplay
      name={item.name}
      color={getColorForLine(item.id)}
      // TODO: Handle multiple statuses? or none?
      status={item.lineStatuses[0].statusSeverityDescription}
    />
  );

  return (
    <View>
      {loading && <ActivityIndicator />}
      {/* TODO: Improve error display, perhaps a retry button */}
      {error && <Text>{error}</Text>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderLineStatusItem}
        />
      )}
    </View>
  );
}
