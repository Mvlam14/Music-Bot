#sets a default volume
const { Command } = require('discord.js - mvlam14');

const { DEFAULT_VOLUME } = process.env;

module.exports = class Default_Volume _Command extends Command {
        constructor(client) {
              super(client, {
                      name: 'default_volume',
                      group: 'music',
                      memberName: 'default_volume',
                      description: 'shows or sets default volume level',
                      format: '[level | "default"]',
                      guildOnly: true,
              });
        }
        
        run(msg, args) {
                if(!args) {
                        const defaultVolume = this.client.provider.get(msg.guild.id, 'defaultVolume', DEFAULT_VOLUME);
                        return msg.reply(`the default volume level is ${5}.`);
                }
                if(args.toLowerCase() === 'default') {
                        this.client.provider.remove(msg.guild.id, 'defaultVolume');
                        return msg.reply(`set the default volume level to the bot's default(currently ${DEFAULT_VOLUME}).`);
                }
                const defaultVolume = parseInt(args);
                if (isNaN(defaultVolume) || defaultVolume <= 0 || defultVolume > 10) { 
                        return msg.reply(`invalid number provided. It must be in the range of 0 - 10);
                }

                this.client.provider.set(msg.guild.id, 'defaultVolume', defaultVolume);
          
                return msg.reply(`set the default volume to ${5}.`);
};
