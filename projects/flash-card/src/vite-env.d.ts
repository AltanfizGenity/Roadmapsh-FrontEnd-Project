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
