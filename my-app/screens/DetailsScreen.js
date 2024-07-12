import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

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
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productSubtitle}>{product.category}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.materialsHeader}>MATERIALS</Text>
        <Text style={styles.materialsText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
        <View style={styles.materialsIcons}>
          <View style={styles.materialsIconRow}>
            <Image source={('../assets/Do Not Bleach.png')} style={styles.iconImage} />
            <Text style={styles.materialsIconText}>Do not use bleach</Text>
          </View>
          <View style={styles.materialsIconRow}>
            <Image source={('../assets/do Not Tumble dry.png')} style={styles.iconImage} />
            <Text style={styles.materialsIconText}>Do not tumble dry</Text>
          </View>
          <View style={styles.materialsIconRow}>
            <Image source={('../assets/do Not Wash.png')} style={styles.iconImage} />
            <Text style={styles.materialsIconText}>Dry clean with tetrachloroethylene</Text>
          </View>
          <View style={styles.materialsIconRow}>
            <Image source={('../assets/iron low Temperature.png')} style={styles.iconImage} />
            <Text style={styles.materialsIconText}>Iron at a maximum of 110ºC/230ºF</Text>
          </View>
        </View>
        <View style={styles.shippingInfo}>
          
          <Text style={styles.shippingText}><Image source={('../assets/Shipping.png')} style={styles.iconImage} />  Free Flat Rate Shipping</Text>
          <Text style={styles.shippingDate}>Estimated to be delivered on 09/11/2021 - 12/11/2021.</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD TO BASKET</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
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
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  productDetails: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 18,
    color: '#888',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#f00',
    marginVertical: 8,
  },
  materialsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  materialsText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
  },
  materialsIcons: {
    marginVertical: 8,
  },
  materialsIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  materialsIconText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  shippingInfo: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 16,
  },
  shippingText: {
    fontSize: 14,
    color: '#666',
  },
  shippingDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;