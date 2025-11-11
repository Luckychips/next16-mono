import { createStitches } from '@stitches/react';

export const { styled, css, getCssText, globalCss, keyframes, config } = createStitches({
    media: {
        sm: '(max-width: 375px)',
        md: '(min-width: 376px) and (max-width: 999px)',
        lg: '(min-width: 1000px)',
    },
});
