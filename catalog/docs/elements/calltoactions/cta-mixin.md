## Main Mixin

```code
lang: css
---
@mixin cta(
	$type: null,
	$side-img: $cta-side-img,
	$wrapper-bg-color: $cta-wrapper-bg-color,
	$wrapper-padding: $cta-wrapper-padding,
	$wrapper-box-shadow: $cta-wrapper-box-shadow,
	$z-index : $cta-z-index,
	$element-bg: $cta-bg,
	$text-align: $cta-text-align,
	$element-padding: $cta-image-padding,
	$border-radius: $cta-border-radius,
	$border-width: $cta-border-width,
	$border-color: $cta-border-color,
	$box-shadow: $cta-box-shadow,
	$text-bg: $cta-text-bg,
	$text-padding: $cta-text-padding,
	$heading-element: $cta-heading-element,
	$heading-font-size: $cta-heading-font-size,
	$heading-color: $cta-heading-color,
	$p-font-size: $cta-p-font-size,
	$p-padding: $cta-p-padding,
	$p-color: $cta-p-color,
	$text-align: $cta-text-align,
	$img-size: $cta-img-size,
	$img-bg: $cta-img-background,
	$img-radius: $cta-img-border-radius,
	$img-height: $cta-img-height,
	$img-line-height: $cta-img-line-height,
	$img-color: $cta-img-icon-color,
	$icon-size: $cta-icon-size,
	$img-border: $cta-img-border
)
```

## Setting Defaults

```code
lang: css
---
$cta-side-img            : false !default;
$cta-wrapper-bg-color    : $white !default;
$cta-wrapper-padding     : rem(40 0) !default;
$cta-wrapper-box-shadow  : none !default;
$cta-z-index             : 2 !default;
$cta-bg                  : $white !default;
$cta-text-align          : center !default;
$cta-image-padding       : 4px !default;
$cta-border-radius       : 2px !default;
$cta-border-width        : 1px !default;
$cta-border-color        : #d1d5d9 !default;
$cta-box-shadow          : 0 2px 4px rgba(0,0,0,0.1) !default;
$cta-text-bg             : null !default;
$cta-text-padding        : 10px 30px 30px !default;
$cta-heading-element     : h3 !default;
$cta-heading-font-size   : $base-title-h3 !default;
$cta-heading-color       : $base-title-font-color !default;
$cta-p-font-size         : $base-font-size !default;
$cta-p-padding           : $base-paragraph-margin-bottom !default;
$cta-p-color             : $base-font-color !default;
$cta-text-align          : center !default;
$cta-img-size            : 100% !default;
$cta-img-background      : trasparent !default;
$cta-img-border-radius   : 0 !default;
$cta-img-height          : auto !default;
$cta-img-line-height     : $cta-img-height !default;
$cta-img-icon-color      : transparent !default;
$cta-icon-size           : $base-title-h1 !default;
$cta-img-border          : none !default;
```