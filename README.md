# Interférences et diffraction de la lumière: présentation 13/06

## Répartition

* Michael: Calculs incertitude
* Nathan: Données, plots
* Sol: "Powerpoint"

## Powerpoint

* [gitpitch](https://gitpitch.com/)






```
<section>
	<p class="fragment" data-fragment-index=""></p>
	<p class="fragment" data-fragment-index=""></p>
	<p class="fragment" data-fragment-index=""></p>
</section>

<section>
	<p class="fragment grow">grow</p>
	<p class="fragment shrink">shrink</p>
	<p class="fragment fade-out">fade-out</p>
	<p class="fragment fade-up">fade-up (also down, left and right!)</p>
	<p class="fragment current-visible">visible only once</p>
	<p class="fragment highlight-current-blue">blue only once</p>
	<p class="fragment highlight-red">highlight-red</p>
	<p class="fragment highlight-green">highlight-green</p>
	<p class="fragment highlight-blue">highlight-blue</p>
</section>


<section>
	<span class="fragment fade-in">
		<span class="fragment fade-out">I'll fade in, then out</span>
	</span>
</section>





  <p class="ludwig">
    I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.
  </p>




  .ludwig {
    position: relative;
    padding-left: 1em;
    border-left: 0.2em solid #4d91b3;
    // border-left: 0.2em solid hsl(204, 86%, 53%);
    font-family: "Roboto", serif !important;
    color: #777;
    font-style: italic;
    font-weight: 1;
    line-height: 1em;
  }
  .ludwig:before, .ludwig:after {
    content: "\201C";
    font-family: "Sanchez";
    // color: hsl(204, 86%, 53%);
    color: #4d91b3;
  }
  .ludwig:after {
    content: "\201D";
  }

  blockquote {
    margin-bottom: 3em;
  }
```