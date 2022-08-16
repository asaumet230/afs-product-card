import React from 'react';
import { CSSProperties, useContext } from "react";

// Context:
import { ProductContext } from "../context/productContext";

// CSS:
import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export const ProductTitle = ({ title = '', className = '', style }: Props) => {

    const { product } = useContext(ProductContext);
    let titleToShow: string = '';

    title.length > 0 ? titleToShow = title : titleToShow = product.title;

    return (
        <span style={style} className={`${styles.productDescription} ${className}`}>{titleToShow}</span>
    )
}
