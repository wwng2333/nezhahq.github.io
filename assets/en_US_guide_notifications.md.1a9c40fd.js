import{_ as e,c as o,o as t,a as i}from"./app.4f7c959e.js";const m='{"title":"Flexible notification methods","description":"","frontmatter":{},"headers":[{"level":2,"title":"Flexible notification methods","slug":"flexible-notification-methods"},{"level":2,"title":"Description of notification rules","slug":"description-of-notification-rules"},{"level":3,"title":"Basic Rules","slug":"basic-rules"},{"level":3,"title":"Special: Any-cycle transfer notification","slug":"special-any-cycle-transfer-notification"}],"relativePath":"en_US/guide/notifications.md","lastUpdated":1658415076000}',n={},a=i(`<p>Nezha Monitoring supports monitoring of server load, CPU, memory, hard disk, data transfer, monthly data transfer, number of processes, number of connections, and sends alarm notifications when one of these items reaches a user-set limit.<br><br><br></p><h2 id="flexible-notification-methods" tabindex="-1">Flexible notification methods <a class="header-anchor" href="#flexible-notification-methods" aria-hidden="true">#</a></h2><p><code>#NEZHA#</code> is the panel message placeholder, the panel will automatically replace the placeholder with the actual message when it triggers the notification</p><p>The content of Body is in <code>JSON</code> format\uFF1A<strong>When the request type is FORM</strong>\uFF0Cthe value is in the form of <code>key:value</code>\uFF0C<code>value</code> can contain placeholders that will be automatically replaced when notified. <strong>When the request type is JSON</strong> It will only do string substitution and submit to the <code>URL</code> directly.</p><p>Placeholders can also be placed inside the URL, and it will perform a simple string substitution when requested.</p><p>Refer to the example below, it is very flexible.</p><ul><li><p>Telegram Example, contributed by <a href="https://github.com/haitau" target="_blank" rel="noopener noreferrer">@haitau</a></p><ul><li>Name\uFF1ATelegram Robot message notification</li><li>URL\uFF1A<a href="https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#" target="_blank" rel="noopener noreferrer">https://api.telegram.org/botXXXXXX/sendMessage?chat_id=YYYYYY&amp;text=#NEZHA#</a></li><li>Request method: GET</li><li>Request type: default</li><li>Body: null</li><li>Notes for this method\uFF1AThe XXXXXX in botXXXXXX is the token provided when you follow the official @Botfather in Telegram and enter /newbot to create a new bot. (In the line after <em>Use this token to access the HTTP API</em>). The &#39;bot&#39; are essential. After creating a bot, you need to talk to the BOT in Telegram (send a random message) before you can send a message by using API. YYYYYY is Telegram user&#39;s ID, you can get it by talking to the bot @userinfobot.</li></ul></li><li><p>Email notification example - Outlook, contributed by <a href="https://github.com/MIKU-N" target="_blank" rel="noopener noreferrer">@MIKU_N </a></p><ul><li>Name: MS Mail Notification</li><li>URL\uFF1A<a href="https://graph.microsoft.com/v1.0/me/microsoft.graph.sendMail" target="_blank" rel="noopener noreferrer">https://graph.microsoft.com/v1.0/me/microsoft.graph.sendMail</a></li><li>Request method: POST</li><li>Request type: JSON</li><li>Header: <code>{&quot;Content-type&quot;:&quot;application/json&quot;, &quot;Authorization&quot;:&quot;Bearer {Token}&quot;}</code></li><li>Body:</li></ul></li></ul><div class="language-"><pre><code>{
  &quot;message&quot;: {
      &quot;subject&quot;: &quot;Server Status Notification&quot;,
      &quot;body&quot;: {
          &quot;contentType&quot;: &quot;Text&quot;,
          &quot;content&quot;: &quot;#NEZHA#&quot;
      },
      &quot;toRecipients&quot;: [
          {
              &quot;emailAddress&quot;: {
                  &quot;address&quot;: &quot;ADDRESS FOR RECEVING EMAILS&quot;
              }
          }
      ]
  }
}
</code></pre></div><ul><li>Notes for this method: This method requires calling Microsoft Graph V1.0, you need to go to Microsoft Graph and create your own application, give <code>Mail.Send</code> permission and get the Token, or you can go <a href="https://developer.microsoft.com/en-us/graph/graph-explorer" target="_blank" rel="noopener noreferrer">Microsoft Graph Explorer</a> directly to give permission and get the Token, just replace the Token in the Header with the actual Token.</li></ul><br><br><h2 id="description-of-notification-rules" tabindex="-1">Description of notification rules <a class="header-anchor" href="#description-of-notification-rules" aria-hidden="true">#</a></h2><h3 id="basic-rules" tabindex="-1">Basic Rules <a class="header-anchor" href="#basic-rules" aria-hidden="true">#</a></h3><ul><li>Type: one or more types can be selected, such as in a rule to select more than one type, you need to <strong>meet all the selected types at the same time</strong> to trigger the notification (see the example later) <ul><li><code>cpu</code>\u3001<code>memory</code>\u3001<code>swap</code>\u3001<code>disk</code></li><li><code>net_in_speed</code> Inbound speed, <code>net_out_speed</code> Outbound speed, <code>net_all_speed</code> Inbound + Outbound speed, <code>transfer_in</code> Inbound Transfer, <code>transfer_out</code> Outbound Transfer, <code>transfer_all</code> Total Transfer</li><li><code>offline</code> Offline monitoring</li><li><code>load1</code>\u3001<code>load5</code>\u3001<code>load15</code> Load</li><li><code>process_count</code> Number of processes <em>Currently, counting the number of processes takes up too many resources and is not supported at the moment</em></li><li><code>tcp_conn_count</code>\u3001<code>udp_conn_count</code> Number of connections</li></ul></li><li>duration\uFF1ALasting for a few seconds, the notification will only be triggered when the sampling record reaches 30% or more within a few seconds</li><li>min/max <ul><li>Transfer, network speed, and other values of the same type. Unit is byte (1KB=1024B\uFF0C1MB = 1024*1024B)</li><li>Memory, hard disk, CPU. units are usage percentages</li><li>No setup required for offline monitoring</li></ul></li><li>cover <code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:10, &quot;cover&quot;:0, &quot;ignore&quot;:{&quot;5&quot;: true}}]</code><ul><li><code>0</code> Cover all, use <code>ignore</code> to ignore specific servers</li><li><code>1</code> Ignore all, use <code>ignore</code> to monitoring specific servers<br> For example: <code>[{&quot;type&quot;:&quot;offline&quot;,&quot;duration&quot;:10, &quot;cover&quot;:0, &quot;ignore&quot;:{&quot;5&quot;: true}}]</code></li></ul></li><li>ignore: Select to ignore specific servers, use with <code>cover</code> with server id and boolean, e.g.: <code>{&quot;1&quot;: true, &quot;2&quot;:false}</code></li></ul><p><strong>Complete examples:</strong></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Add an offline notification</p><ul><li>Name: Offline notification</li><li>Rules: <code>[{&quot;Type&quot;:&quot;offline&quot;,&quot;Duration&quot;:10}]</code></li><li>Enable: \u221A</li></ul></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Add an notification when the CPU exceeds 50% for 10s <strong>but</strong> the memory usage is below 20% for 20s</p><ul><li>Name CPU and RAM</li><li>Rules: <code>[{&quot;Type&quot;:&quot;cpu&quot;,&quot;Min&quot;:0,&quot;Max&quot;:50,&quot;Duration&quot;:10},{&quot;Type&quot;:&quot;memory&quot;,&quot;Min&quot;:20,&quot;Max&quot;:0,&quot;Duration&quot;:20}]</code></li><li>Enable: \u221A</li></ul></div><br><h3 id="special-any-cycle-transfer-notification" tabindex="-1">Special: Any-cycle transfer notification <a class="header-anchor" href="#special-any-cycle-transfer-notification" aria-hidden="true">#</a></h3><p>Can be used as monthly transfer notificatin</p><ul><li><p>type</p><ul><li><code>transfer_in_cycle</code> Inbound transfer during the cycle</li><li><code>transfer_out_cycle</code> Outbound transfer during the cycle</li><li><code>transfer_all_cycle</code> The sum of inbound and outbound transfer during the cycle</li></ul></li><li><p><code>cycle_start</code> Start date of the statistical cycle (can be the start date of your server&#39;s billing cycle), the time format is RFC3339, for example, the format in Beijing time zone is <code>2022-01-11T08:00:00.00+08:00</code></p></li><li><p><code>cycle_interval</code> Interval time cycle (For example, if the cycle is in days and the value is 7, it means that the statistics are counted every 7 days)</p></li><li><p><code>cycle_unit</code> Statistics cycle unit, default <code>hour</code>, optional (<code>hour</code>, <code>day</code>, <code>week</code>, <code>month</code>, <code>year</code>)</p></li><li><p><code>min/max</code>, <code>cover</code>, <code>ignore</code> Please refer to the basic rules to configure</p></li></ul><p>Example: The servers with ID 3 and 4 (defined in the <code>ignore</code>) are counted on the 1st of each month, and a notification is triggered when the monthly outbound transfer reaches 1TB during the cycle. <code>[{&quot;type&quot;:&quot;transfer_out_cycle&quot;,&quot;max&quot;:1099511627776,&quot;cycle_start&quot;:&quot;2022-01-01T00:00:00+08:00&quot;,&quot;cycle_interval&quot;:1,&quot;cycle_unit&quot;:&quot;month&quot;,&quot;cover&quot;:1,&quot;ignore&quot;:{&quot;3&quot;:true,&quot;4&quot;:true}}]</code><img src="https://s4.ax1x.com/2022/01/13/7QKaUx.md.png" alt=""></p>`,22),r=[a];function l(c,s,u,d,h,p){return t(),o("div",null,r)}var q=e(n,[["render",l]]);export{m as __pageData,q as default};
