import { Routes, Route} from 'react-router-dom';
import { Main } from "./pages/main";
import { Article } from "./pages/article";
import { MyArticle } from './pages/my-article';
import { Seller } from './pages/seller';
import { Profile } from './pages/profile';
import { SignIn } from './pages/sign-in-mobile';
import { SignUp } from './pages/sign-up-mobile';
import { AddNewAd } from './pages/add-new-ad-mobile';
import { ProtectedRoute } from './components/protected-route';
import { ReviewsMobile } from './pages/reviews-mobile';
import { AdSettingsMobile } from './pages/adsettings-mobile';

export const AppRoutes = () => {    
    
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/article/:id' element={<Article/>}/>
            <Route path='/profile' element={<ProtectedRoute redirectPath = '/' protected><Profile/></ProtectedRoute>}/>
            <Route path='/seller' element={<Seller/>}/>
            <Route path='/sign_in'element={<SignIn/>}/>
            <Route path='/sign_up'element={<SignUp/>}/>
            <Route path='/add_new_ad'element={<AddNewAd/>}/>
            <Route path='/reviews'element={<ReviewsMobile/>}/>
            <Route path='/ad_settings'element={<AdSettingsMobile/>}/>
        </Routes>
    );
};