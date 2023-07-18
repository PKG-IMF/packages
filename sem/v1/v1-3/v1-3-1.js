(function(){var y=function(o){var r,n,s=!1,i=!1,u=0,p=0;var t={get elt(){return o},get text(){return getText(o)},set text(e){setText(o,e)},get num(){return getNumber(o)},set num(e){setNumber(o,e)},get fontSize(){return getProperty(o,"font-size")},set fontSize(e){setProperty(o,"font-size",e)},get fontFamily(){return getProperty(o,"font-family")},set fontFamily(e){setProperty(o,"font-family",e)},get textAlign(){return getProperty(o,"text-align")},set textAlign(e){setProperty(o,"text-align",e)},get textColor(){return getProperty(o,"text-color")},set textColor(e){setProperty(o,"text-color",e)},get placeholder(){return getProperty(o,"placeholder")},set placeholder(e){setProperty(o,"placeholder",e)},get backgroundColor(){return getProperty(o,"background-color")},set backgroundColor(e){setProperty(o,"background-color",e)},get image(){return getProperty(o,"image")},set image(e){setProperty(o,"image",e)},get fit(){return getProperty(o,"fit")},set fit(e){setProperty(o,"fit",e)},get iconColor(){return getProperty(o,"icon-color")},set iconColor(e){setProperty(o,"icon-color",e)},get borderColor(){return getProperty(o,"border-color")},set borderColor(e){setProperty(o,"border-color",e)},get borderRadius(){return getProperty(o,"border-radius")},set borderRadius(e){setProperty(o,"border-radius",e)},get borderWidth(){return getProperty(o,"border-width")},set borderWidth(e){setProperty(o,"border-width",e)},get height(){return getProperty(o,"height")},set height(e){setProperty(o,"height",e)},get width(){return getProperty(o,"width")},set width(e){setProperty(o,"width",e)},get size(){return[getProperty(o,"height"),getProperty(o,"width")]},set size(e){setProperty(o,"height",e[0]),setProperty(o,"width",e[1])},get x(){return getProperty(o,"x")},set x(e){setProperty(o,"x",e)},get y(){return getProperty(o,"y")},set y(e){setProperty(o,"y",e)},get position(){return[getProperty(o,"x"),getProperty(o,"y")]},set position(e){setProperty(o,"x",e[0]),setProperty(o,"y",e[1])},get value(){return getProperty(o,"value")},set value(e){setProperty(o,"value",e)},get min(){return getProperty(o,"min")},set min(e){setProperty(o,"min",e)},get max(){return getProperty(o,"max")},set max(e){setProperty(o,"max",e)},get range(){return[getProperty(o,"min"),getProperty(o,"max")]},set range(e){setProperty(o,"min",e[0]),setProperty(o,"max",e[1])},get step(){return getProperty(o,"step")},set step(e){setProperty(o,"step",e)},get hidden(){return getProperty(o,"hidden")},set hidden(e){setProperty(o,"hidden",e)},get groupId(){return getProperty(o,"group-id")},set groupId(e){setProperty(o,"group-id",e)},get checked(){return getProperty(o,"checked")},set checked(e){setProperty(o,"checked",e)},get readonly(){return getProperty(o,"readonly")},set readonly(e){setProperty(o,"readonly",e)},get options(){return getProperty(o,"options")},set options(e){setProperty(o,"options",e)},get index(){return getProperty(o,"index")},set index(e){setProperty(o,"index",e)},set parent(e){setParent(o,e)},set children(e){setParent(e,o)},set html(e){innerHTML(o,e)},set CSS(e){setStyle(o,e)},scrollable:{x:!1,y:!1},get scrollX(){return this.scrollable},set scrollX(e){!0===e?(this.scrollable.x=!0,setStyle(o,"overflow-x:scroll")):!1===e&&(this.scrollable.x=!1,setStyle(o,"overflow-x:none"))},get scrollY(){return this.scrollable},set scrollY(e){!0===e?(this.scrollable.y=!0,setStyle(o,"overflow-y:scroll")):!1===e&&(this.scrollable.y=!1,setStyle(o,"overflow-y:none"))},hide:function(e){e?setTimeout(function(){hideElement(o)},e):hideElement(o)},show:function(e){e?setTimeout(function(){showElement(o)},e):showElement(o)},set sound(e){onEvent(o,"click",function(){playSound(e)})},set speech(e){onEvent(o,"click",function(){playSpeech(e)})},set click(t){onEvent(o,"click",function(e){t(e)})},set change(t){onEvent(o,"change",function(e){t(e)})},set keyup(t){onEvent(o,"keyup",function(e){t(e)})},set keydown(t){onEvent(o,"keydown",function(e){t(e)})},set keypress(t){onEvent(o,"keypress",function(e){t(e)})},set mousemove(t){onEvent(o,"mousemove",function(e){t(e)})},set mousedown(t){onEvent(o,"mousedown",function(e){t(e)})},set mouseup(t){onEvent(o,"mouseup",function(e){t(e)})},set mouseover(t){onEvent(o,"mouseover",function(e){t(e)})},set mouseout(t){onEvent(o,"mouseout",function(e){t(e)})},set input(t){onEvent(o,"input",function(e){t(e)})},set hover(t){this.ini={};var e,r=this.ini;for(e in t)r[e]=this[e];this.mouseover=function(){for(var e in t)y(o)[e]=t[e]},this.mouseout=function(){for(var e in r)y(o)[e]=r[e]}},drop:function(){},set drag(e){!1===e?s=!1:(s=!0,y(e).mousemove=function(e){e=e,i&&s&&(y(o).y=e.y-u,y(o).x=e.x-p)},y(e).mouseup=function(e){!0!==i||e.y===n&&e.x===r||t.drop(e),i=!1})}};return t.mousedown=function(e){var t;t=e,s&&(i=!0,u=t.y-y(o).y,p=t.x-y(o).x),r=e.x,n=e.y},t};return{$:y,Template:function(e){this.props={};var t,o=this.props;for(t in e)o[t]=e[t];this.Apply=function(){var e,t=Array.isArray(arguments[0])?arguments[0]:arguments;for(e in o)for(var r=0;r<t.length;r++)y(t[r])[e]=o[e]}},_info__:{version:"v1.3.1",author:"IMF",dependencies:[]}}})();
