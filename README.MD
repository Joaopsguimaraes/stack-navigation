# Stack navigation

O Stack Navigation é uma das principais ferramentas de navegação no React Native e pode ser muito útil para criar aplicativos com várias telas.

Para começar, o Stack Navigation é uma biblioteca de navegação que permite que você empilhe várias telas uma em cima da outra. Isso significa que quando você navega de uma tela para outra, a tela anterior é colocada na parte inferior da pilha e a nova tela é colocada no topo.

## Etapas

Primeiro voce precisa instalar as bibliotecas em seu projeto:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```

Como neste exemplo iremos usar bare react native, devemos instalar também os pacotes:

```bash
npm install react-native-screens react-native-safe-area-context
```

Logo depois deve-se instalar os pods para complentar a instalação

```bash
cd ios
pod install
cd ..
```

## Configuração

Depois de instalado deve envolver sua aplicação com `NavigationContainer.` Normalmente isso é feito no arquivo `index.ts` ou `app.ts`.

```jsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {...}
    </NavigationContainer>
 )
}
```

## Utilização

Agora ja configurado o projeto, ja podemos montar as rotas e passar las para o contexto de navegação, como este exemplo será com navegação em pilhas *Stack navigator* devemos chamar a função `const Stack = createNativeStackNavigator();`e armazenar em uma variavel para podermos montar o component. Depois disso temos acessos a `<Stack.Navigator>` e `<Stack.Screen>`

```tsx
import React from 'react';
import Surf from './src/screens/Surf';
import Home from './src/screens/Home';
import Chat from './src/screens/Chat';
import Ideas from './src/screens/Ideas';
import Notes from './src/screens/Notes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="IDEAS" component={Ideas} />
        <Stack.Screen name="NOTES" component={Notes} />
        <Stack.Screen name="CHAT" component={Chat} />
        <Stack.Screen name="SURF" component={Surf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

> Notas: O component `<Stack.Screen>` nos fornece varias propriedades para navegação, mas neste exemplo vamos utilizar a `name` que vai armazenar o nome da rota e o `component` que será responsavel por renderizar esse component quando ele for chamado.
>

> Notas: O `<Stack.Navigator` representa o contexto para nossa navegação em pilhas, com isso ele possui propriedades em um contexto para este tipo de navegação, aqui no exemplo vamos somente retirar o header entre as telas.
>

Como este exemplo será em typescript iremos criar a tipagem de cada rota, com ela podemos definir se na navegação vai haver propriedades a serem passadas entre rotas.

```tsx
export type RootStackParamList = {
  HOME: undefined;
  IDEAS: undefined;
  NOTES: undefined;
  CHAT: undefined;
  SURF: undefined;
};
```

## Component Home

Para exemplificar, vamos utilizar a navegação por meio de cards, para isso vamos utilizar o component Home para renderizar estes cards e com eles iremos navegar entre as rotas da aplicação:

```tsx
import React from 'react';
import {styles} from '../styles/home';
import {NavigationProp} from '@react-navigation/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

interface HomeProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const optionsNavigation = [
  {
    id: 1,
    title: 'Home',
    imageUrl: require('../../assets/images/home.png'),
    route: 'HOME',
  },
  {
    id: 2,
    title: 'Ideas',
    imageUrl: require('../../assets/images/ideas.png'),
    route: 'IDEAS',
  },
  {
    id: 3,
    title: 'Notes',
    imageUrl: require('../../assets/images/notes.png'),
    route: 'NOTES',
  },
  {
    id: 4,
    title: 'Chat',
    imageUrl: require('../../assets/images/chat.png'),
    route: 'CHAT',
  },
  {
    id: 5,
    title: 'Surf',
    imageUrl: require('../../assets/images/surf.png'),
    route: 'SURF',
  },
];

const Home = ({navigation}: HomeProps) => {
  function handleNavigate(route: string) {
    navigation.navigate(route);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={optionsNavigation}
        keyExtractor={item => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleNavigate(item.route)}>
            <Image
              source={item.imageUrl}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>
          Home page, to navigate to other pages, just click on the cards
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/home.png')}
          resizeMode="contain"
          style={styles.imagePage}
        />
      </View>
    </View>
  );
};

export default Home;
```

> Notas: Foi criado a função `handleNavigate` para poder passar para o onPress do `TouchableOpacity` e assim realizar a navegação para a determinada tela:
>

```tsx
  function handleNavigate(route: string) {
    navigation.navigate(route);
  }
```

Com isso nossa screen Home ficando da seguinte forma no dispositivo:

<img width="412" alt="Home" src="https://user-images.githubusercontent.com/99269515/231539586-b8c654e7-b7b9-42a7-8998-d3cb4e681474.png">


Agora uma clicando em dos cards ele vai disparar a função que vai navega-lo para a sua respectiva tela, para isso fizemos as outras screens da seguinte forma:

```tsx
import React from 'react';
import {styles} from '../styles/pages';
import {NavigationProp} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';

interface IdeasProps {
  navigation: NavigationProp<Record<string, object | undefined>>;
}

const Ideas = ({navigation}: IdeasProps) => {
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titlePage}>Hello I'm idea page</Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/ideas.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Ideas;
```

> Nota: Foi criado a função `handleGoBack` para poder navegar para rota anterior podemos utilizar essa estratégia para navegarmos para a rota anterior, a que nos levou a está em que estamos:
>

```tsx
  function handleGoBack() {
    navigation.goBack();
  }
```

Ficando da seguinte forma no dispositivo:

https://user-images.githubusercontent.com/99269515/231540105-b8be985c-dca0-4b76-b0e8-2d9862c0e072.mp4


> Este foi uma simples demonstração e exemplo de como podemos trabalhar com navegação em pilha no React native. Caso queria rodar o projeto e ver sua funcionalidade, somente realizar um `git clone ...` e logo após:
>

```tsx
cd stack-navigation
npm install
npx react-native start
```

E caso queira rodar em seu emulador (nesse exemplo iOS)

```tsx
npm run ios
```
