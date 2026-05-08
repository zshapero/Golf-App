import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-emerald-600">Fairway</Text>
      <StatusBar style="auto" />
    </View>
  );
}
