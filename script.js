const keyList = [
  {
    className: 'keyboard__row',
    keys: [
      { eng: '`', className: 'keyboard__key', code: 'Backquote' },
      { eng: '1', className: 'keyboard__key', code: 'Digit1' },
      { eng: '2', className: 'keyboard__key', code: 'Digit2' },
      { eng: '3', className: 'keyboard__key', code: 'Digit3' },
      { eng: '4', className: 'keyboard__key', code: 'Digit4' },
      { eng: '5', className: 'keyboard__key', code: 'Digit5' },
      { eng: '6', className: 'keyboard__key', code: 'Digit6' },
      { eng: '7', className: 'keyboard__key', code: 'Digit7' },
      { eng: '8', className: 'keyboard__key', code: 'Digit8' },
      { eng: '9', className: 'keyboard__key', code: 'Digit9' },
      { eng: '0', className: 'keyboard__key', code: 'Digit0' },
      { eng: '-', className: 'keyboard__key', code: 'Minus' },
      { eng: '=', className: 'keyboard__key', code: 'Equal' },
      {
        eng: 'Backspace',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
        code: 'Backspace',
      },
    ],
  },
  {
    className: 'keyboard__row',
    keys: [
      {
        eng: 'Tab',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold keyboard__key--wide',
        code: 'Tab',
      },
      { eng: 'q', className: 'keyboard__key', code: 'KeyQ' },
      { eng: 'w', className: 'keyboard__key', code: 'KeyW' },
      { eng: 'e', className: 'keyboard__key', code: 'KeyE' },
      { eng: 'r', className: 'keyboard__key', code: 'KeyR' },
      { eng: 't', className: 'keyboard__key', code: 'KeyT' },
      { eng: 'y', className: 'keyboard__key', code: 'KeyY' },
      { eng: 'u', className: 'keyboard__key', code: 'KeyU' },
      { eng: 'i', className: 'keyboard__key', code: 'KeyI' },
      { eng: 'o', className: 'keyboard__key', code: 'KeyO' },
      { eng: 'p', className: 'keyboard__key', code: 'KeyP' },
      { eng: '[', className: 'keyboard__key', code: 'BracketLeft' },
      { eng: ']', className: 'keyboard__key', code: 'BracketRight' },
      { eng: '\\', className: 'keyboard__key', code: 'Backslash' },
      {
        eng: 'Del',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold keyboard__key--wide',
        code: 'Delete',
      },
    ],
  },
  {
    className: 'keyboard__row',
    keys: [
      {
        eng: 'CapsLock',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
        code: 'CapsLock',
      },
      { eng: 'a', className: 'keyboard__key', code: 'KeyA' },
      { eng: 's', className: 'keyboard__key', code: 'KeyS' },
      { eng: 'd', className: 'keyboard__key', code: 'KeyD' },
      { eng: 'f', className: 'keyboard__key', code: 'KeyF' },
      { eng: 'g', className: 'keyboard__key', code: 'KeyG' },
      { eng: 'h', className: 'keyboard__key', code: 'KeyH' },
      { eng: 'j', className: 'keyboard__key', code: 'KeyJ' },
      { eng: 'k', className: 'keyboard__key', code: 'KeyK' },
      { eng: 'l', className: 'keyboard__key', code: 'KeyL' },
      { eng: ';', className: 'keyboard__key', code: 'Semicolon' },
      { eng: `'`, className: 'keyboard__key', code: 'Quote' },
      {
        eng: 'Enter',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
        code: 'Enter',
      },
    ],
  },
  {
    className: 'keyboard__row',
    keys: [
      {
        eng: 'Shift',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
        code: 'ShiftLeft',
      },
      { eng: 'z', className: 'keyboard__key', code: 'KeyZ' },
      { eng: 'x', className: 'keyboard__key', code: 'KeyX' },
      { eng: 'c', className: 'keyboard__key', code: 'KeyC' },
      { eng: 'v', className: 'keyboard__key', code: 'KeyV' },
      { eng: 'b', className: 'keyboard__key', code: 'KeyB' },
      { eng: 'n', className: 'keyboard__key', code: 'KeyN' },
      { eng: 'm', className: 'keyboard__key', code: 'KeyM' },
      { eng: ',', className: 'keyboard__key', code: 'Comma' },
      { eng: '.', className: 'keyboard__key', code: 'Period' },
      { eng: '/', className: 'keyboard__key', code: 'Slash' },
      {
        eng: '&#8593;',
        className: 'keyboard__key keyboard__key--secondary-color',
        code: 'ArrowUp',
      },
      {
        eng: 'Shift',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
        code: 'ShiftRight',
      },
    ],
  },
  {
    className: 'keyboard__row',
    keys: [
      {
        eng: 'Ctrl',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
        code: 'ControlLeft',
      },
      {
        eng: 'Win',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
        code: 'MetaLeft',
      },
      {
        eng: 'Alt',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
        code: 'AltLeft',
      },
      {
        eng: '',
        className: 'keyboard__key keyboard__key--space',
        code: 'Space',
      },
      {
        eng: 'Alt',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
        code: 'AltRight',
      },
      {
        eng: '&#8592',
        className: 'keyboard__key keyboard__key--secondary-color',
        code: 'ArrowLeft',
      },
      {
        eng: '&#8595',
        className: 'keyboard__key keyboard__key--secondary-color',
        code: 'ArrowDown',
      },
      {
        eng: '&#8594',
        className: 'keyboard__key keyboard__key--secondary-color',
        code: 'ArrowRight',
      },
      {
        eng: 'Ctrl',
        className: 'keyboard__key keyboard__key--secondary-color',
        code: 'ControlRight',
      },
    ],
  },
];

const pressedKeys = new Map();

function appendElement(container, className) {
  const ELEMENT = document.createElement('div');
  ELEMENT.classList.add(...className.split(' '));
  container.append(ELEMENT);
  return ELEMENT;
}

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('keyboard__container');
document.body.prepend(CONTAINER);

// keyboard generation
keyList.forEach((row) => {
  const { className, keys } = row;
  const ROW = appendElement(CONTAINER, className);
  keys.forEach((key) => {
    const { className: keyClassName, eng, code } = key;
    const KEY = appendElement(ROW, keyClassName);
    KEY.innerHTML = eng;
    KEY.dataset.code = code;
  });
});

// button click handle
const BUTTONS = document.querySelectorAll('.keyboard__key');

function handleButtonDown(event) {
  event.preventDefault();
  const { code } = event;

  [...BUTTONS]
    .find((button) => button.dataset.code === code)
    .classList.add('keyboard__key--pressed');
}

function handleButtonUp(event) {
  const { code } = event;
  pressedKeys.delete(code);
  [...BUTTONS]
    .find((button) => button.dataset.code === code)
    .classList.remove('keyboard__key--pressed');
}

document.addEventListener('keydown', handleButtonDown);
document.addEventListener('keyup', handleButtonUp);
