import { styled } from 'stitches.config';

const Container = styled('aside', {
    width: '200px',
    transition: 'width 0.2s ease',
    '@sm': {
        width: 0,
    }
});

const Title = styled('div', {
    padding: '15px 0',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
});

const MenuContainer = styled('ul', {
    listStyle: 'none',
    minWidth: '200px',
    paddingTop: '15px',
    paddingLeft: '0 !important',
    margin: '0 !important',
});

const MenuItem = styled('li', {
    fontSize: '1.25rem',
    fontWeight: 'lighter',
    padding: '5px 15px',
    '&:hover': {
        cursor: 'pointer',
    },
});

export {
    Container,
    Title,
    MenuContainer,
    MenuItem,
}