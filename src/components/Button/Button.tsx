import React, { MouseEvent, SFC } from 'react';

interface IProps {
  onClick?(e: MouseEvent<HTMLElement>): void;
}

const Button: SFC<IProps> = ({ onClick: handleClick, children }) => (
  <button onClick={handleClick}>{children}</button>
);

export default Button;
