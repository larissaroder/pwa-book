var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const prerenderRoutes = require('./pre-render-routes');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = function(url) {
  return new PrerenderSPAPlugin({
   // Required - The path to the webpack-outputted app to prerender.
   staticDir: path.resolve(__dirname, '../dist'),
   // Required - Routes to render.
   routes: prerenderRoutes(),
   postProcess(context) {
     context.html = context.html.replace('id="app"', 'id="app" data-server-rendered="true"');
     return context;
   },
   renderer: new Renderer({
     inject: {
       IS_PRERENDERING: true,
     },
     injectProperty: '__PRERENDER_INJECTED',
   }),

 });
}
