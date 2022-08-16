import React from 'react';
import { CSSProperties } from 'react';

// Context:
import { ProductContext } from '../context/productContext';

// Hooks:
import { useProduct } from '../hooks/useProduct';

// CSS:
import styles from '../styles/styles.module.css';

// Interfaces:
import { InitialValues, OnChangeArgs, Product, ProductCartHandlers } from '../interfaces/interfaces';



export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCartHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}



export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { Provider } = ProductContext;
    const { counter, increaseBy, reset, maxCount, isMaxCountReached } = useProduct({
        onChange,
        product,
        value,
        initialValues
    });


    return (

        <Provider value={{
            counter,
            product,
            maxCount,
            increaseBy,
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children({
                    product,
                    increaseBy,
                    reset,
                    maxCount,
                    count: counter,
                    isMaxCountReached,
                })}
            </div>
        </Provider>


    )
}

