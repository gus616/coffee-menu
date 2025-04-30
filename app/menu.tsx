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
import { ScreenContainer } from 'react-native-screens';



const MenuScreen = () => {
  const colorScheme = Appearance.getColorScheme() || 'light';

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const separatorComp = () => <View style={styles.separator} />;

  /* const headerComponent = () => <Text>Top of List</Text>; */
  const footerComponent = () => <Text style={{color: theme.text}}>Bottom of List</Text>;


  return (
    <SafeAreaView>
      <FlatList
        data={MENU_ITEMS}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorComp}
        keyExtractor={(item) => item.id.toString()}
        /*  ListHeaderComponent={headerComponent}           */
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No items found</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow} >
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.title.toLowerCase().replace(/\s+/g, '')]} style={styles.menuImage} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = (theme: { background: string; text: string }, colorScheme: string | null) => {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
  },
  separator: {
      height: 1,
      backgroundColor: colorScheme === 'dark' ? 'papayawhip' : "#000",
      width: '50%',
      maxWidth: 300,
      marginHorizontal: 'auto',
      marginBottom: 10,
  },
  footerComp: {
      marginHorizontal: 'auto',
  },
  row: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
  },
  menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1,
  },
  menuItemTitle: {
      fontSize: 18,
      textDecorationLine: 'underline',
  },
  menuItemText: {
      color: theme.text,
  },
  menuImage: {
      width: 100,
      height: 100,
  }
  });
};

export default MenuScreen;