import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    'DVN-Fredoka-Bold': require('./DVN-Fredoka-Bold.ttf'),
  });