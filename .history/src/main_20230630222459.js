import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';
import config from 'config'

const  bot = new Telegraf(config.get('TELEGRAM_TOKEN'))


bot.on(message('voice'), async ctx => {
    try {
        // await ctx.reply(JSON.stringify(ctx.message.voice, null, 2))
        const link = await ctx.telegram.getFileLink(ctx.message.voice.file_id)
    } catch (e) {
        console.log('error', e.message);
    }
})


bot.command('start', async (ctx) => {
    await ctx.reply(JSON.stringify(ctx.message, null, 2))
})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))