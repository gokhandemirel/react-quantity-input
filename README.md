# React Quantity Input

A simple, customizable quantity input component for React that allows users to increment/decrement numeric values.

## Features

- Supports increment/decrement actions
- Fully customizable
- Works with both numbers and strings
- Built-in TypeScript support

## Installation

```bash
npm install react-quantity-input
or
yarn install react-quantity-input
```

## Requirements

- `react >= 18.3.1`
- `react-dom >= 18.3.1`

## Usage

```jsx
import React, { useState } from 'react';
import ReactQuantityInput from 'react-quantity-input';

const MyComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div>
      <ReactQuantityInput
        value={quantity}
        onChange={handleQuantityChange}
        min={1}
        max={10}
        step={1}
        placeholder="Enter quantity"
        disabled={false}
      />
    </div>
  );
};

export default MyComponent;

```

## Props
- `value?` - Value
- `min?` - Minimum allowed value
- `max?` - Maximum allowed value
- `step?` - Increment/decrement step value
- `placeholder?` - Placeholder text for the input
- `maxLength?` - Max number of characters in the input
- `disabled?` - Disable the input field
- `isInvalid?` - Indicates if the input is in an invalid state
- `onState?` - Callback when input is active or clicked

## LICENSE

[MIT](LICENSE)
