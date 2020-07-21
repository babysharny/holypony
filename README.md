# Catalog

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Задание 

- Развернуть чистый nuxt.js последней версии
- Реализовать логику страницы “Каталог”: никакого контента на ней выводить не нужно, т.е. урл вида:

    - www.site.com/catalog/categoriya
    - www.site.com/catalog/categoriya/podkategoriya

    должны вести на 1 файл в папке pages.

  Вся логика работы с каталогом должна быть помещена в store.
  
  http://api.holypony.ru/catalog/categories?limit=0 - по этой ссылке можно получить список категорий.

  Список является плоским, однако категории является
  древовидной структурой и связь между категориями 
  осуществляется через свойство **parent_id**, которое 
  указывает на **category_id** родительской 
  категории, если **parent_id** === null то 
  категория является первичной.
    
    Поле **url** - это url только данной категории,
    т.е. чтобы построить полную ссылку,
    нужно пройтись по всем родителям

- При загрузке страницы нужно определить
    - текущую категорию (поиск в массиве по полю url).
    - Вложенность url реализовывать не обязательно, однако будет плюсом,
    
    т.к. в данном списке url являются уникальными, только на своём “уровне” и возможны url вида:

    1. kategoriya/podakategoriya/**medny**
    1. kategoriya/podkategoriya-2/**medny**

- Реализовать компонент “Меню каталога”:

  т.е. компонент может сворачиваться\разворачиваться, ссылки являются nuxt-link.
  
  Нужно иметь ввиду, что это меню будет встречаться на других страницах, поэтому нужно сразу правильно его назвать и реализовать.
