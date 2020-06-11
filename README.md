## tsc-api-test

> tsc 语法练习测试

### 用法

- **安装 ts-node**

```js
npm install -g typescript
npm install -g ts-node
```

- **执行脚本**

```js
# Execute a script as `node` + `tsc`.
ts-node script.ts

# Starts a TypeScript REPL.
ts-node

# Execute code with TypeScript.
ts-node -e 'console.log("Hello, world!")'

# Execute, and print, code with TypeScript.
ts-node -p -e '"Hello, world!"'

# Pipe scripts to execute with TypeScript.
echo 'console.log("Hello, world!")' | ts-node

# Equivalent to ts-node --script-mode
ts-node-script scripts.ts

# Equivalent to ts-node --transpile-only
ts-node-transpile-only scripts.ts
```
