goog.provide('frontend.app');
var module$node_modules$$chakra_ui$react$dist$index=shadow.js.require("module$node_modules$$chakra_ui$react$dist$index", {});
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
frontend.app.ChakraProvider = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ChakraProvider);
frontend.app.Box2 = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Box);
frontend.app.Card = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Card);
frontend.app.CardHeader = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.CardHeader);
frontend.app.CardBody = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.CardBody);
frontend.app.CardFooter = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.CardFooter);
frontend.app.Stack = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Stack);
frontend.app.SimpleGrid = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.SimpleGrid);
frontend.app.Flex = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Flex);
frontend.app.Wrap = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Wrap);
frontend.app.WrapItem = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.WrapItem);
frontend.app.ButtonGroup = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ButtonGroup);
frontend.app.Button = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Button);
frontend.app.AvatarGroup = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.AvatarGroup);
frontend.app.Avatar = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Avatar);
frontend.app.Image = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Image);
frontend.app.Text = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Text);
frontend.app.Input = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Input);
frontend.app.Tabs = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Tabs);
frontend.app.TabList = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.TabList);
frontend.app.TabPanels = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.TabPanels);
frontend.app.Tab = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Tab);
frontend.app.TabPanel = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.TabPanel);
frontend.app.Heading = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Heading);
frontend.app.Divider = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Divider);
frontend.app.SkeletonCircle = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.SkeletonCircle);
frontend.app.SkeletonText = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.SkeletonText);
frontend.app.Menu = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Menu);
frontend.app.MenuButton = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.MenuButton);
frontend.app.MenuList = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.MenuList);
frontend.app.MenuItem = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.MenuItem);
frontend.app.IconButton = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.IconButton);
frontend.app.Drawer = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Drawer);
frontend.app.DrawerHeader = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.DrawerHeader);
frontend.app.DrawerBody = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.DrawerBody);
frontend.app.DrawerOverlay = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.DrawerOverlay);
frontend.app.DrawerContent = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.DrawerContent);
frontend.app.DrawerCloseButton = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.DrawerCloseButton);
frontend.app.Modal = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.Modal);
frontend.app.ModalOverlay = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalOverlay);
frontend.app.ModalContent = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalContent);
frontend.app.ModalHeader = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalHeader);
frontend.app.ModalCloseButton = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalCloseButton);
frontend.app.ModalBody = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalBody);
frontend.app.ModalFooter = reagent.core.adapt_react_class(module$node_modules$$chakra_ui$react$dist$index.ModalFooter);
frontend.app.to_clj_map = (function frontend$app$to_clj_map(hash_map){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(hash_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
frontend.app.for_all = (function frontend$app$for_all(s,comp){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),comp,i,data], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),s);
});
frontend.app.toaster_button = (function frontend$app$toaster_button(f,options,label){
var toast = module$node_modules$$chakra_ui$react$dist$index.useToast();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var G__49977 = cljs.core.clj__GT_js(options);
return (toast.cljs$core$IFn$_invoke$arity$1 ? toast.cljs$core$IFn$_invoke$arity$1(G__49977) : toast.call(null,G__49977));
})], null),label], null);
});
frontend.app.drawer = (function frontend$app$drawer(body){
var map__49978 = frontend.app.to_clj_map(module$node_modules$$chakra_ui$react$dist$index.useDisclosure());
var map__49978__$1 = cljs.core.__destructure_map(map__49978);
var isOpen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49978__$1,new cljs.core.Keyword(null,"isOpen","isOpen",-973300387));
var onOpen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49978__$1,new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457));
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49978__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (onOpen.cljs$core$IFn$_invoke$arity$0 ? onOpen.cljs$core$IFn$_invoke$arity$0() : onOpen.call(null));
})], null),"Open Drawer"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Drawer,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
}),new cljs.core.Keyword(null,"is-open","is-open",1660707069),isOpen,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.DrawerOverlay], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.DrawerContent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.DrawerCloseButton], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.DrawerHeader,"Drawer contents"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.DrawerBody,body], null)], null)], null)], null);
});
frontend.app.modal = (function frontend$app$modal(body){
var map__49979 = frontend.app.to_clj_map(module$node_modules$$chakra_ui$react$dist$index.useDisclosure());
var map__49979__$1 = cljs.core.__destructure_map(map__49979);
var isOpen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49979__$1,new cljs.core.Keyword(null,"isOpen","isOpen",-973300387));
var onOpen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49979__$1,new cljs.core.Keyword(null,"onOpen","onOpen",-2073338457));
var onClose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49979__$1,new cljs.core.Keyword(null,"onClose","onClose",1513531338));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (onOpen.cljs$core$IFn$_invoke$arity$0 ? onOpen.cljs$core$IFn$_invoke$arity$0() : onOpen.call(null));
})], null),"Open Modal"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-centered","is-centered",-1937607640),true,new cljs.core.Keyword(null,"is-open","is-open",1660707069),isOpen,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalOverlay,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bg","bg",-206688421),"blackAlpha.300",new cljs.core.Keyword(null,"backdrop-filter","backdrop-filter",-735928241),"blur(10px) hue-rotate(90deg)"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalContent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalHeader,"Modal Title"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalCloseButton], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalBody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Text,"Custom backdrop filters!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ModalFooter,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (onClose.cljs$core$IFn$_invoke$arity$0 ? onClose.cljs$core$IFn$_invoke$arity$0() : onClose.call(null));
})], null),"Close"], null)], null)], null)], null)], null);
});
frontend.app.data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("No data");
frontend.app.ws_handler = (function frontend$app$ws_handler(p__49980){
var map__49981 = p__49980;
var map__49981__$1 = cljs.core.__destructure_map(map__49981);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var message_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49981__$1,new cljs.core.Keyword(null,"message-type","message-type",1983867728));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","set","db/set",304605756),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),message], null));
});
frontend.app.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.app.navigation = (function frontend$app$navigation(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page-one"], null),"Page One"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)], null)], null);
});
frontend.app.card = (function frontend$app$card(i,data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-w","max-w",1250258019),"sm"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.CardBody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",new cljs.core.Keyword(null,"alt","alt",-3214426),"Green double couch with wooden legs",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"lg"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Stack,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mt","mt",1155907933),"6",new cljs.core.Keyword(null,"spacing","spacing",204422175),"3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Heading,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"md"], null),"Living room Sofa ",i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Text,"This sofa is perfect for modern tropical spaces, baroque inspired\n        spaces, earthy toned spaces and for people who love a chic design with a\n        sprinkle of vintage design."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"blue.600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2xl"], null),"$450"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.CardFooter,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ButtonGroup,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),"2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"solid",new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),"blue"], null),"Buy now"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"color-scheme","color-scheme",-903842295),"blue"], null),"Add to cart"], null)], null)], null)], null);
});
frontend.app.advanced_card = (function frontend$app$advanced_card(i,p__49982){
var vec__49983 = p__49982;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Card,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"lg",new cljs.core.Keyword(null,"bg","bg",-206688421),"white",new cljs.core.Keyword(null,"maxW","maxW",-2030323814),"sm",new cljs.core.Keyword(null,"minW","minW",-2053490651),"sm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.CardHeader,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Flex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),"4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Flex,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"gap","gap",80255254),"4",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Segun Adebayo",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/sage-adebayo"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Box2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Heading,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"title")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Text,module$node_modules$moment$moment.unix(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"date")).format("DD/MM/YYYY")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.IconButton,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"colorScheme","colorScheme",320249152),"gray",new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"See menu",new cljs.core.Keyword(null,"icon","icon",1679606541),""], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.CardBody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Text,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,"title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["id","date"], 0)))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.CardFooter,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify","justify",-722524056),"space-between",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),"BiLike"], null),"Like"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),"BiChat"], null),"Comment"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"variant","variant",-424354234),"ghost",new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),"BiShare"], null),"Share"], null)], null)], null);
});
frontend.app.skeletonCard = (function frontend$app$skeletonCard(i,data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Box2,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"lg",new cljs.core.Keyword(null,"bg","bg",-206688421),"white",new cljs.core.Keyword(null,"maxW","maxW",-2030323814),"sm",new cljs.core.Keyword(null,"minW","minW",-2053490651),"sm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.SkeletonCircle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.SkeletonText,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mt","mt",1155907933),"4",new cljs.core.Keyword(null,"no-of-lines","no-of-lines",256159699),(8),new cljs.core.Keyword(null,"spacing","spacing",204422175),"4",new cljs.core.Keyword(null,"skeleton-height","skeleton-height",1503444047),"2"], null)], null)], null);
});
frontend.app.contentCard = (function frontend$app$contentCard(i,p__49986){
var vec__49987 = p__49986;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Box2,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"lg",new cljs.core.Keyword(null,"bg","bg",-206688421),"white",new cljs.core.Keyword(null,"maxW","maxW",-2030323814),"sm",new cljs.core.Keyword(null,"minW","minW",-2053490651),"sm"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"title")," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),")"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)], null)], null);
});
frontend.app.home_page = (function frontend$app$home_page(){
var test = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get","db/get",1683179813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null)], null));
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var text2 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var auth = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Tabs,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.TabList,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Tab,"Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Tab,"Messages"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Tab,"Three"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.TabPanels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.TabPanel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Wrap,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spacing","spacing",204422175),"30px",new cljs.core.Keyword(null,"justify","justify",-722524056),"flex-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Box2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"lg",new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),"1px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"lg",new cljs.core.Keyword(null,"p","p",151049309),(6)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Phone number",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49990_SHARP_){
return cljs.core.reset_BANG_(text,p1__49990_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49991_SHARP_){
return cljs.core.reset_BANG_(password,p1__49991_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ws.send_BANG_("login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),cljs.core.deref(text),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref(password),new cljs.core.Keyword(null,"phoneCode","phoneCode",-946871223),""], null));
})], null),"Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Auth code",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(auth),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49992_SHARP_){
return cljs.core.reset_BANG_(auth,p1__49992_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ws.send_BANG_("login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"phoneCode","phoneCode",-946871223),cljs.core.deref(auth)], null));
})], null),"Submit"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Box2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"lg",new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),"1px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"lg",new cljs.core.Keyword(null,"p","p",151049309),(6)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Stack,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spacing","spacing",204422175),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Message",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text2),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49993_SHARP_){
return cljs.core.reset_BANG_(text2,p1__49993_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ws.send_BANG_("dm",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to","to",192099007),"me",new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.deref(text2)], null));
})], null),"Message me!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.ws.send_BANG_("init",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),"out"], null));
})], null),"Init test"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.AvatarGroup,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655),new cljs.core.Keyword(null,"max","max",61366548),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Ryan Florence",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/ryan-florence"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Segun Adebayo",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/sage-adebayo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kent Dodds",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/kent-c-dodds"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Prosper Otemuyiwa",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/prosper-baba"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Avatar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Christian Nwamba",new cljs.core.Keyword(null,"src","src",-1651076051),"https://bit.ly/code-beast"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),frontend.app.toaster_button,(function (){
return frontend.ws.send_BANG_("login",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"at-all","at-all",-1599220671)], null));
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"title",new cljs.core.Keyword(null,"description","description",-1428560544),"description",new cljs.core.Keyword(null,"status","status",-1997798413),"success",new cljs.core.Keyword(null,"duration","duration",1444101068),(9000),new cljs.core.Keyword(null,"isClosable","isClosable",541360918),true], null),"Test toast"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Divider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),frontend.app.drawer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\n              Consequat nisl vel pretium lectus quam id. Semper quis lectus\n              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus\n              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor\n              magna eget est lorem. Erat imperdiet sed euismod nisi porta.\n              Lectus vestibulum mattis ullamcorper velit."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),frontend.app.modal], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.TabPanel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.Wrap,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spacing","spacing",204422175),"30px",new cljs.core.Keyword(null,"justify","justify",-722524056),"center"], null),frontend.app.for_all(cljs.core.deref(test),frontend.app.advanced_card)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.TabPanel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null)], null)], null)], null);
});
frontend.app.page_one = (function frontend$app$page_one(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Page One"], null)], null);
});
frontend.app.view = (function frontend$app$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.ChakraProvider,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(frontend.app.current_page)], null)], null);
});
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__31406__auto___50002 = (function (params__31407__auto__){
if(cljs.core.map_QMARK_(params__31407__auto__)){
var map__49994 = params__31407__auto__;
var map__49994__$1 = cljs.core.__destructure_map(map__49994);
console.log("home page");

return cljs.core.reset_BANG_(frontend.app.current_page,frontend.app.home_page);
} else {
if(cljs.core.vector_QMARK_(params__31407__auto__)){
var vec__49995 = params__31407__auto__;
console.log("home page");

return cljs.core.reset_BANG_(frontend.app.current_page,frontend.app.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__31406__auto___50002);

var action__31406__auto___50003 = (function (params__31407__auto__){
if(cljs.core.map_QMARK_(params__31407__auto__)){
var map__49998 = params__31407__auto__;
var map__49998__$1 = cljs.core.__destructure_map(map__49998);
console.log("page-one");

return cljs.core.reset_BANG_(frontend.app.current_page,frontend.app.page_one);
} else {
if(cljs.core.vector_QMARK_(params__31407__auto__)){
var vec__49999 = params__31407__auto__;
console.log("page-one");

return cljs.core.reset_BANG_(frontend.app.current_page,frontend.app.page_one);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/page-one",action__31406__auto___50003);

cljs.core.reset_BANG_(frontend.app.current_page,frontend.app.home_page);

//# sourceMappingURL=frontend.app.js.map
