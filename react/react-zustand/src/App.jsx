import React from "react";
import { useShallow } from "zustand/react/shallow";

import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  counter: 0,
  bees: [1],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  increaseBees: () =>
    set((state) => {
      const beeLength = state.bees.length;
      return { bees: [...state.bees, beeLength + 1] };
    }),
  increaseCounter: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
}));

// ! This will render 1 time, because you need select 1 by 1
// https://github.com/pmndrs/zustand#fetching-everything
function BearCounter() {
  const bears = useBearStore((state) => state.bears);

  console.log("render Bear Counter");

  return <h1>{bears} around here ...</h1>;
}

function BearOneCounter() {
  const bees = useBearStore((state) => state.bees);

  console.log("render Bees 1 Show");

  return <h1>{bees.toString()} bee near ONE bear here ...</h1>;
}

// ! This make components render every time store update -> not a good choice
function BearTwoCounter() {
  const { bees } = useBearStore();

  console.log("render Bees 2 Show");

  return <h1>{bees.toString()} bee near TWO bear here ...</h1>;
}

// ! Action for select multiple slices
// https://github.com/pmndrs/zustand#selecting-multiple-state-slices
function BearAndCounter() {
  const { bears, counter } = useBearStore(
    useShallow((state) => ({ bears: state.bears, counter: state.counter }))
  );

  console.log("render Bear And counter");

  return (
    <h1>
      {bears} bear and {counter} counter ...
    </h1>
  );
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const increaseBees = useBearStore((state) => state.increaseBees);
  const increaseCounter = useBearStore((state) => state.increaseCounter);

  console.error("Control render");

  return (
    <div
      style={{
        padding: "8px",
        border: "1px solid red",
      }}
    >
      <button onClick={increasePopulation}>one bear up</button>
      <button onClick={increaseBees}>one bee up</button>
      <button onClick={increaseCounter}>counter up</button>
    </div>
  );
}

const App = () => {
  console.log("App render");
  return (
    <div>
      <h1>Hello this is: App</h1>
      <BearCounter />
      <BearOneCounter />
      <BearTwoCounter />
      <BearAndCounter />
      <Controls />
    </div>
  );
};

export default App;
