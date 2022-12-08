import{_ as a,o as t,c as e,e as s}from"./app.cfd94bc7.js";const n={},d=s(`<h2 id="host-system-pre-requisites" tabindex="-1"><a class="header-anchor" href="#host-system-pre-requisites" aria-hidden="true">#</a> Host system pre-requisites</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl ( https://kubernetes.io/docs/tasks/tools/ )
helm chart ( https://helm.sh/docs/intro/install/ )
(optional) minikube (https://minikube.sigs.k8s.io/docs/start/)
(optional) eksctl (https://eksctl.io/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deploy-vmbc-nft-dapp" tabindex="-1"><a class="header-anchor" href="#deploy-vmbc-nft-dapp" aria-hidden="true">#</a> Deploy vmbc nft dapp</h3><ul><li><p>Deployment with parameters</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Change to Helm Chart directory of NFT Platform Sample DApp</span>
<span class="token builtin class-name">cd</span> vmware-blockchain-samples/vmbc-ethereum/sample-dapps/nft-platform/helm-chart

<span class="token comment"># Helm install NFT Platform Sample DApp</span>
helm <span class="token function">install</span> <span class="token punctuation">{</span>name-of-your-choice<span class="token punctuation">}</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.registry</span><span class="token operator">=</span><span class="token punctuation">{</span>registry<span class="token punctuation">}</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.username</span><span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">global.imageCredentials.password</span><span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">blockchainUrl</span><span class="token operator">=</span><span class="token punctuation">{</span>blockchainURL<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Access vmbc nft dapp webpage using service url</p><p>Minikube</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube <span class="token function">service</span> <span class="token punctuation">{</span>name-of-your-choice<span class="token punctuation">}</span>-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>EKS</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get <span class="token function">service</span> <span class="token punctuation">{</span>name-of-your-choice<span class="token punctuation">}</span>-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="remove-vmbc-nft-dapp-optional" tabindex="-1"><a class="header-anchor" href="#remove-vmbc-nft-dapp-optional" aria-hidden="true">#</a> Remove vmbc nft dapp ( optional )</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>helm uninstall <span class="token punctuation">{</span>name-of-your-choice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vmbc-nft-dapp-deployment-configurations" tabindex="-1"><a class="header-anchor" href="#vmbc-nft-dapp-deployment-configurations" aria-hidden="true">#</a> VMBC nft dapp deployment configurations</h2><ul><li>List of configurations available for vmbc nft dapp deployment. Use &quot;--set&quot; param for setting up the params.</li></ul><table><thead><tr><th>Name</th><th>Description</th><th>Value</th><th>Type</th></tr></thead><tbody><tr><td>global.imageCredentials.registry</td><td>Url to download vmbc nft dapp</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.imageCredentials.username</td><td>Username to access/download vmbc nft dapp</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.imageCredentials.password</td><td>Password to access/download vmbc nft dapp</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>global.imageCredentials.email</td><td>Email to access/download vmbc nft dapp</td><td>&quot;&quot;</td><td>Optional</td></tr><tr><td>global.image.repository</td><td>Image name to download for vmbc nft dapp</td><td>vmwblockchain/vmbc-eth-artemis</td><td>Optional</td></tr><tr><td>global.image.tag</td><td>Tag version to download vmbc nft dapp</td><td>0.0.0.0.7849</td><td>Optional</td></tr><tr><td>blockchainUrl</td><td>Url to link blockchain with vmbc nft dapp webpage</td><td>&quot;&quot;</td><td>Mandatory</td></tr><tr><td>resources.nft.cpuLimit</td><td>CPU limit</td><td>1000m</td><td>Optional</td></tr><tr><td>resources.nft.cpuRequest</td><td>CPU request</td><td>100m</td><td>Optional</td></tr><tr><td>resources.nft.meomoryLimit</td><td>Memory limit</td><td>2Gi</td><td>Optional</td></tr><tr><td>resources.nft.meomoryRequest</td><td>Memory request</td><td>1Gi</td><td>Optional</td></tr></tbody></table>`,9),i=[d];function o(l,r){return t(),e("div",null,i)}const c=a(n,[["render",o],["__file","index.html.vue"]]);export{c as default};