import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert } from 'react-native';

// Example Quiz Data
const quizQuestions = [
  {
    questionImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg',
    options: [
      { text: 'Sparrow', isCorrect: false },
      { text: 'Parrot', isCorrect: false },
      { text: 'Owl', isCorrect: true },
      { text: 'Eagle', isCorrect: false },
    ],
  },
  {
    questionImage: 'https://upload.wikimedia.org/wikipedia/commons/1/15/White-Bird.jpg',
    options: [
      { text: 'Flamingo', isCorrect: false },
      { text: 'Penguin', isCorrect: true },
      { text: 'Pigeon', isCorrect: false },
      { text: 'Peacock', isCorrect: false },
    ],
  },
  {
    questionImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/European_robin_2020.jpg',
    options: [
      { text: 'Robin', isCorrect: true },
      { text: 'Sparrow', isCorrect: false },
      { text: 'Falcon', isCorrect: false },
      { text: 'Pigeon', isCorrect: false },
    ],
  },
];

type Option = {
  text: string;
  isCorrect: boolean;
};

type Props = {
  questions: Option[];
};

export default function BirdQuiz(questions: Props) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);


  const handleOptionPress = (option: Option) => {

    if (option.isCorrect) {
      Alert.alert('Correct!', 'You selected the right answer.');
    } else {
      Alert.alert('Incorrect!', 'Try again!');
    }

    setSelectedOption(option);

    setTimeout(() => nextQuestion(), 1000);
  };


  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert('Quiz Completed!', 'You finished all the questions.');

      setCurrentQuestionIndex(0);
    }
  };


  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {/* Question Image */}
      <Image
        source={{ uri: currentQuestion.questionImage }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Options */}
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option: Option, index) => (
          <Pressable
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option && option.isCorrect
                ? styles.correctOption
                : selectedOption === option
                  ? styles.incorrectOption
                  : null,
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={styles.optionText}>{option.text}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  image: {
    width: '90%',
    height: 200,
    marginBottom: 24,
  },
  optionsContainer: {
    width: '100%',
    marginTop: 16,
  },
  optionButton: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  correctOption: {
    backgroundColor: '#c8e6c9',
  },
  incorrectOption: {
    backgroundColor: '#ffcdd2',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
});