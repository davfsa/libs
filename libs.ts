import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'D++',
		url: 'https://github.com/brainboxdotcc/DPP',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'No',
		contextMenus: 'Yes'
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Has a PR',
		guildStickers: 'Has a PR',
		contextMenus: 'Yes'
	},
	{
		name: 'discord.js',
		url: 'https://github.com/discordjs/discord.js',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Yes',
		guildStickers: 'Yes',
		contextMenus: 'Yes'
	},
	{
		name: 'discord.py',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 9 dev',
		slashCommands: 'No',
		buttons: 'Dev Version',
		selectMenus: 'Dev Version',
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
		contextMenus: 'No'
	},
	{
		name: 'JDA',
		url: 'https://github.com/Dv8FromTheWorld/JDA',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		slashCommands: 'Yes',
		buttons: 'Yes',
		selectMenus: 'Yes',
		threads: 'Has a PR',
		guildStickers: 'No',
		contextMenus: 'Has a PR'
	}
]