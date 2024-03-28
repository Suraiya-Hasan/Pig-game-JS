const { init, switchPlayer } = require('./script.js');

// Unit test for the init function
test('init function should initialize game state correctly', () => {
  // Mock DOM elements and setup initial state
  document.body.innerHTML = `
    <div class="player--0"></div>
    <div class="player--1"></div>
    <div id="score--0"></div>
    <div id="score--1"></div>
    <div class="dice"></div>
    <button class="btn--new"></button>
    <button class="btn--roll"></button>
    <button class="btn--hold"></button>
    <div id="current--0"></div>
    <div id="current--1"></div>
  `;

  init();

  // Assert that the game state is initialized correctly
  expect(document.getElementById('score--0').textContent).toBe('0');
  expect(document.getElementById('score--1').textContent).toBe('0');
  expect(document.getElementById('current--0').textContent).toBe('0');
  expect(document.getElementById('current--1').textContent).toBe('0');
  expect(document.querySelector('.dice').classList.contains('hidden')).toBe(
    true
  );
  expect(
    document.querySelector('.player--0').classList.contains('player--active')
  ).toBe(true);
  expect(
    document.querySelector('.player--1').classList.contains('player--active')
  ).toBe(false);
  expect(
    document.querySelector('.player--0').classList.contains('player--winner')
  ).toBe(false);
  expect(
    document.querySelector('.player--1').classList.contains('player--winner')
  ).toBe(false);
});

// Unit test for the switchPlayer function
test('switchPlayer function should switch the active player and reset current score', () => {
  // Mock DOM elements and set initial state
  document.body.innerHTML = `
    <div id="current--0">10</div>
    <div id="current--1">5</div>
    <div class="player--0 player--active"></div>
    <div class="player--1"></div>
  `;

  switchPlayer();

  // Assert that the active player is switched and current scores are reset
  expect(document.getElementById('current--0').textContent).toBe('0');
  expect(document.getElementById('current--1').textContent).toBe('0');
  expect(
    document.querySelector('.player--0').classList.contains('player--active')
  ).toBe(false);
  expect(
    document.querySelector('.player--1').classList.contains('player--active')
  ).toBe(true);
});
