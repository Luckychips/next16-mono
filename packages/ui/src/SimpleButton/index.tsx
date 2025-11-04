'use client'

import { useEffect } from 'react';
import { execute } from 'core-util';

const SimpleButton = () => {
    useEffect(() => {
        execute();
    }, []);

    return <div>simple button</div>;
}

export default SimpleButton;