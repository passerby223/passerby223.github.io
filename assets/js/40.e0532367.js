(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{351:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("当前开发的项目一共两个分支，一个是默认的"),a("code",[s._v("master")]),s._v("分支，另一个是"),a("code",[s._v("dev1")]),s._v("开发分支。由于master分支的代码很久都没更新了，今天试着将"),a("code",[s._v("dev1")]),s._v("分支的代码"),a("strong",[s._v("merge")]),s._v("到"),a("code",[s._v("master")]),s._v("分支，但是在合并的时候，出现了很多冲突，由于出现冲突的代码文件较多，不想一个一个文件去修改冲突("),a("code",[s._v("master")]),s._v("分支的代码基本上就没啥需要了)，所以就想到了将"),a("code",[s._v("dev1")]),s._v("分支的代码强制覆盖到"),a("code",[s._v("master")]),s._v("分支。")]),s._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),a("ol",[a("li",[s._v("项目根目录下先切换到"),a("code",[s._v("master")]),s._v("分支"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("重置"),a("code",[s._v("master")]),s._v("分支的"),a("strong",[s._v("HEAD、索引和工作区")]),s._v("跟"),a("code",[s._v("dev1")]),s._v("分支的"),a("strong",[s._v("重置 HEAD、索引和工作区")]),s._v("保持一致"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" origin/dev1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("在"),a("code",[s._v("master")]),s._v("分支上随便修改一些不会与"),a("code",[s._v("dev1")]),s._v("分支合并时造成冲突的文件(比如在"),a("code",[s._v(".gitignore")]),s._v("文件中随便添加一些内容)")]),s._v(" "),a("li",[s._v("提交更改并强制推送到远程仓库"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'merge dev1 to master'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("有时候远程仓库部署在"),a("code",[s._v("gitlab")]),s._v("的话，在执行最后一条命令"),a("code",[s._v("git push -f origin master")]),s._v("时会出现以下报错"),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" pc@mypc:~/PycharmProjects/mypro$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin master\n对象计数中: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", 完成.\nDelta compression using up to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" threads.\n压缩对象中: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", 完成.\n写入对象中: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("316")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("316.00")]),s._v(" KiB/s, 完成.\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nremote: GitLab: You are not allowed to force push code to a protected branch on this project.\nTo git.n.hahaha.com:dp-qa/mypro.git\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pre-receive hook declined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror: 无法推送一些引用到 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git@git.n.hahaha.com:dp-qa/mypro.git'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])]),s._v(" "),a("p",[s._v("这是因为gitlab对仓库启用了保护，需要在仓库中解除一下"),a("code",[s._v("master")]),s._v("分支的保护,等代码推送到远程仓库后，再把分支保护开启就可以了。")]),s._v(" "),a("p",[s._v("解决方法如下：\n进入gitlab当前仓库详情页面，在项目的"),a("code",[s._v("Settings")]),s._v("页面下找到"),a("code",[s._v("Protected Branches")]),s._v("，再点击"),a("code",[s._v("expand")]),s._v("即可看到。有如下两种解决方法:")]),s._v(" "),a("ol",[a("li",[s._v("可以直接点该分支旁的"),a("code",[s._v("Unprotect")]),s._v("按钮，解除保护，但是这种方法不推荐")]),s._v(" "),a("li",[s._v("第二种方法是在"),a("code",[s._v("Allowed to push")]),s._v("下选择允许那些角色或具体那些用户可以提交，在这里可以选择你自己。")])]),s._v(" "),a("p",[s._v("设置完毕后再重新提交就成功了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);