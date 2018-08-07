```image
plain: true
src: "homepage/slider-testimonials.jpg"
```

## CMS Content

```code
lang: html
collapsed: true
---
<h2>Patient Testimonials</h2>
<div id="quote-slider" class="cycle-slideshow"
data-cycle-slides="blockquote"
data-cycle-timeout="10000"
data-cycle-pager="#quote-pager"
data-cycle-swipe=true
data-cycle-swipe-fx=scrollHorz
data-cycle-pager-template="<a href=#>{{slideNum}}</a>">
<blockquote>
	<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam sequi omnis.</p>
	<cite>Lorem ipsum.</cite>
</blockquote>
<blockquote>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nam sequi omnis.</p>
		<cite>Lorem ipsum.</cite>
	</blockquote>
</div>
<div id="quote-pager"></div>
```

## HTML Structure

```code 
lang: html
collapsed: true
---
<div class="row align-center">
	<div class="medium-10 columns">{{{fragment.section-#}}}</div>
</div>
```

## Styling

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-cover-img: true,
	$block-bg-img: 'image.jpg',
	$block-text-align: center,
	$block-white-text: true
);
```