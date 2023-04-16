["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/promise/thenable.js"],"~:js","goog.provide(\"goog.Thenable\");\ngoog.requireType(\"goog.Promise\");\ngoog.Thenable = function() {\n};\ngoog.Thenable.prototype.then = function(opt_onFulfilled, opt_onRejected, opt_context) {\n};\ngoog.Thenable.IMPLEMENTED_BY_PROP = \"$goog_Thenable\";\ngoog.Thenable.addImplementation = function(ctor) {\n  if (COMPILED) {\n    ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;\n  } else {\n    ctor.prototype.$goog_Thenable = true;\n  }\n};\ngoog.Thenable.isImplementedBy = function(object) {\n  if (!object) {\n    return false;\n  }\n  try {\n    if (COMPILED) {\n      return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];\n    }\n    return !!object.$goog_Thenable;\n  } catch (e) {\n    return false;\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.Thenable');\n\n/** @suppress {extraRequire} used in complex type */\ngoog.requireType('goog.Promise');  // for the type reference.\n\n\n\n/**\n * Provides a more strict interface for Thenables in terms of\n * http://promisesaplus.com for interop with {@see goog.Promise}.\n *\n * @interface\n * @extends {IThenable<TYPE>}\n * @template TYPE\n */\ngoog.Thenable = function() {};\n\n\n/**\n * Adds callbacks that will operate on the result of the Thenable, returning a\n * new child Promise.\n *\n * If the Thenable is fulfilled, the `onFulfilled` callback will be\n * invoked with the fulfillment value as argument, and the child Promise will\n * be fulfilled with the return value of the callback. If the callback throws\n * an exception, the child Promise will be rejected with the thrown value\n * instead.\n *\n * If the Thenable is rejected, the `onRejected` callback will be invoked with\n * the rejection reason as argument. Similar to the fulfilled case, the child\n * Promise will then be resolved with the return value of the callback, or\n * rejected with the thrown value if the callback throws an exception.\n *\n * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A\n *     function that will be invoked with the fulfillment value if the Promise\n *     is fulfilled.\n * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will\n *     be invoked with the rejection reason if the Promise is rejected.\n * @param {THIS=} opt_context An optional context object that will be the\n *     execution context for the callbacks. By default, functions are executed\n *     with the default this.\n *\n * @return {RESULT} A new Promise that will receive the result\n *     of the fulfillment or rejection callback.\n * @template VALUE\n * @template THIS\n *\n * When a Promise (or thenable) is returned from the fulfilled callback,\n * the result is the payload of that promise, not the promise itself.\n *\n * @template RESULT := type('goog.Promise',\n *     cond(isUnknown(VALUE), unknown(),\n *       mapunion(VALUE, (V) =>\n *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),\n *           templateTypeOf(V, 0),\n *           cond(sub(V, 'Thenable'),\n *              unknown(),\n *              V)))))\n *  =:\n *\n */\ngoog.Thenable.prototype.then = function(\n    opt_onFulfilled, opt_onRejected, opt_context) {};\n\n\n/**\n * An expando property to indicate that an object implements\n * `goog.Thenable`.\n *\n * {@see addImplementation}.\n *\n * @const\n */\ngoog.Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';\n\n\n/**\n * Marks a given class (constructor) as an implementation of Thenable, so\n * that we can query that fact at runtime. The class must have already\n * implemented the interface.\n * Exports a 'then' method on the constructor prototype, so that the objects\n * also implement the extern {@see goog.Thenable} interface for interop with\n * other Promise implementations.\n * @param {function(new:goog.Thenable,...?)} ctor The class constructor. The\n *     corresponding class must have already implemented the interface.\n */\ngoog.Thenable.addImplementation = function(ctor) {\n  'use strict';\n  if (COMPILED) {\n    ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;\n  } else {\n    // Avoids dictionary access in uncompiled mode.\n    ctor.prototype.$goog_Thenable = true;\n  }\n};\n\n\n/**\n * @param {?} object\n * @return {boolean} Whether a given instance implements `goog.Thenable`.\n *     The class/superclass of the instance must call `addImplementation`.\n */\ngoog.Thenable.isImplementedBy = function(object) {\n  'use strict';\n  if (!object) {\n    return false;\n  }\n  try {\n    if (COMPILED) {\n      return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];\n    }\n    return !!object.$goog_Thenable;\n  } catch (e) {\n    // Property access seems to be forbidden.\n    return false;\n  }\n};\n","~:compiled-at",1681642518856,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.promise.thenable.js\",\n\"lineCount\":28,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,eAAb,CAAA;AAGAD,IAAKE,CAAAA,WAAL,CAAiB,cAAjB,CAAA;AAYAF,IAAKG,CAAAA,QAAL,GAAgBC,QAAQ,EAAG;CAA3B;AA8CAJ,IAAKG,CAAAA,QAASE,CAAAA,SAAUC,CAAAA,IAAxB,GAA+BC,QAAQ,CACnCC,eADmC,EAClBC,cADkB,EACFC,WADE,CACW;CADlD;AAYAV,IAAKG,CAAAA,QAASQ,CAAAA,mBAAd,GAAoC,gBAApC;AAaAX,IAAKG,CAAAA,QAASS,CAAAA,iBAAd,GAAkCC,QAAQ,CAACC,IAAD,CAAO;AAE/C,MAAIC,QAAJ;AACED,QAAKT,CAAAA,SAAL,CAAeL,IAAKG,CAAAA,QAASQ,CAAAA,mBAA7B,CAAA,GAAoD,IAApD;AADF;AAIEG,QAAKT,CAAAA,SAAUW,CAAAA,cAAf,GAAgC,IAAhC;AAJF;AAF+C,CAAjD;AAgBAhB,IAAKG,CAAAA,QAASc,CAAAA,eAAd,GAAgCC,QAAQ,CAACC,MAAD,CAAS;AAE/C,MAAI,CAACA,MAAL;AACE,WAAO,KAAP;AADF;AAGA,KAAI;AACF,QAAIJ,QAAJ;AACE,aAAO,CAAC,CAACI,MAAA,CAAOnB,IAAKG,CAAAA,QAASQ,CAAAA,mBAArB,CAAT;AADF;AAGA,WAAO,CAAC,CAACQ,MAAOH,CAAAA,cAAhB;AAJE,GAKF,QAAOI,CAAP,CAAU;AAEV,WAAO,KAAP;AAFU;AAVmC,CAAjD;;\",\n\"sources\":[\"goog/promise/thenable.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.Thenable');\\n\\n/** @suppress {extraRequire} used in complex type */\\ngoog.requireType('goog.Promise');  // for the type reference.\\n\\n\\n\\n/**\\n * Provides a more strict interface for Thenables in terms of\\n * http://promisesaplus.com for interop with {@see goog.Promise}.\\n *\\n * @interface\\n * @extends {IThenable<TYPE>}\\n * @template TYPE\\n */\\ngoog.Thenable = function() {};\\n\\n\\n/**\\n * Adds callbacks that will operate on the result of the Thenable, returning a\\n * new child Promise.\\n *\\n * If the Thenable is fulfilled, the `onFulfilled` callback will be\\n * invoked with the fulfillment value as argument, and the child Promise will\\n * be fulfilled with the return value of the callback. If the callback throws\\n * an exception, the child Promise will be rejected with the thrown value\\n * instead.\\n *\\n * If the Thenable is rejected, the `onRejected` callback will be invoked with\\n * the rejection reason as argument. Similar to the fulfilled case, the child\\n * Promise will then be resolved with the return value of the callback, or\\n * rejected with the thrown value if the callback throws an exception.\\n *\\n * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A\\n *     function that will be invoked with the fulfillment value if the Promise\\n *     is fulfilled.\\n * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will\\n *     be invoked with the rejection reason if the Promise is rejected.\\n * @param {THIS=} opt_context An optional context object that will be the\\n *     execution context for the callbacks. By default, functions are executed\\n *     with the default this.\\n *\\n * @return {RESULT} A new Promise that will receive the result\\n *     of the fulfillment or rejection callback.\\n * @template VALUE\\n * @template THIS\\n *\\n * When a Promise (or thenable) is returned from the fulfilled callback,\\n * the result is the payload of that promise, not the promise itself.\\n *\\n * @template RESULT := type('goog.Promise',\\n *     cond(isUnknown(VALUE), unknown(),\\n *       mapunion(VALUE, (V) =>\\n *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),\\n *           templateTypeOf(V, 0),\\n *           cond(sub(V, 'Thenable'),\\n *              unknown(),\\n *              V)))))\\n *  =:\\n *\\n */\\ngoog.Thenable.prototype.then = function(\\n    opt_onFulfilled, opt_onRejected, opt_context) {};\\n\\n\\n/**\\n * An expando property to indicate that an object implements\\n * `goog.Thenable`.\\n *\\n * {@see addImplementation}.\\n *\\n * @const\\n */\\ngoog.Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';\\n\\n\\n/**\\n * Marks a given class (constructor) as an implementation of Thenable, so\\n * that we can query that fact at runtime. The class must have already\\n * implemented the interface.\\n * Exports a 'then' method on the constructor prototype, so that the objects\\n * also implement the extern {@see goog.Thenable} interface for interop with\\n * other Promise implementations.\\n * @param {function(new:goog.Thenable,...?)} ctor The class constructor. The\\n *     corresponding class must have already implemented the interface.\\n */\\ngoog.Thenable.addImplementation = function(ctor) {\\n  'use strict';\\n  if (COMPILED) {\\n    ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;\\n  } else {\\n    // Avoids dictionary access in uncompiled mode.\\n    ctor.prototype.$goog_Thenable = true;\\n  }\\n};\\n\\n\\n/**\\n * @param {?} object\\n * @return {boolean} Whether a given instance implements `goog.Thenable`.\\n *     The class/superclass of the instance must call `addImplementation`.\\n */\\ngoog.Thenable.isImplementedBy = function(object) {\\n  'use strict';\\n  if (!object) {\\n    return false;\\n  }\\n  try {\\n    if (COMPILED) {\\n      return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];\\n    }\\n    return !!object.$goog_Thenable;\\n  } catch (e) {\\n    // Property access seems to be forbidden.\\n    return false;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"requireType\",\"Thenable\",\"goog.Thenable\",\"prototype\",\"then\",\"goog.Thenable.prototype.then\",\"opt_onFulfilled\",\"opt_onRejected\",\"opt_context\",\"IMPLEMENTED_BY_PROP\",\"addImplementation\",\"goog.Thenable.addImplementation\",\"ctor\",\"COMPILED\",\"$goog_Thenable\",\"isImplementedBy\",\"goog.Thenable.isImplementedBy\",\"object\",\"e\"]\n}\n"]