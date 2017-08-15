const path = require('path')


module.exports = {
    entry: {
        index: path.join(__dirname, './static/js/index.js'),
    },
    output: {
        path: path.join(__dirname, './static/dist/'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'ts-loader',
                exclude: /node_modules\/(?!(stardust))/,
                query: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ],
                    "plugins": ["transform-function-bind"]
                }
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(stardust))/,
                query: {
                    "presets": [
                        ["env", {
                            "targets": {
                                "browsers": ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ],
                    "plugins": ["transform-function-bind"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    target: "web"
};
