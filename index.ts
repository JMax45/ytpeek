import 'dotenv/config';
import { Markup, Telegraf } from 'telegraf';
import ytdl from 'ytdl-core';
import axios from 'axios';

const bot = new Telegraf(process.env.BOT_TOKEN!);

async function download(videoId: string, format: 'video' | 'audio') {
	let info = await ytdl.getInfo(videoId);

	let ytdlFormat = ytdl.chooseFormat(info.formats, {
		quality: format === 'video' ? 'highestvideo' : 'highestaudio',
		filter: format === 'video' ? 'videoandaudio' : 'audioonly',
	});

	const file = await (
		await axios({ url: ytdlFormat.url, method: 'GET', responseType: 'stream' })
	).data;

	return {
		stream: file,
		filename: info.videoDetails.title,
	};
}

bot.on('text', async (ctx) => {
	// stop if url is invalid
	if (!ytdl.validateURL(ctx.message.text)) {
		return;
	}

	const info = await ytdl.getInfo(ctx.message.text);
	const { thumbnails, title, videoId } = info.videoDetails;

	ctx.replyWithPhoto(thumbnails[thumbnails.length - 1], {
		caption: `*${title}*\n\nPlease select a format`,
		reply_markup: Markup.inlineKeyboard([
			Markup.button.callback('📹 Video', `download;video;${videoId}`),
			Markup.button.callback('🎵 Audio', `download;audio;${videoId}`),
		]).reply_markup,
		parse_mode: 'Markdown',
	});
});

bot.action(/^download/, (ctx) => {
	const format = ctx.match.input.split(';')[1];
	if (format !== 'video' && format !== 'audio') {
		return;
	}
	const videoId = ctx.match.input.split(';')[2];

	ctx.answerCbQuery('Started downloading video');
	ctx.editMessageCaption('🔽 Downloading your video...');
	download(videoId, format).then(async (res) => {
		if (format === 'video') {
			await ctx.replyWithVideo({ source: res.stream, filename: res.filename });
		} else {
			await ctx.replyWithAudio({ source: res.stream, filename: res.filename });
		}
		ctx.deleteMessage();
	});
});

bot.launch();
