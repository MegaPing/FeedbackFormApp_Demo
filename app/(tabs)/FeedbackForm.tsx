import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FeedbackForm: React.FC = () => {
  const [experience, setExperience] = useState<number | null>(null);
  const [experienceReason, setExperienceReason] = useState<string>('');
  const [selectedUsefulFeature, setSelectedUsefulFeature] = useState<string>('');
  const [usefulFeatureElaboration, setUsefulFeatureElaboration] = useState<string>('');
  const [selectedImproveFeature, setSelectedImproveFeature] = useState<string>('');
  const [improveFeatureElaboration, setImproveFeatureElaboration] = useState<string>('');
  const [selectedFutureFeature, setSelectedFutureFeature] = useState<string>('');
  const [futureFeatureElaboration, setFutureFeatureElaboration] = useState<string>('');
  const [additionalComments, setAdditionalComments] = useState<string>('');

  const handleSubmit = () => {
    if (
      experience === null ||
      !experienceReason ||
      !selectedUsefulFeature ||
      !usefulFeatureElaboration ||
      !selectedImproveFeature ||
      !improveFeatureElaboration ||
      !selectedFutureFeature ||
      !futureFeatureElaboration ||
      !additionalComments
    ) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    // Handle submission logic here (e.g., send to server)

    Alert.alert('Success', 'Thank you for your feedback!');
    // Reset the form
    setExperience(null);
    setExperienceReason('');
    setSelectedUsefulFeature('');
    setUsefulFeatureElaboration('');
    setSelectedImproveFeature('');
    setImproveFeatureElaboration('');
    setSelectedFutureFeature('');
    setFutureFeatureElaboration('');
    setAdditionalComments('');
  };

  const renderRatingButtons = () => {
    const labels = [
      "Hated It!",
      "I disliked it",
      "Eh, it was okay",
      "I liked it",
      "Loved It!",
    ];

    return (
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <View key={rating} style={styles.ratingItem}>
            <TouchableOpacity
              style={[
                styles.ratingButton,
                experience === rating ? styles.selectedRating : null,
              ]}
              onPress={() => setExperience(rating)}
            >
              <Text style={styles.ratingText}>{rating}</Text>
            </TouchableOpacity>
            <Text style={styles.ratingLabel}>{labels[rating - 1]}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Feedback Form</Text>

      <Text style={styles.question}>
        1. How would you rate your overall experience with our app?
      </Text>
      {renderRatingButtons()}

      <Text style={styles.subQuestion}>
        Can you elaborate why you gave this rating?
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          value={experienceReason}
          onChangeText={setExperienceReason}
          multiline
        />
        {experienceReason === '' && (
          <Text style={styles.placeholderText}>Type your feedback here</Text>
        )}
      </View>

      <Text style={styles.question}>
        2. What features do you find most useful/engaging?
      </Text>
      <Picker
        selectedValue={selectedUsefulFeature}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedUsefulFeature(itemValue)}
      >
        <Picker.Item label="Select a Feature" value="" />
        <Picker.Item label="Feature #1" value="Feature #1" />
        <Picker.Item label="Feature #2" value="Feature #2" />
        <Picker.Item label="Feature #3" value="Feature #3" />
      </Picker>
      <Text style={styles.subQuestion}>
        Can you elaborate on your answer?
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          value={usefulFeatureElaboration}
          onChangeText={setUsefulFeatureElaboration}
          multiline
        />
        {usefulFeatureElaboration === '' && (
          <Text style={styles.placeholderText}>Type your feedback here</Text>
        )}
      </View>

      <Text style={styles.question}>
        3. What features do you wish to see improved upon?
      </Text>
      <Picker
        selectedValue={selectedImproveFeature}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedImproveFeature(itemValue)}
      >
        <Picker.Item label="Select a Feature" value="" />
        <Picker.Item label="Feature #1" value="Feature #1" />
        <Picker.Item label="Feature #2" value="Feature #2" />
        <Picker.Item label="Feature #3" value="Feature #3" />
      </Picker>
      <Text style={styles.subQuestion}>
        Can you elaborate on your answer?
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          value={improveFeatureElaboration}
          onChangeText={setImproveFeatureElaboration}
          multiline
        />
        {improveFeatureElaboration === '' && (
          <Text style={styles.placeholderText}>Type your feedback here</Text>
        )}
      </View>

      <Text style={styles.question}>
        4. What features do you wish to see implemented in the future, if any?
      </Text>
      <Picker
        selectedValue={selectedFutureFeature}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedFutureFeature(itemValue)}
      >
        <Picker.Item label="Select a Feature" value="" />
        <Picker.Item label="Feature #1" value="Feature #1" />
        <Picker.Item label="Feature #2" value="Feature #2" />
        <Picker.Item label="Feature #3" value="Feature #3" />
      </Picker>
      <Text style={styles.subQuestion}>
        Can you elaborate on your answer?
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          value={futureFeatureElaboration}
          onChangeText={setFutureFeatureElaboration}
          multiline
        />
        {futureFeatureElaboration === '' && (
          <Text style={styles.placeholderText}>Type your feedback here</Text>
        )}
      </View>

      <Text style={styles.question}>
        5. Anything else you’d like to share with us?
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          value={additionalComments}
          onChangeText={setAdditionalComments}
          multiline
        />
        {additionalComments === '' && (
          <Text style={styles.placeholderText}>Type your feedback here</Text>
        )}
      </View>

      <Button title="Submit" onPress={handleSubmit} color="#6200EE" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  subQuestion: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 0, // Remove bottom margin for the input
    paddingHorizontal: 10,
  },
  placeholderText: {
    position: 'absolute',
    left: 10,
    top: 15,  // Adjust top position for better visibility
    fontStyle: 'italic',
    color: '#aaa',
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  ratingItem: {
    alignItems: 'center',
  },
  ratingButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 15,
  },
  selectedRating: {
    backgroundColor: '#6200EE',
    borderColor: '#6200EE',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  ratingLabel: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
  },
  textInputContainer: {
    position: 'relative',
    marginBottom: 15, // Add margin for separation
  },
});

export default FeedbackForm;