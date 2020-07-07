module.exports = {
    siteMetadata: {
        title: 'Gatsby Material UI Starter',
        description: 'Kick off your next, great Gatsby project with this Material UI starter. This barebones starter ships with the main Gatsby and Material UI configuration files you might need.',
        author: '@dominicabela',
    },
    plugins: [
        'gatsby-plugin-top-layout',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-material-ui',
            /*
             * If you want to use styled components, in conjunction to Material-UI, you should:
             * - Change the injection order
             * - Add the plugin
             */
            options: {
                /*
                 * stylesProvider: {
                 *   injectFirst: true,
                 * },
                 */
            },
            // 'gatsby-plugin-styled-components',
        },
        /*
         * this (optional) plugin enables Progressive Web App + Offline functionality
         * To learn more, visit: https://gatsby.dev/offline
         */
        'gatsby-plugin-offline',
        /*
         * If you want to use styled components you should add the plugin here.
         * 'gatsby-plugin-styled-components',
         */
        'gatsby-plugin-react-helmet',
    ],
};
