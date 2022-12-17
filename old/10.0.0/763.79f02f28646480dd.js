"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[763],{18763:(a,n,e)=>{e.r(n),e.d(n,{DemoPopoverModule:()=>Y,PopoverSectionComponent:()=>K});var l=e(36895),c=e(90433),R=e(59459),g=e(8839),u=e(87633),o=e(41571),i=e(75205);let b=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-adaptive-position"]],decls:4,vars:2,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Popover on top\n"),o.qZA(),o.TgZ(2,"button",1),o._uU(3," Popover on right\n"),o.qZA()),2&p&&(o.Q6J("adaptivePosition",!1),o.xp6(2),o.Q6J("adaptivePosition",!1))},dependencies:[i.k],encapsulation:2}),t})(),f=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-basic"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Live demo\n"),o.qZA())},dependencies:[i.k],encapsulation:2}),t})(),P=(()=>{class t{constructor(){this.isOpen=!1}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-trigger-by-isopen"]],decls:5,vars:1,consts:[["popover","Hello there! I was triggered by changing isOpen property","triggers","",3,"isOpen"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(p,r){1&p&&(o.TgZ(0,"p")(1,"span",0),o._uU(2," This text has attached popover "),o.qZA()(),o.TgZ(3,"button",1),o.NdJ("click",function(){return r.isOpen=!r.isOpen}),o._uU(4," Toggle\n"),o.qZA()),2&p&&(o.xp6(1),o.Q6J("isOpen",r.isOpen))},dependencies:[i.k],encapsulation:2}),t})(),C=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-class"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","containerClass","customClass",1,"btn","btn-primary"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Custom class demo\n"),o.qZA())},dependencies:[i.k],encapsulation:2}),t})();function M(){return Object.assign(new g.dl,{placement:"right",container:"body",triggers:"focus",delay:500})}let y=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-config"]],features:[o._Bn([{provide:g.dl,useFactory:M}])],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Preconfigured popover\n"),o.qZA())},dependencies:[i.k],encapsulation:2}),t})(),h=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-container"]],decls:6,vars:0,consts:[[1,"row","panel",2,"position","relative","overflow","hidden"],[1,"card-block","panel-body"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-danger"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","container","body",1,"btn","btn-success"]],template:function(p,r){1&p&&(o.TgZ(0,"div",0)(1,"div",1)(2,"button",2),o._uU(3," Default popover "),o.qZA(),o.TgZ(4,"button",3),o._uU(5," Popover appended to body "),o.qZA()()())},dependencies:[i.k],encapsulation:2}),t})();function H(t,s){1&t&&o._uU(0),2&t&&o.Oqu(s.message)}let T=(()=>{class t{constructor(){this.context={message:"Hello there!"}}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-context"]],decls:4,vars:2,consts:[["popTemplate",""],["type","button",1,"btn","btn-primary",3,"popover","popoverContext"]],template:function(p,r){if(1&p&&(o.YNc(0,H,1,1,"ng-template",null,0,o.W1O),o.TgZ(2,"button",1),o._uU(3," Open popover with custom context\n"),o.qZA()),2&p){const m=o.MAs(1);o.xp6(2),o.Q6J("popover",m)("popoverContext",r.context)}},dependencies:[i.k],encapsulation:2}),t})();function S(t,s){if(1&t&&o._uU(0),2&t){const p=o.oxw();o.hij("Just another: ",p.content,"")}}let D=(()=>{class t{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-custom-content"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Template ref content inside",1,"btn","btn-warning",3,"popover"]],template:function(p,r){if(1&p&&(o.YNc(0,S,1,1,"ng-template",null,0,o.W1O),o.TgZ(2,"button",1),o._uU(3," TemplateRef binding\n"),o.qZA()),2&p){const m=o.MAs(1);o.xp6(2),o.Q6J("popover",m)}},dependencies:[i.k],encapsulation:2}),t})(),A=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-delay"]],decls:2,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"delay"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Popover with 0.5sec delay\n"),o.qZA()),2&p&&o.Q6J("delay",500)},dependencies:[i.k],encapsulation:2}),t})(),E=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-dismiss"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Dismissible popover","triggers","focus",1,"btn","btn-success"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Dismissible popover\n"),o.qZA())},dependencies:[i.k],encapsulation:2}),t})(),U=(()=>{class t{constructor(){this.title="Welcome word",this.content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-dynamic"]],decls:2,vars:2,consts:[["type","button",1,"btn","btn-info",3,"popover","popoverTitle"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Simple binding\n"),o.qZA()),2&p&&o.Q6J("popover",r.content)("popoverTitle",r.title)},dependencies:[i.k],encapsulation:2}),t})();function w(t,s){if(1&t&&(o._uU(0,"Here we go: "),o._UZ(1,"div",2)),2&t){const p=o.oxw();o.xp6(1),o.Q6J("innerHtml",p.html,o.oJD)}}let O=(()=>{class t{constructor(){this.html='<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>'}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-dynamic-html"]],decls:4,vars:1,consts:[["popTemplate",""],["type","button","popoverTitle","Dynamic html inside",1,"btn","btn-success",3,"popover"],[3,"innerHtml"]],template:function(p,r){if(1&p&&(o.YNc(0,w,2,1,"ng-template",null,0,o.W1O),o.TgZ(2,"button",1),o._uU(3," Show me popover with html\n"),o.qZA()),2&p){const m=o.MAs(1);o.xp6(2),o.Q6J("popover",m)}},dependencies:[i.k],encapsulation:2}),t})(),x=(()=>{class t{onShown(){this.message="shown"}onHidden(){this.message="hidden"}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-events"]],decls:6,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"onShown","onHidden"],[1,"card","card-block","card-header","mb-3"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o.NdJ("onShown",function(){return r.onShown()})("onHidden",function(){return r.onHidden()}),o._uU(1," Live demo\n"),o.qZA(),o._UZ(2,"br")(3,"br"),o.TgZ(4,"pre",1),o._uU(5),o.qZA()),2&p&&(o.xp6(5),o.hij("Event: ",r.message,""))},dependencies:[i.k],encapsulation:2}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-outside-click"]],decls:2,vars:1,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-primary",3,"outsideClick"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Live demo\n"),o.qZA()),2&p&&o.Q6J("outsideClick",!0)},dependencies:[i.k],encapsulation:2}),t})(),F=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-placement"]],decls:10,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on top","placement","top",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on right","placement","right",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover auto","placement","auto",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on left","placement","left",1,"btn","btn-default","btn-secondary"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on bottom","placement","bottom",1,"btn","btn-default","btn-secondary"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," Popover on top\n"),o.qZA(),o.TgZ(2,"button",1),o._uU(3," Popover on right\n"),o.qZA(),o.TgZ(4,"button",2),o._uU(5," Popover auto\n"),o.qZA(),o.TgZ(6,"button",3),o._uU(7," Popover on left\n"),o.qZA(),o.TgZ(8,"button",4),o._uU(9," Popover on bottom\n"),o.qZA())},dependencies:[i.k],encapsulation:2}),t})(),B=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-styling-local"]],decls:2,vars:0,consts:[["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-info"]],template:function(p,r){1&p&&(o.TgZ(0,"button",0),o._uU(1," I have component level styling\n"),o.qZA())},dependencies:[i.k],styles:["[_nghost-%COMP%]   .popover[_ngcontent-%COMP%]{background-color:#009688;color:#fff}[_nghost-%COMP%]   .popover[_ngcontent-%COMP%] > .arrow[_ngcontent-%COMP%]:after{border-top-color:#009688}"]}),t})(),X=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-triggers-custom"]],decls:9,vars:0,consts:[[1,"row"],[1,"col-md-2"],["type","button","popover","I will hide on blur","triggers","mouseenter:mouseleave",1,"btn","btn-info"],["type","button","popover","Double click one more time","triggers","dblclick",1,"btn","btn-info"],[1,"col-md-3"],["type","text","placeholder","Show popover on input change","popover","I will hide on blur","triggers","keypress:focusout",1,"form-control"]],template:function(p,r){1&p&&(o.TgZ(0,"div",0)(1,"div",1)(2,"button",2),o._uU(3," Hover over me! "),o.qZA()(),o.TgZ(4,"div",1)(5,"button",3),o._uU(6," Double click me! "),o.qZA()(),o.TgZ(7,"div",4),o._UZ(8,"input",5),o.qZA()())},dependencies:[i.k],encapsulation:2}),t})(),L=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-triggers-manual"]],decls:10,vars:0,consts:[["popover","Hello there! I was triggered manually","triggers",""],["pop","bs-popover"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],["type","button",1,"btn","btn-info",3,"click"]],template:function(p,r){if(1&p){const m=o.EpF();o.TgZ(0,"p")(1,"span",0,1),o._uU(3," This text has attached popover "),o.qZA()(),o.TgZ(4,"button",2),o.NdJ("click",function(){o.CHM(m);const d=o.MAs(2);return o.KtG(d.show())}),o._uU(5," Show\n"),o.qZA(),o.TgZ(6,"button",3),o.NdJ("click",function(){o.CHM(m);const d=o.MAs(2);return o.KtG(d.hide())}),o._uU(7," Hide\n"),o.qZA(),o.TgZ(8,"button",4),o.NdJ("click",function(){o.CHM(m);const d=o.MAs(2);return o.KtG(d.toggle())}),o._uU(9," Toggle\n"),o.qZA()}},dependencies:[i.k],encapsulation:2}),t})();function J(t,s){if(1&t&&(o.TgZ(0,"option",3),o._uU(1),o.qZA()),2&t){const p=s.$implicit;o.Q6J("value",p),o.xp6(1),o.hij(" ",p," ")}}let W=(()=>{class t{constructor(){this.placements=["top left","top right","right top","right bottom","bottom right","bottom left","left bottom","left top"],this.placement="top left"}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-corner-placement"]],decls:5,vars:5,consts:[[1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",1,"btn","btn-default","btn-secondary",3,"popoverTitle","placement"],[3,"value"]],template:function(p,r){1&p&&(o.TgZ(0,"p")(1,"select",0),o.NdJ("ngModelChange",function(v){return r.placement=v}),o.YNc(2,J,2,2,"option",1),o.qZA()(),o.TgZ(3,"button",2),o._uU(4),o.qZA()),2&p&&(o.xp6(1),o.Q6J("ngModel",r.placement),o.xp6(1),o.Q6J("ngForOf",r.placements),o.xp6(1),o.Q6J("popoverTitle","Popover on "+r.placement)("placement",r.placement),o.xp6(1),o.hij(" ","Popover on "+r.placement," "))},dependencies:[l.sg,c.YN,c.Kr,c.EJ,c.JJ,c.On,i.k],encapsulation:2}),t})(),V=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["demo-popover-adaptive-position-overflow-boundary"]],decls:6,vars:2,consts:[[1,"container"],[1,"btn-padding"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on top","container","body","boundariesElement","viewport","placement","top",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"],["type","button","popover","Vivamus sagittis lacus vel augue laoreet rutrum faucibus.","popoverTitle","Popover on bottom","container","body","boundariesElement","viewport","placement","bottom",1,"btn","btn-default","btn-secondary",3,"adaptivePosition"]],template:function(p,r){1&p&&(o.TgZ(0,"div",0)(1,"div",1)(2,"button",2),o._uU(3," Popover on top "),o.qZA(),o.TgZ(4,"button",3),o._uU(5," Popover on bottom "),o.qZA()()()),2&p&&(o.xp6(2),o.Q6J("adaptivePosition",!0),o.xp6(2),o.Q6J("adaptivePosition",!0))},dependencies:[i.k],styles:[".container[_ngcontent-%COMP%]{height:100px;overflow:auto}.btn-padding[_ngcontent-%COMP%]{padding:15px}"]}),t})();const I=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:u.ke,content:[{title:"Basic",anchor:"basic",component:e(58877),html:e(61394),outlet:f},{title:"Placement",anchor:"placement",component:e(72257),html:e(478),description:"<p>Four base positioning options are available: <code>top</code>, <code>right</code>,\n        <code>bottom</code>, and <code>left</code>.\n        Besides that, <code>auto</code> option may be used to detect a position that fits the component on screen.</p>",outlet:F},{title:"Corner placement",anchor:"corner-placement",description:'\n          <p>Placement property of a popover can contain "corner placement" specifier following the base positioning.\n          Thus, in addition to the four base positioning options, namely <code>top</code>, <code>right</code>,\n          <code>bottom</code>, and <code>left</code>, eight more positioning options are available: <code>top left</code>, <code>top right</code>,\n          <code>right top</code>, <code>right bottom</code>, <code>bottom right</code>, <code>bottom left</code>, <code>left bottom</code>, and <code>left top</code>.',component:e(58901),html:e(62513),outlet:W},{title:"Disable adaptive position",anchor:"adaptive-position",description:"\n          <p>You can disable adaptive position via <code>adaptivePosition</code> input or config option</p>\n        ",component:e(96461),html:e(37816),outlet:b},{title:"Adaptive position with overflow boundary",anchor:"adaptive-position-overflow-boundary",description:"\n          <p>You can control the popover boundaries via <code>boundariesElement</code> input or config option.   <code>boundariesElement</code> property of a popover can contain boundaries namely <code>viewport, scrollParent, window</code>.</p>\n        ",component:e(38004),html:e(89697),outlet:V},{title:"Dismiss on next click",anchor:"popover-dismiss",component:e(40492),html:e(47581),description:"<p>Use the <code>focus</code> trigger to dismiss popovers on the next click that the\n      user makes.</p>",outlet:E},{title:"Dynamic content",anchor:"dynamic-content",component:e(61728),html:e(77652),description:"<p>Pass a string as popover content.</p>",outlet:U},{title:"Custom content template",anchor:"custom-content-template",component:e(47483),html:e(13914),description:'<p>Create <code>&lt;ng-template #myId></code> with any html allowed by Angular,\n        and provide template ref <code>[popover]="myId"</code> as popover content.</p>',outlet:D},{title:"Dynamic Html",anchor:"dynamic-html",component:e(19982),html:e(2579),description:"<p>By using <code>[innerHtml]</code> inside <code>ng-template</code> you can display any dynamic html</p>",outlet:O},{title:"Append to body",anchor:"container-body",component:e(47265),html:e(7340),description:'<p>When you have any styles on a parent element that interfere with a popover,\n        you\u2019ll want to specify a <code>container="body"</code> so that the popover\u2019s HTML will be\n        appended to body. This will help to avoid rendering problems in more complex components\n        (like input groups, button groups, etc) or inside elements with <code>overflow: hidden</code></p>',outlet:h},{title:"Visibility events",anchor:"events",component:e(71712),html:e(79086),outlet:x},{title:"Configuring defaults",anchor:"config-defaults",component:e(38686),html:e(96359),outlet:y},{title:"Outside click",anchor:"outside-click",component:e(99915),html:e(8323),outlet:Z},{title:"Custom triggers",anchor:"triggers-custom",component:e(73597),html:e(54646),outlet:X},{title:"Manual triggering",anchor:"triggers-manual",component:e(28962),html:e(54764),description:"<p>This demo shows manipulating popover by <code>show</code>,\n        <code>hide</code> and <code>toggle</code> methods</p>",outlet:L},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property",component:e(36047),html:e(97619),description:"<p>You can show/hide popover by switching <code>isOpen</code> property</p>",outlet:P},{title:"Component level styling",anchor:"styling-local",component:e(70061),html:e(63933),outlet:B},{title:"Custom class",anchor:"popover-custom-class",component:e(97998),html:e(26136),outlet:C},{title:"Popover context",anchor:"popover-context",component:e(26276),html:e(88856),outlet:T},{title:"Popover with delay",anchor:"popover-delay",component:e(58398),html:e(58933),description:"<p>Click on the button to see popover delayed for 0,5 second </p>",outlet:A}]},{name:"Installation",anchor:"api-reference",tabName:"api",usage:e(62965),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">popover</span>',outlet:u.s$,content:[{title:"PopoverDirective",anchor:"popover-directive",outlet:u.Wh},{title:"PopoverConfig",anchor:"popover-config",outlet:u.Vg}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:u.ke,content:[{title:"Basic",anchor:"basic-ex",outlet:f},{title:"Placement",anchor:"placement-ex",outlet:F},{title:"Corner placement",anchor:"corner-placement-ex",outlet:W},{title:"Disable adaptive position",anchor:"adaptive-position-ex",outlet:b},{title:"Adaptive position with overflow boundary",anchor:"adaptive-position-overflow-boundary-ex",outlet:V},{title:"Dismiss on next click",anchor:"popover-dismiss-ex",outlet:E},{title:"Dynamic content",anchor:"dynamic-content-ex",outlet:U},{title:"Custom content template",anchor:"custom-content-template-ex",outlet:D},{title:"Dynamic Html",anchor:"dynamic-html-ex",outlet:O},{title:"Append to body",anchor:"container-body-ex",outlet:h},{title:"Visibility events",anchor:"events-ex",outlet:x},{title:"Configuring defaults",anchor:"config-defaults-ex",outlet:y},{title:"Outside click",anchor:"outside-click-ex",outlet:Z},{title:"Custom triggers",anchor:"triggers-custom-ex",outlet:X},{title:"Manual triggering",anchor:"triggers-manual-ex",outlet:L},{title:"Trigger by isOpen property",anchor:"trigger-by-isopen-property-ex",outlet:P},{title:"Component level styling",anchor:"styling-local-ex",outlet:B},{title:"Custom class",anchor:"popover-custom-class-ex",outlet:C},{title:"Popover context",anchor:"popover-context-ex",outlet:T},{title:"Popover with delay",anchor:"popover-delay-ex",outlet:A}]}];var Q=e(22289),N=e(33505);let K=(()=>{class t{constructor(){this.name="Popover",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/popover",this.componentContent=I}}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["tooltip-section"]],decls:6,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(p,r){1&p&&(o.TgZ(0,"demo-section",0)(1,"p"),o._uU(2,"Add small overlay content, like those found in iOS, to any element for housing secondary information."),o.qZA(),o.TgZ(3,"p"),o._uU(4,"The easiest way to add the popover component to your app (will be added to the root module)"),o.qZA(),o._UZ(5,"docs-section",1),o.qZA()),2&p&&(o.Q6J("name",r.name)("src",r.src)("componentContent",r.componentContent),o.xp6(5),o.Q6J("content",r.componentContent))},dependencies:[Q.Z,N.Z],encapsulation:2,changeDetection:0}),t})();const G=[{path:"",component:K}];e(71663);let Y=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[l.ez,c.u5,u.Gz,g.UU.forRoot(),R.Bz.forChild(G)]}),t})()},89697:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<div class="container">\n\n    <div class="btn-padding">\n        <button type="button" class="btn btn-default btn-secondary"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on top"\n            [adaptivePosition]="true" container="body" boundariesElement="viewport" placement="top">\n            Popover on top\n        </button>\n\n        <button type="button" class="btn btn-default btn-secondary"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverTitle="Popover on bottom"\n            [adaptivePosition]="true" container="body" boundariesElement="viewport" placement="bottom">\n            Popover on bottom\n        </button>\n    </div>\n\n</div>\n'},38004:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n  \n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-adaptive-position-overflow-boundary',\n  templateUrl: './adaptive-position-overflow-boundary.html',\n  styleUrls: ['./adaptive-position-overflow-boundary.css']\n\n})\nexport class DemoAdaptivePositionOverflowBoundaryComponent {}\n"},37816:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        [adaptivePosition]="false"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        [adaptivePosition]="false"\n        placement="right">\n  Popover on right\n</button>'},96461:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-adaptive-position',\n  templateUrl: './adaptive-position.html'\n})\nexport class DemoPopoverAdaptivePositionComponent {}\n"},61394:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n\n'},58877:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoPopoverBasicComponent {}\n"},26136:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." containerClass="customClass">\n  Custom class demo\n</button>\n\n'},97998:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-class',\n  templateUrl: './class.html'\n})\nexport class DemoPopoverClassComponent {}\n"},96359:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Preconfigured popover\n</button>\n'},38686:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\nimport { PopoverConfig } from 'ngx-bootstrap/popover';\n\n// such override allows to keep some initial values\n\nexport function getPopoverConfig(): PopoverConfig {\n  return Object.assign(new PopoverConfig(), {\n    placement: 'right',\n    container: 'body',\n    triggers: 'focus',\n    delay: 500\n  });\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-config',\n  templateUrl: './config.html',\n  providers: [{ provide: PopoverConfig, useFactory: getPopoverConfig }]\n})\nexport class DemoPopoverConfigComponent {}\n"},7340:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<div class="row panel" style="position: relative; overflow: hidden;">\n  <div class="card-block panel-body">\n    <button type="button" class="btn btn-danger"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Default popover\n    </button>\n    <button type="button" class="btn btn-success"\n            popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n            container="body">\n      Popover appended to body\n    </button>\n  </div>\n</div>\n'},47265:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-container',\n  templateUrl: './container.html'\n})\nexport class DemoPopoverContainerComponent {}\n"},62513:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<p>\n  <select [(ngModel)]="placement" class="form-control">\n    <option *ngFor="let placement of placements"\n      [value]="placement">\n      {{ placement }}\n    </option>\n  </select>\n</p>\n<button type="button" class="btn btn-default btn-secondary"\n  popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n  [popoverTitle]="\'Popover on \' + placement"\n  [placement]="placement">\n  {{ \'Popover on \' + placement }} \n</button>\n'},58901:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='import { Component } from \'@angular/core\';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: \'demo-popover-corner-placement\',\n  templateUrl: \'./corner-placement.html\'\n})\nexport class DemoPopoverCornerPlacementComponent {\n  placements = [\n    \'top left\',\n    \'top right\',\n    \'right top\',\n    \'right bottom\',\n    \'bottom right\',\n    \'bottom left\',\n    \'left bottom\',\n    \'left top\'\n  ];\n  placement: "top" | "bottom" | "left" | "right" | "auto" | "top left" | "top right" | "right top" | "right bottom" | "bottom right" | "bottom left" | "left bottom" | "left top" = \'top left\';\n}\n'},13914:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<ng-template #popTemplate>Just another: {{content}}</ng-template>\n<button type="button" class="btn btn-warning"\n        [popover]="popTemplate" popoverTitle="Template ref content inside">\n  TemplateRef binding\n</button>\n'},47483:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-custom-content',\n  templateUrl: './custom-content.html'\n})\nexport class DemoPopoverCustomContentComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},58933:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." [delay]="500">\n  Popover with 0.5sec delay\n</button>\n\n'},58398:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-delay',\n  templateUrl: './delay.html'\n})\nexport class DemoPopoverDelayComponent {}\n"},47581:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-success"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Dismissible popover"\n        triggers="focus">\n  Dismissible popover\n</button>\n\n'},40492:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoPopoverDismissComponent {}\n"},2579:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<ng-template #popTemplate>Here we go: <div [innerHtml]="html"></div></ng-template>\n<button type="button" class="btn btn-success"\n        [popover]="popTemplate" popoverTitle="Dynamic html inside">\n  Show me popover with html\n</button>\n'},19982:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoPopoverDynamicHtmlComponent {\n  html = `<span class=\"btn btn-danger\">Never trust not sanitized HTML!!!</span>`;\n}\n"},77652:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-info"\n        [popover]="content" [popoverTitle]="title">\n  Simple binding\n</button>\n'},61728:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-dynamic',\n  templateUrl: './dynamic.html'\n})\nexport class DemoPopoverDynamicComponent {\n  title = 'Welcome word';\n  content = 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.';\n}\n"},79086:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        (onShown)="onShown()" (onHidden)="onHidden()"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Live demo\n</button>\n<br>\n<br>\n<pre class="card card-block card-header mb-3">Event: {{message}}</pre>\n'},71712:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-events',\n  templateUrl: './events.html'\n})\nexport class DemoPopoverEventsComponent {\n  message?: string;\n\n  onShown(): void {\n    this.message = 'shown';\n  }\n\n  onHidden(): void {\n    this.message = 'hidden';\n  }\n}\n"},8323:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-primary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        [outsideClick]="true">\n  Live demo\n</button>\n\n'},99915:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-outside-click',\n  templateUrl: './outside-click.html'\n})\nexport class DemoPopoverOutsideClickComponent {}\n"},478:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on top"\n        placement="top">\n  Popover on top\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on right"\n        placement="right">\n  Popover on right\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover auto"\n        placement="auto">\n  Popover auto\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on left"\n        placement="left">\n  Popover on left\n</button>\n\n<button type="button" class="btn btn-default btn-secondary"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."\n        popoverTitle="Popover on bottom"\n        placement="bottom">\n  Popover on bottom\n</button>\n'},72257:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-placement',\n  templateUrl: './placement.html'\n})\nexport class DemoPopoverPlacementComponent {}\n"},88856:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<ng-template #popTemplate let-message="message">{{ message }}</ng-template>\n<button type="button" class="btn btn-primary"\n        [popover]="popTemplate" [popoverContext]="context">\n  Open popover with custom context\n</button>\n'},26276:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-context',\n  templateUrl: './popover-context.html'\n})\nexport class DemoPopoverContextComponent {\n  context = {\n    message: 'Hello there!'\n  };\n}\n"},63933:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<button type="button" class="btn btn-info"\n        popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  I have component level styling\n</button>\n'},70061:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-styling-local',\n  templateUrl: './styling-local.html',\n  styles: [\n    `\n:host .popover {\n  background-color: #009688;\n  color: #fff;\n}\n:host .popover>.arrow:after {\n  border-top-color: #009688;\n}\n  `\n  ]\n})\nexport class DemoPopoverStylingLocalComponent {}\n"},97619:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<p>\n  <span popover="Hello there! I was triggered by changing isOpen property"\n        triggers=""  [isOpen]="isOpen">\n  This text has attached popover\n  </span>\n</p>\n<button type="button" class="btn btn-primary"\n        (click)="isOpen = !isOpen">\n  Toggle\n</button>\n'},36047:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-trigger-by-isopen',\n  templateUrl: './trigger-by-isopen-property.html'\n})\nexport class DemoPopoverByIsOpenPropComponent {\n  isOpen = false;\n}\n"},54646:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<div class="row">\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="I will hide on blur"\n            triggers="mouseenter:mouseleave">\n      Hover over me!\n    </button>\n  </div>\n  <div class="col-md-2">\n    <button type="button" class="btn btn-info"\n            popover="Double click one more time"\n            triggers="dblclick">\n      Double click me!\n    </button>\n  </div>\n  <div class="col-md-3">\n    <input type="text"\n           class="form-control"\n           placeholder="Show popover on input change"\n           popover="I will hide on blur"\n           triggers="keypress:focusout">\n  </div>\n</div>\n'},73597:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-custom',\n  templateUrl: './triggers-custom.html'\n})\nexport class DemoPopoverTriggersCustomComponent {}\n"},54764:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l='<p>\n  <span popover="Hello there! I was triggered manually"\n        triggers="" #pop="bs-popover">\n  This text has attached popover\n  </span>\n</p>\n\n<button type="button" class="btn btn-success" (click)="pop.show()">\n  Show\n</button>\n<button type="button" class="btn btn-warning" (click)="pop.hide()">\n  Hide\n</button>\n<button type="button" class="btn btn-info" (click)="pop.toggle()">\n  Toggle\n</button>\n'},28962:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'demo-popover-triggers-manual',\n  templateUrl: './triggers-manual.html'\n})\nexport class DemoPopoverTriggersManualComponent {}\n"},62965:(a,n,e)=>{e.r(n),e.d(n,{default:()=>l});const l="import { PopoverModule } from 'ngx-bootstrap/popover';\n\n@NgModule({\n  imports: [PopoverModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);