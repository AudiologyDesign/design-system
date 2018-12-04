## Option 1

```image
plain: true
src: "footers/basic-footer.png"
```

```code
lang: html
collapsed: true
---
<div class="backtotop-btn">
  <div class="backtotop-inner">
    <i class="fa fa-angle-up"></i>
  </div>
</div>
<footer>
  <h2 class="h-outline">Footer</h2>
  <div class="footer-nav-wrap">
    <div class="row align-center">
      <div class="medium-10 columns">
        <nav class="footer-nav">
          <ul class="list-inline">
            {{{menu.footer}}}
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="footer-meta-container">
    <div class="row">
      <div class="medium-12 columns">
        <span>Site Designed by <a href="https://www.audiologydesign.com" rel="nofollow" target="_blank">Audiology Design</a> | {{year}} All Rights Reserved</span>
      </div>
    </div>
  </div>
</footer>
```

## Option 2

```image
plain: true
src: "footers/basic-footer_option-2.png"
```

```code
lang: true,
collapsed: true
---
<div class="top-btn">
  <a class="gototop" href="#"><i class="fa fa-chevron-circle-up"></i></a>
</div>
<footer>
  <div class="footer-nav-wrap">
    <div class="row">
      <div class="medium-12 columns">
        <nav class="footer-nav" >
          <ul class="list-inline text-centered">
            {{{menu.footer}}}
          </ul>
        </nav>
      </div>
    </div>
    {{#menu.geo-service-areas}}
      <div class="row">
        <div class="columns">
          <div class="geo-service-areas text-centered">
            <h4 class="white">Areas We Serve</h4>
            <ul class="list-inline">
              {{{menu.geo-service-areas}}}
            </ul>
          </div>
        </div>
      </div>
    {{/menu.geo-service-areas}}
  </div>
  <div class="footer-meta-container">
    <div class="row">
      <div class="medium-12 columns">
        <span>Site Designed by <a href="https://www.audiologydesign.com" rel="nofollow" target="_blank">Audiology Design</a> | {{year}} All Rights Reserved</span>
      </div>
    </div>
  </div>
</footer>
```
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