import * as React from 'react';
import styles from './button.module.scss';

type Props = {
    text: string;
};

const Button: React.FC<Props> = ({ text }: Props) => (
    <button className={styles.button} type="button">
        {text}
    </button>
);

export default Button;
