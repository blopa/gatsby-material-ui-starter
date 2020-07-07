import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
        render={(data) => (
            <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 100,
                    }}
                >
                    <main>{children}</main>
                    <footer style={{ paddingTop: 10 }}>
                        © {new Date().getFullYear()}, Built with
                        {' '}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </div>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;