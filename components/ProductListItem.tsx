import {Text, View} from "@/components/Themed";
import {Image, StyleSheet} from "react-native";
import Colors from "@/constants/Colors";

const ProductListItem = ({product}) => {

    return (
        <View style={styles.container}>
            <Image source={{uri: product.image}} style={styles.image}/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    price: {
        fontSize: 15,
        fontWeight: 400,
        color: Colors.light.tint
    },
    image: {
        width: '100%',
        aspectRatio: 1
    }

});
