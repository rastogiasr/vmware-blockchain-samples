import{_ as i,r as n,o,c as r,a as e,b as a,d as l,w as s,e as c}from"./app.cfd94bc7.js";const h={},d=c('<h1 id="vmbc-explorer" tabindex="-1"><a class="header-anchor" href="#vmbc-explorer" aria-hidden="true">#</a> VMBC Explorer</h1><p>A web application has been designed and implemented with universal search, block and transaction detail views. The Auto refresh feature will keep the dashboard live with the updated details. The refresh interval is set to disabled by default, and it can be altered as per the needs, and also it can be disabled when it&#39;s not needed. The Browser cache feature will keep accumulating the data fetched in local storage, which will prevent duplicate requests to the EthRPC API. It uses Angular With Clarity Design Framework to adhere to VMWare Web Application Standards. The performance of the blockchain won&#39;t be affected by this as it is packaged and deployed in a separate container. The explorer will connect to blockchain only when its deployed and configured with a specific instance URL. With the help of cache and auto refresh interval, the interaction between the blockchain and the explorer can be improved further.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><p>Using the UI, one can navigate and view following data from Blockchain,</p><ul><li>Dashboard containing summary of total number of Blocks and Transactions</li><li>Capability to search for Blocks, Transactions and Accounts</li><li>Blocks Page indexed by block number sequenced based on their creation time. When you click through a block, more details about the block are shown, <ul><li>Timestamp</li><li>Transaction</li><li>Size</li><li>Hash</li><li>Parent Hash</li></ul></li><li>Transactions Page sequenced by their Block number and sequenced based on their timestamp. When you click through a transaction, more details about the block are shown, <ul><li>Transaction Hash</li><li>Timestamp</li><li>Block Number</li><li>From and To</li></ul></li></ul><h2 id="running-vmbc-explorer" tabindex="-1"><a class="header-anchor" href="#running-vmbc-explorer" aria-hidden="true">#</a> Running VMBC Explorer</h2>',6),u=e("h2",{id:"limitations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#limitations","aria-hidden":"true"},"#"),a(" Limitations")],-1),b=e("ul",null,[e("li",null,"Genesis Block is not shown in UI but counted in Dashboard for Total Number of Transactions and Blocks")],-1);function p(m,f){const t=n("RouterLink");return o(),r("div",null,[d,e("p",null,[a("Follow the instructions in "),l(t,{to:"/block-explorers/vmbc-explorer/helm-chart/"},{default:s(()=>[a("helm-chart/README")]),_:1})]),u,b])}const w=i(h,[["render",p],["__file","index.html.vue"]]);export{w as default};
