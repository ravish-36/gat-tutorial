import React from 'react'
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default function about({data: {allContentfulRecipe:{nodes:recipes}}}) {
  return (
    <Layout>
      <SEO title='About Page'/>
      <main className='page'>
        <section className="about-page">
          <article>
            <h2>Shaman portland pug scenester, ennui heirloom offal four.</h2>
            <p>
              DIY retro offal XOXO affogato hot chicken roof party flexitarian literally hammock freegan tumblr tilde. Fam hella snackwave, quinoa migas same microdosing.
            </p>
            <p>
            Bespoke williamsburg pour-over brunch chambray intelligentsia aesthetic.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage 
            src='../assets/images/about.jpeg'
            alt='Peson pouring salt in bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <br /><br />
        <section className="featured-recipes">
          <h5>Look at this AwesomeSauce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}
