import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import className from 'classnames/bind';
import styles from './Accountitems.module.scss';
import { Link } from 'react-router-dom';
const cx = className.bind(styles);
function Accountitem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt="Vợ" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('usename')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

Accountitem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Accountitem;
