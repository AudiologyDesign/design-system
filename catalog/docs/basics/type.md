# Typography

We use [Google Fonts](https://fonts.google.com/) for our typography needs. When selecting the proper fonts, we tend to try to only use the regular and bold variations of the fonts.

Use the `@import` code provided by Google, and replace the current code in the `_site-settings.scss` file.

```code
lang: css
---
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Noto+Serif:400,700');
```

Update the `font-family` variable below with the proper names.

```code
lang: css
---
$base-font:        'Montserrat', sans-serif;
$alt-font:         'Noto Serif', serif;
```

## Headings
Magna dapibus at ac curabitur condimentum. Suscipit tellus placerat rhoncus per vivamus.

```type
{
	"color": "$base-title-font-color",
  "headings": [28,24,22,20,18,16],
  "font": "sans-serif",
}
```

## Paragraphs
```type
{
  "paragraphs": ["16/24"],
  "font": "sans-serif",
  "color": "$base-font-color"
}
```

## Links
[A link to a page](#)
```code
lang: html
---
<a href="#">A Link to a page</a>
```

## Unordered Lists
- List item 1
- List item 2
- List item 3

```code
lang: html
---
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Ordered Lists
1. List item 1
2. List item 2
3. List item 3

```code
lang: html
---
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

## Blockquote

```code
lang: html
---
<blockquote class="border-quote">
  Those people who think they know everything are a great annoyance to those of us who do.
  <cite>Isaac Asimov</cite>
</blockquote>
```