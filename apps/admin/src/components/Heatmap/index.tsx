import { HeatmapRect } from '@visx/heatmap';
import { Group } from '@visx/group';
import { scaleLinear, scaleBand } from 'd3-scale';
import * as S from './styles';

type HeatmapData = Array<{
    bins: Array<{ bin: number; count: number }>;
}>;

const generateRandomHeatmap = (rows = 20, cols = 20): HeatmapData => {
    return Array.from({ length: rows }, () => ({
        bins: Array.from({ length: cols }, (_, colIndex) => ({
            bin: colIndex,
            count: Math.floor(Math.random() * 100), // 0~99 랜덤 값
        })),
    }));
};

const data: HeatmapData = generateRandomHeatmap(20, 20);

const width = 250;
const height = 200;
const margin = { top: 20, left: 20, bottom: 20, right: 20 };

const xDomain = Array.from({ length: 20 }, (_, i) => String(i));
const yDomain = Array.from({ length: 20 }, (_, i) => String(i));

const xScale = scaleBand<string>()
    .domain(xDomain)
    .range([0, width - margin.left - margin.right])
    .paddingInner(0.1);

const yScale = scaleBand<string>()
    .domain(yDomain)
    .range([0, height - margin.top - margin.bottom])
    .paddingInner(0.1);

const Heatmap = () => {
    const colorScale = scaleLinear<string>()
        .domain([0, 32])
        .range(['#ffffff', '#efef00']);

    return (
        <S.Container style={{ width: `${width}px`, height: `${height}px` }}>
            <svg width={width} height={height}>
                <Group top={margin.top} left={margin.left}>
                    <HeatmapRect
                        data={data}
                        xScale={(colIndex: number) => xScale(xDomain[colIndex]) ?? 0}
                        yScale={(rowIndex: number) => yScale(yDomain[rowIndex]) ?? 0}
                        colorScale={colorScale}
                        binWidth={xScale.bandwidth()}
                        binHeight={yScale.bandwidth()}
                    >
                        {heatmap =>
                            heatmap.map((rows, rowIndex) =>
                                rows.map((cell, columnIndex) => (
                                    <rect
                                        key={`${rowIndex}-${columnIndex}`}
                                        x={cell.x}
                                        y={cell.y}
                                        width={cell.width}
                                        height={cell.height}
                                        fill={cell.color}
                                        stroke="#ccc"
                                    />
                                ))
                            )
                        }
                    </HeatmapRect>
                </Group>
            </svg>
        </S.Container>
    );
};

export default Heatmap;