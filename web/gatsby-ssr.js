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

    <script type="text/javascript" src="/scripts/vendor/jquery/jquery.js" key="/scripts/vendor/jquery/jquery.js" key="jquery" defer/>,
    <script type="text/javascript" src="/scripts/vendor/jquery/jquery-migrate.min.js" key="/scripts/vendor/jquery/jquery-migrate.min.js" defer/>,
    <script type='text/javascript' src='/scripts/vendor/essgrid/lightbox.js' key='/scripts/vendor/essgrid/lightbox.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/essgrid/jquery.themepunch.tools.min.js' key='/scripts/vendor/essgrid/jquery.themepunch.tools.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/essgrid/jquery.themepunch.essential.min.js' key='/scripts/vendor/essgrid/jquery.themepunch.essential.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/revslider/jquery.themepunch.revolution.min.js' key='/scripts/vendor/revslider/jquery.themepunch.revolution.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/revslider/extensions/revolution.extension.slideanims.min.js' key='/scripts/vendor/revslider/extensions/revolution.extension.slideanims.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/revslider/extensions/revolution.extension.actions.min.js' key='/scripts/vendor/revslider/extensions/revolution.extension.actions.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/revslider/extensions/revolution.extension.layeranimation.min.js' key='/scripts/vendor/revslider/extensions/revolution.extension.layeranimation.min.js' defer></script>,
    <script type='text/javascript' src='/scripts/vendor/revslider/extensions/revolution.extension.navigation.min.js' key='/scripts/vendor/revslider/extensions/revolution.extension.navigation.min.js' defer></script>,

      <script defer src="/scripts/vendor/modernizr.min.js" type="text/javascript" key="/scripts/vendor/modernizr.min.js"  />,
      <script defer src="/scripts/custom/theme-bootstrap.js" type="text/javascript" key="/scripts/custom/theme-bootstrap.js"  />,
      <script defer src="/scripts/custom/custom.js" type="text/javascript" key="/scripts/custom/custom.js"  />,

      <script defer src="/scripts/vendor/superfish.js" type="text/javascript" key="/scripts/vendor/superfish.js"  />,
      <script defer src="/scripts/vendor/jquery.slidemenu.js" key="slidemenu.js" />,
      <script defer src="/scripts/custom/core.utils.js" type="text/javascript" key="/scripts/custom/core.utils.js"  />,
      <script defer src="/scripts/vendor/social-share.js" key="social-share.js" />,
      <script defer src="/scripts/vendor/grid.layout/grid.layout.min.js" type="text/javascript" key="/scripts/vendor/grid.layout/grid.layout.min.js"  />,
      <script defer src="/scripts/vendor/swiper/swiper.js" key="swiper.js" />,
      <script defer src="/scripts/vendor/isotope/isotope.min.js" type="text/javascript" key="/scripts/vendor/isotope/isotope.min.js"  />,
      <script defer src="/scripts/custom/theme.shortcodes.js" key='shortcodes.js' />,
      <script defer src="/scripts/custom/theme.init.js" type="text/javascript" key="/scripts/custom/theme.init.js"  />,
      <script defer src="/scripts/custom/core.init.js" type="text/javascript" key="/scripts/custom/core.init.js"  />,
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
