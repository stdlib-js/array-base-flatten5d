<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# flatten5d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten a five-dimensional nested array.



<section class="usage">

## Usage

To use in Observable,

```javascript
flatten5d = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten5d@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-flatten5d/tags). For example,

```javascript
flatten5d = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten5d@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var flatten5d = require( 'path/to/vendor/umd/array-base-flatten5d/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten5d@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.flatten5d;
})();
</script>
```

#### flatten5d( x, shape, colexicographic )

Flattens a five-dimensional nested array.

```javascript
var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];

var out = flatten5d( x, [ 2, 1, 1, 1, 2 ], false );
// returns [ 1, 2, 3, 4 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];

var out = flatten5d( x, [ 2, 1, 1, 1, 2 ], true );
// returns [ 1, 3, 2, 4 ]
```

#### flatten5d.assign( x, shape, colexicographic, out, stride, offset )

Flattens a five-dimensional nested array and assigns elements to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = [ [ [ [ [ 1, 2 ] ] ] ], [ [ [ [ 3, 4 ] ] ] ] ];
var out = new Float64Array( 4 );

var y = flatten5d.assign( x, [ 2, 1, 1, 1, 2 ], false, out, 1, 0 );
// returns <Float64Array>[ 1, 2, 3, 4 ]

var bool = ( y === out );
// returns true

y = flatten5d.assign( x, [ 2, 1, 1, 1, 2 ], true, out, 1, 0 );
// returns <Float64Array>[ 1, 3, 2, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions assume that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-flatten5d@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Define a 2x2x1x2x2 array:
var x = [
    [
        [
            [
                [ 1, 2 ], [ 3, 4 ]
            ]
        ],
        [
            [
                [ 5, 6 ], [ 7, 8 ]
            ]
        ]
    ],
    [
        [
            [
                [ 9, 10 ], [ 11, 12 ]
            ]
        ],
        [
            [
                [ 13, 14 ], [ 15, 16 ]
            ]
        ]
    ]
];

var out = flatten5d( x, [ 0, 0, 0, 0, 0 ], false );
// returns []

out = flatten5d( x, [ 0, 0, 0, 0, 0 ], true );
// returns []

out = flatten5d( x, [ 1, 1, 1, 1, 1 ], false );
// returns [ 1 ]

out = flatten5d( x, [ 1, 1, 1, 1, 1 ], true );
// returns [ 1 ]

out = flatten5d( x, [ 1, 2, 1, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8 ]

out = flatten5d( x, [ 1, 2, 1, 2, 2 ], true );
// returns [ 1, 5, 3, 7, 2, 6, 4, 8 ]

out = flatten5d( x, [ 2, 2, 1, 2, 2 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten5d( x, [ 2, 2, 1, 2, 2 ], true );
// returns [ 1, 9, 5, 13, 3, 11, 7, 15, 2, 10, 6, 14, 4, 12, 8, 16 ]

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-flatten5d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-flatten5d

[test-image]: https://github.com/stdlib-js/array-base-flatten5d/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/array-base-flatten5d/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-flatten5d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-flatten5d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-flatten5d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-flatten5d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-flatten5d/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-flatten5d/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-flatten5d/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-flatten5d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-flatten5d/main/LICENSE

</section>

<!-- /.links -->
