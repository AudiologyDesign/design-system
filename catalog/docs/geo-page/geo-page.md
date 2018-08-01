## Documentation for Geo Targeted Page Setup

First create a new page with the `Geo Targeted` layout select in the Page Options selector.

### Required Fragments

#### `geo-intro`

```code
lang: html
---
<h1>CITY Hearing Care Provider</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nemo veniam impedit molestiae, veritatis numquam nam! Laboriosam delectus excepturi quaerat, sapiente labore saepe. Harum tenetur repellendus placeat accusantium laudantium ex consequuntur, mollitia at fugit.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt earum, eveniet veniam sapiente, deleniti eligendi nisi accusamus est deserunt.</p>

<p><a class="btn" href="#" title="">Button</a></p>
```

#### `geo-contact`

```code
lang: html
---
<h3>Use This Form to Contact Us Now and Schedule Your Free Hearing Screening!</h3>
```

#### `geo-location`

If there are 2 or more location in a given city create fragments `geo-location-2` and `geo-location-2-img` etc...

```code
lang: html
---
<h2>Our Hearing Center in CITY, ST</h2>

<ul class="col">
	<li>
	<p><strong>Address:</strong></p>

	<address itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress">1234 Road Blvd<br />
	Suite C</span><br />
	<span itemprop="addressLocality">City</span>, <span itemprop="addressRegion">ST</span> <span itemprop="postalCode">12345</span></address>

	<p><strong>Phone:</strong><br />
	<span itemprop="telephone"><a href="tel:123-456-7890">123-456-7890</a></span><br />
	<strong>Fax:</strong><br />
	<span itemprop="faxNumber">925-385-0293</span></p>
	</li>
	<li>
	<p><strong>Office Hours:</strong><br />
	Monday: 2:00pm - 5:00pm&nbsp;<br />
	Tuesday: Closed&nbsp;<br />
	Wednesday: 9:00am - 5:00pm&nbsp;<br />
	Thursday: Closed&nbsp;<br />
	Friday: 9:00am - 1:00pm</p>
	</li>
	<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem laborum ducimus sit blanditiis voluptate expedita temporibus repellat odit velit, voluptatem animi possimus voluptatum doloremque distinctio.</li>
</ul>

<p><a class="btn" href="" target="_blank">Get Directions</a> <a class="btn" href="#" target="_blank">Read Our Reviews</a></p>
```

#### `geo-location-img`

Map embed will be added later during the final SEO Phase.

#### `geo-products-img`

Image will be added later during the final SEO Phase.

#### `geo-products`

```code
lang: html
---
<h2>Hearing Aids in CITY, ST</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quae, totam! Consequatur quas, voluptatibus possimus? Alias voluptatum praesentium quidem, tempora voluptas itaque et tempore officia.</p>

<ul>
	<li>Manufacturer 1</li>
	<li>Manufacturer 2</li>
  <li>Manufacturer 3</li>
</ul>

<p><a class="btn" href="#" title="">Button</a></p>
```

#### `geo-services`

```code
lang: html
---
<h2>Hearing Care Services in CITY, ST</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, odit. Assumenda modi dolorem illo incidunt eos molestias. Voluptates, ducimus! Incidunt, rerum, nobis. Recusandae et expedita molestiae id aspernatur.</p>

<ul>
	<li>Service 1</li>
	<li>Service 2</li>
	<li>Service 3</li>
</ul>
```

#### `geo-staff`

```code
lang: html
---
<h2>Hearing Aid Specialists in CITY, ST</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum laudantium dolor iure facilis culpa perferendis impedit odio placeat.</p>

<div itemscope="" itemtype="http://schema.org/Person">
<h3><span itemprop="name">Staff Name, MACS</span></h3>

<p><span itemprop="jobTitle">Job Title</span></p>

<p><a class="btn" href="#" title="">Learn More</a></p>
</div>
```

#### `geo-staff-img`

Image will be added later during the final SEO Phase.