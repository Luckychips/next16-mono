'use client'

import { useEffect } from 'react';
import { execute } from 'core-util';
import { ButtonProps } from '../base';
import * as S from './styles';

interface SimpleButtonProps extends ButtonProps {
    disabled?: boolean;
}

const SimpleButton = ({
    label,
    onClick,
    disabled = false,
}: SimpleButtonProps) => {
    useEffect(() => {
        execute();
    }, []);

    return (
        <S.Container disabled={disabled} onClick={onClick}>
            <div>{label}</div>
        </S.Container>
    );
}

export default SimpleButton;