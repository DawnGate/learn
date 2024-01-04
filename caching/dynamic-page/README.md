# Caching for simple dynamic page

This is project for dynamic page using: Nodejs + ssr + mongodb + ejs for rendering website -> BLOG web site: ex -> viblo.asia

Problem can occur:

1. Loading html from db, 10-50 query call, with delay 2-3s
2. Media data (image/video) some time slow and make the WHITE for some time ( 2- 10s)
3. User using around 300-1000. ccu: 20.

Solutions:

1. db cache using [enable query cache]
2. File cache for html, js, css
   - Full page
   - Half of page
3. Push image, video to cdn (cloud flare) or sometime using s3
4. Cache css, js in cdn, invalidate cache
5. Cache in reverse proxy
