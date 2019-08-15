const path = require('path');

exports.createPages = ({graphql, actions: {createPage}}) => {
	return graphql(`
		{
			allShopifyProduct {
				edges {
					node {
						handle
					}
				}
			}
			allShopifyCollection {
				edges {
					node {
						handle
					}
				}
			}
		}
	`).then(result => {
		result.data.allShopifyProduct.edges.forEach(({node}) => {
			createPage({
				path: `/product/${node.handle}/`,
				component: path.resolve('./src/templates/ProductPage/index.js'),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					handle: node.handle
				}
			});
		});
		result.data.allShopifyCollection.edges.forEach(({node}) => {
			createPage({
				path: `/shop/${node.handle}-skins/`,
				component: path.resolve('./src/templates/CollectionPage/index.js'),
				context: {
					// Data passed to context is available
					// in page queries as GraphQL variables.
					handle: node.handle
				}
			});
		});
	});
};
