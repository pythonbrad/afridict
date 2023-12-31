<div align="center">

  <h1><code>afridict</code></h1>

<strong>A <code>open source dictionary</code> for African languages.</strong>

  <p>
    <a href="https://github.com/pythonbrad/afridict/actions/workflows/ci.yml"><img alt="Build Status" src="https://github.com/pythonbrad/afridict/actions/workflows/ci.yml/badge.svg?branch=main"/></a>
  </p>

<sub>Built by <a href="https://github.com/pythonbrad">@pythonbrad</a></sub>


![Screen Shot 2023-11-19 at 15 02 58](https://github.com/pythonbrad/afridict/assets/45305909/9a329f01-d5fd-41a1-abb0-d9c0f637272c)

</div>

## 🚴 Usage

```
npm install
npm start
```

## 🔋 Files Included

- `.gitignore`: ignores `node_modules`
- `README.md`: the file you are reading now!
- `index.html`: a bare bones html document that includes the webpack bundle
- `index.js`: js file
- `data.js`: manage the data
- `translation.js`: manage the webpage translation
- `package.json` and `package-lock.json`:
  - pulls in devDependencies for using webpack:
    - [`webpack`](https://www.npmjs.com/package/webpack)
    - [`webpack-cli`](https://www.npmjs.com/package/webpack-cli)
    - [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server)
  - defines a `start` script to run `webpack-dev-server`
- `webpack.config.js`: configuration file for bundling your js with webpack

## License

Licensed under MIT license ([LICENSE](LICENSE) or http://opensource.org/licenses/MIT).

### Contribution

We are open for contribution.
