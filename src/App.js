import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHome from './pages/BlogHome'; // Import your HomePage component
import LatestPost from './components/LatestPost';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BlogHome />} />
                <Route path="/start" element={<LatestPost />} />
                {/* Add more routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
