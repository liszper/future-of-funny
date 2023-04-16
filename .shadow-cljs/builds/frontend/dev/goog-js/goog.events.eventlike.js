["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/eventlike.js"],"~:js","goog.provide(\"goog.events.EventLike\");\ngoog.requireType(\"goog.events.Event\");\ngoog.requireType(\"goog.events.EventId\");\ngoog.events.EventLike;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A typedef for event like objects that are dispatchable via the\n * goog.events.dispatchEvent function.\n */\ngoog.provide('goog.events.EventLike');\n\ngoog.requireType('goog.events.Event');\ngoog.requireType('goog.events.EventId');\n\n/**\n * A typedef for event like objects that are dispatchable via the\n * goog.events.dispatchEvent function. strings are treated as the type for a\n * goog.events.Event. Objects are treated as an extension of a new\n * goog.events.Event with the type property of the object being used as the type\n * of the Event.\n * @typedef {string|Object|goog.events.Event|goog.events.EventId}\n */\ngoog.events.EventLike;\n","~:compiled-at",1681642518852,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.eventlike.js\",\n\"lineCount\":5,\n\"mappings\":\"AAUAA,IAAKC,CAAAA,OAAL,CAAa,uBAAb,CAAA;AAEAD,IAAKE,CAAAA,WAAL,CAAiB,mBAAjB,CAAA;AACAF,IAAKE,CAAAA,WAAL,CAAiB,qBAAjB,CAAA;AAUAF,IAAKG,CAAAA,MAAOC,CAAAA,SAAZ;;\",\n\"sources\":[\"goog/events/eventlike.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A typedef for event like objects that are dispatchable via the\\n * goog.events.dispatchEvent function.\\n */\\ngoog.provide('goog.events.EventLike');\\n\\ngoog.requireType('goog.events.Event');\\ngoog.requireType('goog.events.EventId');\\n\\n/**\\n * A typedef for event like objects that are dispatchable via the\\n * goog.events.dispatchEvent function. strings are treated as the type for a\\n * goog.events.Event. Objects are treated as an extension of a new\\n * goog.events.Event with the type property of the object being used as the type\\n * of the Event.\\n * @typedef {string|Object|goog.events.Event|goog.events.EventId}\\n */\\ngoog.events.EventLike;\\n\"],\n\"names\":[\"goog\",\"provide\",\"requireType\",\"events\",\"EventLike\"]\n}\n"]