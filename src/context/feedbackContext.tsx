import { createContext, useContext, useState, type ReactNode } from "react";
import type { FeedBackUpdate } from "./feedbackModel";

interface FeedbackContextType {
  feedback: FeedBackUpdate;
  updateFeedback: (data: FeedBackUpdate) => void;
  resetFeedback: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedback, setFeedback] = useState<FeedBackUpdate>({});

  const updateFeedback = (data: FeedBackUpdate) => {
    setFeedback((prev) => {
      const novo = { ...prev, ...data };
      return novo;
    });
  };

  const resetFeedback = () => setFeedback({});

  return (
    <FeedbackContext.Provider
      value={{ feedback, updateFeedback, resetFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context)
    throw new Error("useFeedback must be used within FeedbackProvider");
  return context;
};
