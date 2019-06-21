TypeScript Promise All With Error Thrown Demo
=============================================

当使用`Promise.all`来执行wait一系列promises的时候，如果其中的报错的，不会影响其它。

```
npm install
npm run demo
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

