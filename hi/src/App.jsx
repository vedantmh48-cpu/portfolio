import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AmbientBackground from "./components/AmbientBackground.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Preloader from "./components/Preloader.jsx";
import HomePage from "./pages/HomePage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import Sitemap from "./pages/SitemapPage.jsx";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [loading, setLoading] = useState(true);

    const handlePreloaderFinish = () => {
        setLoading(false);
        // Re-trigger scroll reveal animations now that content is visible
        window.dispatchEvent(new Event("resize"));
    };

    return (
        <>
            <Preloader onFinish={handlePreloaderFinish} />
            <AmbientBackground />
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/sitemap" element={<Sitemap />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
