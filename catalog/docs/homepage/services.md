## Style Option 1

```image
plain: true,
src: "homepage/services-style-1.png"
```

### HTML Structure

```code
lang: html
collapsed: true
---
<div class="row align-center">
	<div class="small-12 columns">{{{fragment.section-3a}}}</div>
</div>
<div class="row medium-unstack align-middle">
	<div class="medium-6 columns">{{{fragment.section-3b}}}</div>
	<div class="medium-6 columns">{{{fragment.section-3c}}}</div>
</div>
```

## Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-multi-row: true
);
ul {
	@include services__list-small-icon(
		$services-list-side-icon: true,
		$services-list-column: 12
	);
}
```

## Style Option 2

This styling option uses the CTA Icon Structure

```image
plain: true,
src: "homepage/services-style-2.png"
```

### HTML Structure

```code
lang: html
collapsed: true
---
<div class="row medium-unstack align-middle">
	<div class="medium-6 columns">{{{fragment.section-3b}}}</div>
	<div class="medium-6 columns">{{{fragment.section-3c}}}</div>
</div>
```

## Styling Options

```code
lang: css
collapsed: true
---
@include standard-block();
ul {
	@include services__list-lrg-icon-top();
}
.cta {
	@include cta(
		$cta-img-icon: true,
		$cta-img-size: rem-calc(70),
		$cta-text-padding: rem-calc(30 0)
	);
}

```

## Style Option 3

```image
plain: true,
src: "homepage/services-style-3.png"
```

### HTML Structure

```code
lang: html
collapsed: true
---
<section class="hp-section fourth">
	<div class="row align-center">
		<div class="medium-8 columns">{{{fragment.section-#a}}}</div>
	</div>
	<div class="row medium-unstack">
		<div class="medium-3 columns">
			<div class="cta">
				<div class="cta-icon"><i class="fa fa-pencil-square-o"></i></div>
				<div class="cta-text">{{{fragment.section-#b}}}</div>
			</div>
		</div>
		<div class="medium-3 columns">
			<div class="cta">
				<div class="cta-icon"><i class="fa fa-headphones"></i></div>
				<div class="cta-text">{{{fragment.section-#c}}}</div>
			</div>
		</div>
		<div class="medium-3 columns">
			<div class="cta">
				<div class="cta-icon"><i class="fa fa-check"></i></div>
				<div class="cta-text">{{{fragment.section-#d}}}</div>
			</div>
		</div>
		<div class="medium-3 columns">
			<div class="cta">
				<div class="cta-icon"><i class="fa fa-music"></i></div>
				<div class="cta-text">{{{fragment.homepage-section-4b}}}</div>
			</div>
		</div>
	</div>
</section>
```

## Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-bg-color: $primary-accent-color,
	$block-text-centered: true,
	$block-white-text: true
);
.cta {
	@include cta(
		$cta-img-icon: true,
		$cta-img-size: rem-calc(70),
		$cta-text-padding: rem-calc(30 0)
	);
}
```