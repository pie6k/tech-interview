import { autorun } from "mobx";
import { getRandomInt } from "./utils";

const element = document.createElement("div");

const observableSize = new ObservableSize(element);

autorun(() => {
  console.log("Size", observableSize.width, observableSize.height);
});

setInterval(() => {
  const randomWidth = getRandomInt(100, 1000);
  const randomHeight = getRandomInt(100, 1000);
  element.style.width = `${randomWidth}px`;
  element.style.height = `${randomHeight}px`;
}, 1000);
