import{_ as t,a as e,b as i}from"../createClass-be661622.js";import{_ as o,a as l,b as s,c as n}from"../getPrototypeOf-3751add9.js";import r from"react";import{Portal as p}from"react-portal";import{Link as h}from"carbon-components-react";function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=l(t);if(e){var n=l(this).constructor;i=Reflect.construct(o,arguments,n)}else i=o.apply(this,arguments);return s(this,i)}}var u=function(l){o(u,l);var s=a(u);function u(e){var i;return t(this,u),(i=s.call(this,e)).state={isTooltipVisible:!1},i.pendingTooltip=null,i.hideTooltipOnScrollAndResize=i.hideTooltipOnScrollAndResize.bind(n(i)),i}return e(u,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.hideTooltipOnScrollAndResize,!0),window.addEventListener("resize",this.hideTooltipOnScrollAndResize,!0),this.props.targetObj&&this.setTooltipVisible(!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.hideTooltipOnScrollAndResize,!0),window.removeEventListener("resize",this.hideTooltipOnScrollAndResize,!0),this.pendingTooltip&&clearTimeout(this.pendingTooltip)}},{key:"setTooltipVisible",value:function(t){if((!this.showTooltip()||!t&&this.pendingTooltip)&&(clearTimeout(this.pendingTooltip),this.pendingTooltip=null,this.setState({isTooltipVisible:!1})),this.showTooltip()){var e=document.querySelector("[data-id='"+this.props.id+"']");if(this.pendingTooltip=null,this.setState({isTooltipVisible:t}),t){var i=null;(i=this.props.targetObj?this.props.targetObj:document.querySelector("[data-id='"+this.props.id+"-trigger']"))&&e&&this.updateTooltipLayout(e,i,e.getAttribute("direction"))}}}},{key:"getStyleValue",value:function(t){return t+"px"}},{key:"getNewDirection",value:function(t){var e;switch(t){case"top":e="bottom";break;case"bottom":e="top";break;case"left":e="right";break;default:e="left"}return e}},{key:"showTooltip",value:function(){var t=this.canDisplayFullText(this.triggerRef);return!this.props.disable&&!this.props.showToolTipIfTruncated||!this.props.disable&&this.props.showToolTipIfTruncated&&!t}},{key:"canDisplayFullText",value:function(t){if(t){var e=t.firstChild&&t.firstChild.scrollWidth?t.firstChild.scrollWidth:0,i=t.offsetWidth,o=e;0===e&&(o=t.scrollWidth);var l=o<=i;return l}return!1}},{key:"showTooltipWithDelay",value:function(){if(!this.pendingTooltip&&this.showTooltip()){var t=this;this.pendingTooltip=setTimeout((function(){t.setTooltipVisible(!0)}),this.props.delay)}}},{key:"updateTooltipLayout",value:function(t,e,i){var o=i,l=document.documentElement.clientWidth,s=document.documentElement.clientHeight,n=e.getBoundingClientRect(),r=t.querySelector("svg"),p=r.getBoundingClientRect();if(t.style.left=this.getStyleValue(n.left),t.style.top=this.getStyleValue(n.top),this.props.mousePos)this.updateLocationBasedOnMousePos(t,this.props.mousePos,i);else{if("top"===o||"bottom"===o){var h=n.left;t.offsetWidth>n.width?(h-=(t.offsetWidth-n.width)/2)<0&&(h=2):t.offsetWidth<n.width&&(h+=(n.width-t.offsetWidth)/2),t.style.left=this.getStyleValue(h),h+t.offsetWidth>l&&(t.style.left=this.getStyleValue(l-t.offsetWidth))}else if("left"===o)for(;t.offsetLeft+t.offsetWidth+p.width>Math.round(n.left);)t.style.left=this.getStyleValue(n.left-t.offsetWidth-p.width);else"right"===o&&(t.style.left=this.getStyleValue(n.right+p.width));if("top"===o)t.style.top=this.getStyleValue(n.top-p.height-t.offsetHeight);else if("bottom"===o)t.style.top=this.getStyleValue(n.bottom+p.height);else if("left"===o||"right"===o){var a=n.top;t.offsetHeight>n.height?(a-=(t.offsetHeight-n.height)/2)<0&&(a=n.top):t.offsetHeight<n.height&&(a+=(n.height-t.offsetHeight)/2),t.style.top=this.getStyleValue(a+1),s-t.offsetHeight<n.top&&(t.style.top=this.getStyleValue(s-t.offsetHeight))}"top"===o||"bottom"===o?r.style.left=this.getStyleValue(n.left-t.getBoundingClientRect().left+e.getBoundingClientRect().width/2-p.width/2+1):"left"===o?r.style.left=this.getStyleValue(t.offsetWidth-3):"right"===o&&(r.style.left=this.getStyleValue(2-p.width)),"top"===o?r.style.top=this.getStyleValue(t.offsetHeight-5):"bottom"===o?r.style.top="-11px":"left"!==o&&"right"!==o||(r.style.top=this.getStyleValue(n.top-t.getBoundingClientRect().top+e.offsetHeight/2-p.height/2))}if(this.isOutOfBounds(t)&&t.getAttribute("direction")===o){var u=this.getNewDirection(o);return this.updateTooltipLayout(t,e,u),void t.setAttribute("direction",u)}}},{key:"updateLocationBasedOnMousePos",value:function(t,e,i){var o=i,l=document.documentElement.clientWidth,s=document.documentElement.clientHeight,n=t.querySelector("svg"),r=n.getBoundingClientRect(),p=this.props.mousePos.x,h=this.props.mousePos.y;if("top"===o||"bottom"===o){var a=p-t.offsetWidth/2;l-t.offsetWidth<a?a=l-t.offsetWidth:a<0&&(a=2),t.style.left=this.getStyleValue(a)}else"left"===o?t.style.left=this.getStyleValue(p-t.offsetWidth-r.width-5):"right"===o&&(t.style.left=this.getStyleValue(p+r.width+5));if("top"===o)t.style.top=this.getStyleValue(h-r.height-t.offsetHeight);else if("bottom"===o)t.style.top=this.getStyleValue(h+2*r.height);else if("left"===o||"right"===o){var u=h-t.offsetHeight/2;s-t.offsetHeight<u?u=s-t.offsetHeight:u<0&&(u=2),t.style.top=this.getStyleValue(u+1)}"top"===o||"bottom"===o?n.style.left=this.getStyleValue(p-t.getBoundingClientRect().left-r.width/2):"left"===o?n.style.left=this.getStyleValue(t.offsetWidth-3):"right"===o&&(n.style.left=this.getStyleValue(2-r.width)),"top"===o?n.style.top=this.getStyleValue(t.offsetHeight-5):"bottom"===o?n.style.top="-11px":"left"!==o&&"right"!==o||(n.style.top=this.getStyleValue(h-t.getBoundingClientRect().top-r.height/2))}},{key:"isOutOfBounds",value:function(t){var e=parseFloat(t.style.left),i=parseFloat(t.style.top);return e+t.offsetWidth>document.documentElement.clientWidth||e<0||i<0||i+t.offsetHeight>document.documentElement.clientHeight}},{key:"toggleTooltipOnClick",value:function(t){t.stopPropagation(),t.preventDefault(),this.state.isTooltipVisible?this.setTooltipVisible(!1):this.setTooltipVisible(!0)}},{key:"hideTooltipOnScrollAndResize",value:function(t){this.state.isTooltipVisible&&this.setTooltipVisible(!1)}},{key:"tooltipLinkOnClick",value:function(t){window.open(t,"_blank","noopener")}},{key:"render",value:function(){var t=this,e=null,o=null;if(this.props.children){o=r.createElement("div",{"data-id":this.props.id+"-trigger",className:"tooltip-trigger",onMouseOver:this.props.showToolTipOnClick?null:function(){return t.setTooltipVisible(!0)},onMouseLeave:this.props.showToolTipOnClick?null:function(){return t.setTooltipVisible(!1)},onMouseDown:this.props.showToolTipOnClick?null:function(){return t.setTooltipVisible(!1)},onClick:this.props.showToolTipOnClick?function(e){return t.toggleTooltipOnClick(e)}:null,onFocus:this.props.showToolTipOnClick?function(){return t.showTooltipWithDelay()}:null,onBlur:this.props.showToolTipOnClick?function(e){null!==e.relatedTarget&&t.setTooltipVisible(!1)}:null,tabIndex:this.props.showToolTipOnClick?0:null,ref:function(e){return t.triggerRef=e}},this.props.children)}"string"==typeof this.props.tip?e=r.createElement("span",{id:"tooltipContainer"},this.props.tip):"object"===i(this.props.tip)?e=r.createElement("div",{id:"tooltipContainer"},this.props.tip):"function"==typeof this.props.tip&&(e=this.props.tip());var l="common-canvas-tooltip";this.props.className&&(l+=" "+this.props.className);var s=null;if(this.state.isTooltipVisible&&this.props.tooltipLinkHandler&&this.props.link){var n=this.props.tooltipLinkHandler(this.props.link);"object"===i(n)&&n.label&&n.url&&(s=r.createElement(h,{className:"tooltip-link",id:this.props.link.id,onClick:this.tooltipLinkOnClick.bind(this,n.url)},n.label))}var a=null;return(e||s)&&(a=r.createElement(p,null,r.createElement("div",{"data-id":this.props.id,className:l,"aria-hidden":!this.state.isTooltipVisible,direction:this.props.direction},r.createElement("svg",{id:"tipArrow",x:"0px",y:"0px",viewBox:"0 0 9.1 16.1"},r.createElement("polyline",{points:"9.1,15.7 1.4,8.1 9.1,0.5"}),r.createElement("polygon",{points:"8.1,16.1 0,8.1 8.1,0 8.1,1.4 1.4,8.1 8.1,14.7"})),e,s))),r.createElement("div",{className:"tooltip-container"},o,a)}}]),u}(r.Component);u.defaultProps={delay:200,direction:"bottom",showToolTipIfTruncated:!1,showToolTipOnClick:!1};export{u as default};
//# sourceMappingURL=tooltip.es.js.map
