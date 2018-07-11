

## Basic
```image
plain: true
src: "headers/inline-topbar.png"
```

```code
collapsed: true
---
{{>responsive_menu}}
<div class="top-section">
<header class="header-inline sticky-nav">
  <div class="header-wrapper header-top-section header-transition">
    <div class="header-container">
      <div class="head-contact">
        <div class="head-contact-list">
          {{{fragment.topbar-left}}}
        </div>
      </div>

      <div class="head-social">
        <div class="head-social-list">
          {{{fragment.social}}}
        </div>
      </div>
    </div>
  </div>

  <div class="header-wrapper header-bottom-section header-transition">
    <div class="header-container">
      <div class="logo">
        <a href="{{themeWebroot}}">
          <span class="logo-wrapper">
            <img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/logo.svg" alt="{{page.SiteInstance.Site.Account.name}}">
          </span>
        </a>
      </div>

      <nav class="navbar navbar-inline navbar-arrow">
        <ul>
          {{{menu.main}}}
        </ul>
      </nav>
      <div class="responsive-toggle">
        <a href="#responsive-menu"><i class="fa fa-bars"></i></a>
      </div>
    </div>
  </div>
</header>
```

### Standards

Navigation should be limited to 5 maximum elements. In smaller viewports the navigation will break into two lines. You could reduce the font size, but this will effect readability.

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