webpackJsonp([17],{795:function(n,t,e){var a=e(15),i=e(45),c=e(289).PageRenderer;c.__esModule&&(c=c.default);var s=i({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(821)}},componentWillMount:function(){},render:function(){return a.createElement(c,Object.assign({},this.props,{content:this.state.content}))}});s.__catalog_loader__=!0,n.exports=s},821:function(n,t){n.exports='## With Image\n\n```image\nspan: 3\nplain: true\nsrc: "call-to-actions/cta-basic.png"\n```\n\n#### HTML\n\n```code\ncollapsed: true\n---\n<div class="cta">\n\t<div class="cta-img">\n\t\t<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/cta-1.jpg" alt="" >\n\t</div>\n\t<div class="cta-text">{{{fragment.cta-1}}}</div>\n</div>\n```\n\n#### Mixin Settings\n\n```code\ncollapsed: true\n---\n@include cta();\n```\n\n## With Icon\n\n```image\nplain: true\nsrc: "call-to-actions/cta-basic-icon-style-1.png"\n```\n\n#### HTML\n\n```code\ncollapsed: true\n---\n<div class="cta">\n\t<div class="cta-icon">\n\t\t<i class="fa fa-volume-up" aria-hidden="true"></i>\n\t</div>\n\t<div class="cta-text">{{{fragment.cta-1}}}</div>\n</div>\n```\n\n#### Mixin Settings\n\n```code\ncollapsed: true\n---\n@include cta(\n\t$element-bg: transparent,\n\t$img-size: 100px,\n\t$img-bg: transparent,\n\t$img-radius: 50%,\n\t$img-height: 100px,\n\t$img-line-height: 100px,\n\t$img-color: $primary-accent-color,\n\t$img-border: 3px solid $primary-accent-color,\n\t$icon-size: 38px,\n\t$heading-font-size: 21px,\n\t$box-shadow: none,\n\t$text-padding: 20px 0 0,\n\t$text-align: center,\n\t$z-index: 3,\n\t$border-width: 0\n);\n```'}});
//# sourceMappingURL=17.565d9b86.chunk.js.map