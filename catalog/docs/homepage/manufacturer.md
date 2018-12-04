## Option 1

```image
plain: true
src: "homepage/manufacturer_option-1.png"
```

### HTML Structure
```code
collapsed: true
---
<section class="hp-section">
	<div class="row align-center text-centered">
		<div class="medium-8 large-6 columns">
			{{{fragment.homepage-section-#}}}
		</div>
	</div>
	<div class="section-list">
		<div class="row align-justify">
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						01
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-1}}}
					</div>
				</div>
			</div>
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						02
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-2}}}
					</div>
				</div>
			</div>
		</div>
		<div class="row align-justify">
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						03
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-3}}}
					</div>
				</div>
			</div>
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						04
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-4}}}
					</div>
				</div>
			</div>
		</div>
		<div class="row align-justify">
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						05
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-5}}}
					</div>
				</div>
			</div>
			<div class="small-12 medium-6 large-4 columns">
				<div class="row">
					<div class="columns shrink item-num">
						06
					</div>
					<div class="columns">
						{{{fragment.homepage-section-#-item-6}}}
					</div>
				</div>
			</div>
		</div>
	</div>
	</section>
```

### CSS 
```code
lang: css,
collapsed: true
---
.section-list {
	margin-top: 20px;
	@include breakpoint(large only) {
		background: url($cdn-file-path + 'hp-section-4.jpg') center center no-repeat;
		background-size: contain;
	}
	padding-bottom: 60px;
	h3 {
		color: $primary-accent-color;
		text-transform: none;
		font-size: 18px;
		margin-top: 0;
	}
	.item-num {
		font-size: 30px;
		line-height: 30px;
		margin-bottom: 10px;
		color: #90bf60;
	}
}
```