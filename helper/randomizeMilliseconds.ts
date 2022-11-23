export default function randomizeMilliseconds() {
  const choices: number[] = [500, 1000, 1500];

  return choices[Math.floor(Math.random() * choices.length)];
}
