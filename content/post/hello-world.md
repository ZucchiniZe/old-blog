+++
date = "2015-11-30T10:21:32-08:00"
draft = true
title = "hello world"
tagline = "Introducing.... ME!"

+++

# Hi!

This is my new blog. There are many like it but this one is mine.
I have slaved away at creating this design from scratch (which is a **huge** thing for me).

I had to choose wether to make it a static website using something like [hugo](https://gohugo.io)
or a dynamic website using something like [react](http://facebook.github.io/react).
I ultimately chose to use hugo because I wanted to use github pages since it's free.

This is been an amazing exersice for me by doing **everything** from scratch instead
of using some library like bootstrap or a pre done jekyll theme like I had tried to previously.

This post is going to be about how I created this and why I did it.

## So, What is hugo?

Hugo is the super cool static website generator which is fast.
Like _really_ fast, someone ran a benchmark[^1] compiling a static site with over 500 pages against
jekyll and wintersmith and hugo blew both jekyll and wintersmith out of the water.

Hugo also recently got featured on hacker news https://news.ycombinator.com/item?id=10646508
and a lot of people highlighted the amazingness of hugo. I found out about a feature that
I didn't notice in the docs from that thread ([data driven content](http://gohugo.io/extras/datadrivencontent/)).

Pretty much the only gripe I have about it is the errors and layout (not css layout, getting html to work)

### Hugo layouts and why they sort of suck

The layout system in hugo is not very intuitive becase it creates a completely new html file for each view,
so you need to require partials if you want to get scripts and stylesheets loaded on all of the views.

## Taming the horrible beast that is CSS

I really don't like css mainly because I can't really do if statements easily in it,
plus it is a bit confusing to me sometimes. But this time once I actually started laying the page out it
becamse sort of fun and felt very natural.

### SCSS, and why it's awesome

I personally can't live without a preprocessor like SCSS because of the _amazing_ features that they offer.
Namely features like nesting of selectors and the variables since those are the only features I am currently using.

At first when I was starting to write the css I didn't know much css previously and had a horrible
understanding of the css box model

[^1]: http://fredrikloch.me/post/2014-08-12-Jekyll-and-its-alternatives-from-a-site-generation-point-of-view/
