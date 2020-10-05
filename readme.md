1. npm i --save-dev @babel/core @babel/cli - установка зависимостей babel
2. npx babel src --out-dir build - указание места куда будут перекидываться оптимизированные файлы
3. npx babel src --out-dir build --plugins @babel/plugin-transform-template-literals,@babel/plugin-transform-classes 
,@babel/plugin-transform-block-scoping - длинющая команда