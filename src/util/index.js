export const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

export const getInitialState = () => ({
  actual: generateRandomNumber(),
  guess: undefined,
  allGuesses: [],
  attempt: 0,
  feedbackMessage: 'Dare to guess...',
  feedbackColor: '#fff',
  block: false,
});

export const getFeedback = (absDiff) => {
  let feedbackMessage;
  let feedbackColor;

  if (absDiff === 0) {
    feedbackColor = '#000';
    feedbackMessage = 'You Won! Reset the game to play again.';
  } else if (absDiff < 4 && absDiff !== 0) {
    feedbackColor = '#ff5722';
    feedbackMessage = 'Extremely Hot!';
  } else if (absDiff >= 4 && absDiff < 10) {
    feedbackColor = '#ff9800';
    feedbackMessage = 'Hot';
  } else if (absDiff >= 10 && absDiff < 20) {
    feedbackColor = '#ffeb38';
    feedbackMessage = 'Warm';
  } else {
    feedbackColor = '#5bc0de';
    feedbackMessage = 'Cold';
  }

  return {
    feedbackMessage,
    feedbackColor,
  };
};
