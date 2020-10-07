1. npm i --save-dev @babel/core @babel/cli - установка зависимостей babel
2. npx babel src --out-dir build - указание места куда будут перекидываться оптимизированные файлы
3. npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-classes 
,@babel/plugin-transform-block-scoping - длинющая команда
4. npx babel src --out-dir build ---- с .babelrc
5. "presets": ["@babel/env"] - все последние стандарты, не включая эксерементальный синтаксис
6. Можно миксовать плагины и пресеты
    "presets": ["@babel/env"],
    "plugins": ["@babel/proposal-class-properties"]
7. 