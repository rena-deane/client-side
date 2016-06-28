var h = require('hyperscript')

h('div#page',
  h('div#header',
    h('h1.classy', 'h')),
  h('div#menu',
    h('ul',
      h('li', 'one'),
      h('li', 'two'),
      h('li', 'three'))),
    h('h2', 'content title'),
    h('p',
      "so it's just like a templating engine,\n",
      "but easy to use inline with javascript\n"),
    h('p',
      "the intension is for this to be used to create\n",
      "reusable, interactive html widgets. "))