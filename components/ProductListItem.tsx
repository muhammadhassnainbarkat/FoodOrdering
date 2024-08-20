import {Text, View} from "@/components/Themed";
import {Image, Pressable, StyleSheet} from "react-native";
import Colors from "@/constants/Colors";
import {Product} from "@/src/types";
import {Link} from "expo-router";

type ProductListItemProps = {
    product: Product;
}
const ProductListItem = ({product} : ProductListItemProps) => {
    return (
        <Link href={`(tabs)/menu/product/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{uri: product.image || ""}}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
            </Pressable>
        </Link>
    )
}

export default ProductListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        flex: 1,
        maxWidth: '50%'
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: "black"
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
