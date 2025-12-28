import './App.css';
import logo from './assets/logo-white.png';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import BlogPosts from './pages/blogPosts/BlogPosts';
import OverviewPage from './pages/overviewPage/OverviewPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';


function App() {
    return (
        <>
            <Routes>
               <Route path="/" element={<Home/>}/>
                <Route path="/blogposts" element={<BlogPosts/>}/>
                <Route path="/overviewpage" element={<OverviewPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

            <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        </div>
        </>
    )
}

export default App
