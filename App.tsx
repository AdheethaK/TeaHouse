import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { View ,Button , Alert , Text, StyleSheet, Pressable } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function App(props) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>COFFEE</Text>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.image} 
          source={require('./assets/images/LOGO.png')} 
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        {/* <Text>HOUSE</Text> */}
      </View>

    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  logoContainer: {
    backgroundColor: 'white',
    width : 280,
    height : 280,
  } ,
  text: {
    fontSize: 30,
    lineHeight: 50,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '817B7E',
  },
  image: {
    flex: 1,
    width: '100%',
    height : 'auto' ,
    backgroundColor: 'white',
  },
});
