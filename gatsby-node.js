const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')
  const waterAccess = path.resolve('./src/templates/water-access.js')
  const waterSystem = path.resolve('./src/templates/water-system.js')
  const states = path.resolve('./src/templates/states.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
        allContentfulWaterAccess {
          nodes {
            slug
            state
            name
          }
        }
        allContentfulWaterSystem {
          nodes {
            systemName
            slug
            stateLoad
          }
        }
        allContentfulStates {
          nodes {
            name
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.nodes
  const wateraccess = result.data.allContentfulWaterAccess.nodes
  const waters = result.data.allContentfulWaterSystem.nodes
  const thestates = result.data.allContentfulStates.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
  if (wateraccess.length > 0) {
    wateraccess.forEach((wateracc, index) => {
      createPage({
        path: `/fishing/${wateracc.state}/access/${wateracc.slug}/`,
        component: waterAccess,
        context: {
          slug: wateracc.slug,
        },
      })
    })
  }
  if (waters.length > 0) {
    waters.forEach((water, index) => {
      createPage({
        path: `/fishing/${water.stateLoad}/${water.slug}`,
        component: waterSystem,
        context: {
          slug: water.slug,
        },
      })
    })
  }
  if (thestates.length > 0) {
    thestates.forEach((state, index) => {
      createPage({
        path: `/fishing/${state.slug}`,
        component: states,
        context: {
          slug: state.slug,
        },
      })
    })
  }
}
