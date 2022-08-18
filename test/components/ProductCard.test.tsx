import React from "react";
import { act, create } from "react-test-renderer";

// Component:
import { ProductCard } from '../../src/components';


// Product:
import { product1 } from '../data/products';

describe('Pruebas en el componente <ProductCard />', () => {

    test('Debe de renderizarse correctamente', () => {

        const wrapper = create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });


    test('Debe Incrementar en 1 el contador', () => {

        const wrapper = create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>Incrementar</button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();


        act(() => {
            (tree as any).children[2].props.onClick(); /* fire events that update state */
        });


        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');

    });


});