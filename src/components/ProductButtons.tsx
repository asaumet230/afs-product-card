import React from 'react';
import { CSSProperties, useCallback, useContext } from 'react';

// Context:
import { ProductContext } from "../context/productContext";

// CSS:
import styles from '../styles/styles.module.css';



export interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {


    const { counter, increaseBy, maxCount } = useContext(ProductContext);

    const isMaxReached = useCallback(() => (!!maxCount && maxCount === counter), [maxCount, counter]);

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}>
                -
            </button>

            <div className={styles.countLabel}>
                {counter}
            </div>

            <button
                className={`${isMaxReached() && styles.disabled} ${styles.buttonAdd}`}
                onClick={() => increaseBy(1)}
                disabled={isMaxReached()}
            >
                +
            </button>
        </div>
    )
}