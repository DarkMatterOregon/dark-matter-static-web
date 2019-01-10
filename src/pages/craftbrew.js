import React, { Component } from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

export default class CraftBrew extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Craft Brew Conference" keywords={['craft', 'brew', 'small batch', 'home brew', 'software', 'development',]} />
        <h2>Let's talk about how we can make small batch, craft brewed software for your unique pallet</h2>
        <ContactBrew />
      </Layout>
    )
  }
}
