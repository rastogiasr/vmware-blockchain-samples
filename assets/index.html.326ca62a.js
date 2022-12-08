import{_ as r,r as o,o as d,c as l,a as e,b as t,d as a,w as c,e as n}from"./app.cfd94bc7.js";const h={},u=n('<h1 id="read-write-permissioning-sample-dapp-ui" tabindex="-1"><a class="header-anchor" href="#read-write-permissioning-sample-dapp-ui" aria-hidden="true">#</a> Read/Write Permissioning Sample Dapp Ui</h1><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>Permissioning Configuration <ul><li>Provide permissions(READ/WRITE/DEPLOY) to the given Ethereum account</li></ul></li><li>ERC20 Token Transfer <ul><li>By default the deployer will have 1 billion XYZ tokens</li><li>XYZ tokens can be transfered across the accounts</li></ul></li></ul><h2 id="pre-requisites" tabindex="-1"><a class="header-anchor" href="#pre-requisites" aria-hidden="true">#</a> Pre-requisites</h2>',4),p=e("li",null,"VMBC Ethereum has been deployed",-1),m=e("li",null,"MAC Operating System",-1),g=e("li",null,"Google Chrome browser",-1),f={href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"},b=n(`<h2 id="running-dapp" tabindex="-1"><a class="header-anchor" href="#running-dapp" aria-hidden="true">#</a> Running DApp</h2><p>There are two ways to run this DApp</p><h3 id="command-line-based" tabindex="-1"><a class="header-anchor" href="#command-line-based" aria-hidden="true">#</a> Command Line Based</h3><ul><li>This option is only supported for MAC Operating System</li><li>Execute following commands to run the DApp through command line</li><li>At command line, this app defaults to port <code>5200</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change to Source Directory of authorization gui DApp</span>
<span class="token builtin class-name">cd</span> vmware-blockchain-samples/vmbc-ethereum/permissioning/sample-dapps/authorization-gui/source

<span class="token comment"># Install the dependencies</span>
<span class="token function">npm</span> <span class="token function">install</span> --legacy-peer-deps

<span class="token comment"># Export the VMBC_URL to the URL of deployed instance of VMware Blockchain</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VMBC_URL</span><span class="token operator">=</span>http://127.0.0.1:8545

<span class="token comment"># Run the DApp</span>
<span class="token function">npm</span> run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then navigate to <code>http://localhost:5200/</code>.</p><h3 id="further-help" tabindex="-1"><a class="header-anchor" href="#further-help" aria-hidden="true">#</a> Further help</h3>`,7),k=e("code",null,"ng help",-1),v={href:"https://angular.io/cli",target:"_blank",rel:"noopener noreferrer"},C=n('<h2 id="permissioning-ui" tabindex="-1"><a class="header-anchor" href="#permissioning-ui" aria-hidden="true">#</a> Permissioning UI</h2><p>We have two projects inside the permissioning ui. The first is the permissioning config and the second one is the ERC20 test dapp. The permissioning config is used to give addresses permission to read, write and/or deploy in the blockchain. The ERC20 test dapp is a normal ERC20 dapp that is used to show the capabilities of permissioning.</p><h2 id="metamask" tabindex="-1"><a class="header-anchor" href="#metamask" aria-hidden="true">#</a> Metamask</h2><p>Make sure you are connected to the right VMBC URL through metmask.</p><h2 id="permissioning-config" tabindex="-1"><a class="header-anchor" href="#permissioning-config" aria-hidden="true">#</a> Permissioning Config</h2><p>Note: The project has to be built and deployed using <code>npm run start</code>. Then navigate to <code>http://localhost:5200/</code>.</p><p>Inorder to use the permissioning config there are a few steps.</p><p>Prerequiste: Current metamask account needs to be the admin account.</p><ol><li>The admin account is the only account that is able to give READ, WRITE or DEPLOY permission to an address. Make sure your Metamask is connected to VMBC URL and the current account is the admin account.</li><li>Provide an address in the &quot;From Address&quot; input field.</li><li>You can click the &quot;CHECK PERMISSIONS&quot; button to check the current permissions of the provided address.</li><li>Inorder to give a permission to the address make sure the checkbox is checked on the permission. Then click the &quot;SET PERMISSIONS&quot; button. Metamask will popup and hit approve then you should see a message that shows the transaction was successfull.</li><li>Click &quot;CHECK PERMISSIONS&quot; again to see if the address has the correct permissions.</li><li>To remove a permission make sure the checkbox for the permission is unchecked then hit the &quot;SET PERMISSIONS&quot; button.</li></ol><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><p>Failed Transaction: If you get a failed transaction message, check the data.</p><ul><li>If you see the error message &quot;Not an Admin&quot; make sure the metamask account that is currently being used is an admin account.</li></ul><h2 id="erc20-test-dapp-write-enabled" tabindex="-1"><a class="header-anchor" href="#erc20-test-dapp-write-enabled" aria-hidden="true">#</a> ERC20 Test Dapp - Write Enabled</h2><p>Note: The project has to be built and deployed using <code>npm run start</code>. Then navigate to <code>http://localhost:5200/</code>.</p><p>Inorder to use the ERC20 Test Dapp there are a few steps we need to follow. You would need an ERC20 contract. You need to deploy it then use it&#39;s contract address inside of the ERC20 Test Dapp.</p><ol><li>Give the address that you&#39;ll be using to deploy the ERC20 contract permission to deploy. You can do this through the Permissioning Config ui.</li><li>Deploy any ERC20 Smart Contract on VMBC blockchian(Same blockchain metmask is connected to) using the address that was given permision to deploy.</li><li>Copy contract address and provide it in variable &quot;contractAddress&quot; found in src/app/dapp/dapp.component.ts.</li><li>Save file and run ng serve.</li><li>Navigate to ERC20 Test Dapp found on the left pane. Note: The From Adress is taken from your current metmask account and the contract address is the ERC20 Smart Contract address deployed in step 2.</li><li>Using the permissioning config give the from address write permission.</li><li>The &quot;Get Token Balance&quot; button allows you to check the balance of the current user(From Address/Current Metamask Acoount).</li><li>The Transfer Tokens button enables you to send ERC20 tokens to the address provided in the &quot;To Address&quot; input field. Click the transfer button metamask pops up the click approve.</li></ol><h3 id="troubleshooting-1" tabindex="-1"><a class="header-anchor" href="#troubleshooting-1" aria-hidden="true">#</a> Troubleshooting</h3><p>Failed Transaction: If you get a failed transaction message, check the message and data.</p><ul><li>If it says &quot;Permission denied&quot;, this means you didnt give your current address write permission(got to step 6).</li><li>If it says &quot;ERC20: transfer amount exceeds balance&quot;, the current address doesn&#39;t have enough tokens.</li></ul><h2 id="erc20-test-dapp-write-disabled" tabindex="-1"><a class="header-anchor" href="#erc20-test-dapp-write-disabled" aria-hidden="true">#</a> ERC20 Test Dapp - Write Disabled</h2><p>Note: The project has to be built and deployed using <code>npm run start</code>. Then navigate to <code>http://localhost:5200/</code>.</p><p>Inorder to use the ERC20 Test Dapp there are a few steps we need to follow. You would need an ERC20 contract. You need to deploy it then use it&#39;s contract address inside of the ERC20 Test Dapp.</p><ol><li>Deploy any ERC20 Smart Contract on VMBC blockchian(Same blockchain metmask is connected to)</li><li>Copy contract address and provide it in variable &quot;contractAddress&quot; found in src/app/dapp/dapp.component.ts.</li><li>Save file and run ng serve.</li><li>Navigate to ERC20 Test Dapp found on the left pane. Note: The From Adress is taken from your current metmask account and the contract address is the ERC20 Smart Contract address deployed in step 1.</li><li>The Get Token Balance button allows you to check the balance of the current user(From Address/Current Metamask Acoount)</li><li>The Transfer Tokens button enables you to send ERC20 tokens to the address provided in the &quot;To Address&quot; input field. Click the transfer button metamask pops up the click approve.</li></ol><h3 id="troubleshooting-2" tabindex="-1"><a class="header-anchor" href="#troubleshooting-2" aria-hidden="true">#</a> Troubleshooting</h3><p>Failed Transaction: If you get a failed transaction message, check the message and data.</p><ul><li>If it says &quot;ERC20: transfer amount exceeds balance&quot;, the current address doesn&#39;t have enough tokens.</li></ul>',26);function T(y,E){const s=o("ExternalLinkIcon"),i=o("RouterLink");return d(),l("div",null,[u,e("ul",null,[p,e("li",null,[t("Suggested and Supported Stack "),e("ul",null,[m,g,e("li",null,[t("Metamask Wallet - "),e("a",f,[t("https://metamask.io/"),a(s)])])])]),e("li",null,[t("Connecting Metamask to VMBC - "),a(i,{to:"/appendix.html#connecting-metamask-to-vmbc"},{default:c(()=>[t("See Appendix")]),_:1})])]),b,e("p",null,[t("To get more help on the Angular CLI use "),k,t(" or go check out the "),e("a",v,[t("Angular CLI Overview and Command Reference"),a(s)]),t(" page.")]),C])}const _=r(h,[["render",T],["__file","index.html.vue"]]);export{_ as default};
