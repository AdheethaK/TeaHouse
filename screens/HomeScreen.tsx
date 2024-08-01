import { View , Text , StyleSheet , ImageBackground } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userProfileImg}>
                <ImageBackground source={{uri:"https://www.flaticon.com/free-icon/girl_4218180"}}></ImageBackground>
            </View>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    userProfileImg : {
        height : 55,
        width : 55 ,
        backgroundColor : 'grey',
        position : 'absolute' ,
        top : 80 ,
        left : 30 ,
    },
    container : {
        flex : 1 ,
        alignItems : "center" ,
        justifyContent : "center" ,
        backgroundColor : 'pink' ,
    },
    text : {
        fontSize : 24 ,
        fontWeight : "bold" ,
        marginBottom : 16 ,
    }
})