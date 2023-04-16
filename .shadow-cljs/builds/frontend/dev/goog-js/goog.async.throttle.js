["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/throttle.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.async.Throttle\");\n  goog.module.declareLegacyNamespace();\n  const Disposable = goog.require(\"goog.Disposable\");\n  const Timer = goog.require(\"goog.Timer\");\n  class Throttle extends Disposable {\n    constructor(listener, interval, handler) {\n      super();\n      this.listener_ = handler != null ? listener.bind(handler) : listener;\n      this.interval_ = interval;\n      this.args_ = null;\n      this.shouldFire_ = false;\n      this.pauseCount_ = 0;\n      this.timer_ = null;\n    }\n    fire(var_args) {\n      this.args_ = arguments;\n      if (!this.timer_ && !this.pauseCount_) {\n        this.doAction_();\n      } else {\n        this.shouldFire_ = true;\n      }\n    }\n    stop() {\n      if (this.timer_) {\n        Timer.clear(this.timer_);\n        this.timer_ = null;\n        this.shouldFire_ = false;\n        this.args_ = null;\n      }\n    }\n    pause() {\n      this.pauseCount_++;\n    }\n    resume() {\n      this.pauseCount_--;\n      if (!this.pauseCount_ && this.shouldFire_ && !this.timer_) {\n        this.shouldFire_ = false;\n        this.doAction_();\n      }\n    }\n    disposeInternal() {\n      super.disposeInternal();\n      this.stop();\n    }\n    onTimer_() {\n      this.timer_ = null;\n      if (this.shouldFire_ && !this.pauseCount_) {\n        this.shouldFire_ = false;\n        this.doAction_();\n      }\n    }\n    doAction_() {\n      this.timer_ = Timer.callOnce(() => this.onTimer_(), this.interval_);\n      const args = this.args_;\n      this.args_ = null;\n      this.listener_.apply(null, args);\n    }\n  }\n  exports = Throttle;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Definition of the goog.async.Throttle class.\n *\n * @see ../demos/timers.html\n */\n\ngoog.module('goog.async.Throttle');\ngoog.module.declareLegacyNamespace();\n\nconst Disposable = goog.require('goog.Disposable');\nconst Timer = goog.require('goog.Timer');\n\n\n/**\n * Throttle will perform an action that is passed in no more than once\n * per interval (specified in milliseconds). If it gets multiple signals\n * to perform the action while it is waiting, it will only perform the action\n * once at the end of the interval.\n * @final\n * @template T\n */\nclass Throttle extends Disposable {\n  /**\n   * @param {function(this: T, ...?)} listener Function to callback when the\n   *     action is triggered.\n   * @param {number} interval Interval over which to throttle. The listener can\n   *     only be called once per interval.\n   * @param {T=} handler Object in whose scope to call the listener.\n   */\n  constructor(listener, interval, handler) {\n    super();\n    /**\n     * Function to callback\n     * @type {function(this: T, ...?)}\n     * @private\n     */\n    this.listener_ = handler != null ? listener.bind(handler) : listener;\n\n    /**\n     * Interval for the throttle time\n     * @type {number}\n     * @private\n     */\n    this.interval_ = interval;\n\n    /**\n     * The last arguments passed into `fire`, or null if there is no pending\n     * call.\n     * @private {?IArrayLike}\n     */\n    this.args_ = null;\n\n    /**\n     * Indicates that the action is pending and needs to be fired.\n     * @type {boolean}\n     * @private\n     */\n    this.shouldFire_ = false;\n\n    /**\n     * Indicates the count of nested pauses currently in effect on the throttle.\n     * When this count is not zero, fired actions will be postponed until the\n     * throttle is resumed enough times to drop the pause count to zero.\n     * @type {number}\n     * @private\n     */\n    this.pauseCount_ = 0;\n\n    /**\n     * Timer for scheduling the next callback\n     * @type {?number}\n     * @private\n     */\n    this.timer_ = null;\n  }\n\n  /**\n   * Notifies the throttle that the action has happened. It will throttle\n   * the call so that the callback is not called too often according to the\n   * interval parameter passed to the constructor, passing the arguments\n   * from the last call of this function into the throttled function.\n   * @param {...?} var_args Arguments to pass on to the throttled function.\n   */\n  fire(var_args) {\n    this.args_ = arguments;\n    if (!this.timer_ && !this.pauseCount_) {\n      this.doAction_();\n    } else {\n      this.shouldFire_ = true;\n    }\n  }\n\n  /**\n   * Cancels any pending action callback. The throttle can be restarted by\n   * calling {@link #fire}.\n   */\n  stop() {\n    if (this.timer_) {\n      Timer.clear(this.timer_);\n      this.timer_ = null;\n      this.shouldFire_ = false;\n      this.args_ = null;\n    }\n  }\n\n  /**\n   * Pauses the throttle.  All pending and future action callbacks will be\n   * delayed until the throttle is resumed.  Pauses can be nested.\n   */\n  pause() {\n    this.pauseCount_++;\n  }\n\n  /**\n   * Resumes the throttle.  If doing so drops the pausing count to zero,\n   * pending action callbacks will be executed as soon as possible, but\n   * still no sooner than an interval's delay after the previous call.\n   * Future action callbacks will be executed as normal.\n   */\n  resume() {\n    this.pauseCount_--;\n    if (!this.pauseCount_ && this.shouldFire_ && !this.timer_) {\n      this.shouldFire_ = false;\n      this.doAction_();\n    }\n  }\n\n  /** @override */\n  disposeInternal() {\n    super.disposeInternal();\n    this.stop();\n  }\n\n  /**\n   * Handler for the timer to fire the throttle\n   * @private\n   */\n  onTimer_() {\n    this.timer_ = null;\n\n    if (this.shouldFire_ && !this.pauseCount_) {\n      this.shouldFire_ = false;\n      this.doAction_();\n    }\n  }\n\n  /**\n   * Calls the callback\n   * @private\n   */\n  doAction_() {\n    this.timer_ = Timer.callOnce(() => this.onTimer_(), this.interval_);\n    const args = this.args_;\n    // release memory first so it always happens even if listener throws\n    this.args_ = null;\n    this.listener_.apply(null, args);\n  }\n}\n\nexports = Throttle;\n","~:compiled-at",1681642518869,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.throttle.js\",\n\"lineCount\":64,\n\"mappings\":\"AAYA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,qBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,aAAaH,IAAKI,CAAAA,OAAL,CAAa,iBAAb,CAAnB;AACA,QAAMC,QAAQL,IAAKI,CAAAA,OAAL,CAAa,YAAb,CAAd;AAWA,OAAME,SAAN,QAAuBH,WAAvB;AAQEI,eAAW,CAACC,QAAD,EAAWC,QAAX,EAAqBC,OAArB,CAA8B;AACvC,WAAA,EAAA;AAMA,UAAKC,CAAAA,SAAL,GAAiBD,OAAA,IAAW,IAAX,GAAkBF,QAASI,CAAAA,IAAT,CAAcF,OAAd,CAAlB,GAA2CF,QAA5D;AAOA,UAAKK,CAAAA,SAAL,GAAiBJ,QAAjB;AAOA,UAAKK,CAAAA,KAAL,GAAa,IAAb;AAOA,UAAKC,CAAAA,WAAL,GAAmB,KAAnB;AASA,UAAKC,CAAAA,WAAL,GAAmB,CAAnB;AAOA,UAAKC,CAAAA,MAAL,GAAc,IAAd;AA5CuC;AAsDzCC,QAAI,CAACC,QAAD,CAAW;AACb,UAAKL,CAAAA,KAAL,GAAaM,SAAb;AACA,UAAI,CAAC,IAAKH,CAAAA,MAAV,IAAoB,CAAC,IAAKD,CAAAA,WAA1B;AACE,YAAKK,CAAAA,SAAL,EAAA;AADF;AAGE,YAAKN,CAAAA,WAAL,GAAmB,IAAnB;AAHF;AAFa;AAafO,QAAI,EAAG;AACL,UAAI,IAAKL,CAAAA,MAAT,CAAiB;AACfZ,aAAMkB,CAAAA,KAAN,CAAY,IAAKN,CAAAA,MAAjB,CAAA;AACA,YAAKA,CAAAA,MAAL,GAAc,IAAd;AACA,YAAKF,CAAAA,WAAL,GAAmB,KAAnB;AACA,YAAKD,CAAAA,KAAL,GAAa,IAAb;AAJe;AADZ;AAaPU,SAAK,EAAG;AACN,UAAKR,CAAAA,WAAL,EAAA;AADM;AAURS,UAAM,EAAG;AACP,UAAKT,CAAAA,WAAL,EAAA;AACA,UAAI,CAAC,IAAKA,CAAAA,WAAV,IAAyB,IAAKD,CAAAA,WAA9B,IAA6C,CAAC,IAAKE,CAAAA,MAAnD,CAA2D;AACzD,YAAKF,CAAAA,WAAL,GAAmB,KAAnB;AACA,YAAKM,CAAAA,SAAL,EAAA;AAFyD;AAFpD;AASTK,mBAAe,EAAG;AAChB,WAAMA,CAAAA,eAAN,EAAA;AACA,UAAKJ,CAAAA,IAAL,EAAA;AAFgB;AASlBK,YAAQ,EAAG;AACT,UAAKV,CAAAA,MAAL,GAAc,IAAd;AAEA,UAAI,IAAKF,CAAAA,WAAT,IAAwB,CAAC,IAAKC,CAAAA,WAA9B,CAA2C;AACzC,YAAKD,CAAAA,WAAL,GAAmB,KAAnB;AACA,YAAKM,CAAAA,SAAL,EAAA;AAFyC;AAHlC;AAaXA,aAAS,EAAG;AACV,UAAKJ,CAAAA,MAAL,GAAcZ,KAAMuB,CAAAA,QAAN,CAAe,EAAA,IAAM,IAAKD,CAAAA,QAAL,EAArB,EAAsC,IAAKd,CAAAA,SAA3C,CAAd;AACA,YAAMgB,OAAO,IAAKf,CAAAA,KAAlB;AAEA,UAAKA,CAAAA,KAAL,GAAa,IAAb;AACA,UAAKH,CAAAA,SAAUmB,CAAAA,KAAf,CAAqB,IAArB,EAA2BD,IAA3B,CAAA;AALU;AAjId;AA0IAE,SAAA,GAAUzB,QAAV;AAzJA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/async/throttle.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Definition of the goog.async.Throttle class.\\n *\\n * @see ../demos/timers.html\\n */\\n\\ngoog.module('goog.async.Throttle');\\ngoog.module.declareLegacyNamespace();\\n\\nconst Disposable = goog.require('goog.Disposable');\\nconst Timer = goog.require('goog.Timer');\\n\\n\\n/**\\n * Throttle will perform an action that is passed in no more than once\\n * per interval (specified in milliseconds). If it gets multiple signals\\n * to perform the action while it is waiting, it will only perform the action\\n * once at the end of the interval.\\n * @final\\n * @template T\\n */\\nclass Throttle extends Disposable {\\n  /**\\n   * @param {function(this: T, ...?)} listener Function to callback when the\\n   *     action is triggered.\\n   * @param {number} interval Interval over which to throttle. The listener can\\n   *     only be called once per interval.\\n   * @param {T=} handler Object in whose scope to call the listener.\\n   */\\n  constructor(listener, interval, handler) {\\n    super();\\n    /**\\n     * Function to callback\\n     * @type {function(this: T, ...?)}\\n     * @private\\n     */\\n    this.listener_ = handler != null ? listener.bind(handler) : listener;\\n\\n    /**\\n     * Interval for the throttle time\\n     * @type {number}\\n     * @private\\n     */\\n    this.interval_ = interval;\\n\\n    /**\\n     * The last arguments passed into `fire`, or null if there is no pending\\n     * call.\\n     * @private {?IArrayLike}\\n     */\\n    this.args_ = null;\\n\\n    /**\\n     * Indicates that the action is pending and needs to be fired.\\n     * @type {boolean}\\n     * @private\\n     */\\n    this.shouldFire_ = false;\\n\\n    /**\\n     * Indicates the count of nested pauses currently in effect on the throttle.\\n     * When this count is not zero, fired actions will be postponed until the\\n     * throttle is resumed enough times to drop the pause count to zero.\\n     * @type {number}\\n     * @private\\n     */\\n    this.pauseCount_ = 0;\\n\\n    /**\\n     * Timer for scheduling the next callback\\n     * @type {?number}\\n     * @private\\n     */\\n    this.timer_ = null;\\n  }\\n\\n  /**\\n   * Notifies the throttle that the action has happened. It will throttle\\n   * the call so that the callback is not called too often according to the\\n   * interval parameter passed to the constructor, passing the arguments\\n   * from the last call of this function into the throttled function.\\n   * @param {...?} var_args Arguments to pass on to the throttled function.\\n   */\\n  fire(var_args) {\\n    this.args_ = arguments;\\n    if (!this.timer_ && !this.pauseCount_) {\\n      this.doAction_();\\n    } else {\\n      this.shouldFire_ = true;\\n    }\\n  }\\n\\n  /**\\n   * Cancels any pending action callback. The throttle can be restarted by\\n   * calling {@link #fire}.\\n   */\\n  stop() {\\n    if (this.timer_) {\\n      Timer.clear(this.timer_);\\n      this.timer_ = null;\\n      this.shouldFire_ = false;\\n      this.args_ = null;\\n    }\\n  }\\n\\n  /**\\n   * Pauses the throttle.  All pending and future action callbacks will be\\n   * delayed until the throttle is resumed.  Pauses can be nested.\\n   */\\n  pause() {\\n    this.pauseCount_++;\\n  }\\n\\n  /**\\n   * Resumes the throttle.  If doing so drops the pausing count to zero,\\n   * pending action callbacks will be executed as soon as possible, but\\n   * still no sooner than an interval's delay after the previous call.\\n   * Future action callbacks will be executed as normal.\\n   */\\n  resume() {\\n    this.pauseCount_--;\\n    if (!this.pauseCount_ && this.shouldFire_ && !this.timer_) {\\n      this.shouldFire_ = false;\\n      this.doAction_();\\n    }\\n  }\\n\\n  /** @override */\\n  disposeInternal() {\\n    super.disposeInternal();\\n    this.stop();\\n  }\\n\\n  /**\\n   * Handler for the timer to fire the throttle\\n   * @private\\n   */\\n  onTimer_() {\\n    this.timer_ = null;\\n\\n    if (this.shouldFire_ && !this.pauseCount_) {\\n      this.shouldFire_ = false;\\n      this.doAction_();\\n    }\\n  }\\n\\n  /**\\n   * Calls the callback\\n   * @private\\n   */\\n  doAction_() {\\n    this.timer_ = Timer.callOnce(() => this.onTimer_(), this.interval_);\\n    const args = this.args_;\\n    // release memory first so it always happens even if listener throws\\n    this.args_ = null;\\n    this.listener_.apply(null, args);\\n  }\\n}\\n\\nexports = Throttle;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"Disposable\",\"require\",\"Timer\",\"Throttle\",\"constructor\",\"listener\",\"interval\",\"handler\",\"listener_\",\"bind\",\"interval_\",\"args_\",\"shouldFire_\",\"pauseCount_\",\"timer_\",\"fire\",\"var_args\",\"arguments\",\"doAction_\",\"stop\",\"clear\",\"pause\",\"resume\",\"disposeInternal\",\"onTimer_\",\"callOnce\",\"args\",\"apply\",\"exports\"]\n}\n"]