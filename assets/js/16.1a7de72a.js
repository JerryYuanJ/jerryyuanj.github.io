(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{491:function(t,a,e){t.exports=e.p+"assets/img/101_seq.4cc53c3e.svg"},492:function(t,a,e){t.exports=e.p+"assets/img/101.a6b1a660.png"},493:function(t,a,e){t.exports=e.p+"assets/img/502.e8a19b84.png"},597:function(t,a,e){"use strict";e.r(a);var _=e(55),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"status-code"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#status-code"}},[t._v("#")]),t._v(" Status Code")]),t._v(" "),_("p",[t._v("HTTP状态码，是响应报文中起始行的一部分，它是对响应结果的一种说明，通过它，我们很容易的就知道一个请求是否成功的完成了。状态码由三位数字构成，第一位表示着响应的类别，一共有五种类型：")]),t._v(" "),_("ol",[_("li",[_("code",[t._v("1XX（Informational）")]),t._v("信息类状态码")]),t._v(" "),_("li",[_("code",[t._v("2XX（Successful）")]),t._v("成功状态码")]),t._v(" "),_("li",[_("code",[t._v("3XX（Redirection）")]),t._v("重定向状态码")]),t._v(" "),_("li",[_("code",[t._v("4XX（Client Error）")]),t._v("客户端错误状态码")]),t._v(" "),_("li",[_("code",[t._v("5XX（Server Error）")]),t._v("服务端错误状态码")])]),t._v(" "),_("p",[t._v("状态码一般都伴随着一个"),_("strong",[t._v("原因短语")]),t._v("，比如"),_("code",[t._v("404")]),t._v("对应"),_("code",[t._v("Not Found")]),t._v("，"),_("code",[t._v("200")]),t._v("对应"),_("code",[t._v("Ok")]),t._v("等，原因短语是对请求结果的更加语义化的描述。\n随着HTTP的发展，状态码变得越来越多，虽然我们不需要全部都了解，但是对于一些常见的状态码，还是要能够知道它的含义。接下来我们就来看看常见的各个类别的状态码。")]),t._v(" "),_("h2",{attrs:{id:"_1xx：信息类状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1xx：信息类状态码"}},[t._v("#")]),t._v(" 1XX：信息类状态码")]),t._v(" "),_("h3",{attrs:{id:"_101-switching-protocols"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_101-switching-protocols"}},[t._v("#")]),t._v(" 101 Switching Protocols")]),t._v(" "),_("p",[_("code",[t._v("101")]),t._v("状态码表示服务器针对客户端升级协议的请求对协议进行切换。一般经历的步骤如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:e(491),alt:"101切换协议时序图"}})]),t._v(" "),_("p",[_("em",[t._v("图片来源于"),_("a",{attrs:{href:"https://juejin.im/post/5d9c6c19e51d4578377fe4d8",target:"_blank",rel:"noopener noreferrer"}},[t._v("掘金"),_("OutboundLink")],1)])]),t._v(" "),_("ol",[_("li",[t._v("客户端发起升级协议的请求，这个请求包含两个首部字段：")])]),t._v(" "),_("div",{staticClass:"language-yml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-yml"}},[_("code",[_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Connection")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Upgrade\n"),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Upgrade")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 协议名\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("服务器检查是否支持客户端所要求的协议")]),t._v(" "),_("li",[t._v("如果支持的话，会发送一个状态码为"),_("code",[t._v("101 Switching Protocols")]),t._v("的响应，并且加上客户端请求的"),_("code",[t._v("Connection")]),t._v("和"),_("code",[t._v("Upgrade")]),t._v("的首部")]),t._v(" "),_("li",[t._v("客户端与服务端以新的协议进行数据的传输")])]),t._v(" "),_("p",[t._v("可以看一个实际的例子：")]),t._v(" "),_("img",{attrs:{src:e(492),alt:"101状态码示例图",width:"70%"}}),t._v(" "),_("h2",{attrs:{id:"_2xx：成功状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2xx：成功状态码"}},[t._v("#")]),t._v(" 2XX：成功状态码")]),t._v(" "),_("h3",{attrs:{id:"_200-ok"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_200-ok"}},[t._v("#")]),t._v(" 200 OK")]),t._v(" "),_("p",[t._v("这应该是最常见的状态码了，它表示请求成功。这个“成功”的含义取决于具体的HTTP方法，例如，如果是"),_("code",[t._v("GET")]),t._v("方法，那么就表示资源已经在响应正文中被返回；如果是"),_("code",[t._v("HEAD")]),t._v("方法，那么就表示实体的首部信息已经在响应体中返回了。")]),t._v(" "),_("h3",{attrs:{id:"_201-created"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_201-created"}},[t._v("#")]),t._v(" 201 Created")]),t._v(" "),_("p",[t._v("表示请求成功，并且新创建了一个资源。比如用户注册，就有可能会在服务器中新建一条用户记录，这时候就可以返回"),_("code",[t._v("201")]),t._v("表示用户成功创建。")]),t._v(" "),_("h3",{attrs:{id:"_204-no-content"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_204-no-content"}},[t._v("#")]),t._v(" 204 No Content")]),t._v(" "),_("p",[t._v("表示请求成功，但是没有返回内容。这里的"),_("code",[t._v("No Content")]),t._v("指的是响应报文中的内容主体部分，这个状态码的使用场景，一般是只需要客户端发送信息到服务端，而不需要服务端发送信息到客户端。但是在某些情况下，响应中的首部信息会包含一些有用的信息，客户端会根据这个最新的首部信息进行相应的更新。")]),t._v(" "),_("h3",{attrs:{id:"_206-partial-content"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_206-partial-content"}},[t._v("#")]),t._v(" 206 Partial Content")]),t._v(" "),_("p",[t._v("当请求报文的首部字段中包含"),_("code",[t._v("Range")]),t._v("时，表示这一个请求是部分资源请求，即只请求资源的指定字节范围的内容，这时候应该响应"),_("code",[t._v("206")]),t._v("，表示这个部分资源请求已经成功了，返回的内容正式请求的那一个字节范围的资源。")]),t._v(" "),_("h2",{attrs:{id:"_3xx：重定向状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3xx：重定向状态码"}},[t._v("#")]),t._v(" 3XX：重定向状态码")]),t._v(" "),_("h3",{attrs:{id:"_301-move-permanently"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_301-move-permanently"}},[t._v("#")]),t._v(" 301 Move Permanently")]),t._v(" "),_("p",[t._v("一般我们将"),_("code",[t._v("301")]),t._v("状态码的作用称之为"),_("strong",[t._v("永久重定向")]),t._v("。它表示我们当前所请求的资源，已经被分配了新的URL，以后应该使用这个新的URL来访问这个资源。这个新的URL，会在响应首部的"),_("code",[t._v("Location")]),t._v("字段中给出。一般流程如下：")]),t._v(" "),_("ol",[_("li",[t._v("客户端请求资源")])]),t._v(" "),_("div",{staticClass:"language-yml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-yml"}},[_("code",[t._v("GET /index.html HTTP/1.1\n"),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Host")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www.test.com\n")])])]),_("ol",{attrs:{start:"2"}},[_("li",[t._v("服务器接收到请求后，发现这个资源已经被移到另一个地方去了，并且以后都不会变，所以返回的response为：")])]),t._v(" "),_("div",{staticClass:"language-yml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-yml"}},[_("code",[t._v("HTTP/1.1 301 Move Permanently\n"),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Location")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//www.test.com/main.html\n")])])]),_("ol",{attrs:{start:"3"}},[_("li",[t._v("浏览器接收到这个响应后，会自动重定到"),_("code",[t._v("Location")]),t._v("指定的地址，并且会记住这个原始的URL的重定向的地址，"),_("strong",[t._v("下次如果再次访问原始URL的话，不会向服务器发送"),_("code",[t._v("GET /index.html")]),t._v("的请求，而是直接请求"),_("code",[t._v("main.html")]),t._v("页面")]),t._v("。")])]),t._v(" "),_("h3",{attrs:{id:"_302-found"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_302-found"}},[t._v("#")]),t._v(" 302 Found")]),t._v(" "),_("p",[t._v("跟"),_("code",[t._v("301")]),t._v("对应的，我们一般称"),_("code",[t._v("302")]),t._v("为临时重定向。它表示请求的资源已经被分配了新的URL，希望用户本次能使用新的URL访问。与"),_("code",[t._v("301")]),t._v("不同的是，它表示资源只是临时性的被移到了新的地址。也就是说，这个地址以后还可能会变。比如用户访问a页面时，服务器用"),_("code",[t._v("302")]),t._v("状态码让它重定向到b页面，但是浏览器这时候不会记住这次重定向的信息，下次再访问a页面时，还是会向a页面发出请求，然后再由服务器决定重定向的地址。")]),t._v(" "),_("h3",{attrs:{id:"_303-see-other"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_303-see-other"}},[t._v("#")]),t._v(" 303 See Other")]),t._v(" "),_("p",[_("code",[t._v("303")]),t._v("状态码表示由于请求对应的资源存在着另一个URI，应使用"),_("code",[t._v("GET")]),t._v("方法定向获取请求的资源。它与"),_("code",[t._v("302")]),t._v("状态码有着相同的功能，但是"),_("strong",[t._v("它明确的表明应该使用"),_("code",[t._v("GET")]),t._v("方法去获取资源")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"_304-not-modified"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_304-not-modified"}},[t._v("#")]),t._v(" 304 Not Modified")]),t._v(" "),_("p",[_("code",[t._v("304")]),t._v("是一个很有趣的状态码，虽然它是以3开头，但是却与重定向没有没有任何关系。这是一个与缓存相关的头，它告诉客户端，响应的资源没有被修改过，客户端可以继续使用这个响应的本地缓存。"),_("strong",[t._v("注意，"),_("code",[t._v("304")]),t._v("状态码返回时，不包含任何响应的主体部分。")]),t._v(" 我们会在"),_("RouterLink",{attrs:{to:"/http/cache.html"}},[t._v("HTTP缓存")]),t._v("一章中进一步的认识这个状态码的作用。")],1),t._v(" "),_("h3",{attrs:{id:"_307-temporary-redirect"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_307-temporary-redirect"}},[t._v("#")]),t._v(" 307 Temporary Redirect")]),t._v(" "),_("p",[t._v("临时重定向。这个状态码与"),_("code",[t._v("302")]),t._v("语义一致，唯一的区别就是客户端不能改变请求的方法：比如第一次是用"),_("code",[t._v("POST")]),t._v("请求某一个资源的，在第二次请求，也就是重定向到"),_("code",[t._v("Location")]),t._v("的地址时，也必须使用"),_("code",[t._v("POST")]),t._v("方法。")]),t._v(" "),_("h3",{attrs:{id:"_308-permanent-redirect"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_308-permanent-redirect"}},[t._v("#")]),t._v(" 308 Permanent Redirect")]),t._v(" "),_("p",[t._v("永久重定向。这个状态码与"),_("code",[t._v("301")]),t._v("语义一致，区别和上面的"),_("code",[t._v("307")]),t._v("与"),_("code",[t._v("302")]),t._v("的区别一样，即客户端不能改变请求的方法。")]),t._v(" "),_("h2",{attrs:{id:"_4xx：客户端错误状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4xx：客户端错误状态码"}},[t._v("#")]),t._v(" 4XX：客户端错误状态码")]),t._v(" "),_("h3",{attrs:{id:"_400-bad-request"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_400-bad-request"}},[t._v("#")]),t._v(" 400 Bad Request")]),t._v(" "),_("p",[t._v("这个状态码表示请求报文中存在语法错误。当错误发生时，需要修改请求的内容后再次发送请求。")]),t._v(" "),_("h3",{attrs:{id:"_401-unauthorized"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_401-unauthorized"}},[t._v("#")]),t._v(" 401 Unauthorized")]),t._v(" "),_("p",[t._v("表示发送的请求需要有通过HTTP认证（BASIC认证、DIGEST认证）的认证信息。若之前已经进行过一次请求，则表示用户认证失败。它就好像服务器说：“你未经授权，或者授权不正确。请授权后重试。” 对应的，服务器会返回"),_("code",[t._v("WWW-Authenticate")]),t._v("首部字段来告诉客户端如何认证。")]),t._v(" "),_("h3",{attrs:{id:"_403-forbidden"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_403-forbidden"}},[t._v("#")]),t._v(" 403 Forbidden")]),t._v(" "),_("p",[t._v("表示对请求资源的访问被服务器拒绝了。它与"),_("code",[t._v("401")]),t._v("的不同是，服务器知道你的身份，但是你没有响应的权限去访问这个资源。它就像服务器说：“对不起，我知道你是谁，但是你无权访问这个资源。你可以联系管理员去给你授权，在那之前还请你不要再来访问了。” 这个状态码一般是与业务逻辑紧密相关的。")]),t._v(" "),_("h3",{attrs:{id:"_404-not-found"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_404-not-found"}},[t._v("#")]),t._v(" 404 Not Found")]),t._v(" "),_("p",[t._v("这应该是最常见的状态码之一，它表示我们请求的资源服务器没有找到。")]),t._v(" "),_("h3",{attrs:{id:"_405-method-not-allowed"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_405-method-not-allowed"}},[t._v("#")]),t._v(" 405 Method Not Allowed")]),t._v(" "),_("p",[t._v("该状态码表示对于当前的请求，"),_("strong",[t._v("服务器知道该请求方法，但目标资源不支持该请求方法")]),t._v("。服务器需要生成一个"),_("code",[t._v("Allow")]),t._v("的首部字段，它包含着目标资源支持的方法。比如当使用"),_("code",[t._v("DELETE")]),t._v("去发送一个删除某资源的请求，但是该资源不支持"),_("code",[t._v("DELETE")]),t._v("方法时，可能会得到如下的响应结果：")]),t._v(" "),_("div",{staticClass:"language-yml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-yml"}},[_("code",[t._v("405 Method Not Allowed\n"),_("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Allow")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GET"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" POST"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HEAD\n")])])]),_("h2",{attrs:{id:"_5xx：服务端错误状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5xx：服务端错误状态码"}},[t._v("#")]),t._v(" 5XX：服务端错误状态码")]),t._v(" "),_("h3",{attrs:{id:"_500-internal-server-error"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_500-internal-server-error"}},[t._v("#")]),t._v(" 500 Internal Server Error")]),t._v(" "),_("p",[t._v("一般服务器出错都会报这个错，表示服务器内部出现了问题。")]),t._v(" "),_("h3",{attrs:{id:"_502-bad-gateway"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_502-bad-gateway"}},[t._v("#")]),t._v(" 502 Bad Gateway")]),t._v(" "),_("p",[t._v("当服务器作为网关或者代理的时候，接收到请求时，上游服务器返回的响应出错导致了这次请求的失败。我们一般会在"),_("code",[t._v("Nginx")]),t._v("的错误页面看到这样的信息：")]),t._v(" "),_("p",[_("img",{attrs:{src:e(493),alt:"502-bad-gateway"}})]),t._v(" "),_("p",[t._v("关于更多"),_("code",[t._v("502")]),t._v("状态码的介绍，可以参考这篇文章："),_("a",{attrs:{href:"https://www.wpoven.com/blog/need-know-502-error-bad-gateway/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.wpoven.com/blog/need-know-502-error-bad-gateway/"),_("OutboundLink")],1)]),t._v(" "),_("h3",{attrs:{id:"_503-service-unavailable"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_503-service-unavailable"}},[t._v("#")]),t._v(" 503 Service Unavailable")]),t._v(" "),_("p",[_("code",[t._v("503")]),t._v("表示着当前服务器不具备处理请求的能力，这可能有多种原因，比如服务器在维护，或者服务器超负荷了等等。如果发生了这样的情况，最好在响应中加上"),_("code",[t._v("Retry-After")]),t._v("的首部字段，告诉用户多长时间后系统恢复正常。")]),t._v(" "),_("h3",{attrs:{id:"_504-gateway-timeout"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_504-gateway-timeout"}},[t._v("#")]),t._v(" 504 Gateway Timeout")]),t._v(" "),_("p",[t._v("当服务器作为网关或者代理的时候，接收到请求时，没有及时的收到上游服务器的响应导致了这次请求的失败。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("最后关于状态码，我们要知道的是，这些状态码并非是强约束，服务器完全可以不按照这种方式来返回。比如服务器内部错误，可以返回"),_("code",[t._v("200")]),t._v("，并且将服务器错误的信息作为返回结果给客户端，这些都是可以的。")]),t._v(" "),_("h3",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://tools.ietf.org/html/rfc7231#section-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tools.ietf.org/html/rfc7231#section-6"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);