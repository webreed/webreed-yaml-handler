// Copyright (c) Rotorz Limited. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";


const given = require("mocha-testdata");
const should = require("should");

const YamlHandler = require("../../lib/YamlHandler").YamlHandler;


describe("YamlHandler", function () {

  beforeEach(function () {
    this.yamlHandler = new YamlHandler();
  });


  it("is named 'YamlHandler'", function () {
    YamlHandler.name
      .should.be.eql("YamlHandler");
  });


  describe("#constructor()", function () {

    it("is a function", function () {
      YamlHandler.prototype.constructor
        .should.be.a.Function();
    });

  });


  describe("#decode(encodedData, context)", function () {

    it("is a function", function () {
      this.yamlHandler.decode
        .should.be.a.Function();
    });

    given(
      [ "true", true ],
      [ "false", false ],
      [ '"Hello"', "Hello" ],
      [ "42", 42 ],
      [ "[ 1, 2, 3 ]", [ 1, 2, 3 ] ],
      [ `\
a: 1
b: true
c: "Hi!"`, { a: 1, b: true, c: "Hi!" } ]
    ).
    it("parses and returns data from a YAML encoded string", function (yaml, expectedResult) {
      this.yamlHandler.decode(yaml)
        .should.eventually.be.eql(expectedResult);
    })

  });

  describe("#encode(data, context)", function () {

    it("is a function", function () {
      this.yamlHandler.encode
        .should.be.a.Function();
    });

    given(
      [ true, "true" ],
      [ false, "false" ],
      [ "Hello", '"Hello"' ],
      [ 42, "42" ],
      [ [ 1, 2, 3 ], "[ 1, 2, 3 ]" ],
      [ { a: 1, b: true, c: "Hi!" }, `\
a: 1
b: true
c: "Hi!"` ]
    ).
    it("produces YAML encoded string for the given data", function (data, expectedYaml) {
      this.yamlHandler.encode(data)
        .should.eventually.be.eql(expectedYaml);
    })

  });

});
