import {
    Drawing,
    GeoMercator,
    Heatmap,
    WordView,
    Footer,
    StreamGraph,
} from '../../components';
import * as S from './styles';

const Dashboard = () => {
    return (
        <>
            <S.Container>
                <S.Title>Welcome, Todd</S.Title>
                <S.Content>
                    <S.FlexInlineContainer>
                        <S.Padding>
                            <Heatmap />
                        </S.Padding>
                        <S.Padding>
                            <WordView />
                        </S.Padding>
                        <S.Padding>
                            <StreamGraph />
                        </S.Padding>
                        <S.Padding>
                            <Heatmap />
                        </S.Padding>
                    </S.FlexInlineContainer>
                    <S.FlexInlineContainer>
                        <S.Padding>
                            <GeoMercator />
                        </S.Padding>
                        <S.Padding>
                            <Drawing />
                        </S.Padding>
                    </S.FlexInlineContainer>
                </S.Content>
            </S.Container>
            <Footer />
        </>
    );
};

export default Dashboard;