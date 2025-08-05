# 博客项目

作为学习目的， 搭建个人博客西永

## 技术栈

- vue
- typescript
- tailwindcss

## 功能

- [ ] 登录
- [ ] 登出

## 实现

- [x] 图标组件
- [ ] 头像组件
- [ ] 分页组件

### 图标组件

script/generate-icon-type.ts 读取 图标的css文件，建立图标的联合类型，实现图标组件提示

问题： package.json 中 type: "module" 注释掉才可以执行 generate-icon-type.ts， 但是 运行 程序的时候又需要 type: "module"
