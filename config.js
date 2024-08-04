const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50931294715";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_49_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUsXG4gICAgICAgIDY2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICA5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc3LFxuICAgICAgICA2MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNCZktxQkpTbFArMVNjN1NyQmhsT09nNlRKVEdPMzVoRTJwc3QwUXVSMlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJnODRFN1BXUkl5SWVicVlXMVh6RVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTUyOTcxZjgtMTgwMC00Yjk4LTkwYTMtNTBkZjViMWJjOGQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDMyLFxuICAgICAgMjEwLFxuICAgICAgODIsXG4gICAgICAyMTAsXG4gICAgICA1MyxcbiAgICAgIDEzNixcbiAgICAgIDEzMyxcbiAgICAgIDExMixcbiAgICAgIDIwNCxcbiAgICAgIDI0OCxcbiAgICAgIDQ5LFxuICAgICAgMTQxLFxuICAgICAgMjI0LFxuICAgICAgMTgwLFxuICAgICAgMTY3LFxuICAgICAgOTUsXG4gICAgICAxNDYsXG4gICAgICAxNjEsXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA1MCxcbiAgICAgIDQ4LFxuICAgICAgODQsXG4gICAgICAxODQsXG4gICAgICAxMTEsXG4gICAgICAxMDIsXG4gICAgICAyNTMsXG4gICAgICAxNTgsXG4gICAgICAxMTQsXG4gICAgICAyMTAsXG4gICAgICA4OCxcbiAgICAgIDE3OSxcbiAgICAgIDY2LFxuICAgICAgOTIsXG4gICAgICAxMjIsXG4gICAgICAyMjYsXG4gICAgICAyMDksXG4gICAgICA4OCxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFRFc2RFlQQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzEyOTQ3MTU6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1Nzg1NzYzMDY1ODY3Mzo2MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMnNqc2tIRU5LcHZyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm16Z3R6bGpBV0MvRWJVSitRTExDWVRqbExUTDE4bHlhK09qQ2VvdEFNeDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid2xFRHRFK1lnUDZJdE84YnpBbjJXRHhmckZDclY5V3VGTWE5dkl2RjZDekpSUzVGSzExQ1ZNVUNFai9IdG1TSHQ2bkcyTG9nL21ZSG93ZEdEeGdnREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRVdMcXVFUFVJV3k0aUtpOFk4WGxMb0JSU2grN0R1ZDN0ejN1UXBFSDA0RGhMdUROYlZaZ2xRaDNZbDI3dHJhYkN5UlkxaUhNT3JVZDEzYzNUZnhDQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNTA5MzEyOTQ3MTU6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3ODI5MzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
