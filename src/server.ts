// const { Telegraf } = require('telegraf')
import { Telegraf } from 'telegraf';
import { MongoDAL } from './db/MongoDAL';
import { Constants } from './common/constants';
import { Translations } from './translations';
import { FoodMenuButtons } from './FoodMenuButtons/FoodMenuButtons';

const database = MongoDAL.getInstance(Constants.DB_CONNECTION_STRING);
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(Translations.greeting, FoodMenuButtons.MainMenuKeyboardMarkup)
);

bot.command(Constants.BotCommands.menu, (ctx) =>
  ctx.reply(Translations.helloBack, FoodMenuButtons.MainMenuKeyboardMarkup)
);

/*
  Food buttons handling section
*/
bot.hears(Constants.BotCommands.kitchen, async (ctx) => {
  const kitchenKeyboard = await FoodMenuButtons.getFoodCategoriesMenuKeyboardMarkup();
  ctx.reply(Translations.foodCategories, kitchenKeyboard);
});

bot.hears(Constants.BotCommands.kitchen, async (ctx) => {
  const kitchenKeyboard = await FoodMenuButtons.getFoodCategoriesMenuKeyboardMarkup();
  ctx.reply(Translations.foodCategories, kitchenKeyboard);
});

/*
  Movies buttons handling section
*/
bot.hears(Constants.BotCommands.movies, async (ctx) => {
  ctx.reply('heyheyhey');
});

/*bot.on('text', async (ctx) => {
  await database.setTestFoodData();
  ctx.reply(`Сам ты ${ctx.message.text}`);
});*/
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
