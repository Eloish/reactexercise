import { Routes, Route } from 'react-router-dom';

import Accueil from '../Pages/Home';
import Posts from '../Pages/Posts//posts';
import  SinglePost from '../Pages/Posts/post';

const RouterApp=()=>{
    return (
        <Routes>
             <Route path="/" element={<Accueil />} />
             <Route path="/posts" element={<Posts />} />
             <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
    )
}
export default RouterApp;