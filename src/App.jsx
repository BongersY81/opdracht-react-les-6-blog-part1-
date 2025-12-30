import './App.css';
import logo from './assets/logo-white.png';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import BlogPosts from './pages/blogPosts/BlogPosts.jsx';
import OverviewPage from './pages/overviewPage/OverviewPage.jsx';
import NotFoundPage from './pages/notFoundPage/NotFoundPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';

function App() {
    return (
        <>

            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogposts" element={<BlogPosts/>}/>
                <Route path="/overview-page" element={<OverviewPage/>}/>
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
