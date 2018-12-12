## Map Box
```image
plain: true
src: "widgets/mapbox.png"
```

The is our universal styling and layout for all locations widgets. If a client requests modifications they will lose future enhancements that we apply to the global widget.

`ADThemes/Defaults/Widgets/location-list.mustache`

```code
lang: html
collapsed: true
---
{{#locations}}
  <div itemscope itemtype="http://schema.org/LocalBusiness" class="media-box location">
    <div class="media-box-title">
      <h3 itemprop="name">{{name}}</h3>
    </div>
    <div class="media-box-image">
      <iframe src="https://www.google.com/maps/embed/v1/place?q={{query}}&key=AIzaSyDio08kAGEvYqxVcM9NlWl2Vjx1-BeWW_Y" width="100%" height="300" frameborder="0"></iframe>
    </div>
    <div class="media-box-details address-container">
      <div class="location-column">
        <address itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    			<span itemprop="streetAddress">{{address}}
    			{{#address2}}
    				<br>{{address2}}
    			{{/address2}}</span>

    			<br/><span itemprop="addressLocality">{{city}}</span>, <span itemprop="addressRegion">{{state}}</span> <span itemprop="postalCode">{{zip}}</span>
    		</address>
        <p>
          {{#neighborhood}}
            <p>{{{neighborhood}}}</p>
      		{{/neighborhood}}
      		{{^neighborhood}}

      		{{/neighborhood}}
          <strong>Phone:</strong>
    			{{#phone}}
    				<a href="tel:1{{phone}}"><span itemprop="telephone">{{phone}}</span></a>
            <br>
    			{{/phone}}

          {{#fax}}
    				<strong>Fax:</strong> <span itemprop="faxNumber">{{fax}}</span>
            <br>
    			{{/fax}}
          {{^fax}}
          {{/fax}}

          {{#phone2}}
            <strong>Alt Phone:</strong>
      			<a href="tel:1{{phon2}}"><span itemprop="telephone">{{phone2}}</span></a>
            <br>
      		{{/phone2}}
      		{{^phone2}}

      		{{/phone2}}

    			{{#email}}
    				<strong>Email:</strong> <a href="mailto:{{email}}"><span itemprop="email">{{email}}</span></a>
    			{{/email}}

        </p>
      </div>
      <div class="location-column">
        {{#photo}}
    			<img src="{{photo}}" alt="{{name}}" itemprop="image" />
    		{{/photo}}
    		{{^photo}}

    		{{/photo}}
      </div>
    </div>
    {{#has_hours}}
			<div class="media-box-details hours-container">
				<h4>Hours:</h4>
        <div>
          {{{hoursList}}}
        </div>
			</div>
		{{/has_hours}}
  </div>

	{{#notes}}
	<div class="media-box-details notes-container" itemprop="description">
		{{{notes}}}
	</div>
	{{/notes}}
{{/locations}}

{{^locations}}
  <p style="color: red; font-style: italic;">No locations configured for this locations widget</p>
{{/locations}}
```

## Staff Bio

```image
plain: true
src: "widgets/staff.png"
```

## Media Box CSS

`webroot/css/addons/_mediabox.scss`

```code
lang: css
collapsed: true
---
$base-media-box-border-color: $default-color !default;
$base-media-box-background: $white !default;
$base-media-box-border-radius: 2px !default;
$base-media-box-padding: 0px !default;

.media-box {
  position: relative;
  overflow: hidden;
  border: 1px solid $base-media-box-border-color;
  margin-bottom: rem(30);
  background-color: $base-media-box-background;
  padding: $base-media-box-padding;
  @include border-radius($base-media-box-border-radius);
  @include clearfix();
  &:last-child {
    margin-bottom: 0px;
  }
  .media-box-details,
  .media-box-content,
  .media-box-title {
    padding: 3%;
    width: 100%;
    height: auto;
  }
  .media-box-title {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }
  }
  .media-box-img {
    position: relative;
    .media-box-title {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 999;
    }
  }
  .media-box-details{
    @include border-bottom-radius($base-media-box-border-radius);
  }
  &.staff {
    padding: 2%;
    @media only screen and (max-width: 40em) { padding: 5%; }
    .media-box-img{
      float: left;
      width: 25%;
      padding: 2%;
      @media only screen and (max-width: 40em) {
        float: none;
        width: 50%;
        margin: 0 auto;
      }
    }
    .media-box-details {
      float: left;
      width: 75%;
      border-top: 0;
      h3 {margin-top: 0;}
      @media only screen and (max-width: 40em) {
        float: none;
        width: 100%;
        text-align: center;
      }
    }
  }
  &.video {
    .media-box-title {
      h4 {font-size: 18px;}
    }
    .video-wrapper {margin-bottom: 0;}
    .media-box-img {
      position: relative;
      width: 100%;
      text-align: center;
      .btn-play {
        margin: auto;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        width: 25%;
        display: block;
      }
    }
    .media-box-details {
      p {margin: $nomargin;}
    }
  }
  &.location {
    .media-box-img {
      iframe {height: rem(300);}
      .map-overlay {
        background:transparent;
        position:relative;
        width:100%;
        height: rem(300); /* your iframe height */
        top: rem(300);  /* your iframe height */
        margin-top: rem(-300);  /* your iframe height */
      }
    }
		.address-container {
			@include flex-grid-row;
			.location-column {
				@include flex-grid-column(6);
				@include breakpoint(small only) {
					@include flex-grid-column(12);
				}
			}
		}
  }
}
```