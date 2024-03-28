const script = require('./script.js');

// Integration test to check if clicking the roll button increments the current score
test('clicking roll button should increment current score if dice is not 1', () => {
  // Mock DOM elements
  document.body.innerHTML = `
    <div id="current--0">0</div>
    <div class="dice hidden"></div>
  `;

  // Simulate clicking the roll button
  script.btnRoll.click();

  // Extract the current score after clicking roll
  const currentScoreAfterRoll = Number(
    document.getElementById('current--0').textContent
  );

  // Assert that current score is greater than 0
  expect(currentScoreAfterRoll).toBeGreaterThan(0);
});

// Add more integration tests as needed
