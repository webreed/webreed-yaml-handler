// Copyright (c) Rotorz Limited. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root.


import yaml = require("js-yaml");

import {Handler} from "webreed-core/lib/plugin/Handler";


/**
 * Encodes and decodes YAML encoded data.
 */
export class YamlHandler implements Handler {

  public decode(encodedData: any, context: any): Promise<any> {
    let str = encodedData.toString();
    let data = yaml.safeLoad(str);
    return Promise.resolve(data);
  }

  public encode(data: any, context: any): Promise<any> {
    let str = yaml.safeDump(data);
    return Promise.resolve(str);
  }

}
