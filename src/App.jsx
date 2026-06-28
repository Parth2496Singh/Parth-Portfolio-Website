import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import Velzion from './pages/projects/Velzion';
import GitOpsBoilerplate from './pages/projects/GitOpsBoilerplate';
import FoodDash from './pages/projects/FoodDash';
import LostAndFound from './pages/projects/LostAndFound';
import TerraformPortfolio from './pages/projects/TerraformPortfolio';
import DevOpsNotes from './pages/projects/DevOpsNotes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/velzion" element={<Velzion />} />
          <Route path="/projects/gitops" element={<GitOpsBoilerplate />} />
          <Route path="/projects/food-dash" element={<FoodDash />} />
          <Route path="/projects/lost-and-found" element={<LostAndFound />} />
          <Route path="/projects/terraform-aws" element={<TerraformPortfolio />} />
          <Route path="/projects/devops-notes" element={<DevOpsNotes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}