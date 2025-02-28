/// <reference types="svelte" />
/// <reference types="vite/client" />

type TestRaw = {
  question: string;
  answer: string;
};

type Test = TestRaw & {
  id: string;
  isOpen: boolean;
};

type ClickEventHandler = (mouse: MouseEvent) => void;

type EventProps = {
  onclick: ClickEventHandler;
};

type CardProps = { currentTest: Test; isFlipped: boolean };

type ControllerProps = {
  flipCard: ClickEventHandler;
  changeTest: Function;
  currentTest: Test;
  isFlipped: boolean;
};

type FlipButtonProps = EventProps & {
  isFlipped: boolean;
};

type ProgressBarProps = {
  progressMeter: number;
  totalLength: number;
};

type NextButtonProps = EventProps & {
  isOpen: boolean;
};
