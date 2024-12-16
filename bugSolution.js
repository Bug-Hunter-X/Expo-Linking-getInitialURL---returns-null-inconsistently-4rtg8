import * as Linking from 'expo-linking';

Linking.addEventListener('url', (event) => {
  // Handle the url here
  console.log('URL changed:', event.url);
});

Linking.getInitialURL().then(url => {
  if (url) {
    // Handle the initial url
    console.log('Initial URL:', url);
  } else {
    console.log('No initial URL');
  }
});