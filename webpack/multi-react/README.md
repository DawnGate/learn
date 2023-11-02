# Practice

- [x] setting 3 react project, 1 shell and 2 remote
- [x] setting react remote (css module ) import into shell
- [x] using lerna to config run parallel when develop
- [x] app4 with tailwindcss => only import something you need
- [!] change app3 to version 16 of react (Nothing problem), import app2 component to app 3 (Get problem => the solution from [https://github.com/module-federation/module-federation-examples/tree/master/different-react-versions] only help a little => component of the app2 will render by react16-dom, it not expected => check later with option useIntersectEffect of react 18)
- [x] change app2 to typescript, import to app1 (addition props pass from app1 to app2)
- [x] testing with cypress simple ( load all app, check app1 with all dynamic loading remote)
- [?] init addition 1 vue project(nuxt) as remote -> nuxt not have any official support for this app, only angular and vue
- [] addition normal vue project ( with vite => not good), with webpack ? ->
- [] share theme ( dark, light) state between remotes and shell
- [] any module will have a adapter to render component

# Docs

- [x] https://module-federation.github.io/blog/get-started
- [x] https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/
- [] https://viblo.asia/p/microfrontend-module-federation-dua-microservices-den-voi-frontend-AZoJjXEEVY7
- [] https://dev.to/florianrappl/css-in-micro-frontends-4jai
- [x] https://engineering.razorpay.com/monolith-to-module-federation-8c400b4e5646
- [x] https://github.com/esplito/mfe-react-vue-module-federation-example

# Questions

What other real world app using webpack module federation??

The problems:

1. about css global will effect other shell app when import, and

2. Some shell app need install REMOTE DEPENDENCY? Why I need federation -> I want the remote app import lazy when loading when shell app -> And shell app will call additional package for the remote app, only when the remote app using

# Note

1. The ideal about adapter => with 1 remote in host will have 1 adapter -> this make the component will render in support of these adapter -> and render element for you. The problem is???

- https://www.youtube.com/@jherr -> channel for module federation implement

2. The ideal with multiple framer works. After a some researching I think I potential if per router you have a project or full remote app => That mean, it will easy to import a full remote app from BOOTSTRAP.JS => This will not get problem with render in other framework or library.
   -> I have a concern about like the ideal of separated components. Each component wrap in remote and render base on remote library => but problem will get more.
   -> Can working with the host have full technologies you need, and the render will not get more problem
