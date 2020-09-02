import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query UsesPageQuery {
        sanityPage(slug:{current:{eq:"uses"}}) {
          title
            body {
              _key
              _type
              style
              list
            }
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
        <h1 className={responsiveTitle1}>{data.sanityPage.title}</h1>
        {/* TODO: Insert Portable Text from Body */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default UsesPage
