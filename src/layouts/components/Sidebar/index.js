import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import routesConfig from '~/config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('inner')}>
            <Menu>
                <MenuItem to={routesConfig.home} title="For you" icon={<FontAwesomeIcon icon={faHouse} />} />
                <MenuItem to={routesConfig.following} title="Following" icon={<FontAwesomeIcon icon={faUserGroup} />} />
                <MenuItem to={routesConfig.live} title="Live" icon={<FontAwesomeIcon icon={faVideo} />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
