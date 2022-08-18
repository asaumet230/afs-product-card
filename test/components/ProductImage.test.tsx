import React from "react";
import { create } from "react-test-renderer";

// Component:
import { ProductImage, ProductCard } from '../../src/components';


// Product:
import { product1, product2 } from '../data/products';

describe('Pruebas en el componente <ProductImage />', () => {

    test('Debe de renderizarse correctamente sin imagen', () => {

        const wrapper = create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductImage img="http://no-image.jpg" />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();


    });


    test('Debe de renderizarse correctamente con imagen', () => {

        const wrapper = create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});