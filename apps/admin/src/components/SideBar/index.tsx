import { Link } from 'react-router-dom';
import * as S from './styles';

const SideBar = () => {
    return (
        <S.Container className="text-4xl">
            <S.Title>Admin</S.Title>
            <S.MenuContainer>
                <Link to="/">
                    <S.MenuItem>dashboard</S.MenuItem>
                </Link>
                <Link to="cornerstone">
                    <S.MenuItem>cornerstone</S.MenuItem>
                </Link>
                <Link to="volume_rendering">
                    <S.MenuItem>volume rendering</S.MenuItem>
                </Link>
            </S.MenuContainer>
        </S.Container>
    );
};

export default SideBar;