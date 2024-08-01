import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MyCartScreen from "./screens/MyCartScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Image , StyleSheet , View } from "react-native";
import home_icon from "./assets/images/24.png";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse , faCartShopping , faHeart , faUser } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel:false,
          //Tab bar styles can be added here
          tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:30,borderTopRightRadius:30,backgroundColor:'#FFE500',height:66 , width:380,
            position: 'absolute',
            bottom: 0,
            left: 13,
            right: 10,
            margin:"auto",
            textAlignVertical: 'center',
          },
          tabBarLabelStyle:{paddingBottom:3},
          tabBarActiveTintColor: '#B5B5B5',
          tabBarInactiveTintColor: '#696969',
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={({ route }) => ({
            headerShown:false,
            tabBarIcon: ({size,focused,color}) => {
              return (
                <View style={styles.container}>
                  <FontAwesomeIcon icon={faHouse} color={focused ? '#696969' : '#B5B5B5'} size={25}/>
              </View>
              );
            },
        })}
        />
        <Tab.Screen name="MyCart" component={MyCartScreen} options={{
          headerShown:false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <View style={styles.container}>
                  <FontAwesomeIcon icon={faCartShopping} color={focused ? '#696969' : '#B5B5B5'} size={25}/>
              </View>
            );
          },
          }}/>
        <Tab.Screen name="Favourites" component={FavouritesScreen} options={{
          headerShown:false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <View style={styles.container}>
                  <FontAwesomeIcon icon={faHeart} color={focused ? '#696969' : '#B5B5B5'} size={25}/>
              </View>
            );
          },
          }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerShown:false,
          tabBarIcon: ({size,focused,color}) => {
            return (
              <View style={styles.container}>
                  <FontAwesomeIcon icon={faUser} color={focused ? '#696969' : '#B5B5B5'} size={25} />
              </View>
            );
          },
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
      backgroundColor : '#F8ED16',
  },
  text : {
      fontSize : 24 ,
      fontWeight : "bold" ,
      marginBottom : 16 ,
  }
})