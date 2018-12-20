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

## To Do

- Adicionar um metodo no luego-cli para criar componentes
- Vale criar uma pasta para os CSS que estão na raiz?
- Propor padrão de nomenclatura de classe para indicar que ela não possuirá styles. Sugestão: adicionar um "-" no início do nome, ex -btn-facebook
- Não utilizar o BEM
- Adicionar variaveis de media querie. Sugestão:
    @media-cellphone
    @media-cellphone-h
    @media-tablet
    @media-tablet-h
    @media-notebook
    @media-hd
    @media-fhd
    @media-4k

#### Doing

- Finalizar o _reset.less (falta definir algumas coisas que deixei comentadas lá)
- Implementar o Navigation (utilizando o Navigo como router)
    https://github.com/krasimir/navigo
- Complementar o SvgFix (falta criar função para dar o replace no SVG igual ao helper que o Junior criou fazia)

## CHANGELOG

###### data: 28/03/2018 - horário: 00:00

- Removi os snippets e os helpers nunjunks
- Limpei o main.css
- Adicionei coisas no _reset.less e tirei da pasta vendor e coloquei na raiz
- Criei o SvgFix
- Rodei um NPM update
- Atualizei a versão do slick

