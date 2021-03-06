## Social Media List

```image
plain: true
src: "social-media/social-media-list.png"
```

```code
lang: html
collapsed: tue
---
<ul class="list-inline social-list">
	<li><a href="#" target="_blank" class="btn-social btn-social-facebook"><i class="fa fa-facebook"></i></a></li>
	<li><a href="#" target="_blank" class="btn-social btn-social-twitter"><i class="fa fa-twitter"></i></a></li>
	<li><a href="#" target="_blank" class="btn-social btn-social-youtube"><i class="fa fa-youtube"></i></a></li>
	<li><a href="#" target="_blank" class="btn-social btn-social-google-plus"><i class="fa fa-google-plus"></i></a></li>
</ul>

```

## Social Media Buttons

### Square

```image
plain: true
src: "social-media/social-media-icon.png"
```

```code
collapsed: true
---
<a href="#" target="_blank" class="btn-social btn-social-facebook"><i class="fa fa-facebook"></i></a>
```

### Round

```image
plain: true
src: "social-media/social-media-round.png"
```

```code
collapsed: true
---
<a href="#" target="_blank" class="btn-social btn-social-round btn-social-facebook"><i class="fa fa-facebook"></i></a>
```

### With Text

```image
plain: true
src: "social-media/social-media-full.png"
```

```code
collapsed: true
---
<a href="#" target="_blank" class="btn-social btn-social-full btn-social-facebook"><i class="fa fa-facebook"></i> Facebook</a>
```

## Style Options

Styling options are located within the `webroot/css/_site-settings.scss`

```code
lang: css
collapsed: true
---
// Social Buttons //
//----------------------------------
$facebook-brand-color:          #3b5998;
$twitter-brand-color:           #00aced;
$google-plus-brand-color:       #dd4b39;
$youtube-brand-color:           #bb0000;
$linkedin-brand-color:          #007bb6;
$yelp-brand-color:              #B4282E;
$pinterest-brand-color:         #cb2027;
$healthy-hearing-brand-color: 	#304369;
$instagram-brand-color:					#c13584;

// Social Button Build
// $base-social-class:             '.btn-social';
// $base-social-size:              rem(36);
// $base-social-icon-color:        $white;
// $base-social-icon-hover-color:  $base-social-icon-color;
// $base-social-line-height:       $base-social-size;
$base-social-brand-colors:      ('facebook' $facebook-brand-color) ('twitter' $twitter-brand-color) ('google-plus' $google-plus-brand-color) ('youtube' $youtube-brand-color) ('linkedin' $linkedin-brand-color) ('yelp' $yelp-brand-color) ('pinterest' $pinterest-brand-color) ('healthy-hearing' $healthy-hearing-brand-color) ('instagram' $instagram-brand-color);
```