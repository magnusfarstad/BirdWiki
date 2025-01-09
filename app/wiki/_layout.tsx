import { Stack } from 'expo-router';

export default function WikiLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: 'Wiki', headerShown: false }} />
      <Stack.Screen name="[bird]" options={{ title: 'Wiki', headerShown: false }} />
    </Stack>
  );
}