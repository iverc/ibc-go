"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2951],{46903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var r=n(85893),d=n(11151);const s={title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/apps/transfer/events"},c="Events",i={id:"apps/transfer/events",title:"Events",description:"MsgTransfer",source:"@site/versioned_docs/version-v8.5.x/02-apps/01-transfer/05-events.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/events",permalink:"/v8/apps/transfer/events",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:5,frontMatter:{title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/apps/transfer/events"},sidebar:"defaultSidebar",previous:{title:"Messages",permalink:"/v8/apps/transfer/messages"},next:{title:"Metrics",permalink:"/v8/apps/transfer/metrics"}},l={},h=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"<code>OnRecvPacket</code> callback",id:"onrecvpacket-callback",level:2},{value:"<code>OnAcknowledgePacket</code> callback",id:"onacknowledgepacket-callback",level:2},{value:"<code>OnTimeoutPacket</code> callback",id:"ontimeoutpacket-callback",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.h2,{id:"msgtransfer",children:(0,r.jsx)(t.code,{children:"MsgTransfer"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Attribute Key"}),(0,r.jsx)(t.th,{children:"Attribute Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ibc_transfer"}),(0,r.jsx)(t.td,{children:"sender"}),(0,r.jsx)(t.td,{children:"{sender}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ibc_transfer"}),(0,r.jsx)(t.td,{children:"receiver"}),(0,r.jsx)(t.td,{children:"{receiver}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ibc_transfer"}),(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"{amount}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ibc_transfer"}),(0,r.jsx)(t.td,{children:"denom"}),(0,r.jsx)(t.td,{children:"{denom}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ibc_transfer"}),(0,r.jsx)(t.td,{children:"memo"}),(0,r.jsx)(t.td,{children:"{memo}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"message"}),(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"transfer"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"onrecvpacket-callback",children:[(0,r.jsx)(t.code,{children:"OnRecvPacket"})," callback"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Attribute Key"}),(0,r.jsx)(t.th,{children:"Attribute Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"transfer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"sender"}),(0,r.jsx)(t.td,{children:"{sender}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"receiver"}),(0,r.jsx)(t.td,{children:"{receiver}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"denom"}),(0,r.jsx)(t.td,{children:"{denom}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"{amount}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"memo"}),(0,r.jsx)(t.td,{children:"{memo}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"success"}),(0,r.jsx)(t.td,{children:"{ackSuccess}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"error"}),(0,r.jsx)(t.td,{children:"{ackError}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"denomination_trace"}),(0,r.jsx)(t.td,{children:"trace_hash"}),(0,r.jsx)(t.td,{children:"{hex_hash}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"denomination_trace"}),(0,r.jsx)(t.td,{children:"denom"}),(0,r.jsx)(t.td,{children:"{voucherDenom}"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"onacknowledgepacket-callback",children:[(0,r.jsx)(t.code,{children:"OnAcknowledgePacket"})," callback"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Attribute Key"}),(0,r.jsx)(t.th,{children:"Attribute Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"transfer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"sender"}),(0,r.jsx)(t.td,{children:"{sender}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"receiver"}),(0,r.jsx)(t.td,{children:"{receiver}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"denom"}),(0,r.jsx)(t.td,{children:"{denom}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"{amount}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"memo"}),(0,r.jsx)(t.td,{children:"{memo}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"acknowledgement"}),(0,r.jsx)(t.td,{children:"{ack.String()}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"success / error"}),(0,r.jsx)(t.td,{children:"{ack.Response}"})]})]})]}),"\n",(0,r.jsxs)(t.h2,{id:"ontimeoutpacket-callback",children:[(0,r.jsx)(t.code,{children:"OnTimeoutPacket"})," callback"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Attribute Key"}),(0,r.jsx)(t.th,{children:"Attribute Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"module"}),(0,r.jsx)(t.td,{children:"transfer"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"refund_receiver"}),(0,r.jsx)(t.td,{children:"{receiver}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"denom"}),(0,r.jsx)(t.td,{children:"{denom}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"amount"}),(0,r.jsx)(t.td,{children:"{amount}"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fungible_token_packet"}),(0,r.jsx)(t.td,{children:"memo"}),(0,r.jsx)(t.td,{children:"{memo}"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(67294);const d={},s=r.createContext(d);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);