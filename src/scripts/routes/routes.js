import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import CategoryPage from '../pages/category/category-page';
import ContactPage from '../pages/contact/contact-page';
import Login from '../pages/login';
import Register from '../pages/register';
import SearchResult from '../pages/search/search-result';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/kategori': new CategoryPage(),
  '/tentang-kami': new AboutPage(),
  '/kontak-kami': new ContactPage(),
  '/login': Login,
  '/register': Register,
  '/search': SearchResult,
};

export default routes;
