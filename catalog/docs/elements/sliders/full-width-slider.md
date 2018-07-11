## Full Width Slider

```image
plain: true
src: "sliders/slider-full-width.png"
```

To add this style of slider add `{{>sider-full-width}}` to the `home.mustache` layout.

```code
collapsed: true
---
<div id="slider-full" class="cycle-slideshow"
		data-cycle-slides=".slide"
		data-cycle-timeout="10000"
		data-cycle-prev="#prev"
		data-cycle-next="#next"
		data-cycle-pager="#slide-pager"
		data-cycle-swipe=true
		data-cycle-swipe-fx=scrollHorz
		data-cycle-pager-template="<a href=#>{{slideNum}}</a>">
		<div class="slide slide-1">
			<div class="row">
				<div class="slide-content animated fadeIn">
					{{{fragment.slide-1}}}
				</div>
			</div>
		</div>
		<div class="slide slide-2">
			<div class="row">
				<div class="slide-content">
					{{{fragment.slide-2}}}
				</div>
			</div>
		</div>
		<div class="slide slide-3">
			<div class="row">
				<div class="slide-content">
					{{{fragment.slide-3}}}
				</div>
			</div>
		</div>
	</div>
	<div id="slide-controls-container">
		<a href="#" id="prev" class="slider-controls"><i class="fa fa-chevron-left"></i></a>
		<a href="#" id="next"  class="slider-controls"><i class="fa fa-chevron-right"></i></a>
	</div>
	<div id="slide-pager"></div>
```

## Full Width Slider Boxed

```image
plain: true
src: "sliders/slider-full-width-boxed.png"
```

```code
collapsed: true
---
<section id="main-banner">
  <h2 class="h-outline">Banner</h2>
	<div id="slider-full" class="cycle-slideshow"
		data-cycle-slides=".slide"
		data-cycle-timeout="10000"
		data-cycle-prev="#prev"
		data-cycle-next="#next"
		data-cycle-pager="#slide-pager"
		data-cycle-swipe=true
		data-cycle-swipe-fx=scrollHorz
		data-cycle-pager-template="<a href=#>{{slideNum}}</a>">
		<div class="slide slide-1">
			<div class="row">
				<div class="slide-content animated fadeIn">
					{{{fragment.slide-1}}}
				</div>
			</div>
		</div>
		<div class="slide slide-2">
			<div class="row">
				<div class="slide-content">
					{{{fragment.slide-2}}}
				</div>
			</div>
		</div>
		<div class="slide slide-3">
			<div class="row">
				<div class="slide-content">
					{{{fragment.slide-3}}}
				</div>
			</div>
		</div>
	</div>
	<div id="slide-controls-container">
		<a href="#" id="prev" class="slider-controls"><i class="fa fa-chevron-left"></i></a>
		<a href="#" id="next"  class="slider-controls"><i class="fa fa-chevron-right"></i></a>
	</div>
	<div id="slide-pager"></div>
</section>
```

### Styles and Options

#### Fragments

##### {{{fragment.slide-#}}}

Place fragment within the homepage fragment list

#### Layout

```code
lang: css
collapsed: true
---
.slide-1 {@include cover-background('slide-1.jpg');}
.slide-2 {@include cover-background('slide-2.jpg');}
.slide-3 {@include cover-background('slide-3.jpg');}
```

### Styling and Options

```code
lang: css
collapsed: true
---
// Full Width Slider//
//----------------------------------

// Slider Height - Can be adjust for transparent inline-navbar
$slide-height: rem(600);

// Slider Content Size (columns)
$slide-content-width: 6;

// Slider Content Position (center, middle)
$slide-content-position-x: left;
$slide-content-position-y: middle;

// Slide Content
//----------------------------------
$contained-slide-content-bg-color: rgba($black, .8) !default;
$slide-headline-size: rem(44);
$slide-headline-font: $base-title-font-family;
$slide-content-size: rem(18);
$slide-content-font: $base-font;
```

#### Slider Defaults

`webroot/css/addons/_sliders.scss`

##### Slider Controls

```code 
lang: css
collapsed: true
---
$slide-controls-color: $white !default;
$slide-pager-border-color: $white !default;
$slide-pager-active-color: $white !default;
```