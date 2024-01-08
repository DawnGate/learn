# Caching for simple dynamic page

This is project for dynamic page using: Nodejs + ssr + mongodb + ejs for rendering website -> BLOG web site: ex -> viblo.asia

Problem can occur:

1. Loading html from db, 10-50 query call, with delay 2-3s
2. Media data (image/video) some time slow and make the WHITE for some time ( 2- 10s)
3. User using around 300-1000. ccu: 20.

4. When using express and other server different: it has already implement e-tag and last modify for cache file in browser.

Solutions:

1. db cache using [enable query cache]
2. File cache for html, js, css
   - Full page
   - Half of page
3. Push image, video to cdn (cloud flare) or sometime using s3
4. Cache css, js in cdn, invalidate cache
5. Cache in reverse proxy

# disadvantage

- High development cost
- vulnerability to hackers
- no hot reload -> harder in development

- every page user visits need to generate on the server

# advantage

> using "templating engines"

- Plentiful customization options (user settings, users interest from user information, habit and past Internet usage)
- responsiveness to digital trends (Using content of template file easy)
- Encourage user interaction: more action add than simple static website

- It easy for handle search engine crawler
- All logic happen on the server => the client machine only need receive html code

> progressive enhancing

# resources with same ideas

- https://www.youtube.com/watch?v=-foo92lFIto&list=PL4cUxeGkcC9hAJ-ARcYq_z6lDZV7kT1xD

> Because the problem in reusable components and manager, separate and bundle code => webpack occur for handle in frontend space
> bundle => get js, css, html => separate these per router when calling
