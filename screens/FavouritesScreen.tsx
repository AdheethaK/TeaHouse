import { View , Text , StyleSheet } from "react-native";

const FavouritesScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Favourites Screen</Text>
        </View>
    );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems : "center" ,
        justifyContent : "center" ,
    },
    text : {
        fontSize : 24 ,
        fontWeight : "bold" ,
        marginBottom : 16 ,
    }
})