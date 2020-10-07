1. npm i --save-dev @babel/core @babel/cli - установка зависимостей babel
2. npx babel src --out-dir build - указание места куда будут перекидываться оптимизированные файлы
3. npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-classes 
,@babel/plugin-transform-block-scoping - длинющая команда
4. npx babel src --out-dir build ---- с .babelrc
5. "presets": ["@babel/env"] - все последние стандарты, не включая эксерементальный синтаксис
6. Можно миксовать плагины и пресеты
    "presets": ["@babel/env"],
    "plugins": ["@babel/proposal-class-properties"]
7. Вторым аргументом в presets выступает target, который обновляет код в зависимости от поддержки браузеров, указанных в массиве
   {
    "presets": [["@babel/env",
        {
            "targets": {
                "edge": 18,
                "chrome": 74
            }
        }]],
    "plugins": ["@babel/proposal-class-properties"]
    }
8. 
    {
    "presets": [["@babel/env",
        {
            "debug": true,
            "targets": [  
                "> 0.3%",  // более 0.3 процента используемых браузеров
                "not ie > 0",
                "last 2 chrome versions" // или так
            ]
        }]],
    "plugins": ["@babel/proposal-class-properties"]
    }
9. Вместо babelrc можно поместить их в package.json
 "browserslist": [
    "> 0.3%"
  ]
10. так же можно хранить версии браузеров в файле .browserslistrc
    last 2 chrome versions
    last 2 firefox versions
    last 1 edge versions