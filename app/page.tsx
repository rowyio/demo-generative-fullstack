"use client";

import { EnterGuess } from "@/components/enter-guess";
import { GeneratingScore } from "@/components/generating-score";
import { YourScore } from "@/components/your-score";
import { useEffect, useState } from "react";

export type OrginalGuess = {
  imageUrl: string;
  hints: string[];
  prompt: string;
};

export type GuessScore = {
  generatedImage: string;
  score: number;
};

export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [originalGuess, setOriginalGuess] = useState<OrginalGuess>();
  const [guessScore, setGuessScore] = useState<GuessScore>();
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (prompt: string) => {
    setGenerating(true);
    setUserPrompt(prompt);
    const response = await fetch(
      process.env.NEXT_PUBLIC_GET_SCORE_WORKFLOW as string,
      {
        method: "POST",
        body: JSON.stringify({
          guessedPrompt: prompt,
          originalPrompt: originalGuess?.prompt,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setGuessScore(data);
    setGenerating(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_GET_RANDOM_PROMPT_WORKFLOW as string
      );
      const data = await response.json();
      console.log(data);
      setOriginalGuess(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const reset = () => {
    setUserPrompt("");
    setOriginalGuess(undefined);
    setGuessScore(undefined);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (generating)
    return <GeneratingScore originalImage={originalGuess!.imageUrl} />;

  if (guessScore)
    return (
      <YourScore
        score={guessScore!}
        originalGuess={originalGuess!}
        userPrompt={userPrompt}
        reset={reset}
      />
    );

  return <EnterGuess onSubmit={handleSubmit} originalGuess={originalGuess} />;
}
