import { StatusBar } from 'expo-status-bar';
import { View ,Button , Alert , Text, StyleSheet, Pressable } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>HI!</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Pressable style={styles.button} onPress={() => Alert.alert('hi again')}>
      <Text style={styles.text}>{'get started'}</Text>
    </Pressable>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCEAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    position : 'absolute',
    bottom : 10,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    color : 'black',
    elevation: 3,
    backgroundColor: '#ADECFF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
