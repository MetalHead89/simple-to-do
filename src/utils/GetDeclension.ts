const GetDeclension = (
  number: number,
  dictionary: [string, string, string]
): string => {
  const CASES = [2, 0, 1, 1, 1, 2];

  const resultCase =
    number % 100 > 4 && number % 100 < 20
      ? 2
      : CASES[number % 10 < 5 ? number % 10 : 5];

  return dictionary[resultCase];
};

export default GetDeclension;
