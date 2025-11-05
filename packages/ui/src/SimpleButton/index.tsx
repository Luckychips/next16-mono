'use client'

import { useEffect } from 'react';
import { execute } from 'core-util';
import * as S from './styles';

const SimpleButton = () => {
    useEffect(() => {
        execute();
    }, []);

    return (
        <S.Container>
            <div>simple button</div>
        </S.Container>
    );
}

export default SimpleButton;