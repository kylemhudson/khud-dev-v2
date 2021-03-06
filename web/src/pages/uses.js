import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {responsiveTitle1} from '../components/typography.module.css'
import PortableText from '../components/portableText'

export const query = graphql`
  query UsesPageQuery {
        sanityPage(slug:{current:{eq:"uses"}}) {
          title
          _rawBody
        }
    }
`

const UsesPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO title='Uses' />
      <Container>
        <h1 className={responsiveTitle1}> {data.sanityPage.title} </h1>
        <PortableText
          blocks={data.sanityPage._rawBody}
        />
      </Container>
    </Layout>
  )
}

export default UsesPage
