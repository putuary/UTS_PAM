import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  ScrollView,
  Modal,
} from 'react-native';

const Layanan = ['Eksekutif', 'Ekspress', 'Ekonomi'];
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ModalLayanan = ({modal_transparan, setLayanan, ubahVisible}) => {
  const PilihLayanan = pilihan => {
    setLayanan(pilihan);
    ubahVisible(false);
  };

  const daftarLayanan = Layanan.map((pilihan, index) => {
    return (
      <TouchableOpacity
        style={{
          aalignItems: 'center',
        }}
        key={index}
        onPress={() => PilihLayanan(pilihan)}>
        <Text style={{margin: 10, fontSize: 12, fontWeight: 'bold'}}>
          {pilihan}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal_transparan}
        onRequestClose={() => {
          ubahVisible(false);
        }}>
        <ScrollView>
          <View
            style={{
              marginTop: 0.4 * Height,
              backgroundColor: 'blue',
              width: 0.4 * Width,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            {daftarLayanan}
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ModalLayanan;
