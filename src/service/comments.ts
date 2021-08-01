export const getCommentsApi = async () => {
  try {
    const response = await fetch(
      'https://opencollective.com/sustainoss/events.json?limit=10&offset=0',
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
