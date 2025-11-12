import { Wordcloud } from '@visx/wordcloud';
import { Group } from '@visx/group';
import * as S from './styles';
import useResponsive from '../../core/custom/useResponsive';

type Word = {
    text: string;
    value: number;
};

const words: Word[] = [
    { text: 'React', value: 80 },
    { text: 'TypeScript', value: 60 },
    { text: 'Visx', value: 50 },
    { text: 'WordCloud', value: 40 },
    { text: 'D3', value: 30 },
    { text: 'SVG', value: 25 },
    { text: 'Frontend', value: 20 },
];

const WordView = () => {
    const { width, height } = useResponsive(0, 200);

    const getRotationDegree = () => {
        const rand = Math.random();
        const degree = rand > 0.5 ? 60 : -60;
        return rand * degree;
    }

    return (
        <S.Container style={{ width: `${width}px`, height: `${height}px` }}>
            <svg width={width} height={height}>
                <Wordcloud
                    words={words}
                    width={width}
                    height={height}
                    font="sans-serif"
                    fontSize={(d: any) => d.value}
                    padding={0}
                    spiral="rectangular"
                    rotate={() => (getRotationDegree())}
                >
                    {(list) =>
                        list.map((item: any) => {
                            return (
                                <Group
                                    key={item.text}
                                    top={item.y}
                                    left={item.x}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <text
                                        textAnchor="middle"
                                        fontSize={item.size}
                                        transform={`rotate(${item.rotate})`}
                                        fill="pink"
                                    >
                                        {item.text}
                                    </text>
                                </Group>
                            );
                        })
                    }
                </Wordcloud>
            </svg>
        </S.Container>
    );
};

export default WordView;