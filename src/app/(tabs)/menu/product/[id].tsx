import {View, Text, StyleSheet, Image, Pressable} from "react-native";
import {Stack, useLocalSearchParams} from "expo-router";
import products from "@/assets/data/products";
import Colors from "@/constants/Colors";
import {useState} from "react";
import Button from "@/components/Button";

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const { id   } = useLocalSearchParams();
    const product = products.find((product) => product.id.toString() === id);

    const [selectedSize, setSelectedSize] = useState('M')

    if(!product) return <Text>Product Not Found</Text>;

    return (
        <View>
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
            <Button title={"hassnain"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.light.tint,
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
        fontWeight: 'bold'
    }
})

export default ProductDetailsScreen;