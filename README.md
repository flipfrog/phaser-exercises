# phaser-exercises
Simple exercises of phaser usages.

## TO MAKE DEVELOPMENT ENVIRONMENT
```shell
bundle install
```
```shell
cd frontend && npm i
```

## TO BUILD FRONTEND
Transpile and copy modules to ../public/frontend/
```shell
cd frontend && npm run build
```

## RUN APPLICATION
### RUN BACKEND WITH FRONTEND THAT TRANSPILED
```shell
bundle exec rails server
```
- Access to http://localhost:3000/frontend
- Access to http://localhost:3000/

### RUN FRONTEND FOR DEVELOPMENT
Execute bellow respectively as isolated processes;
```shell
cd frontend && npm run dev
```
and
```shell
bundle exec rails server
```

## CONFIGURATIONS
This repository uses [Ruby On Rails](https://github.com/rails/rails), [Phaser](https://phaser.io/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/).
### Vite
- base
  - For build: `/frontend/`
  - For development: `/`
