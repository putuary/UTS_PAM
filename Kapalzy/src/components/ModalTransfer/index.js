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

const ModalTransfer = ({navigation, modal_transparan, ubahVisible}) => {
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
            height: 0.28 * Height,
            backgroundColor: 'yellow',
            alignSelf: 'center',
            marginTop: 0.3 * Height,
            borderRadius: 10,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: '10%',
            }}>
            Pembayaran
          </Text>
          <View style={{alignItems: 'center'}}>
            <Text>Transfer Ke Nomor Rekening</Text>
            <Text>89172xxxxxxxxxxxx</Text>
            <Text>Bank BAC</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.tombol}
              onPress={() => navigation.replace('Beranda')}>
              <Text style={styles.tulisan}>Selesai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  tombol: {
    paddingVertical: 0.01 * Height,
    marginVertical: 0.05 * Width,
    marginHorizontal: 0.2 * Width,
    backgroundColor: '#F54F08',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tulisan: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ModalTransfer;
