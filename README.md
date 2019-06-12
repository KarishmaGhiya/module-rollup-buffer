# module-rollup-buffer
Trying to replicate dedupe buffer issue

## Repro for dedupe buffer issue
This repro is a work in progress. For now, you can :
`rush install`
`rush build`

To generate rollup output do:
- `cd lib-aaa` 
- `rushx build:test:browser`
Find the rollup output generated under : `lib-aaa\test-browser\index.js`

There are two libraries `lib-aaa` and `lib-bee` 
And an external dependency : `buffer`
The `lib-aaa`  depends on `buffer` and `lib-bee` v 1.0.0 
The `lib-bee` depends on `buffer`

### What is happening?
- Two copies of `buffer` package created under node-modules for lib-aaa :
1. under `lib-aaa\node_modules\buffer`
2. under `lib-aaa\node_modules\lib-bee\node_modules\buffer`

- I am also trying to replicate the issue with service-bus for two copies of bffer in the rollup output
- But I am not getting two copies of buffer in the rollup output

For using `lib-sea` in-place of `buffer` refer this repository : https://github.com/KarishmaGhiya//module-duplication-rollup-rush