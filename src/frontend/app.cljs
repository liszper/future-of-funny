(ns frontend.app
  (:refer-clojure :exclude [Card])
  (:require [reagent.core :as reagent :refer [atom]]
            ["@chakra-ui/react" :as ui]
            ["moment" :as Moment]
            [frontend.ws :as ws]
            [brave.swords :as x]
            [cljs.reader :refer [read-string]]
            [re-frame.core :refer [dispatch subscribe]]
            [macros :refer [safe safe-await]]
            [secretary.core :as secretary :refer-macros [defroute]]))

(def ChakraProvider (reagent/adapt-react-class ui/ChakraProvider))

;Components:
(def Box2 (reagent/adapt-react-class ui/Box))
(def Card (reagent/adapt-react-class ui/Card))
(def CardHeader (reagent/adapt-react-class ui/CardHeader))
(def CardBody (reagent/adapt-react-class ui/CardBody))
(def CardFooter (reagent/adapt-react-class ui/CardFooter))

(def Stack (reagent/adapt-react-class ui/Stack))
(def SimpleGrid (reagent/adapt-react-class ui/SimpleGrid))
(def Flex (reagent/adapt-react-class ui/Flex))
(def Wrap (reagent/adapt-react-class ui/Wrap))
(def WrapItem (reagent/adapt-react-class ui/WrapItem))


(def ButtonGroup (reagent/adapt-react-class ui/ButtonGroup))
(def Button (reagent/adapt-react-class ui/Button))

(def AvatarGroup (reagent/adapt-react-class ui/AvatarGroup))
(def Avatar (reagent/adapt-react-class ui/Avatar))

(def Image (reagent/adapt-react-class ui/Image))
(def Text (reagent/adapt-react-class ui/Text))

(def Input (reagent/adapt-react-class ui/Input))
(def Tabs (reagent/adapt-react-class ui/Tabs))
(def TabList (reagent/adapt-react-class ui/TabList))
(def TabPanels (reagent/adapt-react-class ui/TabPanels))
(def Tab (reagent/adapt-react-class ui/Tab))
(def TabPanel (reagent/adapt-react-class ui/TabPanel))

(def Heading (reagent/adapt-react-class ui/Heading))
(def Divider (reagent/adapt-react-class ui/Divider))

(def SkeletonCircle (reagent/adapt-react-class ui/SkeletonCircle))
(def SkeletonText (reagent/adapt-react-class ui/SkeletonText))

(def Menu (reagent/adapt-react-class ui/Menu))
(def MenuButton (reagent/adapt-react-class ui/MenuButton))
(def MenuList (reagent/adapt-react-class ui/MenuList))
(def MenuItem (reagent/adapt-react-class ui/MenuItem))

(def IconButton (reagent/adapt-react-class ui/IconButton))
;(def HamburgerIcon (reagent/adapt-react-class ui/HamburgerIcon))

(def Drawer (reagent/adapt-react-class ui/Drawer))
(def DrawerHeader (reagent/adapt-react-class ui/DrawerHeader))
(def DrawerBody (reagent/adapt-react-class ui/DrawerBody))
(def DrawerOverlay (reagent/adapt-react-class ui/DrawerOverlay))
(def DrawerContent (reagent/adapt-react-class ui/DrawerContent))
(def DrawerCloseButton (reagent/adapt-react-class ui/DrawerCloseButton))

(def Modal (reagent/adapt-react-class ui/Modal))
(def ModalOverlay (reagent/adapt-react-class ui/ModalOverlay))
(def ModalContent (reagent/adapt-react-class ui/ModalContent))
(def ModalHeader (reagent/adapt-react-class ui/ModalHeader))
(def ModalCloseButton (reagent/adapt-react-class ui/ModalCloseButton))
(def ModalBody (reagent/adapt-react-class ui/ModalBody))
(def ModalFooter (reagent/adapt-react-class ui/ModalFooter))



(defn to-clj-map [hash-map]
  (js->clj hash-map :keywordize-keys true))

(defn for-all [s comp]
  (map-indexed (fn [i data] ^{:key i} [:f> comp i data]) s))

(defn toaster-button [f options label]
  (let [toast (ui/useToast)]
    [Button {:on-click #(do (f) (toast (clj->js options)))}
     label]))

(defn drawer [body]
  (let [{:keys [isOpen onOpen onClose]} (to-clj-map (ui/useDisclosure))]
    [:<>
     [Button {:on-click #(onOpen)} "Open Drawer"]
     [Drawer {:on-close #(onClose) :is-open isOpen :size :md :placement :left}
      [DrawerOverlay]
      [DrawerContent
       [DrawerCloseButton]
       [DrawerHeader "Drawer contents"]
       [DrawerBody body]]]]))

(defn modal [body]
  (let [{:keys [isOpen onOpen onClose]} (to-clj-map (ui/useDisclosure))]
    [:<>
     [Button {:on-click (fn [] (onOpen))} "Open Modal"]
     [Modal {:is-centered true :is-open isOpen :on-close #(onClose)}
      [ModalOverlay {:bg "blackAlpha.300" :backdrop-filter "blur(10px) hue-rotate(90deg)"}]
      [ModalContent
       [ModalHeader "Modal Title"]
       [ModalCloseButton]
       [ModalBody
        [Text "Custom backdrop filters!"]]
       [ModalFooter
        [Button {:on-click #(onClose)} "Close"]]]]]))


(def data (atom "No data"))

(defn ws-handler [{:keys [message message-type]}]
  (dispatch [:db/set [:data] message]))

(def current-page (atom nil))

(defn navigation []
  [:div
   [:a {:href "/"} "Home Page"]
   [:span {:style {:padding "5px"}}]
   [:a {:href "/page-one"} "Page One"]
   [:span {:style {:padding "5px"}}]])

(defn card [i data]
  [Card {:max-w "sm"}
   [CardBody
    [Image {:src "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80", :alt "Green double couch with wooden legs", :border-radius "lg"}]
    [Stack {:mt "6", :spacing "3"}
     [Heading {:size "md"} "Living room Sofa " i]
     [Text "This sofa is perfect for modern tropical spaces, baroque inspired\n        spaces, earthy toned spaces and for people who love a chic design with a\n        sprinkle of vintage design."]
     [Text {:color "blue.600", :font-size "2xl"} "$450"]]]
   [Divider]
   [CardFooter
    [ButtonGroup {:spacing "2"}
     [Button {:variant "solid", :color-scheme "blue"} "Buy now"]
     [Button {:variant "ghost", :color-scheme "blue"} "Add to cart"]]]])

(defn advanced-card [i [id data]]
  [Card {:padding "0" :box-shadow "lg" :bg "white" :maxW "sm" :minW "sm"}
   [CardHeader
    [Flex {:spacing "4"}
     [Flex {:flex "1", :gap "4", :alignItems "center", :flexWrap "wrap"}
      [Avatar {:name "Segun Adebayo", :src "https://bit.ly/sage-adebayo"}]
      [Box2
       [Heading {:size "sm"} (get data "title")]
       [Text (.format (.unix Moment (get data "date")) "DD/MM/YYYY");(.unix Moment (get data "date"));(.toDateString (new js/Date (safe (int (get data "date")))))
        ]]]
     [IconButton {:variant "ghost", :colorScheme "gray", :aria-label "See menu", :icon ""}]]]
   [CardBody
    [Text (str (dissoc data "title" "id" "date"))]]
   [CardFooter {:justify "space-between", :flexWrap "wrap"}
    [Button {:flex "1", :variant "ghost", :leftIcon "BiLike"} "Like"]
    [Button {:flex "1", :variant "ghost", :leftIcon "BiChat"} "Comment"]
    [Button {:flex "1", :variant "ghost", :leftIcon "BiShare"} "Share"]]])

(defn skeletonCard [i data]
  [Box2 {:padding "6" :box-shadow "lg" :bg "white" :maxW "sm" :minW "sm"}
   [SkeletonCircle {:size "10"}]
   [SkeletonText {:mt "4" :no-of-lines 8 :spacing "4" :skeleton-height "2"}]])

(defn contentCard [i [id data]]
  [Box2 {:padding "6" :box-shadow "lg" :bg "white" :maxW "sm" :minW "sm"}
   [:h3 (get data "title") " (" (str id) ")"]
   [:p (str data)]])

(defn home-page []
  (let [test (subscribe [:db/get [:data]])

        text (atom "")
        text2 (atom "")

        password (atom "")
        auth (atom "")]
    [Tabs
     [TabList
          ;[Menu
          ; [MenuButton  ;icon [HamburgerIcon] 
          ;  [Button "Actions"]
          ; ;[IconButton {:aria-label "Options"}]           ; :variant :outline}
          ;  ]
          ; [MenuList
          ;  [MenuItem "test"]]]
      [Tab "Login"]
      [Tab "Messages"]
      [Tab "Three"]]
     [TabPanels
      [TabPanel
       [Wrap {:spacing "30px" :justify "flex-start"}
        [Box2 {:width "lg" :borderWidth "1px" :borderRadius "lg" :p 6}
         [Stack {:spacing 3}
          [Input {:placeholder "Phone number" :type :tel :value @text :on-change #(reset! text (-> % .-target .-value))}]
          [Input {:placeholder "Password" :type :password :value @password :on-change #(reset! password (-> % .-target .-value))}]
          [Button {:on-click #(ws/send! "login" {:phoneNumber @text :password @password :phoneCode ""})} "Login"]
          [Input {:placeholder "Auth code" :value @auth :on-change #(reset! auth (-> % .-target .-value))}]
          [Button {:on-click #(ws/send! "login" {:phoneNumber "" :password "" :phoneCode @auth})} "Submit"]]]
        [Box2 {:width "lg" :borderWidth "1px" :borderRadius "lg" :p 6}
         [Stack {:spacing 3}
          [Input {:placeholder "Message" :type :tel :value @text2 :on-change #(reset! text2 (-> % .-target .-value))}]
          [Button {:on-click #(ws/send! "dm" {:to "me" :message @text2})} "Message me!"]
          [Button {:on-click #(ws/send! "init" {:test "out"})} "Init test"]
          [AvatarGroup {:size :md :max 3}
           [Avatar {:name "Ryan Florence" :src "https://bit.ly/ryan-florence"}]
           [Avatar {:name "Segun Adebayo" :src "https://bit.ly/sage-adebayo"}]
           [Avatar {:name "Kent Dodds" :src "https://bit.ly/kent-c-dodds"}]
           [Avatar {:name "Prosper Otemuyiwa" :src "https://bit.ly/prosper-baba"}]
           [Avatar {:name "Christian Nwamba" :src "https://bit.ly/code-beast"}]]
          [:f> toaster-button
           (fn [] (ws/send! "login" {:nothing :at-all}))
           {:title "title" :description "description" :status "success" :duration 9000 :isClosable true}
           "Test toast"]
          [Divider]
          [:f> drawer [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.\n              Consequat nisl vel pretium lectus quam id. Semper quis lectus\n              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus\n              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor\n              magna eget est lorem. Erat imperdiet sed euismod nisi porta.\n              Lectus vestibulum mattis ullamcorper velit."]]
          [:f> modal]]]]]
      [TabPanel
       [Wrap {:spacing "30px" :justify "center"}
        (for-all @test advanced-card)]]
      [TabPanel
       [:p]]]]))

(defn page-one []
  [:div
   [:h1 "Page One"]])

(defn view []
  [ChakraProvider
   ;[navigation]
   [@current-page]])

;-----------------------------------------------------------------------------------------------

(secretary/set-config! :prefix "/")

(defroute "/" []
  (.log js/console "home page")
  (reset! current-page home-page))

(defroute "/page-one" []
  (.log js/console "page-one")
  (reset! current-page page-one))

; the server side doesn't have history, so we want to make sure current-page is populated
(reset! current-page home-page)