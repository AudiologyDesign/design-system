## With Iamge

```image
span: 3
plain: true
src: "call-to-actions/cta-2-column.png"
```


### CMS Content

```code
collapsed: true
---
<div class="small-12 medium-6 columns">
	<div class="cta">
		<div class="row align-stretch small-collapse medium-unstack">
			<div class="medium-5 columns cta-img">
				<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/cta-1.jpg" alt="Hearing Survey" >
			</div>
			<div class="medium-7 columns cta-text">
				<div class="cta-text-inner">{{{fragment.cta-1}}}</div>
			</div>
		</div>
	</div>
</div>
```

#### Mixin Settings

```code
collapsed: true
---
@include cta(
	$side-img: true,
	$text-align: left
);
```

## With Icon

```image
span: 3
plain: true
src: "call-to-actions/cta-2-column-icon.png"
```

#### HTML

```code
collapsed: true
---
<div class="cta">
	<div class="row align-center medium-unstack">
		<div class="small-5 medium-4 large-3 columns">
			<div class="cta-icon">
				<i class="fa fa-quote-left" aria-hidden="true"></i>
			</div>
		</div>
		<div class="columns">
			<div class="cta-text">{{{fragment.cta-1}}}</div>
		</div>
	</div>
</div>
```

#### Mixin Settings

```code
collapsed: true
---
@include cta(
	$element-bg: transparent,
	$img-bg: $secondary-accent-color,
	$img-radius: 50%,
	$img-height: 70px,
	$img-size: 70px,
	$img-line-height: 70px,
	$img-color: $white,
	$icon-size: rem(32),
	$heading-font-size: 21px,
	$box-shadow: none,
	$text-padding: 0,
	$text-align: left,
	$z-index: 3,
	$border-width: 0
);
```