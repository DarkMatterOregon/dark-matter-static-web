import React, { Component } from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactBrew from '../components/contactBrew' 

class CraftBrew extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Craft Brew Conference" keywords={['craft', 'brew', 'small batch', 'home brew', 'software', 'development',]} />
        <h2>Let's talk about how we can make small batch, craft brewed software for your unique palette</h2>
        <div style={{transition: '.5s ease'}}>
        <ContactBrew />

        </div>
      </Layout>
    )
  }
}

export default CraftBrew