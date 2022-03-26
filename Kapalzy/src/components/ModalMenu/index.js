import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ModalMenu = ({navigation, modal_transparan, ubahVisible}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal_transparan}
        onRequestClose={() => {
          ubahVisible(false);
        }}>
        <View
          style={{
            width: 0.7 * Width,
            height: 0.5 * Height,
            backgroundColor: 'green',
            alignSelf: 'center',
            marginTop: 0.2 * Height,
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: '10%',
            }}>
            Menu
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginHorizontal: '5%',
            }}>
            <TouchableOpacity
              style={styles.tombol}
              onPress={() => navigation.replace('Pesanan')}>
              <Image source={require('../../icon/search2.png')} />
              <Text>Cek Pemesan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tombol}
              onPress={() => navigation.replace('DetailProfil')}>
              <Image source={require('../../icon/Profil.png')} />
              <Text>Detail Profil</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginHorizontal: '5%',
            }}>
            <TouchableOpacity
              style={styles.tombol}
              onPress={() => navigation.replace('Hubungi')}>
              <Image source={require('../../icon/call.png')} />
              <Text>Hubungi Kami</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tombol}
              onPress={() => navigation.replace('Pesanan')}>
              <Image source={require('../../icon/history.png')} />
              <Text>Riwayat Pemesanan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  tombol: {
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '40%',
    height: '50%',
    justifyContent: 'space-around',
  },
});

export default ModalMenu;
