import{_ as e,a as t,b as r}from"./createClass-be661622.js";import{_ as n,a,b as s,c as i}from"./getPrototypeOf-3751add9.js";import{D as o,n as l,J as c,g as u,_ as f,s as p,G as d,y as m,K as h,L as E,M as v,m as y,b,f as T,i as L,j as N,h as g}from"./isArrayLikeObject-7787005e.js";import{d as S,_ as A,F as O}from"./flexible-table-93b87acb.js";import{_ as I}from"./_baseForOwn-6ff4cc59.js";import R,{Component as C}from"react";import{v4 as M}from"uuid";import k from"./lib/tooltip.es.js";import{injectIntl as _}from"react-intl";import{Button as P}from"carbon-components-react";import{c as D,n as F,e as w,o as U,M as j,R as B}from"./extends-a9c1b4cd.js";import{_ as x}from"./canvas-constants-ba465147.js";import{d as G,f as H}from"./en-6c5e8bad.js";import{I as K}from"./icon-4a6f3dad.js";import{Reset24 as Y}from"@carbon/icons-react";function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}var V=function(r){n(s,C);var a=X(s);function s(){return e(this,s),a.apply(this,arguments)}return t(s,[{key:"render",value:function(){var e,t,r=void 0===this.props.applyLabel?this.props.intl.formatMessage({id:"propertiesEdit.applyButton.label",defaultMessage:S["propertiesEdit.applyButton.label"]}):this.props.applyLabel,n=void 0===this.props.rejectLabel?this.props.intl.formatMessage({id:"propertiesEdit.rejectButton.label",defaultMessage:S["propertiesEdit.rejectButton.label"]}):this.props.rejectLabel;return this.props.cancelHandler&&(e=R.createElement(P,{"data-id":"properties-cancel-button",className:"properties-cancel-button",type:"button",size:"small",kind:"secondary",onClick:this.props.cancelHandler},n)),this.props.okHandler&&(t=R.createElement(P,{"data-id":"properties-apply-button",className:"properties-apply-button",type:"button",size:"small",onClick:this.props.okHandler,disabled:!this.props.applyButtonEnabled},r)),this.props.okHandler||this.props.cancelHandler?R.createElement("div",{className:D("properties-modal-buttons",{hide:void 0!==this.props.showPropertiesButtons&&!this.props.showPropertiesButtons})},e,t):null}}]),s}();V.defaultProps={applyButtonEnabled:!0};var z=_(V),W=o;var $=function(e,t){return W(e,t)},J={CONTROL:"control",ADDITIONAL_LINK:"additionalLink",STATIC_TEXT:"staticText",HORIZONTAL_SEPARATOR:"hSeparator",PANEL:"panel",TEARSHEET:"tearsheet",SUB_TABS:"subTabs",PRIMARY_TABS:"primaryTabs",PANEL_SELECTOR:"panelSelector",CUSTOM_PANEL:"customPanel",ACTION:"action",TEXT_PANEL:"textPanel"},Z={INLINE:"inline",SUBPANEL:"subpanel",ON_PANEL:"on_panel"},q={MAX:"max",LARGE:"large",MEDIUM:"medium",SMALL:"small"},Q={CONTROLS:"controls",TABS:"tabs",SUB_TABS:"subTabs",PANELS:"panels",ADDITIONAL:"additional",COLUMN_SELECTION:"columnSelection",PANEL_SELECTOR:"panelSelector",CUSTOM_PANEL:"customPanel",SUMMARY_PANEL:"summaryPanel",ACTION_PANEL:"actionPanel",TEXT_PANEL:"textPanel",TWISTY_PANEL:"twistyPanel",COLUMN_PANEL:"columnPanel",TEARSHEET_PANEL:"tearsheetPanel"},ee={GENERAL:"general",COLUMN_SELECTION:"columnSelection",CUSTOM:"custom",SUMMARY:"summary",ACTION_PANEL:"actionPanel",TWISTY_PANEL:"twisty",COLUMN_PANEL:"column",TEARSHEET:"tearsheet"},te={CUSTOM:"custom",TEXTFIELD:"textfield",PASSWORDFIELD:"passwordfield",TEXTAREA:"textarea",LIST:"list",EXPRESSION:"expression",NUMBERFIELD:"numberfield",DATEFIELD:"datefield",TIMEFIELD:"timefield",TIMESTAMP:"timestampfield",CHECKBOX:"checkbox",TOGGLE:"toggle",RADIOSET:"radioset",CHECKBOXSET:"checkboxset",ONEOFSELECT:"oneofselect",MULTISELECT:"multiselect",SOMEOFSELECT:"someofselect",SELECTCOLUMN:"selectcolumn",SELECTCOLUMNS:"selectcolumns",SELECTSCHEMA:"selectschema",STRUCTURETABLE:"structuretable",STRUCTUREEDITOR:"structureeditor",STRUCTURELISTEDITOR:"structurelisteditor",TOGGLETEXT:"toggletext",READONLY:"readonly",READONLYTABLE:"readonlyTable",SPINNER:"spinner",CODE:"code",HIDDEN:"hidden"},re={TEXT:"text",ENUM:"enum",COLUMN:"column",NEW_COLUMN:"new_column",EXPRESSION:"expression",EMAIL:"email",URL:"url",COLOR:"color",INTERVAL_YEAR:"interval_year",INTERVAL_DAY:"interval_day",INTERVAL_SECOND:"interval_second",CUSTOM:"custom",UNSPECIFIED:""},ne={BOOLEAN:"boolean",INTEGER:"integer",LONG:"long",DOUBLE:"double",STRING:"string",PASSWORD:"password",DATE:"date",TIME:"time",TIMESTAMP:"timestamp",STRUCTURE:"structure",OBJECT:"object"},ae={BEFORE:"before",AFTER:"after"},se={VERTICAL:"vertical",HORIZONTAL:"horizontal"},ie=l;var oe=function(e,t){return function(r,n){if(null==r)return r;if(!ie(r))return e(r,n);for(var a=r.length,s=t?a:-1,i=Object(r);(t?s--:++s<a)&&!1!==n(i[s],s,i););return r}}(I),le=oe,ce=l;var ue=c;var fe=function(e,t){if(e!==t){var r=void 0!==e,n=null===e,a=e==e,s=ue(e),i=void 0!==t,o=null===t,l=t==t,c=ue(t);if(!o&&!c&&!s&&e>t||s&&i&&l&&!o&&!c||n&&i&&l||!r&&l||!a)return 1;if(!n&&!s&&!c&&e<t||c&&r&&a&&!n&&!s||o&&r&&a||!i&&a||!l)return-1}return 0};var pe=u,de=f,me=A,he=function(e,t){var r=-1,n=ce(e)?Array(e.length):[];return le(e,(function(e,a,s){n[++r]=t(e,a,s)})),n},Ee=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},ve=p,ye=function(e,t,r){for(var n=-1,a=e.criteria,s=t.criteria,i=a.length,o=r.length;++n<i;){var l=fe(a[n],s[n]);if(l)return n>=o?l:l*("desc"==r[n]?-1:1)}return e.index-t.index},be=d,Te=m;var Le=h,Ne=l,ge=E,Se=v;var Ae=function(e,t,r){if(!Se(r))return!1;var n=typeof t;return!!("number"==n?Ne(r)&&ge(t,r.length):"string"==n&&t in r)&&Le(r[t],e)},Oe=b,Ie=function(e,t,r){t=t.length?pe(t,(function(e){return Te(e)?function(t){return de(t,1===e.length?e[0]:e)}:e})):[be];var n=-1;t=pe(t,ve(me));var a=he(e,(function(e,r,a){return{criteria:pe(t,(function(t){return t(e)})),index:++n,value:e}}));return Ee(a,(function(e,t){return ye(e,t,r)}))},Re=Ae,Ce=y((function(e,t){if(null==e)return[];var r=t.length;return r>1&&Re(e,t[0],t[1])?t=[]:r>2&&Re(t[0],t[1],t[2])&&(t=[t[0]]),Ie(e,Oe(t,1),[])})),Me=T,ke=m,_e=L;var Pe=function(e){return"string"==typeof e||!ke(e)&&_e(e)&&"[object String]"==Me(e)};var De=function(e){return void 0===e},Fe={};function we(e,t,r){var n="",a="",s="";return r&&(n=r+": "),t&&(t.lineNumber&&(a="(line "+t.lineNumber+"): "),s=t.message?t.message:"Message unavailable"),"["+e+"]: "+n+a+s}Fe.debug=function(e,t){console.log(we("DEBUG",t,e))},Fe.info=function(e,t){console.log(we("INFO",t,e))},Fe.warn=function(e,t){console.warn(we("WARNING",t,e))},Fe.error=function(e,t){console.error(we("ERROR",t,e))};var Ue=Fe;function je(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return Be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Be(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw s}}}}function Be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function He(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function Ke(e){return void 0!==e?G(e):e}function Ye(e,t,r){var n,a=Ge(Ge({},S),H);if(null!=e){if(""===e.messages[t])return"";n=e.formatMessage({id:t,defaultMessage:a[t]},r)}else n=a[t];return n}function Xe(){return"properties-"+M()}function Ve(e,t){try{if(!e)return e;var r=e.indexOf("${");if(r<0)return e;var n=e.substr(r+2).indexOf("}");if(n<0)return e;var a=e.substr(r+2,n),s=e.replace("${"+a+"}",function(e,t){var r,n,a=e.indexOf("("),s=e.substr(0,a),i=e.slice(a+1,-1).split(",");if(0===i.length)return"";switch(s){case"percent":return!(n=ze(i[0],t))||isNaN(n)?0:(r=100/n,i.length>1&&(r=r.toFixed(parseInt(i[1],10))),r);case"sum":r=0;var o,l=je(i);try{for(l.s();!(o=l.n()).done;){n=ze(o.value,t),isNaN(n)||(r+=n)}}catch(e){l.e(e)}finally{l.f()}return r}return""}(a,t));return Ve(s,t)}catch(t){return Ue.warn("Invalid expression.  Make sure replacement expression in text is a valid expression."),e}}function ze(e,t){return isNaN(e)?t.getPropertyValue({name:e.trim()}):parseFloat(e)}function We(e){if(e)if(e.subControls){for(var t=0;t<e.subControls.length;t++)if(e.subControls[t].role===re.COLUMN)return t}else if(e.role===re.COLUMN)return 0;return-1}function $e(e){var t={fields:[]};if(e&&e.columns){var r,n=je(e.columns);try{for(n.s();!(r=n.n()).done;){var a=r.value,s={};s.name=a.name,s.type=Je(a.storage),s.metadata={},s.metadata.description="",a.measure&&(s.metadata.measure=a.measure.toLowerCase()),a.modelingRole&&(s.metadata.modeling_role=a.modelingRole.toLowerCase()),t.fields.push(s)}}catch(e){n.e(e)}finally{n.f()}}return t}function Je(e){var t=e.toLowerCase();return"Real"===e&&(t="double"),t}function Ze(e){if(e){if(e.structureType&&"object"===e.structureType)return!0;if(e.subControls){var t,r=je(e.subControls);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.structureType&&"object"===n.structureType)return!0;if(n.subControls&&Ze(n))return!0}}catch(e){r.e(e)}finally{r.f()}return!1}}return!1}function qe(e,t,n){var a=[];if(t.forEach((function(e){a.push(e.name)})),e){var s=[];return"object"===r(n)&&null!==n&&Object.keys(n).length>0&&n.forEach((function(e){if(Array.isArray(e)){var n=[];e.forEach((function(e,a){var s=e;"object"===r(e)&&null!==e&&Object.keys(e).length>0&&(s=qe(t[a].valueDef.isList,t[a].subControls,e)),n.push(s)})),s.push(n)}else if("object"===r(e)){var i=[];a.forEach((function(r,n){var a=void 0!==e[r]?e[r]:null;t[n].structureType&&"object"===t[n].structureType&&(a=qe(t[n].valueDef.isList,t[n].subControls,e[r])),i.push(a)})),s.push(i)}})),s}var i=[];return a.forEach((function(e,t){var r=void 0!==n[e]?n[e]:null;i.push(r)})),i}function Qe(e,t,r,n){var a=[];if(t.forEach((function(e){a.push(e.name)})),e&&Array.isArray(r)){var s=[];return r.forEach((function(e,r){if(n){var i={};a.forEach((function(r,n){t[n].structureType&&"object"===t[n].structureType?i[r]=Qe(t[n].valueDef.isList,t[n].subControls,e[n],!0):void 0!==t.subControls?i[r]=Qe(t[n].valueDef.isList,t[n].subControls,e[n],!1):i[r]=void 0!==e[n]?e[n]:null})),s.push(i)}else{var o=[];e.forEach((function(e,r){var n=e;t[r].structureType&&"object"===t[r].structureType&&(n=Qe(t[r].valueDef.isList,t[r].subControls,e,!0)),o.push(n)})),s.push(o)}})),s}var i={};return a.forEach((function(e,t){i[e]=r&&void 0!==r[t]?r[t]:null})),i}function et(e,t,r){var n=We(e),a=[];if(t&&-1!==n){var s,i=je(t);try{for(i.s();!(s=i.n()).done;){var o=s.value,l=o;Array.isArray(o)?l=tt(o[n],e):"object"===He(o)&&(l=tt(o,e)),a.push(l)}}catch(e){i.e(e)}finally{i.f()}}return a}function tt(e,t,r){return"object"===He(e)?t&&t.valueDef&&e.link_ref?r?e.field_name:e.link_ref+"."+e.field_name:null:e}function rt(e,t){return"object"===He(e)&&e.link_ref?e.link_ref===t.schema&&e.field_name===t.origName:e===t.name}function nt(e,t,r){if("column"===t.role&&"structure"===t.valueDef.propType){var n,a=je(r.getDatasetMetadataFields());try{for(a.s();!(n=a.n()).done;){var s=n.value;if(s.name===e)return{link_ref:s.schema,field_name:s.origName}}}catch(e){a.e(e)}finally{a.f()}}return e}function at(e,t,r){var n,a=e.dmDefault;if(t){var s,i=je(r);try{for(i.s();!(s=i.n()).done;){var o=s.value;if(o.name===t){switch(a){case"type":n=o.type;break;case"description":n=o.metadata.description;break;case"measure":n=it(o.metadata.measure,e.values);break;case"modeling_role":n=it(o.metadata.modeling_role,e.values)}break}}}catch(e){i.e(e)}finally{i.f()}}return n}function st(e,t,r){var n,a=e.find((function(e){return e.origName===t}));switch(r){case"measure":if(!a)return w.MEASUREMENTS.EMPTY;switch(a.metadata.measure){case"range":n=w.MEASUREMENTS.SCALE;break;case"ordered_set":n=w.MEASUREMENTS.ORDINAL;break;case"discrete":n=w.MEASUREMENTS.DISCRETE;break;case"set":case"collection":case"geospatial":n=w.MEASUREMENTS.NOMINAL;break;case"flag":n=w.MEASUREMENTS.FLAG;break;default:n=w.MEASUREMENTS.EMPTY}break;case"type":if(!a)return"typeEmpty";switch(a.type){case F.DATE:n=F.DATE;break;case F.TIME:n=F.TIME;break;case F.TIMESTAMP:n=F.TIMESTAMP;break;case F.STRING:n=F.STRING;break;case F.INTEGER:n=F.INTEGER;break;case F.DOUBLE:n=F.DOUBLE;break;default:n="typeEmpty"}}return n}function it(e,t){var r=t.indexOf(e);if(r>-1)return t[r];var n,a=e.toLowerCase(),s=je(t);try{for(s.s();!(n=s.n()).done;){var i=n.value;if(a===i.toLowerCase())return i}}catch(e){s.e(e)}finally{s.f()}var o,l=je(t);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(a.startsWith(c.substring(0,6).toLowerCase()))return c}}catch(e){l.e(e)}finally{l.f()}return e}function ot(e,t){var r={};return t.forEach((function(t){if(!De(e[t.name])){var n=e[t.name];if(n)switch(t.type){case"string":r[t.name]=n.toString();break;case"integer":r[t.name]=parseInt(n,10);break;case"double":r[t.name]=parseFloat(n);break;case"boolean":Pe(n)?r[t.name]="true"===n:r[t.name]=Boolean(n);break;default:r[t.name]=n}else r[t.name]=n}})),r}function lt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}var ct=function(a){n(i,a);var s=lt(i);function i(){return e(this,i),s.apply(this,arguments)}return t(i,[{key:"render",value:function(){var e=this.props.tooltipText;"object"!==r(this.props.tooltipText)&&(e=String(this.props.tooltipText));var t=R.createElement("div",{className:"properties-tooltips"},e);return R.createElement("div",{className:"properties-truncated-tooltip"},R.createElement(k,{id:"".concat(M(),"-properties"),tip:t,direction:"bottom",className:"properties-tooltips",disable:!N(this.props,"disabled")||this.props.disabled,showToolTipIfTruncated:!0},this.props.content))}}]),i}(R.Component),ut=ct;function ft(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return pt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pt(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw s}}}}function pt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function dt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}var mt=function(r){n(s,r);var a=dt(s);function s(t){var r;return e(this,s),(r=a.call(this,t)).state={fields:r.props.fields,origFields:r.props.fields,filterIcons:[],filterText:"",selectedFields:r.props.currentFields},r.multiSchema=t.controller.getDatasetMetadataSchemas()&&t.controller.getDatasetMetadataSchemas().length>1,r.filterList=[],r.filterType=r.filterType.bind(i(r)),r.getTableData=r.getTableData.bind(i(r)),r.getVisibleData=r.getVisibleData.bind(i(r)),r.handleSave=r.handleSave.bind(i(r)),r.handleCancel=r.handleCancel.bind(i(r)),r.handleReset=r.handleReset.bind(i(r)),r.getNewSelections=r.getNewSelections.bind(i(r)),r.onSort=r.onSort.bind(i(r)),r.onFilter=r.onFilter.bind(i(r)),r.updateFieldSelections=r.updateFieldSelections.bind(i(r)),r.filterList=r.getAvailableFilters(),r}return t(s,[{key:"onFilter",value:function(e){this.setState({filterText:e})}},{key:"onSort",value:function(e){var t=Array.from(this.state.fields);t=Ce(t,(function(t){switch(e.column){case"fieldName":return t.origName;case"dataType":return t.type;case"schemaName":return t.schema;default:return null}})),e.direction===U.DESC&&t.reverse(),this.setState({fields:t})}},{key:"getAvailableFilters",value:function(){var e=[];for(var t in F)if(N(F,t)){var r,n=F[t],a=ft(this.props.fields);try{for(a.s();!(r=a.n()).done;){var s=r.value;if(n===s.type){var i,o={type:s.type},l=!1,c=ft(e);try{for(c.s();!(i=c.n()).done;){if(i.value.type===o.type){l=!0;break}}}catch(e){c.e(e)}finally{c.f()}l||e.push(o);break}}}catch(e){a.e(e)}finally{a.f()}}return e}},{key:"getTableData",value:function(){for(var e=this.getVisibleData(),t=[],r=this.state.selectedFields,n=[],a=function(t){var a=e.findIndex((function(e){return e.name===r[t]}));-1!==a&&n.push(a)},s=0;s<r.length;s++)a(s);for(var i=0;i<e.length;i++){var o=e[i],l=[],c=null;if(this.props.dmIcon&&"type"!==this.props.dmIcon){var u=st(this.props.controller.getDatasetMetadataFields(),o.origName,this.props.dmIcon),f=u?R.createElement(K,{type:u}):null;f&&(c=R.createElement("div",{className:"properties-fp-field-type-icon"},f))}var p=R.createElement("span",{className:"properties-fp-field-name"},o.origName),d=R.createElement(ut,{content:p,tooltipText:o.origName,disabled:!1}),m=R.createElement("div",{className:"properties-fp-field"},c,d);if(l.push({column:"fieldName",content:m,fieldName:o.origName}),this.multiSchema){var h=R.createElement("div",{className:"properties-fp-schema"},o.schema);l.push({column:"schemaName",content:h})}l.push({column:"dataType",content:R.createElement("div",{className:"properties-fp-data"},R.createElement("div",{className:"properties-fp-data-type-icon"},R.createElement(K,{type:o.type})),R.createElement("div",{className:"properties-fp-field-type"},o.type)),value:o.type}),t.push({className:"properties-fp-data-rows",columns:l})}return this.selectedRowsIndex=n,t}},{key:"getVisibleData",value:function(){var e=this;return this.state.fields.filter((function(t){return e.state.filterIcons.indexOf(t.type)<0})).filter((function(t){return void 0===e.state.filterText||null===e.state.filterText||t.origName.toLowerCase().indexOf(e.state.filterText.toLowerCase())>-1}))}},{key:"getNewSelections",value:function(){var e=[],t=this.props.currentFields;if(this.state.selectedFields)for(var r=0;r<this.state.selectedFields.length;r++)(null==t||t.indexOf(this.state.selectedFields[r])<0)&&e.push(r);return e}},{key:"handleSave",value:function(){this.props.closeFieldPicker(this.state.selectedFields,this.getNewSelections())}},{key:"handleCancel",value:function(){this.handleReset(),this.props.closeFieldPicker()}},{key:"updateFieldSelections",value:function(e){var t=this.getVisibleData(),r=Array.from(this.state.selectedFields),n=r.filter((function(e,n,a){return-1===t.findIndex((function(e){return e.name===r[n]}))}));e.forEach((function(e){n.push(t[e].name)})),n=Array.from(new Set(n)),this.setState({selectedFields:n})}},{key:"isFieldInList",value:function(e,t){return e.some((function(e){return e.name===t}))}},{key:"handleReset",value:function(){this.setState({selectedFields:this.props.currentFields,filterIcons:[],filterText:""})}},{key:"filterType",value:function(e){var t=e.currentTarget.getAttribute("data-type"),r=Array.from(this.state.filterIcons),n=r.indexOf(t);n<0?r.push(t):r.splice(n,1),this.setState({filterIcons:r})}},{key:"_genBackButton",value:function(){var e=Ye(this.props.controller.getReactIntl(),j.APPLYBUTTON_LABEL),t=Ye(this.props.controller.getReactIntl(),j.REJECTBUTTON_LABEL);return this.props.rightFlyout||(e=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_SAVEBUTTON_MODAL_LABEL)),R.createElement(z,{okHandler:this.handleSave,cancelHandler:this.handleCancel,showPropertiesButtons:!0,applyLabel:e,rejectLabel:t})}},{key:"_genResetButton",value:function(){var e=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_RESETBUTTON_LABEL);return R.createElement(P,{className:"properties-fp-reset-button-container",onClick:this.handleReset,renderIcon:Y,iconDescription:e,size:"small",kind:"ghost"},R.createElement("span",null,e))}},{key:"_genFilterTypes",value:function(){var e=this,t=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_FILTER_LABEL),r=this.filterList.map((function(r,n){for(var a=!0,s=0;s<e.state.filterIcons.length;s++)if(r.type===e.state.filterIcons[s]){a=!1;break}var i=M()+"-tooltip-filters-"+n,o=Ye(e.props.controller.getReactIntl(),j["FIELDPICKER_".concat(r.type.toUpperCase(),"_LABEL")]),l=R.createElement("div",{className:"properties-tooltips"},o);return R.createElement("li",{key:"filters"+n,className:"properties-fp-filter-list-li"},R.createElement("div",{className:"properties-tooltips-filter"},R.createElement(k,{id:i,tip:l,direction:"bottom",className:"properties-tooltips icon-tooltip",disable:g(r.type)},R.createElement(P,{className:"properties-fp-filter","data-type":r.type,onClick:e.filterType.bind(e),"aria-label":t+" "+r.type,kind:"ghost"},R.createElement(K,{type:r.type,disabled:!a})))))}));return R.createElement("ul",{className:"properties-fp-filter-list"},R.createElement("li",{className:"properties-fp-filter-list-title properties-fp-filter-list-li"},t),r)}},{key:"_genTable",value:function(){var e=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_FIELDCOLUMN_LABEL),t=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_SCHEMACOLUMN_LABEL),r=Ye(this.props.controller.getReactIntl(),j.FIELDPICKER_DATATYPECOLUMN_LABEL),n=[];n.push({key:"fieldName",label:e}),this.multiSchema&&n.push({key:"schemaName",label:t}),n.push({key:"dataType",label:r});var a=this.getTableData();return R.createElement(O,{className:"properties-fp-table",sortable:["fieldName","schemaName","dataType"],filterable:["fieldName"],onFilter:this.onFilter,columns:n,data:a,onSort:this.onSort,filterKeyword:this.state.filterText,scrollKey:"field-picker",noAutoSize:!0,tableLabel:this.props.title?this.props.title:"",selectedRows:this.selectedRowsIndex,updateRowSelections:this.updateFieldSelections,rowSelection:B.MULTIPLE,light:this.props.controller.getLight()&&!this.props.controller.isTearsheetContainer()})}},{key:"render",value:function(){var e=this._genBackButton(),t=this._genResetButton(),r=this._genFilterTypes(),n=this._genTable();return R.createElement(R.Fragment,null,R.createElement("div",{className:"properties-fp-top-row"},r,t),n,e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!$(e.fields,t.origFields)){var r=t.selectedFields;return e.currentFields&&($(Object.keys(e.currentFields),Object.keys(t.selectedFields))||(r=e.currentFields)),{fields:e.fields,selectedFields:r,origFields:e.fields}}return{}}}]),s}(R.Component),ht=mt;export{$e as A,te as C,Z as E,ht as F,Q as G,J as I,se as O,z as P,q as S,ne as T,Ae as _,re as a,Ce as b,et as c,ae as d,Ve as e,Ye as f,We as g,ee as h,ot as i,Ke as j,$ as k,Ue as l,ut as m,nt as n,st as o,oe as p,at as q,rt as r,tt as s,He as t,Pe as u,Ze as v,qe as w,Qe as x,De as y,Xe as z};
//# sourceMappingURL=index-9c372823.js.map