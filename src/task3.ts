/**
 * Implement ObservableSize.
 * - it should be a class that can be used to observe the size of an element
 * with mobx observable values
 */

import { autorun } from "mobx";
import { getRandomInt } from "./utils";

const element = document.createElement("div");

const observableSize = new ObservableSize(element);

autorun(() => {
  console.log("Size", observableSize.width, observableSize.height);
});

// later observableSize.destroy();

setInterval(() => {
  const randomWidth = getRandomInt(100, 1000);
  const randomHeight = getRandomInt(100, 1000);
  element.style.width = `${randomWidth}px`;
  element.style.height = `${randomHeight}px`;
}, 1000);
