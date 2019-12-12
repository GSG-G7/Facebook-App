import {AsyncStorage} from 'react-native';

const handleStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export default handleStorage;
