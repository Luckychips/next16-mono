import { styled } from '@stitches/react';

const Container = styled('aside', {

});

const Title = styled('div', {
    padding: '15px 0',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
});

const MenuContainer = styled('ul', {
    listStyle: 'none',
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