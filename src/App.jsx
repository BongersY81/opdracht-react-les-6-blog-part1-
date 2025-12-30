import './App.css';
import logo from './assets/logo-white.png';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import BlogPosts from './pages/blogPosts/BlogPosts';
import OverviewPage from './pages/overviewPage/OverviewPage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <>
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogposts" element={<BlogPosts/>}/>
                <Route path="/overviewpage" element={<OverviewPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            </BrowserRouter>

            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
        </>
    )
}

export default App
