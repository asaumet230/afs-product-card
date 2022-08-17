# Afs-product-card

Este es un paquete de pruebas de despliegues en NPM.

**Andres Felipe**

## Ejemplo:

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
 <ProductCard
    product={product}
    initialValues={{
        count: 4,
        // maxCount: 10
    }}>

    {
        ({ count, increaseBy, reset, isMaxCountReached, maxCount, product }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
