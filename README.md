# Luego Boilerplate

## Warning

- Não utilizar os snippets, pois eles podem ser facilmente implementados como componentes. A vantagem é que se em algum momento ele precisar ser inteligente, a estrutura já estará correta para isso e não será necessário move-lo de lugar.
- Não utilizar os helpers do boilerplate. O motivo principal é depender de implementa-lo no PHP tb. Como temos apenas 1 item dentro do helper, acho que vou manter uma forma de vcs utilizarem e dar um parse por javascript (com uma lib Luego). Assim serve tanto para o nunjucks quanto para o PHP e outras linguagens.

## Features
- Image compression with `gulp-imagemin`: `gifsicle`, `jpegtran`, `optipng` and `svgo`
- Automatic generation of spritesheet with gulp-sprite-by-ext. Just put your files into `assets/images/sprites`
- Shadow Files
- Components
- Data and Remote Data
