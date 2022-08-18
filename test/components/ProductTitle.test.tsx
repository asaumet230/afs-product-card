import React from 'react';
import { create } from 'react-test-renderer';

// Component:
import ProductCard, { ProductTitle } from '../../src/components';

// Products;
import { product1 } from '../data/products';


describe('Pruebas en el Componente <ProductTitle />', () => {

    test('Debe de mostrarse el titulo correctamente', () => {

        const wrapper = create(
            <ProductTitle title='Custom product' />
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo de producto por defecto', () => {

        const wrapper = create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );


        expect(wrapper).toMatchSnapshot();


    });


});
