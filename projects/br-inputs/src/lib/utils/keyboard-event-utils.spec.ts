import { KeyboardEventUtils } from './keyboard-event-utils';

describe('KeyboardEventUtils', () => {
  it('should create an instance', () => {
    expect(new KeyboardEventUtils()).toBeTruthy();
  });

  it('validCommands - não aceita teclas individuais (???)', () => {
    expect(KeyboardEventUtils.validCommands(new KeyboardEvent('e'))).toBeFalse();
  });
  // TODO
  // it('validCommands - aceita teclas com nomes, como Backspace, Delete e etc', () => {
  //   expect(KeyboardEventUtils.validCommands(new KeyboardEvent('Backspace'))).toBeTrue();
  // });
});
