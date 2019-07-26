webpackJsonp([13],{809:function(n,e,o){var t=o(15),a=o(45),s=o(292).PageRenderer;s.__esModule&&(s=s.default);var i=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(843)}},componentWillMount:function(){},render:function(){return t.createElement(s,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,n.exports=i},843:function(n,e){n.exports='## Option 1\n\n```image\nplain: true,\nsrc: "footers/3-column-footer.png"\n```\n\nGenerally the `header-info` fragment is used in both the header and footer contact area.\n\nThere is another fragment placed below the logo to be used generally for mission statements.\n\n```code\nlang: true\ncollapsed: tru\n---\n<div class="backtotop-btn">\n  <div class="backtotop-inner">\n    <i class="fa fa-angle-up"></i>\n  </div>\n</div>\n<footer>\n  <h2 class="h-outline">Footer</h2>\n  <div class="footer-nav-wrap">\n    <div class="row large-unstack">\n      <div class="large-3 columns">\n        <div class="footer-mission">\n          <div class="footer-logo">\n            {{>logo}}\n          </div>\n          {{{fragment.footer-mission}}}\n        </div>\n      </div>\n      <div class="large-3 columns large-offset-1">\n        <nav class="footer-nav" >\n          <h3>Navigation</h3>\n          <ul>\n            {{{menu.footer}}}\n          </ul>\n        </nav>\n      </div>\n      <div class="large-4 columns large-offset-1">\n        <div class="footer-last">\n          <h3>Get in Touch</h3>\n          {{{fragment.header-info}}}\n\t\t\t\t\t{{{fragment.social}}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="footer-meta-container">\n    <div class="row">\n      <div class="medium-12 columns">\n        <span>Site Designed by <a href="http://www.audiologydesign.com" rel="nofollow" target="_blank">Audiology Design</a> | {{year}} All Rights Reserved</span>\n      </div>\n    </div>\n  </div>\n</footer>\n```\n\n## Option 2\n\n```image\nplain: true,\nsrc: "footers/3-column-footer_option-2.png"\n```\n\n```code\nlang: true,\ncollapsed: true\n---\n<div class="top-btn">\n  <a class="gototop" href="#"><i class="fa fa-chevron-circle-up"></i></a>\n</div>\n<footer>\n  <div class="footer-nav-wrap">\n    <div class="row">\n      <div class="medium-5 columns">\n        <nav class="footer-nav" >\n          <h4>Menu</h4>\n          <ul class="list-inline">\n            {{{menu.footer}}}\n          </ul>\n        </nav>\n      </div>\n      <div class="medium-3 columns">\n        <div class="footer-phone">\n          {{{fragment.footer-phone}}}\n        </div>\n      </div>\n      <div class="medium-3 columns end">\n        <div class="footer-email">\n          {{{fragment.footer-email}}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="footer-meta-container">\n    <div class="row">\n      <div class="medium-12 columns">\n        <span>Site Designed by <a href="https://www.audiologydesign.com" rel="nofollow" target="_blank">Audiology Design</a> | {{year}} All Rights Reserved</span>\n      </div>\n    </div>\n  </div>\n</footer>\n    \n```\n\n### Style Options\n\nSettings Found in `_site-settings.scss`.\n\n```code\nlang: css\ncollapsed: true\n---\n// Back to Top Button\n// $base-bttn-button-size:      rem(40);\n// $base-bttn-right-position:   rem(40);\n// $base-bttn-bottom-position:  rem(40);\n// $base-btn-icon-color:        $white;\n// $base-bttn-bg-color:         $primary-accent-color;\n// $base-bttn-bg-hover-color:   darken($primary-accent-color, 5%);\n// $base-btn-icon-line-height:  rem(38);\n\n/* Footer\n===================================================*/\n// $footer-color      : $base-font-color;\n// $footer-border     : 2px solid $white;\n// $footer-bg-color   : $tertiary-accent-color;\n// $footer-meta-bg    : darken($tertiary-accent-color, 5%);\n// $meta-border       : 2px solid $white;\n```'}});
//# sourceMappingURL=13.13b52209.chunk.js.map