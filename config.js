/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['0115400569','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmjRHTEAiqi4F0QNvahhBKquXZRgDjhv29gT0/Pw+5s71tdTmTlycxT30Fe4AqtUAeU76AkuIEU9UvalQgoQKuvV0TAEISQQqAAbznHhraej4uVbUqzrF00JnewI0naBzNbyOx0WyRUyKIkeAGPISjrS4qD3wAyg3nDtW2ATvIR7lrjkq7KOpBc37++mTsHm/fiMGXLfHP2XsCjR4SY4DyalTHKEIHpCnVbiMnX6KvaQGPumXB/6+7RfoGtW7W7M41dn41pmxgpY3Wr1seo5qKv0edRO2sD+RUFk3icNQVp7DA5HpzaNjvkDsL7Xa5RqaaWenqnX+EoR6EZopxi2n1Zd2ktxOdFN5M5HbOZrvLF3eK2Qrh3z41nx6w7EXTdcUWHTb5G/GJPggamanKZZuGyDLDHJfruFpr7eHBK7IrRJurRKmbm1P6V+JZ8ZCX5P7rXei6SQZ7Fi2jJykJb7FkHalN/oBrseU6cjZljN57i8eyLsXk9mdnu7gtHjaqcwGxEnb0IvDHwUs1jNT/wGRbNXakJdswnfUhr8juWF7Sb+lYKCWqZN6+YG8Q86Wty8S1HDmT1VouuLzcWuxSPlmgfkH7jfMl0GLiyTTRn3TUn+Oy20Wtnoel4ElHNvqnqy7OjBHVmCBT2MQQERbiiBFJc5P2ZIA0BDJsDCgiiT3XBOl3Ks4Tv2tPCi5jFJrvXhTTpMj9e+9bI82bX6wh56oTozAsYgpIUAaoqFC5wRQvS2aiqYIQqoPz51xDk6Ebffetf49khuGJS0VNel2kBww9TPy5hEBR1Tg9dHuj9AhGgMJ/HiFKcR1UvY51DEsS4QXoMaQWUK0wr9LNBRFAIFEpq9HNo9SLsdT/ONH9r8WcwBNnTDxwCBXCiwLKiwDCiNFFY6Y/qW9vDwrL8liMKhiB9lrEMNxkz8pjneJEVxn1lf/H4ybAHDBGFOK2AAnT7kNfEm89sdz0at4ahziJVj1Tw2dFHMt6lH3hjzzHE+rJaH05j/pRighP+bbR0U3yYSvl+HrOqv3RoIrz8AwhQwHVxGW9EKeA0i1/u3CO9HaLTwqUMHey53fYyCOAa7piSWR6RdeQOO6zhmq82aBLnRU0y9d5w19XdrxpOM1E4EpP2PUZDEKIGB+jXxzaRObJq47Uu4tH6jI2NVNrGcTYN/WVX6lWObvl4kgTSbfVGOf6YMzLFtAxvoUBHG06250nn18lmImsRFFBcDnjzVfuR2efMpD/+KvyMU+9Vv71i9Bz9HPYO/rd378T7iDGP4S8YPz6TfxlI7Zptjfm+vmTd6yndrtml9yaUa6npnNJLokHJ7L1wZxyci78Bj8dfQ1CmkF4LkgEFwDwkBQ7BEJCi7jNr5tfiN4/pqmlqu2jdd57Ciqqfc3DEGaoozEqgsLLMMfJYnojvVVtSlAtYxX0yV0K8EMDjbxbOvqdUBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
