import{_ as e,o as t,c as a,R as o}from"./chunks/framework.1625126e.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/loginq.md","filePath":"guide/loginq.md","lastUpdated":1691117191000}'),i={name:"guide/loginq.md"},r=o('<h2 id="登录回调后页面卡住-拒绝连接-响应时间过长" tabindex="-1">登录回调后页面卡住\\拒绝连接\\响应时间过长 <a class="header-anchor" href="#登录回调后页面卡住-拒绝连接-响应时间过长" aria-label="Permalink to &quot;登录回调后页面卡住\\拒绝连接\\响应时间过长&quot;">​</a></h2><p>还有其他一些表现形式，总之登录后浏览器无法正常显示。</p><ol><li>您的服务器无法连接到 Github/Gitee，最常见于国内服务器配置 Github 情况下，可以考虑多尝试几次或者切换到 Jihulab/Gitee。</li><li>您配置错了回调地址，确保您的回调地址正确且<strong>端口与协议</strong>均正确！</li><li>Dashboard 发生未知错误，您可以使用脚本查看日志，但此项可能性较低。</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>什么是协议？<br> 在浏览器中，您的域名以<code>://</code>结尾的字符串即为协议，通常为 <code>http</code> 和 <code>https</code> 两种。由于正常部署情况下面板可能有多种协议+域名+端口组合均可访问，请务必选一个最合适的作为回调。</p></div><h3 id="如何检查我的回调地址是否错误" tabindex="-1">如何检查我的回调地址是否错误？ <a class="header-anchor" href="#如何检查我的回调地址是否错误" aria-label="Permalink to &quot;如何检查我的回调地址是否错误？&quot;">​</a></h3><p>请确保登录前浏览器显示的协议+域名+端口和登录后跳转到的协议+域名+端口一致。<br> 请确保您的路径为<code>/oauth2/callback</code>，<strong>全部小写</strong></p><h2 id="登录后面板报错" tabindex="-1">登录后面板报错 <a class="header-anchor" href="#登录后面板报错" aria-label="Permalink to &quot;登录后面板报错&quot;">​</a></h2><h3 id="http-named-cookie-not-present" tabindex="-1">http: named cookie not present <a class="header-anchor" href="#http-named-cookie-not-present" aria-label="Permalink to &quot;http: named cookie not present&quot;">​</a></h3><ol><li>清理cookies后重新登录，或换个浏览器</li><li>检查回调地址，确保您的回调地址正确且<strong>端口与协议</strong>均正确！发起请求的地址需要和回调地址处于同域，端口、协议和域名(或IP)都需要一致。</li></ol><h3 id="lookup-xxx" tabindex="-1">lookup xxx <a class="header-anchor" href="#lookup-xxx" aria-label="Permalink to &quot;lookup xxx&quot;">​</a></h3><p>容器DNS解析失败，多数情况下为修改了iptables相关配置。<br> 建议先重启docker，<code>sudo systemctl restart docker</code>，再使用脚本重启面板。<br> 仍然出现lookup错误建议查看是否有其他控制iptables的工具，如宝塔防火墙等。<br> 这个问题也可能与内核有关系，请尝试更换官方内核。</p><h3 id="授权方式无效-或者登录回调地址无效、过期或已被撤销" tabindex="-1">授权方式无效，或者登录回调地址无效、过期或已被撤销 <a class="header-anchor" href="#授权方式无效-或者登录回调地址无效、过期或已被撤销" aria-label="Permalink to &quot;授权方式无效，或者登录回调地址无效、过期或已被撤销&quot;">​</a></h3><p>只出现在 Gitee 登录方式中，原因不明，建议更换到 Jihulab。</p><h3 id="oauth2-server-response-missing-access-token" tabindex="-1">oauth2: server response missing access_token <a class="header-anchor" href="#oauth2-server-response-missing-access-token" aria-label="Permalink to &quot;oauth2: server response missing access_token&quot;">​</a></h3><p>可能由多种因素引起，最大可能性是网络问题，建议检查网络后重试。<br> 无法解决的话建议更换 Github/Jihulab 等。</p><h3 id="该用户不是本站点管理员-无法登录" tabindex="-1">该用户不是本站点管理员，无法登录 <a class="header-anchor" href="#该用户不是本站点管理员-无法登录" aria-label="Permalink to &quot;该用户不是本站点管理员，无法登录&quot;">​</a></h3><p>您登陆错了账号或者配置错了用户名，注意<strong>用户名不是邮箱</strong>，可使用脚本修改。</p><h3 id="dial-tcp-xxx-443-i-o-timeout" tabindex="-1">dial tcp xxx:443 i/o timeout <a class="header-anchor" href="#dial-tcp-xxx-443-i-o-timeout" aria-label="Permalink to &quot;dial tcp xxx:443 i/o timeout&quot;">​</a></h3><p>网络问题，可先重启 Docker，<code>sudo systemctl restart docker</code>，再使用脚本重启面板。<br> 如为国内服务器配置 Github 登陆方式，则建议切换到Jihulab以避免网络干扰。</p><h3 id="net-http-tls-handshake-timeout" tabindex="-1">net/http: TLS handshake timeout <a class="header-anchor" href="#net-http-tls-handshake-timeout" aria-label="Permalink to &quot;net/http: TLS handshake timeout&quot;">​</a></h3><p>同上。</p>',21),s=[r];function l(n,h,c,d,p,u){return t(),a("div",null,s)}const k=e(i,[["render",l]]);export{m as __pageData,k as default};
