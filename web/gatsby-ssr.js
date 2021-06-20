/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";

// You can delete this file if you're not using it
export const onRenderBody = ({ setBodyAttributes, setPostBodyComponents }) => {
  setBodyAttributes({
    className: `home page body_filled article_style_stretch scheme_original preloader top_panel_above sidebar_hide sidebar_outer_hide sc_responsive`,
  });

  setPostBodyComponents([
    <script
      key="https://code.jquery.com/jquery-1.12.4.min.js"
      src="https://code.jquery.com/jquery-1.12.4.min.js"
      integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
      crossOrigin="anonymous"
      defer
    />,
    //<script
    //  key="https://code.jquery.com/jquery-3.2.1.min.js"
    //  src="https://code.jquery.com/jquery-3.2.1.min.js"
    //  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    //  crossOrigin="anonymous"
    //  defer
    ///>,
    //<script
    //  key="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    //  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    //  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    //  crossOrigin="anonymous"
    //  defer
    ///>,
    //<script
    //  key="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    //  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    //  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    //  crossOrigin="anonymous"
    //  defer
    ///>,
  ]);
};
