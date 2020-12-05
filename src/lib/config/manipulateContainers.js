import addIdsToNodes from "./addIdsToNodes.js";

export const hideContainer = ($container) => {
  if (typeof $container !== "object") return;
  $container.setAttribute("style", "display:none;");
};

export const hideUnusedContainers = () => {
  const $racingCountContainer = document.querySelector(
    "#racing-count-container"
  );
  const $resultContainer = document.querySelector("#result-container");
  [$racingCountContainer, $resultContainer].forEach(($container) => {
    hideContainer($container);
  });
};

export const settingGame = () => {
  addIdsToNodes();
  hideUnusedContainers();
};

export const showContainer = ($container) => {
  if (typeof $container !== "object") return;
  $container.removeAttribute("style");
};

export const disableInputs = ($input, $button) => {
  if (typeof $input !== "object" || typeof $button !== "object") return;
  $input.setAttribute("disabled", "true");
  $button.setAttribute("disabled", "true");
};

const $getGameStepElement = (cars, step) =>
  cars.reduce(($thisStep, car) => {
    $thisStep.innerHTML += `${car.name}: ${"-".repeat(car.pos[step - 1])}<br/>`;
    return $thisStep;
  }, document.createElement("p"));

const renderGameSteps = (cars, racingCount, $resultContainer) => {
  const $renderGameSteps = document.createElement("div");
  $renderGameSteps.id = "render-game-step";
  for (let step = 1; step <= racingCount; step++) {
    $renderGameSteps.appendChild($getGameStepElement(cars, step));
  }
  $resultContainer.appendChild($renderGameSteps);
};

const $getWinCarsElement = (winCars) => {
  const $printWinCars = document.createElement("p");
  $printWinCars.innerText = `최종 우승자: ${
    winCars.length === 1 ? winCars : winCars.join(", ")
  }`;
  return $printWinCars;
};

const renderWinCars = (cars, winCars, $resultContainer) => {
  const $renderWinCars = document.createElement("div");
  $renderWinCars.id = "render-win-cars";
  $renderWinCars.appendChild($getWinCarsElement(winCars));
  $resultContainer.appendChild($renderWinCars);
};

export const renderResult = ($resultContainer, cars, racingCount, winCars) => {
  renderGameSteps(cars, racingCount, $resultContainer);
  renderWinCars(cars, winCars, $resultContainer);
};
