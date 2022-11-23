export default function randomizeChoice() {
  const randomChoices: string[] = [
    "Buy now, Buy later",
    "Go out alone, Go out with friends",
    "Workout now, Workout later, Workout tomorrow",
    "Take a nap, Continue studying",
    "React, Vue, Svelte, Angular, Solid",
    "Node, Laravel, SpringBoot",
    "Cheat meal today, Continue Diet",
    "Do homework, Play for 1 hour, Eat snacks first",
    "Play for an hour, Play for two hours, Play for four hours",
    "Watch an anime series, Watch a KDrama series, Watch an anime movie",
  ];

  const choice =
    randomChoices[Math.floor(Math.random() * randomChoices.length)];

  return choice;
}
