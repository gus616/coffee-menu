import {
  Appearance,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  View,
  Image,
} from 'react-native';

import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import MENU_IMAGES from '@/constants/MenuImages';
import { useEffect } from 'react';



const MenuScreen = () => {
  const colorScheme = Appearance.getColorScheme() || 'light';

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={MENU_ITEMS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Image source={MENU_IMAGES[item.title.toLowerCase().replace(/\s+/g, '')]} style={styles.image} />
            </View>
          )}
        />
    </SafeAreaView>
  );
};

const createStyles = (theme: { background: string; text: string }, colorScheme: string | null) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      alignItems: 'center',
    },
    title: {
      color: theme.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      color: theme.text,
      fontSize: 14,
      marginBottom: 8,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
    },
  });
};

export default MenuScreen;