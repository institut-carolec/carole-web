/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: `home page body_filled article_style_stretch scheme_original preloader top_panel_above sidebar_hide sidebar_outer_hide sc_responsive`,
  });
};
