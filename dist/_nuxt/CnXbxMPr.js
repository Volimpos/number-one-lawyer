import t from"./DPK_2uWx.js";import{R as r,m as o,E as s,F as l,K as i,a5 as d,H as a}from"./BFM8oWFr.js";import"./CZTAhe5E.js";import"./ZhWAdK_X.js";var p=`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,v={root:"p-overlaybadge"},m=r.extend({name:"overlaybadge",style:p,classes:v}),g={name:"OverlayBadge",extends:t,style:m,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},c={name:"OverlayBadge",extends:g,inheritAttrs:!1,components:{Badge:t}};function y(e,u,b,B,f,$){var n=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[i(e.$slots,"default"),d(n,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}c.render=y;export{c as default};
