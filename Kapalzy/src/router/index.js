import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Beranda from '../pages/beranda';
import Rincian from '../pages/beranda/rincian';
import Pesanan from '../pages/pesanan';
import Informasi from '../pages/beranda/informasi';
import Pembatalan from '../pages/pembatalan';
import DetailProfil from '../pages/profil';
import Hubungi from '../pages/Hubungi';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Informasi"
        component={Informasi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Rincian"
        component={Rincian}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pesanan"
        component={Pesanan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProfil"
        component={DetailProfil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hubungi"
        component={Hubungi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
