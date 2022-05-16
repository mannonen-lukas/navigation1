import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ImageScreen() {
  return (
    <View>
      <Image
        source={require('./assets/rich.jpg')}
        style={styles.image} />
    </View>
  );
}

function TextScreen() {
  return (
    <View>
      <Text style={styles.text}> What the fuck did you just fucking say about me, you little bitch?
        {'\n\n'}
        I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda,
        {'\n\n'}
        and I have over 300 confirmed kills.
        I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target.
        {'\n\n'}
        I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth,
        {'\n\n'}
        mark my fucking words. You think you can get away with saying that shit to me over the Internet?
        {'\n\n'}
        Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm,
        {'\n\n'}
        maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere,
        {'\n\n'}
        anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands.
        {'\n\n'}
        Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent,
        {'\n\n'}
        you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't,
        {'\n\n'}
        and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Image') {
              iconName = focused
                ? 'ios-image'
                : 'ios-image-outline';
            } else if (route.name === 'Text') {
              iconName = focused
                ? 'ios-document-text'
                : 'ios-document-text-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Text" component={TextScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  text: {
    padding: 20
  },
});