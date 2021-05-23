import React from 'react';
import { ActivityIndicator, ListRenderItem, Text, useWindowDimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useGetLineStatuses, { ILineStatus } from '../data-hooks/useGetLineStatuses';
import getColorForLine from '../utils/getColorForLine';
import LineStatusDisplay from './LineStatusDisplay';

export default function LineStatusesScreen() {
  const { loading, error, data } = useGetLineStatuses();
  const { width } = useWindowDimensions();
  const numberOfColumns = width < 481 ? 1 : 2;

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
          // Force component to be re-rendered when number of columns changes
          key={numberOfColumns}
          numColumns={numberOfColumns}
          data={data}
          renderItem={renderLineStatusItem}
        />
      )}
    </View>
  );
}
