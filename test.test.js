// Manual testing is done by humans interacting with the system. Purposely trying to break it but using it in unexpected ways, - hard for developers to do themselves cos they know how to use the systems 

// it helps others to understand what the code is trying to do e.g 

it('accepts the customer name', () => {
  const name = 'Hungry Person';

  browser.url('/');
  browser.setValue('#name', name);
  browser.click('#submit-order');
  browser.url('/');

  assert.include(browser.getText('#deliver-to'), name);
});

