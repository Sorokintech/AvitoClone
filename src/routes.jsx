import { Routes, Route} from 'react-router-dom';
import { Main } from "./pages/main";
import { Article } from "./pages/article";
import { MyArticle } from './pages/my-article';
import { Seller } from './pages/seller';
import { Profile } from './pages/profile';

export const AppRoutes = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/article' element={<Article/>}/>
            <Route path='/my_article' element={<MyArticle/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/seller' element={<Seller/>}/>
        </Routes>
    );
};