export const hideRacingCountInputAndResult = () => {
  const $getRacingCount = document.querySelector('#get-racing-count');
  const $result = document.querySelector('#result');
  $getRacingCount.setAttribute('style', 'display:none;');
  $result.setAttribute('style', 'display:none;');
}

export const showRacingCountInputAttribute = () => {
  const $getRacingCount = document.querySelector('#get-racing-count');
  $getRacingCount.removeAttribute('style');
}

export const showResultAttribute = () => {
  const $result = document.querySelector('#result');
  $result.removeAttribute('style');
}