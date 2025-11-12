import { useEffect, useState, useMemo } from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import { HeatmapRect } from '@visx/heatmap';
import { Group } from '@visx/group';
import useResponsive from '../../core/custom/useResponsive';
import * as S from './styles';

type HeatmapData = Array<{
    bins: Array<{ bin: number; count: number }>;
}>;

const generateRandomHeatmap = (rows = 20, cols = 20): HeatmapData => {
    return Array.from({ length: rows }, (_, row) => ({
        bins: Array.from({ length: cols }, (_, col) => ({
            bin: col,
            count: Math.floor(col * 3 + (Math.sin(row / 3) + 1) * 20),
        })),
    }));
};

const data: HeatmapData = generateRandomHeatmap(20, 20);
const margin = { top: 20, left: 20, bottom: 20, right: 20 };

const Heatmap = () => {
    const { width, height } = useResponsive(0, 200);
    const [xDomain, setXDomain] = useState<number[]>([]);
    const [yDomain, setYDomain] = useState<number[]>([]);

    const colorScale = useMemo(() => {
        return scaleLinear<string, string>().domain([0, 32]).range(['#ffffff', '#efef00']);
    }, []);

    const xScale = useMemo(() => {
        if (!width || xDomain.length === 0) return null;
        return scaleBand<number>()
            .domain(xDomain)
            .range([0, width - margin.left - margin.right])
            .paddingInner(0.1);
    }, [xDomain, width]);

    const yScale = useMemo(() => {
        if (!height || yDomain.length === 0) return null;
        return scaleBand<number>()
            .domain(yDomain)
            .range([0, height - margin.top - margin.bottom])
            .paddingInner(0.1);
    }, [yDomain, height]);

    useEffect(() => {
        const xList = Array.from({ length: 20 }, (_, i) => i);
        const yList = Array.from({ length: 20 }, (_, i) => i);
        setXDomain(xList);
        setYDomain(yList);
    }, []);

    if (!xScale || !yScale) return null;
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