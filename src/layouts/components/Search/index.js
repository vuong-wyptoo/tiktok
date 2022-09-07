import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import * as searchServices from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountitem from '~/components/Accountitems';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchList([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const results = await searchServices.search(searchValue);
            setSearchList(results);
            setLoading(false);
        };
        fetchApi();
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResults(false);
    };
    return (
        <div>
            <Tippy
                appendTo={() => document.body}
                interactive
                visible={showResults && searchList.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')}>
                        <PopperWrapper>
                            <div className={cx('search-lable')}>Account</div>
                            {searchList.map((user) => (
                                <Accountitem key={user.id} data={user} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('input')}
                        type="text"
                        placeholder="Search accounts and videos..."
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        onFocus={(e) => setShowResults(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                setSearchList([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <span className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
