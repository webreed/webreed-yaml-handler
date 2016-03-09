// Copyright (c) Rotorz Limited. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root.


import given from "mocha-testdata";
import should from "should";

import {Environment} from "webreed-core/lib/Environment";

import setup from "../lib/setup";
import {YamlHandler} from "../lib/YamlHandler";


describe("#setup(env, options)", function () {

  it("is a function", function () {
    setup
      .should.be.a.Function();
  });

  it("adds 'yaml' handler to the environment", function () {
    let env = new Environment();
    setup(env);
    env.handlers.get("yaml")
      .should.be.instanceOf(YamlHandler);
  });

});
