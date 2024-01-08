# Caching for simple static page

Simple home page static website

- structure

  - index.html
  - css -> folder of css
  - statics => contain static resource img, file
  - js -> folder of js

- with docker and simple nginx config
  -> The cache for static is cache and config with etag when have edit occur

# The limited of static page

- pre-coded files => store in internet

when you change a route => you load full content of a file (about.html, index.html, ...)

- limited and difficult in more interactive and abstract action( Limited user experience).

- hardly to control action of dynamic website like /portfolio/[key]

- can't provide different information gto users depending on certain key indicators: location, settings, or past activity

# The advantages

- Hight speed and easy to send through all over internet
- User security -> not tracking, no lead information
- Better SEO, high ranks in search engine
