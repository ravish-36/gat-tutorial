import React from 'react'
import Layout from "../components/Layout"
import {graphql, Link} from 'gatsby'
import setupTags from '../utils/setupTags'
import slugify from 'slugify'
import SEO from "../components/SEO"

export const query = graphql`
  query {
    allContentfulRecipe(sort: {fields: createdAt, order: ASC}) {
      totalCount
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default function Tags({data: {allContentfulRecipe:{nodes:tags}}}) {
  const newTags = setupTags(tags)
  return (
    <Layout>
      <SEO title='Tags'></SEO>
      <main className='page'>
        <section className='tags-page'>
        {
          newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text)
            return (
            <Link to={`/tags/${tagSlug}`} key={index} className='tag'>
              <h5>{text}</h5>
              <p>{value} recipe</p> 
            </Link>
            )
          })
        }
        </section>
      </main>
    </Layout>
  )
}
