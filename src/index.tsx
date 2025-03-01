import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

enum QuantityButtonTypes {
  DECREASE = 'DECREASE',
  INCREMENT = 'INCREMENT'
}

export interface IQuantityProps {
  value?: number | string | undefined;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isInvalid?: boolean;
  onState?: (e: any) => void;
}

interface IStateProps {
  quantity?: number | string;
  decreaseDisabled?: boolean;
  incrementDisabled?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input<{ $isInvalid?: boolean }>`
  width: 60px;
  height: 48px;
  padding: 8px;
  font-size: 14px;
  border: solid 1px #ddd;
  border-color: ${(props) => (props.$isInvalid ? 'red !important' : '#ddd')};
  outline: none;
  text-align: center;
  box-sizing: border-box;
  z-index: 10;

  &:focus {
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
  }

  &:valid {
    border-color: #ccc;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = styled.button<{ $type?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: white;
  border: solid 1px #ddd;
  color: #999;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.16s;

  border-left: ${(props) => (props.$type === QuantityButtonTypes.INCREMENT ? '0px' : '')};
  border-right: ${(props) => (props.$type === QuantityButtonTypes.DECREASE ? '0px' : '')};

  &:hover {
    background-color: #efefef;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

function ReactQuantityInput(props: IQuantityProps) {
  const { min = 0, max = 100, step = 1, placeholder, maxLength, disabled, isInvalid, onState } = props;
  const [state, setState] = useState<IStateProps>({
    quantity: '',
    decreaseDisabled: false,
    incrementDisabled: false
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const regex: RegExp = /^([-]{1})?([0-9.]+)?$/;
    const valid = regex.test(value);
    if (value === '') {
      setState({ ...state, quantity: '', decreaseDisabled: false, incrementDisabled: false });
    }
    if (valid) {
      setState((x) => {
        return {
          ...x,
          quantity: e.target.value,
          decreaseDisabled: Number(value) === min,
          incrementDisabled: Number(value) === max
        };
      });
    }
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const args = {
      quantity: value < min ? min : value > max ? max : value,
      decreaseDisabled: value < min ? true : false,
      incrementDisabled: value > max ? true : false
    };
    setState(args);
    onState && onState(args);
  };

  const handleOnDecrease = () => {
    setState((x) => {
      const y = Number(x.quantity) - step;
      if (y >= min) {
        const state = { ...x, quantity: y, decreaseDisabled: y === min, incrementDisabled: false };
        onState && onState(state);
        return state;
      }
      return { ...x, decreaseDisabled: true };
    });
  };

  const handleOnIncrement = () => {
    setState((x) => {
      const y = Number(x.quantity) + step;
      if (y <= max) {
        const state = { ...x, quantity: y, decreaseDisabled: false, incrementDisabled: y === max };
        onState && onState(state);
        return state;
      }
      return { ...x, incrementDisabled: true };
    });
  };

  return (
    <Wrapper>
      <Button
        $type={QuantityButtonTypes.DECREASE}
        onClick={handleOnDecrease}
        disabled={disabled || state.decreaseDisabled}
      >
        -
      </Button>
      <Input
        $isInvalid={isInvalid}
        value={state.quantity}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        maxLength={maxLength}
        disabled={disabled}
        required
      />
      <Button
        $type={QuantityButtonTypes.INCREMENT}
        onClick={handleOnIncrement}
        disabled={disabled || state.incrementDisabled}
      >
        +
      </Button>
    </Wrapper>
  );
}

export { ReactQuantityInput };
