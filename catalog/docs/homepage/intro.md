## HTML Setup

For each homepage block you will need to create the HTML structure within the `home.mustache` layout file. Examples will be provided in the provided examples. We currently use the flex grid provided by Foundation ([documentation](https://foundation.zurb.com/sites/docs/flex-grid.html)). 

### Fragment Setup

For each homepage block, create a fragment, and for each column. The naming should be numerical with columns labeled a-z.

#### Fragment setup examples

`section-1`

`section-2a` `section-2b`

## Standard Block Mixin

Mixin resides in `addons/_blocks.scss`

```code
lang:css
---
@mixin standard-block(
  $block-bg-color
  $block-bg-img
  $block-cover-img
  $block-2-column-img
  $block-padding
  $block-white-text
  $block-multi-row
  $block-text-align
  $bg-img-overlay
  $bg-img-overlay-color
  $block-boxed
  $block-box-bg
  $block-box-padding
  $block-separator
  $block-separator-color
)
```

### Setting Defaults

```code
lang: css
---
/// Block Background Color
$block-bg-color          : $base-body-bg-color !default;

/// Block Background Image
$block-bg-img            : null !default;

/// Black Background Cover Image for 2 Column Layout
$block-2-column-img      : false !default;

/// Block Background for Full Width Background Image
$block-cover-img:        : false !default;

/// Block Padding
$block-padding           : rem(90 0 90 0) !default;

/// Block White Text True/False
$block-white-text        : false !default;

/// Block Multi Row True/False
$block-multi-row         : false !default;

/// Block Text Align
$block-text-align        : left !default;

// Background Image with Overlay
/// Block Image Overlay True/Flase
$bg-img-overlay          : null !default;

/// Block Image Over Color
$bg-img-overlay-color    : linear-gradient(rgba($black, .7), rgba($black, .7)) !default;

// By Line Styles
/// Block Byline Font Size
$block-byline-size       : rem(14) !default;

/// Block Byline Text Transform
$block-byline-transform  : uppercase !default;

/// Block Byline Font Family
$block-byline-font       : $base-font !default;

/// Block Byline Color
$block-byline-color      : $primary-accent-color !default;

// Block Text Container

/// Block Boxed Content True/False
$block-boxed             : false !default;

/// Block Box Background Color
$block-box-bg            : rgba($white, .8) !default;

///  Block Box Padding
$block-box-padding       : rem(45) !default;

// Block Separator
/// Block Sperator True/False
$block-separator         : false !default;

/// Block Sperator Color
$block-separator-color   : darken($block-bg-color, 15%) !default;
```