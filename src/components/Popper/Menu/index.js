import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { signOut, getAuth } from 'firebase/auth';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Buttons';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    return (
        <Tippy
            hideOnClick={false}
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>
                            {current.data.map((item, index) => {
                                const isParent = !!item.children;
                                return (
                                    <Button
                                        className={cx('menu-item', {
                                            separate: item.separate,
                                        })}
                                        key={index}
                                        leftIcon={item.icon}
                                        to={item.to}
                                        onClick={() => {
                                            if (isParent) {
                                                setHistory((prev) => [...prev, item.children]);
                                            } else if (item.separate) {
                                                const auth = getAuth();
                                                signOut(auth)
                                                    .then(() => {
                                                        // Sign-out successful.
                                                    })
                                                    .catch((error) => {
                                                        // An error happened.
                                                    });
                                            } else {
                                                //handleLogic
                                                console.log(item);
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Button>
                                );
                            })}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
};
export default Menu;
