## Basic Header with Standard Menu

```image
plain: true
src: "headers/basic.png"
```

```code
collapsed: true
---
<div class="responsive-navbar FixedTop clearfix">
  <a href="#responsive-menu" id="hamburger"><span></span></a>
</div>
<div class="menu-wrapper" style="display:none;">
  <nav id="responsive-menu">
    <ul>
      {{{menu.main}}}
    </ul>
  </nav>
</div>
<header class="header-basic">
  <div class="header-bottom-section">
		<div class="row  align-middle">
      <div class="medium-5 small-12 columns">
        <div class="logo">
          <a href="{{themeWebroot}}" title="{{page.SiteInstance.Site.Account.name}}">
            <img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/logo.svg" alt="{{page.SiteInstance.Site.Account.name}}">
          </a>
        </div>
      </div>
      <div class="medium-offset-4 medium-3 small-12 columns">
        <div class="header-info">
          {{{fragment.header-info}}}
          {{{fragment.social}}}
        </div>
      </div>
		</div>
  </div>
</header>

<div class="navbar-wrapper">
  <div class="row">
    <div class="large-12 columns">
      <h2 class="h-outline">Navigation</h2>
      <nav class="navbar">
        <ul class="clearfix">
          {{{menu.main}}}
        </ul>
      </nav>
    </div>
  </div>
</div>
```

### Style Options

Styling options are located within the `webroot/css/_site-settings.scss`

```code
collapsed: true
---
// Navbar Setup
$base-navbar-class:                           '.navbar';
$base-navbar-height:                          rem(50);
$base-navbar-bg-color:                        $primary-accent-color;
$base-navbar-bg-hover-color:                  darken($primary-accent-color, 10%);
$base-navbar-bg-active-color:                 $base-navbar-bg-hover-color;
$base-navbar-link-color:                      $white;
$base-navbar-link-padding:                    rem(0 14);
$base-navbar-font-size:                       1rem;
$base-navbar-font-family:                     $alt-font;
$base-navbar-font-weight:                     $base-font-weight;
$base-navbar-link-text-transform:             uppercase;
$base-navbar-line-height:                     $base-navbar-height;

// Dropdwon Setup
$base-navbar-dropdown-color:                  $primary-accent-color;
$base-navbar-dropdown-hover-color:            darken($base-navbar-dropdown-color, 5%);
$base-navbar-dropdown-link-color:             $base-navbar-link-color;
$base-navbar-dropdown-link-hover-color:       darken($base-navbar-dropdown-color, 5%);
$base-navbar-dropdown-link-padding:           rem(10 40 10 14);
$base-navbar-dropdown-font-size:              rem(14);
$base-navbar-dropdown-link-text-transform:    none;
$base-navbar-dropdown-box-shadow:             0px 8px 15px rgba(0, 0, 0, 0.1);

// Dropdown Column Setup
$base-navbar-dropdown-vertical-padding:       rem(15 0);
$base-navbar-dropdown-title-font-size:        $base-navbar-font-size;
$base-navbar-dropdown-title-font-weight:      bold;
$base-navbar-dropdown-title-border-color:     1px solid lighten($base-navbar-dropdown-color, 5%);
$base-navbar-dropdown-column-link-font-size:  rem(13);
$base-navbar-dropdown-column-link-padding:    rem(10 14);

// Responsive Navbar Setup
$base-responsive-navbar-bg-color:             $primary-accent-color;
$base-responsive-navbar-height:               rem(40);
$base-responsive-navbar-padding:              rem(10);

// Responsive Menu 
//----------------------------------

$custom-menu-class:                 '.mm-custom';
$custom-menu-page-shadow:           0 0 10px rgba(0, 0, 0, 0.3);
$custom-menu-border-color:          rgba(255, 255, 255, 0.2);
$custom-menu-background-color:      $tertiary-accent-color;
$custom-menu-emphasized-bg-color:   rgba(0, 0, 0, 0.1);
$custom-menu-highlighted-bg-color:  rgba(0, 0, 0, 0.03);
$custom-menu-text-color:            rgba(255, 255, 255, 0.9);
$custom-menu-dimmed-text-color:     rgba(255, 255, 255, 0.7);
$custom-menu-input-bg-color:        rgba(0, 0, 0, 0.1);
 ```

### Standard Fragments and Elements

#### `{{{fragment.header-info}}}`

#### Styling Options

Styling options are located within the `webroot/css/_site-settings.scss`

```code
lang: css
collapsed: true
---
$header-info-address-font: $base-font;
$header-info-address-size: rem(18);
$header-info-address-color: $base-font-color;

$header-info-phone-font: $alt-font;
$header-info-phone-size: rem(22);
$header-info-phone-color: $primary-accent-color;
```

#### Single Address with Tagline

```code
collapsed: true
---
<p class="header__info-tagline">Tag line</p>
<p class="header__info-phone"><a href="tel:123-456-7890">123-456-7890</a></p>
<p class="header__info-address"><a href="#">11234 Street Rd, City, ST 12345</a></p>
```

#### Multiple Addresses
```code
collapsed: true
---
<ul class="list-inline location-list">
  <li>
    <a href="#" class="location-list-address">1123 Street Rd<br/>City, ST 12345</a>
    <a href="tel:123-456-7890" class="location-list-phone">123-456-7890</a>
  </li>
  <li>
    <a href="#" class="location-list-address">1123 Street Rd<br/>City, ST 12345</a>
    <a href="tel:123-456-7890" class="location-list-phone">123-456-7890</a>
  </li>
</ul>
```

#### `{{{fragment.social}}}`

Read Documentation on [Social Media List](/social-media/#social-media-list)

## Basic Header with Alternative Menu

```image
plain: true
src: "headers/basic-altMenu.png"
```

Add the class `.navbar-inline` to `<div class="navbar">` in the `Partials/header.mustache' file.

```code
collapsed: true
---
<div class="navbar-wrapper">
  <div class="row">
    <div class="large-12 columns">
      <h2 class="h-outline">Navigation</h2>
      <nav class="navbar navbar-inline">
        <ul class="clearfix">
          {{{menu.main}}}
        </ul>
      </nav>
    </div>
  </div>
</div>
```

### Styles and Options

`_site-settings.scss`
```code
collapsed: true
---
$inline-hover-color:								inset 0 -5px 0px -1px $base-navbar-bg-hover-color;
$inline-hover-color: 								$base-navbar-bg-hover-color !default;
```