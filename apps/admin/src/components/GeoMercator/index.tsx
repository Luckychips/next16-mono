import { useEffect, useState } from 'react';
import { useResponsive } from '@/core/custom';
import { scaleQuantize } from '@visx/scale';
import { Mercator, Graticule } from '@visx/geo';
import * as topojson from 'topojson-client';
import * as S from './styles';
import topology from './topology.json';

export const background = '#ffffff';

export type GeoMercatorProps = {
    events?: boolean;
};

interface FeatureShape {
    type: 'Feature';
    id: string;
    geometry: { coordinates: [number, number][][]; type: 'Polygon' };
    properties: { name: string };
}

// @ts-expect-error
const world = topojson.feature(topology, topology.objects.units) as unknown as {
    type: 'FeatureCollection';
    features: FeatureShape[];
};

const color = scaleQuantize({
    domain: [
        Math.min(...world.features.map((f) => f.geometry.coordinates.length)),
        Math.max(...world.features.map((f) => f.geometry.coordinates.length)),
    ],
    range: ['#ffb01d', '#ffa020', '#ff9221', '#ff8424', '#ff7425', '#fc5e2f', '#f94b3a', '#f63a48'],
});

const GeoMercator = ({ events = false }: GeoMercatorProps) => {
    const { width, height } = useResponsive(0, 400, 510);
    const [centerX, setCenterX] = useState(0);
    const [centerY, setCenterY] = useState(0);
    const [zoom, setZoom] = useState(50);

    useEffect(() => {
        const geoMap = document.getElementById('geo-canvas');
        if (geoMap) {
            geoMap.addEventListener('dblclick', () => {
                setZoom((z) => z + 10);
            });
        }
    }, []);

    useEffect(() => {
        if (width) {
            setCenterX(width / 2);
        }
    }, [width]);

    useEffect(() => {
        if (height) {
            setCenterY(height / 2);
        }
    }, [height]);

    return (
        <S.Container style={{ width: `${width}px`, height: `${height}px` }}>
            <svg width={width} height={height} id="geo-canvas">
                <rect x={0} y={0} width={width} height={height} fill={background} />
                <Mercator<FeatureShape>
                    key={zoom}
                    data={world.features}
                    scale={zoom}
                    translate={[centerX, centerY + 50]}
                >
                    {(mercator: {
                        features: {
                            feature: FeatureShape;
                            path: string | null;
                            centroid: [number, number];
                        }[];
                        path: (d: any) => string | null;
                        projection: any;
                    }) => (
                        <g>
                            <Graticule graticule={(g) => mercator.path(g) || ''} stroke="rgba(33,33,33,0.05)" />
                            {mercator.features.map(({ feature, path }, i) => (
                                <path
                                    key={`map-feature-${i}`}
                                    d={path || ''}
                                    fill={color(feature.geometry.coordinates.length)}
                                    stroke={background}
                                    strokeWidth={0.5}
                                    onClick={() => {
                                        if (events) alert(`Clicked: ${feature.properties.name} (${feature.id})`);
                                    }}
                                />
                            ))}
                        </g>
                    )}
                </Mercator>
            </svg>
        </S.Container>
    );
};

export default GeoMercator;