## Blog

`ADThemes/Defaults/Widgets/blog-index.mustache`

## News

`ADThemes/Defaults/Widgets/news-index.mustache`

## Pagination

```image
plain: true
src: "widgets/pagination.png"
```

### Styling Options

`webroot/css/_site-settings.scss`

```code
lang: css
collapsed: true
---
// Pagination //
//----------------------------------

$base-pagination-link-color:             $base-link-color;
$base-pagination-bg-color:               #fff;
$base-pagination-border-color:           #ddd;
$base-pagination-margin:                 rem(20 0);
$base-pagination-line-height:            $base-line-height;
$base-pagination-border-radius:          $base-border-radius;

// // Pagination Hover
$base-pagination-hover-color:            $base-link-hover-color;
$base-pagination-hover-bg-color:         $lightgrey;
$base-pagination-hover-border-color:     #ddd;

// // Pagination Active
$base-pagination-active-color:           #fff;
$base-pagination-active-bg-color:        $primary-accent-color;
$base-pagination-active-border-color:    $primary-accent-color;

// // Pagination Disabled
$base-pagination-disabled-color:         #ddd;
$base-pagination-disabled-bg-color:      #fff;
$base-pagination-disabled-border-color:  #ddd;

// // Pagination Sizing
$base-pagination-sizing-large-vertical-padding:    $base-padding;
$base-pagination-sizing-large-horizontal-padding:  rem(16);
$base-pagination-sizing-large-font-size:           rem(18);
$base-pagination-sizing-large-line-height:         1.33333;
$base-pagination-sizing-large-border-radius:       rem(6);

$base-pagination-sizing-small-vertical-padding:    $base-padding;
$base-pagination-sizing-small-horizontal-padding:  rem(6);
$base-pagination-sizing-small-font-size:           rem(12);
$base-pagination-sizing-small-line-height:         $base-line-height;
$base-pagination-sizing-small-border-radius:       rem(3);
```