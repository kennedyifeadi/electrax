import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ProductPage } from '../pages/ProductPage';
import { About } from '../pages/about';
import { Careers } from '../pages/careers';
import { News } from '../pages/news';
import { Contact } from '../pages/contact';
import { ChangeLog } from '../pages/ChangeLog';
import { StyleGuide } from '../pages/StyleGuide';
import { Licence } from '../pages/Licence';
import { PageNotFound } from '../pages/PageNotFound';

export const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <div>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/system/license" element={<Licence />} />
            <Route path="/system/style-guide" element={<StyleGuide />} />
            <Route path="/system/change-log" element={<ChangeLog />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
