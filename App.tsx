import React from 'react';
import { SafeAreaView } from 'react-native';
import FeedbackForm from './app/(tabs)/FeedbackForm';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FeedbackForm />
    </SafeAreaView>
  );
};

export default App;