import routesConfig from '~/config/routes';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import HeaderOnly from '~/layouts/HeaderOnly';
import Profile from '~/pages/Profile';

const publicRouter = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.login, component: Login, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
