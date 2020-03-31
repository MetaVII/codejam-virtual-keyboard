function appendElement(container, className) {
  const ELEMENT = document.createElement('div');
  ELEMENT.classList.add(...className.split(' '));
  container.append(ELEMENT);
  return ELEMENT;
}

const keyList = [
  {
    className: 'keyboard__row',
    keys: [
      { eng: '`', className: 'keyboard__key' },
      { eng: '1', className: 'keyboard__key' },
      { eng: '2', className: 'keyboard__key' },
      { eng: '3', className: 'keyboard__key' },
      { eng: '4', className: 'keyboard__key' },
      { eng: '5', className: 'keyboard__key' },
      { eng: '6', className: 'keyboard__key' },
      { eng: '7', className: 'keyboard__key' },
      { eng: '8', className: 'keyboard__key' },
      { eng: '9', className: 'keyboard__key' },
      { eng: '0', className: 'keyboard__key' },
      { eng: '-', className: 'keyboard__key' },
      { eng: '=', className: 'keyboard__key' },
      {
        eng: 'Backspace',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
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
      },
      { eng: 'q', className: 'keyboard__key' },
      { eng: 'w', className: 'keyboard__key' },
      { eng: 'e', className: 'keyboard__key' },
      { eng: 'r', className: 'keyboard__key' },
      { eng: 't', className: 'keyboard__key' },
      { eng: 'y', className: 'keyboard__key' },
      { eng: 'u', className: 'keyboard__key' },
      { eng: 'i', className: 'keyboard__key' },
      { eng: 'o', className: 'keyboard__key' },
      { eng: 'p', className: 'keyboard__key' },
      { eng: '[', className: 'keyboard__key' },
      { eng: ']', className: 'keyboard__key' },
      { eng: '\\', className: 'keyboard__key' },
      {
        eng: 'Del',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold keyboard__key--wide',
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
      },
      { eng: 'a', className: 'keyboard__key' },
      { eng: 's', className: 'keyboard__key' },
      { eng: 'd', className: 'keyboard__key' },
      { eng: 'f', className: 'keyboard__key' },
      { eng: 'g', className: 'keyboard__key' },
      { eng: 'h', className: 'keyboard__key' },
      { eng: 'j', className: 'keyboard__key' },
      { eng: 'k', className: 'keyboard__key' },
      { eng: 'l', className: 'keyboard__key' },
      { eng: ';', className: 'keyboard__key' },
      { eng: `'`, className: 'keyboard__key' },
      {
        eng: 'Enter',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
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
      },
      { eng: 'z', className: 'keyboard__key' },
      { eng: 'x', className: 'keyboard__key' },
      { eng: 'c', className: 'keyboard__key' },
      { eng: 'v', className: 'keyboard__key' },
      { eng: 'b', className: 'keyboard__key' },
      { eng: 'n', className: 'keyboard__key' },
      { eng: 'm', className: 'keyboard__key' },
      { eng: ',', className: 'keyboard__key' },
      { eng: '.', className: 'keyboard__key' },
      { eng: '/', className: 'keyboard__key' },
      {
        eng: '&#8593;',
        className: 'keyboard__key keyboard__key--secondary-color',
      },
      {
        eng: 'Shift',
        className:
          'keyboard__key keyboard__key--widest keyboard__key--secondary-color keyboard__key--bold',
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
      },
      {
        eng: 'Win',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
      },
      {
        eng: 'Alt',
        className:
          'keyboard__key keyboard__key--secondary-color keyboard__key--bold',
      },
      { eng: '', className: 'keyboard__key keyboard__key--space' },
      { eng: 'Alt', className: 'keyboard__key' },
      {
        eng: '&#8592',
        className: 'keyboard__key keyboard__key--secondary-color',
      },
      {
        eng: '&#8595',
        className: 'keyboard__key keyboard__key--secondary-color',
      },
      {
        eng: '&#8594',
        className: 'keyboard__key keyboard__key--secondary-color',
      },
      {
        eng: 'Ctrl',
        className: 'keyboard__key keyboard__key--secondary-color',
      },
    ],
  },
];

const CONTAINER = document.createElement('div');
CONTAINER.classList.add('keyboard__container');
document.body.prepend(CONTAINER);

keyList.forEach((row) => {
  const { className, keys } = row;
  const ROW = appendElement(CONTAINER, className);
  keys.forEach((key) => {
    const { className: keyClassName, eng } = key;
    const KEY = appendElement(ROW, keyClassName);
    KEY.innerHTML = eng;
  });
});
