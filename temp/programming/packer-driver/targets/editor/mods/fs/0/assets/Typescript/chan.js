System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, TiledMap, tween, Vec3, Animation, SpriteFrame, Sprite, Label, Prefab, instantiate, Button, Color, toDegree, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, Chan;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      TiledMap = _cc.TiledMap;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Animation = _cc.Animation;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      Color = _cc.Color;
      toDegree = _cc.toDegree;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "468080QwwVFfav43bjlXf9s", "chan", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Chan
       * DateTime = Wed Sep 15 2021 17:11:08 GMT+0530 (India Standard Time)
       * Author = chandan_krishnani
       * FileBasename = chan.ts
       * FileBasenameNoExtension = chan
       * URL = db://assets/Typescript/chan.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
       *
       */

      _export("Chan", Chan = (_dec = ccclass('Chan'), _dec2 = property(TiledMap), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Prefab), _dec6 = property(Label), _dec7 = property(SpriteFrame), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Button), _dec11 = property(Prefab), _dec12 = property(Prefab), _dec13 = property(Prefab), _dec14 = property(Button), _dec15 = property(Button), _dec(_class = (_class2 = (_temp = class Chan extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "abc", _descriptor, this);

          _initializerDefineProperty(this, "character1", _descriptor2, this);

          _initializerDefineProperty(this, "character2", _descriptor3, this);

          _initializerDefineProperty(this, "num", _descriptor4, this);

          _initializerDefineProperty(this, "rand", _descriptor5, this);

          _initializerDefineProperty(this, "dice", _descriptor6, this);

          _initializerDefineProperty(this, "knight", _descriptor7, this);

          _initializerDefineProperty(this, "robot", _descriptor8, this);

          _initializerDefineProperty(this, "butt", _descriptor9, this);

          _initializerDefineProperty(this, "snake", _descriptor10, this);

          _initializerDefineProperty(this, "ladder", _descriptor11, this);

          _initializerDefineProperty(this, "dice_pre", _descriptor12, this);

          _initializerDefineProperty(this, "player1_butt", _descriptor13, this);

          _initializerDefineProperty(this, "player2_butt", _descriptor14, this);

          _defineProperty(this, "player1_dice", null);

          _defineProperty(this, "player2_dice", null);

          _defineProperty(this, "player1_rand", 0);

          _defineProperty(this, "player2_rand", 0);

          _defineProperty(this, "player1_active", true);

          _defineProperty(this, "layer", null);

          _defineProperty(this, "tile1", null);

          _defineProperty(this, "tile2", null);

          _defineProperty(this, "tile3", null);

          _defineProperty(this, "tile4", null);

          _defineProperty(this, "tile5", null);

          _defineProperty(this, "tile6", null);

          _defineProperty(this, "tile7", null);

          _defineProperty(this, "count", 0);

          _defineProperty(this, "track", false);

          _defineProperty(this, "player1_current_pos", [0, 10]);

          _defineProperty(this, "player2_current_pos", [0, 10]);

          _defineProperty(this, "animation1", void 0);

          _defineProperty(this, "animation2", void 0);

          _defineProperty(this, "sum", 0);

          _defineProperty(this, "player1_entry", false);

          _defineProperty(this, "player2_entry", false);

          _defineProperty(this, "player1_cur_x", void 0);

          _defineProperty(this, "player2_cur_x", void 0);

          _defineProperty(this, "snake_array", []);

          _defineProperty(this, "snake_index", []);

          _defineProperty(this, "snake_count", 0);

          _defineProperty(this, "ladder_count", 0);

          _defineProperty(this, "ladder_array", []);

          _defineProperty(this, "ladder_index", []);
        }

        entrycontrol(rand) {
          if (!this.player1_entry) {
            if (rand === 1 || rand === 6) {
              this.player1_current_pos[0] = 0;
              this.player1_current_pos[1] = 10;
              this.animatemove(1);
              this.player1_entry = true;
              return true;
            }

            return false;
          }

          return true;
        }

        entrycontrol2(rand) {
          if (!this.player2_entry) {
            if (rand === 1 || rand === 6) {
              this.player2_current_pos[0] = 0;
              this.player2_current_pos[1] = 10;
              this.animatemove2(1);
              this.player2_entry = true;
              return true;
            }

            return false;
          }

          return true;
        }

        randomnumber(event, abc) {
          let knight = this.knight;
          let robot = this.robot;

          if (abc == "knight" && this.player1_active) {
            this.animation1.play();
            this.player1_rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            tween(this.player1_dice).delay(0.8).call(() => {
              this.player1_dice.getComponent(Sprite).spriteFrame = this.dice[this.player1_rand - 1];
            }).start();
            robot.node.getComponent(Label).color = new Color(255, 255, 255);
            knight.node.getComponent(Label).color = new Color(255, 255, 0);

            if (this.entrycontrol(this.player1_rand)) {
              this.move(abc, this.player1_rand);
            }

            this.player1_active = false;
          }

          if (abc == "robot" && !this.player1_active) {
            knight.node.getComponent(Label).color = new Color(255, 255, 255);
            robot.node.getComponent(Label).color = new Color(255, 255, 0);
            this.animation2.play();
            this.player2_rand = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            tween(this.player2_dice).delay(0.8).call(() => {
              this.player2_dice.getComponent(Sprite).spriteFrame = this.dice[this.player2_rand - 1];
            }).start();
            this.player1_active = true;

            if (this.entrycontrol2(this.player2_rand)) {
              this.move(abc, this.player2_rand);
            }
          }
        }

        onLoad() {
          this.player1_dice = instantiate(this.dice_pre);
          this.node.addChild(this.player1_dice);
          this.animation1 = this.player1_dice.getComponent(Animation);
          this.player1_dice.setPosition(403, 53, 1);
          this.player2_dice = instantiate(this.dice_pre);
          this.node.addChild(this.player2_dice);
          this.player2_dice.setPosition(-400, 53, 1);
          this.animation2 = this.player2_dice.getComponent(Animation);
        }

        wincheck() {
          let knight = this.knight;
          let robot = this.robot;

          if (this.player1_current_pos[0] == 1 && this.player1_current_pos[1] == 1) {
            knight.node.getComponent(Label).string = 'Knight Won!';
            knight.node.getComponent(Label).color = new Color(255, 255, 0);
            this.player1_active = true;
          }

          if (this.player2_current_pos[0] == 1 && this.player2_current_pos[1] == 1) {
            robot.node.getComponent(Label).string = 'Robot Won!';
            robot.node.getComponent(Label).color = new Color(255, 255, 0);
            this.player1_active = false;
          }
        }

        move(abc, rand) {
          if (abc == "knight") {
            for (let i = 1; i <= rand; i++) {
              if (this.player1_current_pos[1] % 2 == 0) {
                if (this.player1_current_pos[0] == 10) {
                  this.player1_current_pos[1]--;
                } else {
                  this.player1_current_pos[0]++;
                }
              } else {
                if (this.player1_current_pos[0] == 1 && this.player1_current_pos[1] > 1) {
                  this.player1_current_pos[1]--;
                } else {
                  console.log("we are here");

                  if (this.player1_cur_x - rand <= 0 && this.player1_current_pos[1] == 1) {
                    break;
                  } else {
                    this.player1_current_pos[0]--;
                  }
                }
              }

              this.animatemove(i);
            }

            if (this.player1_current_pos[0] == this.player2_current_pos[0] && this.player1_current_pos[1] == this.player2_current_pos[1]) {
              this.player2_current_pos[0] = 1;
              this.player2_current_pos[1] = 10;
              this.animatemove2(1);
            }

            if (this.ladder_and_snake_check()) {
              this.laddermove1(rand / 2);
            }

            this.player1_cur_x = this.player1_current_pos[0];
          } else {
            for (let i = 1; i <= rand; i++) {
              if (this.player2_current_pos[1] % 2 == 0) {
                if (this.player2_current_pos[0] == 10) {
                  this.player2_current_pos[1]--;
                } else {
                  this.player2_current_pos[0]++;
                }
              } else {
                if (this.player2_current_pos[0] == 1 && this.player2_current_pos[1] > 1) {
                  this.player2_current_pos[1]--;
                } else {
                  console.log("--------------------------------");
                  console.log("Okay we are here");
                  console.log('current row ' + this.player2_current_pos[1]);
                  console.log('current pos ' + this.player2_cur_x);
                  console.log('random' + rand);
                  console.log('random - current' + (this.player2_current_pos[0] - rand));

                  if (this.player2_current_pos[1] == 1 && this.player2_cur_x - rand <= 0) {
                    break;
                  } else {
                    this.player2_current_pos[0]--;
                  }

                  console.log("--------------------------------");
                }
              }

              this.animatemove2(i);
            }

            if (this.player1_current_pos[0] == this.player2_current_pos[0] && this.player1_current_pos[1] == this.player2_current_pos[1]) {
              this.player1_current_pos[0] = 1;
              this.player1_current_pos[1] = 10;
              this.animatemove(1);
            }

            if (this.ladder_and_snake_check()) {
              this.laddermove2(rand / 2);
            }

            this.player2_cur_x = this.player2_current_pos[0];
          }

          this.wincheck();
        }

        laddermove1(i) {
          this.tile1 = this.layer.getTiledTileAt(this.player1_current_pos[0], this.player1_current_pos[1], true);
          tween(this.character1.node).delay(i + 0.5).to(0.6, {
            position: new Vec3(this.tile1.node.position.x, this.tile1.node.position.y, 10)
          }).start();
        }

        laddermove2(i) {
          this.tile2 = this.layer.getTiledTileAt(this.player2_current_pos[0], this.player2_current_pos[1], true);
          tween(this.character2.node).delay(i + 0.5).to(0.6, {
            position: new Vec3(this.tile2.node.position.x, this.tile2.node.position.y, 10)
          }).start();
        }

        ladder_and_snake_check() {
          // for(var i=0;i<=4;i++)
          // {
          //   if(this.player1_current_pos[0]==this.snake_index[i][0] && this.player1_current_pos[1]==this.snake_index[i][1])
          //   {
          //     this.player1_current_pos[0]=this.snake_index[i][2];
          //     this.player1_current_pos[1]=this.snake_index[i][3];
          //     return true;
          //   }
          //   if(this.player2_current_pos[0]==this.snake_index[i][0] && this.player2_current_pos[1]==this.snake_index[i][1])
          //   {
          //     this.player2_current_pos[0]=this.snake_index[i][2];
          //     this.player2_current_pos[1]=this.snake_index[i][3];
          //     return true;
          //   }
          // }
          for (var i = 0; i < 3; i++) {
            if (this.player1_current_pos[0] == this.ladder_index[i][2] && this.player1_current_pos[1] == this.ladder_index[i][3]) {
              this.player1_current_pos[0] = this.ladder_index[i][0];
              this.player1_current_pos[1] = this.ladder_index[i][1];
              return true;
            }

            if (this.player2_current_pos[0] == this.ladder_index[i][2] && this.player2_current_pos[1] == this.ladder_index[i][3]) {
              this.player2_current_pos[0] = this.ladder_index[i][0];
              this.player2_current_pos[1] = this.ladder_index[i][1];
              return true;
            }
          }

          return false;
        }

        animatemove(i) {
          this.tile1 = this.layer.getTiledTileAt(this.player1_current_pos[0], this.player1_current_pos[1], true);
          tween(this.character1.node).delay(i / 2).by(0.2, {
            position: new Vec3(0, 40, 10)
          }).to(0.4, {
            position: new Vec3(this.tile1.node.position.x, this.tile1.node.position.y, 10)
          }).by(0.2, {
            position: new Vec3(0, -40, 10)
          }).by(0.2, {
            position: new Vec3(0, 40, 10)
          }).start();
        }

        animatemove2(i) {
          this.tile2 = this.layer.getTiledTileAt(this.player2_current_pos[0], this.player2_current_pos[1], true);
          tween(this.character2.node).delay(i / 2).by(0.2, {
            position: new Vec3(0, 40, 10)
          }).to(0.4, {
            position: new Vec3(this.tile2.node.position.x, this.tile2.node.position.y, 10)
          }).by(0.2, {
            position: new Vec3(0, -40, 10)
          }).by(0.2, {
            position: new Vec3(0, 40, 10)
          }).start();
        }

        ladderrandom(max, min, start_pos, end_pos) {
          let Head_ran = Math.floor(Math.random() * (max - min + 1)) + min;
          let Tail_ran = Math.floor(Math.random() * (max - min + 1)) + min;
          this.tile6 = this.layer.getTiledTileAt(Head_ran, start_pos, true);
          this.tile7 = this.layer.getTiledTileAt(Tail_ran, end_pos, true);
          this.ladder_index.push([Head_ran, start_pos, Tail_ran, end_pos]);
          let diff1 = this.tile6.node.position.y - this.tile7.node.position.y;
          let diff2 = this.tile6.node.position.x - this.tile7.node.position.x;
          this.ladder_array[this.ladder_count] = instantiate(this.ladder);
          this.abc.node.addChild(this.ladder_array[this.ladder_count]);
          this.ladder_array[this.ladder_count].setContentSize(420, diff1);
          this.ladder_array[this.ladder_count].setPosition(this.tile6.node.position.x + 200, this.tile6.node.position.y + 150, 1);
          let ang = Math.atan2(diff1, diff2);
          tween(this.ladder_array[this.ladder_count]).to(0.5, {
            angle: toDegree(ang) - 90
          }).start();
          this.ladder_count++;
        }

        snakeAndladder() {
          //   var j=10;
          // for(var i=1;i<=5;i++)
          // {
          //   if(i%2!=0)
          //   {
          //   this.randomsnake(5,2,i,j);
          //   }
          //   else
          //   {
          //     this.randomsnake(10,5,i,j);
          //   }
          //   j=j-1;
          // }
          this.ladderrandom(2, 5, 7, 10);
          this.ladderrandom(6, 10, 1, 9);
          this.ladderrandom(1, 4, 4, 6);
        }

        start() {
          this.layer = this.abc.getLayer("MAIN");
          let nd = null;
          let snake = null;

          for (var i = 10; i >= 1; i--) {
            for (var j = 1; j <= 10; j++) {
              nd = instantiate(this.num);
              this.abc.node.addChild(nd);
              nd.setContentSize(500, 500);
              nd.getComponent(Label).LineHeight = 40;
              nd.getComponent(Label).string = ++this.count;

              if (i % 2 == 0) {
                this.tile3 = this.layer.getTiledTileAt(j, i, true);
                nd.setPosition(this.tile3.node.position.x, this.tile3.node.position.y, 1);
              } else {
                this.tile3 = this.layer.getTiledTileAt(11 - j, i, true);
                nd.setPosition(this.tile3.node.position.x, this.tile3.node.position.y, 1);
              }
            }
          }

          this.tile1 = this.layer.getTiledTileAt(0, 10, true);
          this.tile2 = this.layer.getTiledTileAt(0, 9, true);
          this.character1.node.setPosition(this.tile1.node.position.x, this.tile1.node.position.y, 1);
          this.character2.node.setPosition(this.tile2.node.position.x, this.tile2.node.position.y, 1);
          this.character1.node.setSiblingIndex(2000);
          this.character2.node.setSiblingIndex(2000);
          this.snakeAndladder(); // [3]
        }

        update(deltaTime) {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "abc", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "character1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "character2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "num", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rand", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dice", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "knight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "robot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "butt", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "snake", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "ladder", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "dice_pre", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "player1_butt", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "player2_butt", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=chan.js.map