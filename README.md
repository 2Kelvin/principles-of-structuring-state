# principles-of-structuring-state

![star_highlight](https://user-images.githubusercontent.com/85868026/211008314-18c91483-5e0b-43fd-94b4-b239eb3a2cd6.png)

In this read, I learnt:

- that a component whose state is well structured is easier to debug
- the `5 principles of structuring state`:
  - [x] `Group` all related state. if there are 2 state variables that you always update at the same time, you should `merge` them into one state variable: e.g. combining them into an object/ array state variable
  - [x] Avoid states that `contradict/ disagree` with each other
  - [x] Avoid `redundant` state
  - [x] Avoid `duplicating` state
  - [x] Avoid `deeply nested state`. Try to structure your state in a flat way
- that the goal of these 5 principles is to `make updating state easier without intrtoducing mistkes`
