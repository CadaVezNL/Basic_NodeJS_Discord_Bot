import { token } from './token.js';
import { Client, MessageAttachment, MessageEmbed } from 'discord.js';
 

// Create an instance of a Discord client
const client = new Client();
client.once('ready', () => {
	console.info(`Logged in as ${client.user.tag}!`);    
    console.log('Basic bot is ready!');
});

process.on('exit', function() {
    console.log('About to exit.');
 });

client.login(token.getToken());