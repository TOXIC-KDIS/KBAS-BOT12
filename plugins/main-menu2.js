const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb

    //---------------------------------------------------------------------------


cmd({

            pattern: "اوامر_المطور",           
            alias :['اوامرالمطور'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "1️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔*
قسم المطور 🪭
*⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔*
🪭 ضيف_بريميام
🪭 حذف_بريميام
🪭 الحاله
🪭 ريستارت
🪭 بان
🪭 الغاء_البان
🪭 اطفاء
🪭 تفعيل
🪭 المبندين
🪭 إعادة
🪭 اعادة_تشغيل
🪭 أدخل
🪭 ضيف_اكس_بي
🪭 ضيف_جواهر
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر_الجروب",           
            alias :['اوامرالجروب'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "2️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم الجروبات 🪭
⎔ ⋅ ───━ •﹝💛﹞• ━─── ⋅ ⎔
🪭|ضيف
🪭|الاشباح
🪭|طرد
🪭|منشني
🪭|ترقية
🪭|اعفاء
🪭|انذار
🪭|حذف_انذار
🪭|حذف
🪭|منشن
🪭|عملات
🪭|مخفي
🪭|المشرفين
🪭|لمنشن
🪭|بروفايل
🪭|الجروب
🪭|دعوه
🪭|تغيير_اللينك
🪭|لفل
🪭|جروب
🪭|الترحيب
🪭|المغادره
🪭|جروب قفل و فتح
🪭|خط
🪭|توب
🪭|لينك
🪭|يومي
🪭|الماس
🪭|ترتيب_البنك
🪭|شراء
🪭|هجوم
*⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    ) 



    //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر_التحميل",           
            alias :['اوامرالتحميل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "3️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم التنزيلات 🛡
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
🛡 انستغرام
🛡 جوجل
🛡 لريك
🛡 ويكيبيديا
🛡 انستا
🛡 اسم_الاغنية
🛡 فيس
🛡 بين
🛡 ميديافاير
🛡 شغل
🛡 تيكتوك
🛡 تويتر
🛡 اغنية
🛡 بحث
🛡 فيديو
🛡 تطبيق
🛡 صوره
🛡 2صوره
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    


    //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر_الترفيه",           
            alias :['اوامرالترفيه'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "4️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم الترفيه 🕹
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
🕹 اكس او
🕹 كت
🕹 صراحه
🕹 ذكاء
🕹 غباء
🕹 جمال
🕹 الحب
🕹 لو
🕹 هل
🕹 ترجم
🕹 تفكيك
🕹 ميمز
🕹 دمج
🕹 زواج
🕹 انطق
🕹 علم
🕹 تاج
🕹 حكمه
🕹 ميمز
🕹 سوال
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )   


    //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر_التحويل",           
            alias :['اوامرالتحويل'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "5️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم التحويلات 🌀
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
🌀 ملصق
🌀 سرقة
🌀 لفيديو
🌀 لصورة
🌀 دائري
🌀 لرابط
🌀 لانمي
🌀 تخيل
🌀 مكس
🌀 لجواهر
🌀 ستك
🌀 تلجراف
🌀 لكرتون
🌀 باركود
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )        


    //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر_الدين",           
            alias :['اوامرالدين'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "6️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم الدين الاسلامي 🕋
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
🕋سورة
🕋حديث
🕋قران
🕋الله
🕋ايات
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )  
                                           
                                           
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "اوامر الصوتيات",           
            alias :['اوامرالصوتيات'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "7️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔
قسم الصوتيات 🎧
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
🎧 عميق
🎧 منفوخ
🎧 تخين
🎧 صاخب
🎧 سريع
🎧 تخينن
🎧 رفيع
🎧 روبوت
🎧 بطيء
🎧 ناعم
🎧 سنجاب
⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )    
                                                //---------------------------------------------------------------------------

cmd({

            pattern: "كل_الاوامر",           
            alias :['كل-الاوامر'],
            desc: "(menu cmdlist).",
            category: "downloader",
            react: "8️⃣",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        /*let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];*/
            let buttonMessage = {
                image: {
                    url: await botpic(),
                },

                caption: `
*⎔ ⋅ ───━ •﹝كل الاوامر﹞• ━───⋅ ⎔*

* اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ *

*⎔ ⋅ ───━ •﹝🪭﹞• ━───⋅ ⎔*
*قسم المطور 🪭*
*⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔*
🪭 ضيف_بريميام
🪭 حذف_بريميام
🪭 الحاله
🪭 ريستارت
🪭 بان
🪭 الغاء_البان
🪭 اطفاء
🪭 تفعيل
🪭 المبندين
🪭 إعادة
🪭 اعادة_تشغيل
🪭 أدخل
🪭 ضيف_اكس_بي
🪭 ضيف_جواهر
*⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔*
*قسم الجروبات 🪭*
*⎔ ⋅ ───━ •﹝💛﹞• ━─── ⋅ ⎔*
🪭|ضيف
🪭|الاشباح
🪭|طرد
🪭|منشني
🪭|ترقية
🪭|اعفاء
🪭|انذار
🪭|حذف_انذار
🪭|حذف
🪭|منشن
🪭|عملات
🪭|مخفي
🪭|المشرفين
🪭|لمنشن
🪭|بروفايل
🪭|الجروب
🪭|دعوه
🪭|تغيير_اللينك
🪭|لفل
🪭|جروب
🪭|الترحيب
🪭|المغادره
🪭|جروب قفل و فتح
🪭|خط
🪭|توب
🪭|لينك
🪭|يومي
🪭|الماس
🪭|ترتيب_البنك
🪭|شراء
🪭|هجوم
*⎔ ⋅ ───━ •﹝🪭﹞• ━─── ⋅ ⎔*
*قسم التنزيلات 🛡*
*⎔ ⋅ ───━ •﹝🛡﹞• ━─── ⋅ ⎔*
🛡 انستغرام
🛡 جوجل
🛡 لريك
🛡 ويكيبيديا
🛡 انستا
🛡 اسم_الاغنية
🛡 فيس
🛡 بين
🛡 ميديافاير
🛡 شغل
🛡 تيكتوك
🛡 تويتر
🛡 اغنية
🛡 بحث
🛡 فيديو
🛡 تطبيق
🛡 صوره
🛡 2صوره
*⎔ ⋅ ───━ •﹝🛡﹞• ━─── ⋅ ⎔*
*قسم الترفيه 🕹*
*⎔ ⋅ ───━ •﹝🕹﹞• ━─── ⋅ ⎔*
🕹 اكس او
🕹 كت
🕹 صراحه
🕹 ذكاء
🕹 غباء
🕹 جمال
🕹 الحب
🕹 لو
🕹 هل
🕹 ترجم
🕹 تفكيك
🕹 ميمز
🕹 دمج
🕹 زواج
🕹 انطق
🕹 علم
🕹 تاج
🕹 حكمه
🕹 ميمز
🕹 سوال
*⎔ ⋅ ───━ •﹝🕹﹞• ━─── ⋅ ⎔*
*قسم التحويلات 🌀*
*⎔ ⋅ ───━ •﹝🌀﹞• ━─── ⋅ ⎔*
🌀 ملصق
🌀 سرقة
🌀 لفيديو
🌀 لصورة
🌀 دائري
🌀 لرابط
🌀 لانمي
🌀 تخيل
🌀 مكس
🌀 لجواهر
🌀 ستك
🌀 تلجراف
🌀 لكرتون
🌀 باركود
*⎔ ⋅ ───━ •﹝🌀﹞• ━─── ⋅ ⎔*
*قسم الدين الاسلامي 🕋*
*⎔ ⋅ ───━ •﹝🕋﹞• ━───⋅ ⎔*
🕋سورة
🕋حديث
🕋قران
🕋الله
🕋ايات
*⎔ ⋅ ───━ •﹝🕋﹞• ━─── ⋅ ⎔*
*قسم الصوتيات 🎧*
*⎔ ⋅ ───━ •﹝🎧﹞• ━─── ⋅ ⎔*
🎧 عميق
🎧 منفوخ
🎧 تخين
🎧 صاخب
🎧 سريع
🎧 تخينن
🎧 رفيع
🎧 روبوت
🎧 بطيء
🎧 ناعم
🎧 سنجاب
*⎔ ⋅ ───━ •﹝انتهت الاوامر﹞• ━───⋅ ⎔*



*~.¸¸ ❝ SARA 𝐵𝑂𝑇 ❝ ¸¸.~*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
