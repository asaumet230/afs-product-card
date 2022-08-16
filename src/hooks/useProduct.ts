import { useEffect, useRef, useState } from "react";

// Interfaces:
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( { product, onChange, value = 0, initialValues }: useProductArgs ) => {
  

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    useEffect(() => {

        if( !isMounted.current ) return;  
        setCounter(value);

    }, [value]);

    useEffect(() => {
                
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, [])
    
    

    const increaseBy = (value: number = 0) => {

        let newValue = Math.max(counter + value, 0);

        if( initialValues?.maxCount  ) {
            newValue = Math.min( newValue, initialValues?.maxCount);
        }
        
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset,
        increaseBy,
    }
}
