System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, TiledMap, _dec, _class, _crd, ccclass, property, Bgload;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      TiledMap = _cc.TiledMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96b69NMg8VDRaAZjs/wkJQn", "bgload", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      /**
       * Predefined variables
       * Name = Bgload
       * DateTime = Mon Sep 13 2021 16:54:56 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = bgload.ts
       * FileBasenameNoExtension = bgload
       * URL = db://assets/Typescript/bgload.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Bgload", Bgload = (_dec = ccclass('Bgload'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bgload, _Component);

        function Bgload() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Bgload.prototype;

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        _proto.start = function start() {
          console.log(this.node.width);
          console.log(this.node.getComponent(TiledMap).getTileSize());
          this.node.on(Node.EventType.TOUCH_START, function (touch, event) {
            var abc = Math.floor(touch.getUILocation().x / 16);
            console.log(abc);
            console.log(Math.floor(touch.getUILocation().y / 16));
          }, this); // [3]
        };

        _proto.update = function update() {};

        return Bgload;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bgload.js.map