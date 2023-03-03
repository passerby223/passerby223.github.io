(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{324:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),t("p",[s._v("bash终端中运行如下命令，会发现nohup.log文件中并没有写入Python程序的stdout和stderr")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" python3 test_script.py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" nohup.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"解决办法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),t("p",[t("code",[s._v("python3")]),s._v("后边跟上一个"),t("code",[s._v("-u")]),s._v("参数就可以了")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" python3 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" test_script.py "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" nohup.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("nohup")]),s._v("执行"),t("code",[s._v("Python")]),s._v("程序，默认"),t("code",[s._v("stdout")]),s._v("和"),t("code",[s._v("stderr")]),s._v("都被缓冲了。")]),s._v(" "),t("p",[s._v("以下是"),t("code",[s._v("-u")]),s._v("参数的官方解释")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-u     : force the binary I/O layers of stdout and stderr to be unbuffered;\n         stdin is always buffered; text I/O layer will be line-buffered;\n         also PYTHONUNBUFFERED=x\n-u：强制stdout和stderr的二进制I/O层不被缓冲；\n          stdin总是被缓冲；文本I/O层将被行缓冲；\n          也PYTHONUNBUFFERED = x\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);