import { styled } from '../../../stitches.config.ts';

const Container = styled('section', {
    height: 'calc(100vh - 10vh - 20px)',
    backgroundColor: '#f1f6fe',
    paddingTop: '20px',
    '@sm': {
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    '@md': {
        paddingLeft: '40px',
        paddingRight: 0,
    },
    '@lg': {
        paddingLeft: '40px',
        paddingRight: 0,
    }
});

const Title = styled('h2', {
    margin: '0 !important',
    padding: '15px 0',
});

const Content = styled('figure', {
    margin: '0 !important',
    backgroundColor: '#f1f6fe',
});

const FlexInlineContainer = styled('div', {
    display: 'flex',
    '@sm': {
        flexDirection: 'column',
    },
    '@md': {
        flexDirection: 'row',
    },
    '@lg': {
        flexDirection: 'row',
    },
});

const Padding = styled('div', {
    paddingTop: '10px',
    paddingRight: '10px',
});

export { Container, Title, Content, FlexInlineContainer, Padding };
