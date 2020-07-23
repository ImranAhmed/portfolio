import * as React from 'react';

type Props = {
    text: string;
};

const Button: React.FC<Props> = ({ text }: Props) => <button type="button">{text}</button>;

export default Button;
