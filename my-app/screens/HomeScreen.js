import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) setCart(JSON.parse(storedCart));
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadCart();
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const handleProductPress = (product) => {
    navigation.navigate('DetailScreen', { product });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          {/* <Text style={styles.menuIconText}>≡</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>Open Fashion</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Image source={('../assets/Search.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate('CartScreen')}>
            <Image source={('../assets/Shopping bag.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Our Story</Text>
      <View style={styles.productList}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleProductPress(item)} style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productDescription} numberOfLines={2}>{item.description}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.cartButton}>
        <Text style={styles.cartButtonText}>Go to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuIcon: {
    paddingHorizontal: 16,
  },
  menuIconText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    paddingHorizontal: 16,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  productDetails: {
    marginTop: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#000',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
