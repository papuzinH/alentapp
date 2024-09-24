// app/Home.js
import { View, Text} from 'react-native';


import ButtonPrimary from '@/components/ButtonPrimary';

export default function Home() {


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>AlentApp</Text>
      <ButtonPrimary title="Iniciar Sesión" onPress={() => {return}} />
    </View>
  );
}
