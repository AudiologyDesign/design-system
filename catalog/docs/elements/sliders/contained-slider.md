## Option 1

```image
plain: true
src: "sliders/slider-contained.png"
```

To add this style of slider add `{{>sider-contained}}` to the `home.mustache` layout.

```code
collapsed: true
---
<section id="main-banner">
  <h2 class="h-outline">Banner</h2>
	<div id="slider-boxed-wrap">
		<div id="slider-boxed" class="cycle-slideshow"
			data-cycle-slides=".slide"
			data-cycle-timeout="10000"
			data-cycle-prev="#prev"
			data-cycle-next="#next"
			data-cycle-pager="#slide-pager"
			data-cycle-swipe=true
			data-cycle-swipe-fx=scrollHorz
			data-cycle-pager-template="<a href=#>{{slideNum}}</a>">

			<div id="slide-controls-container">
				<a href="#" id="prev" class="slider-controls"><i class="fa fa-chevron-left"></i></a>
				<a href="#" id="next"  class="slider-controls"><i class="fa fa-chevron-right"></i></a>
			</div>

			<div class="slide slide1">
				<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/slide-1.jpg" alt="">
				<div class="slide-content">
					{{{fragment.slide-1}}}
				</div>
			</div>
			<div class="slide slide3">
				<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/slide-2.jpg" alt="">
				<div class="slide-content">
					{{{fragment.slide-2}}}
				</div>
			</div>
			<div class="slide slide4">
				<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/slide-3.jpg" alt="">
				<div class="slide-content">
					{{{fragment.slide-3}}}
				</div>
			</div>
		</div>
		<div id="slide-pager"></div>
	</div>
</section>
```

## Option 2

```image
plain: true
src: "sliders/slide-2-column_option-2.png"
```

```code
collapsed: true
---

```

### Styling and Options

```code
collapsed: true
---
// Slide Content
//----------------------------------
// $contained-slide-content-bg-color: rgba($black, .8) !default;

// $slide-headline-size: rem(44);
// $slide-headline-font: $base-title-font-family;

// $slide-content-size: rem(18);
// $slide-content-font: $base-font;
```