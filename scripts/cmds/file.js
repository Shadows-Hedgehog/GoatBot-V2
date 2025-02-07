const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["61571952600731"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝐞𝐮𝐡 ? 😐. 𝐋𝐚𝐢𝐬𝐬𝐞 𝐜̧𝐚... 𝐭𝐮 𝐧'𝐞𝐬 𝐩𝐚𝐬 𝙴𝙶𝙶𝙼𝙰𝙽 𝚁𝙾𝙱𝙾𝚃𝙸𝚀𝚄𝙴 𝐦𝐨𝐧 𝐯𝐢𝐞𝐮𝐱 ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝖡𝖺𝗅𝖺𝗇𝖼𝖾 𝗅𝖾 𝗇𝗈𝗆 𝖽𝗎 𝖿𝗂𝖼𝗁𝗂𝖾𝗋.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
