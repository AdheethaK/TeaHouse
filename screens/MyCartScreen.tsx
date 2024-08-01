import { View , Text , StyleSheet } from "react-native";

const MyCartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MyCart Screen</Text>
        </View>
    );
}

export default MyCartScreen;

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