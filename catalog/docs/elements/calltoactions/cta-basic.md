## With Image

```image
span: 3
plain: true
src: "call-to-actions/cta-basic.png"
```

#### HTML

```code
collapsed: true
---
<div class="cta">
	<div class="cta-img">
		<img src="{{{cdn.projects}}}projects/{{page.SiteInstance.Site.domain}}/images/cta-1.jpg" alt="" >
	</div>
	<div class="cta-text">{{{fragment.cta-1}}}</div>
</div>
```

#### Mixin Settings

```code
collapsed: true
---
@include cta();
```

## With Icon

```image
plain: true
src: "call-to-actions/cta-basic-icon-style-1.png"
```

#### HTML

```code
collapsed: true
---
<div class="cta">
	<div class="cta-icon">
		<i class="fa fa-volume-up" aria-hidden="true"></i>
	</div>
	<div class="cta-text">{{{fragment.cta-1}}}</div>
</div>
```

#### Mixin Settings

```code
collapsed: true
---
@include cta(
	$element-bg: transparent,
	$img-size: 100px,
	$img-bg: transparent,
	$img-radius: 50%,
	$img-height: 100px,
	$img-line-height: 100px,
	$img-color: $primary-accent-color,
	$img-border: 3px solid $primary-accent-color,
	$icon-size: 38px,
	$heading-font-size: 21px,
	$box-shadow: none,
	$text-padding: 20px 0 0,
	$text-align: center,
	$z-index: 3,
	$border-width: 0
);
```