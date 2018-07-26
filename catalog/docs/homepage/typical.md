## Content aligned middle

```image
plain: true
src: "/homepage/2-col-standard.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row medium-unstack align-middle">
	<div class="medium-6 columns">{{{fragment.section-#}}}</div>
	<div class="medium-4 medium-offset-2 columns">{{{fragment.section-#}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-bg-color: $accent-color-option
	$block-white-text: true
);
```

## Content aligned bottom

```image
plain: true
src: "/homepage/2-col-align-bottom.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row medium-unstack">
	<div class="medium-6 columns align-middle">{{{fragment.section-#}}}</div>
	<div class="medium-4 medium-offset-2 columns align-bottom">{{{fragment.section-#}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-padding: rem(90 0 0)
);
```

## 2 column with background

There will be instances where you will have a homepage content block where the background image will need to be hidden on smaller viewports due to the text overlapping the background image.

The `standard-block` mixin will assist in creating these blocks.

```image
plain: true
src: "/homepage/2-column-bg.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row">
	<div class="large-6 medium-12 columns">{{{fragment.section-#}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-2-column-img: true,
	$block-bg-img: 'bg-section-#.jpg",
	$block-bg-color: $accent-color,
	$block-white-text: true
);
```

## 2 column with background with offset

```image
plain: true
src: "/homepage/2-column-bg-offset.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row">
	<div class="large-6 medium-12 large-offset-6 columns">{{{fragment.section-#}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-2-column-img: true,
	$block-bg-img: 'bg-section-#.jpg"
);
```

## Multi column

There will be instances where you will have a homepage content block with multiple rows and columns. This is an example on where you will need to add the HTML structure to the homepage fragment due to the complexity.

```image
plain: true
src: "/homepage/multi-column.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row align-center">
	<div class="medium-12">{{{fragment.section-#a}}}</div>
</div>
<div class="row medium-unstack">
	<div class="medium-6">{{{fragment.section-#a}}}</div>
	<div class="medium-6">{{{fragment.section-#b}}}</div>
</div>
<div class="row align-center">
	<div class="medium-12">{{{fragment.section-#c}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-multi-row: true
);
```

## Single Column (Centered)

```image
plain: true
src: "homepage/1-column-centered.png"
```

### Structure

```code
lang: html
collapsed: true
---
<div class="row align-center">
	<div class="medium-8">{{{fragment.section-#}}}</div>
</div>
```

### Styling Options

```code
lang: css
collapsed: true
---
@include standard-block(
	$block-cover-img: true,
	$block-bg-img: 'image.jpg',
	$block-centered-text: true,
	$block-white-text: true
);
```