import type { NextPage } from "next";
import Image from "next/image";
import { Toast, toast } from "react-hot-toast";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useIdle } from "react-use";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import randomizeMilliseconds from "../helper/randomizeMilliseconds";

const Home: NextPage = () => {
  const isIdle = useIdle(10000);
  const [inputValue, setInputValue] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onRandomize = (t: Toast) => {
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

    setInputValue(choice);
    toast.dismiss(t.id);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      toast.error("Please input properly!");
      return;
    }

    setIsLoading(true);

    const choices = inputValue.split(",");

    const result = new Promise((resolve, reject) => {
      const res = choices[Math.floor(Math.random() * choices.length)];
      const milliseconds = randomizeMilliseconds();

      setTimeout(() => {
        if (choices.length === 1) reject(new Error("Please input properly"));
        if (res) resolve(res);
      }, milliseconds);
    });

    result
      .then(
        (value) => {
          setModalContent(`${value}`);
          document.getElementById("modal")?.click();
        },
        (error) => {
          setModalContent(`${error}`);
          document.getElementById("modal")?.click();
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (isIdle)
      toast((t) => (
        <span>
          🤔 Still can&apos;t decide?&nbsp;
          <button className="btn btn-xs" onClick={() => onRandomize(t)}>
            Randomize
          </button>
        </span>
      ));
  }, [isIdle]);

  return (
    <div className="text-accent font-space-mono min-h-screen flex flex-col bg-primary">
      <Navbar />
      <main className="flex flex-col items-center">
        <Image
          src="/decide.svg"
          priority={true}
          width={300}
          height={300}
          alt="two characters pointing on to something"
        />
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="-mt-10 font-bold form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text dark:text-accent md:text-xl">
                Enter your choices
              </span>
            </label>
            <input
              data-testid="choices-input"
              type="text"
              placeholder="Your choices go here"
              className="input input-ghost placeholder-accent dark:focus:placeholder-white dark:text-accent focus:outline-accent font-normal w-full max-w-xs"
              spellCheck={false}
              value={inputValue}
              onChange={onInputChange}
            />
            <label className="label">
              <span className="label-text-alt dark:text-accent italic md:text-sm">
                Separate it with comma!
              </span>
            </label>
          </div>
          <button
            data-testid="choose-btn"
            type="submit"
            id="choose-btn"
            className={`mt-3 btn btn-outline ${
              isLoading ? "loading" : ""
            } dark:text-accent dark:hover:text-white hover:bg-accent`}
          >
            choose
          </button>
        </form>
      </main>
      <Footer />
      {/* hidden modal */}
      <Modal content={modalContent} />
    </div>
  );
};

export default Home;
