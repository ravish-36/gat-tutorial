import React from 'react'
import Layout from "../components/Layout"
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

export default function Contact({data: {allContentfulRecipe:{nodes:recipes}}}) {
  return (
    <Layout>
      <SEO title='Contact'></SEO>
      <main className="page">
        <section className="contact-page">
          <article className='contact-info'>
            <h3>Want to get in touch!</h3>
            <p>
              Vegan XOXO hashtag tattooed direct trade art party 90's green juice raw denim.
            </p>
            <p>
              Same pabst portland shabby chic four loko VHS readymade post-ironic polaroid godard.
              Shaman viral la croix selfies four dollar toast. Ascot locavore palo santo blog salvia chartreuse single-origin coffee green juice unicorn. 
            </p>
            <p>
              Gatekeep plaid post-ironic biodiesel. Shaman viral la croix selfies four dollar toast.
            </p>
          </article>
          <article>
            <form className='form contact-form'>
              <div className='form-row'> 
                <label htmlFor='name'>
                  Your Name
                </label>
                <input type='text' name='name' id='name'></input>
              </div>
              <div className='form-row'> 
                <label htmlFor='email'>
                  Your Email
                </label>
                <input type='text' name='email' id='email'></input>
              </div>
              <div className='form-row'> 
                <label htmlFor='message'>
                  Message
                </label>
                <textarea  name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this AwesomeSauce!</h5>
          <RecipesList recipes={recipes}/>
        </section>
      </main>
    </Layout>
  )
}
