import { styled } from 'stitches.config';

const Container = styled('footer', {
    backgroundColor: 'white',
    height: '10vh',
    '@sm': {
        height: '0 !important',
    },
    '@md': {
        height: '10vh',
    },
    '@lg': {
        height: '10vh',
    }
});

export { Container };