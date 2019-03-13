const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: '/qr',
    toPath: '/craftbrew/',
    isPermanent: true,
    redirectInBrowser: true,
  })
  createRedirect({
    fromPath: '/qr/',
    toPath: '/craftbrew/',
    isPermanent: true,
    redirectInBrowser: true,
  })
}
