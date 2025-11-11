import { styled } from '@stitches/react';

const Container = styled('section', {
    backgroundColor: 'white',
    touchAction: 'none',
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    '&>svg': {
        cursor: 'crosshair',
    },
});

export { Container };