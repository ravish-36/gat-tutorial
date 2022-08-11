import React from 'react'
import Layout from "../components/Layout"
import AllRecipes from '../components/AllRecipes'
import SEO from "../components/SEO"

export default function Recipes() {
  return (
    <Layout>
      <SEO title='Recipes'></SEO>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}
