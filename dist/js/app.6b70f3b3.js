(function(e){function s(s){for(var a,i,l=s[0],o=s[1],n=s[2],d=0,p=[];d<l.length;d++)i=l[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(s);while(p.length)p.shift()();return c.push.apply(c,n||[]),t()}function t(){for(var e,s=0;s<c.length;s++){for(var t=c[s],a=!0,l=1;l<t.length;l++){var o=t[l];0!==r[o]&&(a=!1)}a&&(c.splice(s--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},c=[];function i(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)i.d(t,a,function(s){return e[s]}.bind(null,a));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=s,l=l.slice();for(var n=0;n<l.length;n++)s(l[n]);var u=o;c.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var a=t("64a9"),r=t.n(a);r.a},"0ab0":function(e,s,t){"use strict";var a=t("2b99"),r=t.n(a);r.a},"14b8":function(e,s,t){"use strict";var a=t("cb73"),r=t.n(a);r.a},"211f":function(e,s,t){"use strict";var a=t("3bfa"),r=t.n(a);r.a},"2b99":function(e,s,t){},"3bfa":function(e,s,t){},"545a":function(e,s,t){},"56d7":function(e,s,t){"use strict";t.r(s);t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("Header"),t("BattleField")],1)},c=[],i=[{name:"archer",type:"weapons",cost:1,description:"attack 2"},{name:"platoon",type:"weapons",cost:4,description:"attack 6"},{name:"banshee",type:"weapons",cost:28,description:"attack 32"},{name:"swat",type:"weapons",cost:18,description:"enemy castle -10"},{name:"thief",type:"weapons",cost:15,description:"transfer enemy stocks 5"},{name:"saboteur",type:"weapons",cost:12,description:"enemy stocks -4"},{name:"attack",type:"weapons",cost:10,description:"attack 12"},{name:"recruit",type:"weapons",cost:8,description:"soldiers +1"},{name:"rider",type:"weapons",cost:2,description:"attack 4"},{name:"knight",type:"weapons",cost:2,description:"attack 3"},{name:"fence",type:"bricks",cost:12,description:"fence +22"},{name:"base",type:"bricks",cost:1,description:"castle +2"},{name:"school",type:"bricks",cost:8,description:"builders +1"},{name:"tower",type:"bricks",cost:5,description:"castle +5"},{name:"defense",type:"bricks",cost:3,description:"fence +6"},{name:"reserve",type:"bricks",cost:3,description:"castle +8<br>fence -4"},{name:"babylon",type:"bricks",cost:39,description:"castle +32"},{name:"fort",type:"bricks",cost:18,description:"castle +20"},{name:"wain",type:"bricks",cost:10,description:"castle +8<br>enemy castle -4"},{name:"wall",type:"bricks",cost:1,description:"fence +3"},{name:"conjure crystals",type:"crystals",cost:4,description:"crystals +8"},{name:"conjure weapons",type:"crystals",cost:4,description:"weapons +8"},{name:"conjure bricks",type:"crystals",cost:4,description:"bricks +8"},{name:"crush weapons",type:"crystals",cost:4,description:"enemy weapons -8"},{name:"crush bricks",type:"crystals",cost:4,description:"enemy bricks -8"},{name:"crush crystals",type:"crystals",cost:4,description:"enemy crystals -8"},{name:"sorcerer",type:"crystals",cost:8,description:"magic +1"},{name:"dragon",type:"crystals",cost:21,description:"attack 25"},{name:"pixies",type:"crystals",cost:22,description:"castle +22"},{name:"curse",type:"crystals",cost:45,description:"all +1<br>enemies all -1"}],l=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",{staticClass:"header"},[t("h1",{staticClass:"header__title"},[e._v("Castle Wars")])])}],n={},u=n,d=(t("7b4e"),t("2877")),p=Object(d["a"])(u,l,o,!1,null,"5eb50ee6",null),h=p.exports,y=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"clouds"},[t("div",{staticClass:"cloud-1"}),t("div",{staticClass:"cloud-2"}),t("div",{staticClass:"cloud-3"})])}],m={},_=m,g=(t("8552"),Object(d["a"])(_,y,v,!1,null,"0fcfcaa8",null)),b=g.exports,f=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"battlefield"},[e.isPlaying?t("button",{staticClass:"skip-turn",on:{click:e.skipTurn}},[e._v("Skip turn")]):e._e(),e.isPlaying?e._e():t("div",{staticClass:"battlefield__menu"},[t("button",{staticClass:"battlefield__buttons",on:{click:e.startGame}},[e._v("2 Players")]),t("button",{staticClass:"battlefield__buttons"},[e._v("How to Play")])]),t("div",{staticClass:"battlefield__top"},[e.isPlaying?t("PlayerResources",{attrs:{player:"Player 1",isActivePlayer:0===e.activePlayer,resources:e.players[0].resources,castleHealth:e.players[0].castleHealth,gateHealth:e.players[0].gateHealth}}):e._e(),e.isPlaying?t("PlayerResources",{attrs:{player:"Player 2",isActivePlayer:1===e.activePlayer,resources:e.players[1].resources,castleHealth:e.players[1].castleHealth,gateHealth:e.players[1].gateHealth}}):e._e(),t("Castle",{attrs:{player:"Player 1",castleHealth:e.players[0].castleHealth,gateHealth:e.players[0].gateHealth}}),t("Castle",{attrs:{player:"Player 2",castleHealth:e.players[1].castleHealth,gateHealth:e.players[1].gateHealth}})],1),t("div",{staticClass:"battlefield__bottom"},[e.isPlaying||!e.isGameOver?t("Cards",{class:{hide:e.turnIsInProgress},attrs:{cards:e.players[e.activePlayer].cards,resources:e.players[e.activePlayer].resources}}):e._e()],1)])},w=[],k=(t("20d6"),t("7f7f"),t("a4bb")),C=t.n(k),P=(t("ac6a"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"resources",class:{"resources--one":e.isPlayerOne,"resources--two":!e.isPlayerOne,active:e.isActivePlayer}},[t("h2",{staticClass:"resources__player",class:{active:e.isActivePlayer}},[e._v(e._s(e.player))]),t("div",{staticClass:"resources__blocks resources__blocks--bricks"},[t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549315135/builder.png"}}),t("div",{staticClass:"resources__type"},[e._v("Builders")]),""!=e.buildersUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.buildersUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.builders))])]),t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317147/brick.png"}}),t("div",{staticClass:"resources__type"},[e._v("Bricks")]),""!=e.bricksUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.bricksUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.bricks))])])]),t("div",{staticClass:"resources__blocks resources__blocks--weapons"},[t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549315223/helmet.png"}}),t("div",{staticClass:"resources__type"},[e._v("Soldiers")]),""!=e.soldiersUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.soldiersUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.soldiers))])]),t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549294263/sword.png"}}),t("div",{staticClass:"resources__type"},[e._v("Weapons")]),""!=e.weaponsUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.weaponsUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.weapons))])])]),t("div",{staticClass:"resources__blocks resources__blocks--magic"},[t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316902/witch-hat.png"}}),t("div",{staticClass:"resources__type"},[e._v("Magic")]),""!=e.magicUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.magicUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.magic))])]),t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316981/crystal.png"}}),t("div",{staticClass:"resources__type"},[e._v("Crystals")]),""!=e.crystalsUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.crystalsUpdated))]):e._e(),t("div",[e._v(e._s(e.resources.crystals))])])]),t("div",{staticClass:"resources__blocks resources__blocks--hp"},[t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317149/sand-castle.png"}}),t("div",{staticClass:"resources__type"},[e._v("Castle")]),""!=e.castleHealthUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.castleHealthUpdated))]):e._e(),t("div",[e._v(e._s(e.castleHealth))])]),t("div",{staticClass:"resources__details"},[t("img",{staticClass:"resources__icon",attrs:{src:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549310993/brick-wall.png"}}),t("div",{staticClass:"resources__type"},[e._v("Gate")]),""!=e.gateHealthUpdated?t("div",{staticClass:"resources__updates"},[e._v(e._s(e.gateHealthUpdated))]):e._e(),t("div",[e._v(e._s(e.gateHealth))])])])])}),H=[],U=(t("c5f6"),{data:function(){return{isPlayerOne:null,buildersUpdated:"",bricksUpdated:"",soldiersUpdated:"",weaponsUpdated:"",magicUpdated:"",crystalsUpdated:"",castleHealthUpdated:"",gateHealthUpdated:""}},methods:{resetUpdates:function(){this.buildersUpdated="",this.bricksUpdated="",this.soldiersUpdated="",this.weaponsUpdated="",this.magicUpdated="",this.crystalsUpdated="",this.castleHealthUpdated="",this.gateHealthUpdated=""}},props:{player:{type:String,required:!0},resources:{type:Object,required:!0},castleHealth:{type:Number,required:!0},gateHealth:{type:Number,required:!0},isActivePlayer:Boolean},watch:{castleHealth:function(e,s){this.castleHealthUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},gateHealth:function(e,s){this.gateHealthUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.builders":function(e,s){this.buildersUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.bricks":function(e,s){this.bricksUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.soldiers":function(e,s){this.soldiersUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.weapons":function(e,s){this.weaponsUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.magic":function(e,s){this.magicUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,2e3)},"resources.crystals":function(e,s){this.crystalsUpdated=e>s?"+ ".concat(e-s):"- ".concat(s-e),setTimeout(this.resetUpdates,1500)}},created:function(){this.isPlayerOne="Player 1"===this.player}}),O=U,j=(t("db0a"),Object(d["a"])(O,P,H,!1,null,null,null)),T=j.exports,x=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"castle-container"},[t("div",{staticClass:"castle",class:{"castle--one":e.isPlayerOne,"castle--two":!e.isPlayerOne},style:{height:e.castleHeight+"%"}}),t("div",{staticClass:"gate",class:{"gate--one":e.isPlayerOne,"gate--two":!e.isPlayerOne},style:{height:e.gateHeight+"%"}})])},E=[],I={data:function(){return{isPlayerOne:null}},props:{player:{type:String,required:!0},castleHealth:{type:Number,required:!0},gateHealth:{type:Number,required:!0}},computed:{castleHeight:function(){return 1.1*this.castleHealth},gateHeight:function(){return 1.1*this.gateHealth}},created:function(){this.isPlayerOne="Player 1"===this.player}},$=I,A=(t("211f"),Object(d["a"])($,x,E,!1,null,"27b7cec4",null)),G=A.exports,R=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"cards"},e._l(e.cards,function(s,a){return t("Card",{key:s.name+a,attrs:{card:s,resources:e.resources[s.type]}})}),1)},S=[],q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{class:["card",{weapons:"weapons"===e.card.type,building:"bricks"===e.card.type,magic:"crystals"===e.card.type,"cant-use":e.cantUse}],on:{click:e.clicked}},[t("div",{staticClass:"card__cost"},[e._v(e._s(e.card.cost))]),t("div",{staticClass:"card__body"},[t("p",{staticClass:"card__name"},[e._v(e._s(e.card.name))]),t("img",{staticClass:"card__icon",class:{crush:e.isCrushType,"not-crush":!e.isCrushType},attrs:{src:e.icons[e.card.name]}}),t("p",{staticClass:"card__description",domProps:{innerHTML:e._s(e.card.description)}})])])},M=[],B=(t("28a5"),{archer:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549318612/archery.png",platoon:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549318840/knight.png",banshee:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549318952/reaper.png",swat:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549319040/antivirus.png",thief:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549319214/carnival-mask-silhouette.png",saboteur:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549319275/moon.png",attack:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549319371/trebuchet.png",recruit:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549394161/drum.png",rider:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549394745/horseman.png",knight:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549315223/helmet.png",fence:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549467277/fence.png",base:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549467424/wall.png",school:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549467387/sketch.png",tower:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549467807/chess.svg",defense:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468138/brick-wall_1.svg",reserve:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468275/gift-bag.svg",babylon:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468386/lighthouse.svg",fort:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468479/dublin-castle.svg",wain:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468564/wheelbarrow.svg",wall:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549468602/building.svg","conjure crystals":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316981/crystal.png","conjure weapons":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549294263/sword.png","conjure bricks":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317147/brick.png","crush weapons":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549318840/knight.png","crush bricks":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549317147/brick.png","crush crystals":"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316981/crystal.png",sorcerer:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549316902/witch-hat.png",dragon:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549478917/dragon.svg",pixies:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549479035/wand.svg",curse:"https://res.cloudinary.com/castle-wars-assets/image/upload/v1549479093/cross.svg"}),F={props:{card:Object,resources:Number},data:function(){return{icons:B}},methods:{clicked:function(){this.cantUse||ae.$emit("cardWasClicked",this.card)}},computed:{cantUse:function(){return this.card.cost>this.resources},isCrushType:function(){return"crush"===this.card.name.split(" ")[0]}},created:function(){}},W=F,N=(t("0ab0"),Object(d["a"])(W,q,M,!1,null,null,null)),J=N.exports,L={components:{Card:J},props:{cards:{type:Array,required:!0},resources:Object}},z=L,D=(t("14b8"),Object(d["a"])(z,R,S,!1,null,null,null)),K=D.exports,Q={data:function(){return{activePlayer:0,players:[{resources:{builders:2,bricks:5,soldiers:2,weapons:5,magic:2,crystals:5},castleHealth:30,gateHealth:10,cards:[]},{resources:{builders:2,bricks:5,soldiers:2,weapons:5,magic:2,crystals:5},castleHealth:30,gateHealth:10,cards:[]}],cards:i,isPlaying:!1,isGameOver:!1,turnIsInProgress:!1}},methods:{startGame:function(){this.isPlaying=!0,this.startingCards(0),this.startingCards(1)},startingCards:function(e){for(var s=[],t=0;t<8;t++)s.push(this.newCard());this.players[e].cards=s},newCard:function(){return this.cards[Math.floor(Math.random()*this.cards.length)]},switchPlayer:function(){this.activePlayer=0===this.activePlayer?1:0},skipTurn:function(){this.addResources(this.activePlayer),this.switchPlayer()},addResources:function(e){this.players[e].resources.bricks+=this.players[e].resources.builders,this.players[e].resources.weapons+=this.players[e].resources.soldiers,this.players[e].resources.crystals+=this.players[e].resources.magic},checkIfGameIsOver:function(){this.players[1].castleHealth<=0||this.players[0].castleHealth>=100?(this.isGameOver=!0,alert("Congratulations Player 1 Won!")):(this.players[0].castleHealth<=0||this.players[1].castleHealth>=100)&&(this.isGameOver=!0,alert("Congratulations Player 2 Won!"))},determineActivePlayer:function(){var e=this.activePlayer,s=0===this.activePlayer?1:0;return{activePlayer:e,opponent:s}},getResourcesArray:function(){return["bricks","weapons","crystals"]},swat:function(e){this.players[e].castleHealth-=10},thief:function(e,s){var t=this,a=this.getResourcesArray();a.forEach(function(a){t.players[e].resources[a]<5?t.players[e].resources[a]=0:t.players[e].resources[a]-=5,t.players[s].resources[a]+=5})},saboteur:function(e){var s=this,t=this.getResourcesArray();t.forEach(function(t){s.players[e].resources[t]<=4?s.players[e].resources[t]=0:s.players[e].resources[t]-=4})},attack:function(e,s){if(this.players[e].gateHealth<=0)this.players[e].castleHealth-=s;else if(this.players[e].gateHealth<s){var t=s-this.players[e].gateHealth;this.players[e].gateHealth=0,this.players[e].castleHealth-=t}else this.players[e].gateHealth-=s},hire:function(e){this.players[this.activePlayer].resources[e]+=1},addToFence:function(e){this.players[this.activePlayer].gateHealth+=e},addToCastle:function(e){this.players[this.activePlayer].castleHealth+=e},reserve:function(){this.players[this.activePlayer].castleHealth+=8,this.players[this.activePlayer].gateHealth<4?this.players[this.activePlayer].gateHealth=0:this.players[this.activePlayer].gateHealth-=4},wain:function(e){this.players[this.activePlayer].castleHealth+=8,this.players[e].castleHealth-=4},conjure:function(e){this.players[this.activePlayer].resources[e]+=8},crush:function(e,s){this.players[s].resources[e]<8?this.players[s].resources[e]=0:this.players[s].resources[e]-=8},curse:function(e){var s=this,t=C()(this.players[this.activePlayer].resources);t.forEach(function(t){s.players[s.activePlayer].resources[t]+=1,s.players[e].resources[t]>0&&(s.players[e].resources[t]-=1)})}},computed:{},components:{PlayerResources:T,Castle:G,Cards:K},created:function(){var e=this;ae.$on("cardWasClicked",function(s){if(!e.isGameOver){e.turnIsInProgress=!0;var t=e.determineActivePlayer(),a=t.activePlayer,r=t.opponent;if(e.players[a].resources[s.type]-=s.cost,"weapons"===s.type)switch(s.name){case"swat":e.swat(r);break;case"thief":e.thief(r,a);break;case"saboteur":e.saboteur(r);break;case"platoon":e.attack(r,6);break;case"archer":e.attack(r,2);break;case"banshee":e.attack(r,32);break;case"attack":e.attack(r,12);break;case"rider":e.attack(r,4);break;case"knight":e.attack(r,3);break;case"recruit":e.hire("soldiers");break}else if("bricks"===s.type)switch(s.name){case"fence":e.addToFence(22);break;case"base":e.addToCastle(2);break;case"school":e.hire("builders");break;case"tower":e.addToCastle(5);break;case"defense":e.addToFence(6);break;case"reserve":e.reserve();break;case"babylon":e.addToCastle(32);break;case"fort":e.addToCastle(20);break;case"wain":e.wain(r);break;case"wall":e.addToFence(3);break}else if("crystals"===s.type)switch(console.log("Active player:",a,"oppnent:",r),s.name){case"conjure crystals":e.conjure("crystals",r);break;case"conjure weapons":e.conjure("weapons");break;case"conjure bricks":e.conjure("bricks");break;case"crush bricks":e.crush("bricks",r);break;case"crush weapons":e.crush("weapons",r);break;case"crush crystals":e.crush("crystals",r);break;case"sorcerer":e.hire("magic");break;case"dragon":e.attack(r,25);break;case"pixies":e.addToCastle(22);break;case"curse":e.curse(r);break}var c=e;setTimeout(function(){c.checkIfGameIsOver();var e=c.players[a].cards.findIndex(function(e){return e.name===s.name});c.players[a].cards.splice(e,1),c.players[a].cards.push(c.newCard()),c.addResources(a),c.switchPlayer(),c.turnIsInProgress=!1},1600)}})}},V=Q,X=(t("dfec"),Object(d["a"])(V,f,w,!1,null,"b01730c6",null)),Y=X.exports,Z={components:{Header:h,BattleField:Y,Clouds:b}},ee=Z,se=(t("034f"),Object(d["a"])(ee,r,c,!1,null,null,null)),te=se.exports;t.d(s,"actionBus",function(){return ae});var ae=new a["a"];new a["a"]({render:function(e){return e(te)}}).$mount("#app")},"64a9":function(e,s,t){},"693e":function(e,s,t){},"7b4e":function(e,s,t){"use strict";var a=t("545a"),r=t.n(a);r.a},8552:function(e,s,t){"use strict";var a=t("8dd5"),r=t.n(a);r.a},"8dd5":function(e,s,t){},b75f:function(e,s,t){},cb73:function(e,s,t){},db0a:function(e,s,t){"use strict";var a=t("b75f"),r=t.n(a);r.a},dfec:function(e,s,t){"use strict";var a=t("693e"),r=t.n(a);r.a}});
//# sourceMappingURL=app.6b70f3b3.js.map