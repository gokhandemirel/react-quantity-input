# react-quantity-input

## Getting Started

```bash
npm install react-quantity-input
```

## Requirements

- `react >= 18.3.1`
- `react-dom >= 18.3.1`

## Usage

```jsx
import React from 'react';
import { ReactQuantityInput } from 'react-quantity-input;

const Component = () => {
  return (
    <ReactQuantityInput />
  );
};
```

## Props
- `value?` - Input value / (number|string)
- `min?` - Min valid number / (number)
- `max?` - Max valid number / (number)
- `step?` - Input increase range / (number)
- `max?` - Max valid number / (number)
- `placeholder?` - Input placeholder / (string)
- `maxLength?` - Input max number of characters / (number)
- `disabled?` - Input disabled state / (boolean)
- `isInvalid?` - Input invalid state / (boolean)
- `onState?` - Input active state / (function)

## LICENSE

[MIT](LICENSE)
