import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import {useState} from "react";
import Button from "@/src/components/Button";
import {useCart} from "@/src/provider/CartProvider";
import {PizzaSize} from "@/src/types";

const sizes : PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const { id   } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const { addItem } = useCart();
    const addToCart = () => {
        addItem(product, selectedSize)
    }

    if(!product) return <Text>Product Not Found</Text>;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: product.name }}/>

            <Image
                source={{uri: product.image}}
                style={styles.image}
            />
            <Text> Select Size </Text>
            <View style={styles.sizes}>
                {sizes.map((size) => (
                    <Pressable
                        key={size}
                        onPress={()=>{setSelectedSize(size)}}
                        style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro': 'white'}]}>
                        <Text style={[
                            styles.sizeText,
                            {color: selectedSize === size ? 'black': 'grey'}
                        ]}>
                            {size}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <Text style={styles.price}>${product.price}</Text>
            <Button style={styles.button} text={"Add to Cart"} onPress={addToCart} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        flex: 1
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginTop:"auto"
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        padding: 10
    },
    sizes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    size : {
        backgroundColor: 'gainsboro',
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    sizeText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20
    }
})

export default ProductDetailsScreen;