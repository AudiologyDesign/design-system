```image
plain: true
src: "headers/topbar.png"
```
This element is used within the `<header>` above `<div class="header-bottom-section">` of the header

```code
collapsed: true
---
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
```

### Standard Fragments and Elements

#### `{{{fragment.topbar-left}}}`

```code
collapsed: true
---
<div class="head-contact-item">Item 1</div>
<div class="head-contact-item">Item 2</div>
```

#### `{{{fragment.social}}}`

Read Documentation on [Social Media List](/social-media/#social-media-list)

### SCSS Options

Styling options are located within the `webroot/css/_site-settings.scss`

```code
lang: css
collapsed: true
---
// Top Bar Color Options
$header-top-section-background:        #f5f5f5 !default;
$header-top-section-border:            1px solid $default-color !default;
$header-top-section-text-color:        $base-font-color !default;

// Top Bar Starting & Scrolling Heights
$header-info-bar-starting-height:      rem(40) !default;
$header-info-bar-scrolling-height:     rem(0) !default;
```