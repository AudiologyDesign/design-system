```image
plain: true,
src: "footers/3-column-footer.png"
```

```code
lang: true
collapsed: tru
---
<div class="backtotop-btn">
  <div class="backtotop-inner">
    <i class="fa fa-angle-up"></i>
  </div>
</div>
<footer>
  <h2 class="h-outline">Footer</h2>
  <div class="footer-nav-wrap">
    <div class="row large-unstack">
      <div class="large-3 columns">
        <div class="footer-mission">
          <div class="footer-logo">
            {{>logo}}
          </div>
          {{{fragment.footer-mission}}}
        </div>
      </div>
      <div class="large-3 columns large-offset-1">
        <nav class="footer-nav" >
          <h3>Navigation</h3>
          <ul>
            {{{menu.footer}}}
          </ul>
        </nav>
      </div>
      <div class="large-4 columns large-offset-1">
        <div class="footer-last">
          <h3>Get in Touch</h3>
          {{{fragment.header-info}}}
					{{{fragment.social}}}
        </div>
      </div>
    </div>
  </div>
  <div class="footer-meta-container">
    <div class="row">
      <div class="medium-12 columns">
        <span>Site Designed by <a href="http://www.audiologydesign.com" rel="nofollow" target="_blank">Audiology Design</a> | {{year}} All Rights Reserved</span>
      </div>
    </div>
  </div>
</footer>
```

Generally the `header-info` fragment is used in both the header and footer contact area.

There is another fragment placed below the logo to be used generally for mission statements.

### Style Options

Settings Found in `_site-settings.scss`.

```code
lang: css
collapsed: true
---
// Back to Top Button
// $base-bttn-button-size:      rem(40);
// $base-bttn-right-position:   rem(40);
// $base-bttn-bottom-position:  rem(40);
// $base-btn-icon-color:        $white;
// $base-bttn-bg-color:         $primary-accent-color;
// $base-bttn-bg-hover-color:   darken($primary-accent-color, 5%);
// $base-btn-icon-line-height:  rem(38);

/* Footer
===================================================*/
// $footer-color      : $base-font-color;
// $footer-border     : 2px solid $white;
// $footer-bg-color   : $tertiary-accent-color;
// $footer-meta-bg    : darken($tertiary-accent-color, 5%);
// $meta-border       : 2px solid $white;
```