import { Markup } from 'telegraf';

enum BotCommands {
  menu = '/menu',
  kitchen = 'Кухня',
  movies = 'Кино',
}

export class Constants {
  static readonly BotCommands = BotCommands;

  public static DB_CONNECTION_STRING = 'mongodb://localhost/Latheena';

  public static MainMenuKeyboardButtons = [
    { text: BotCommands.kitchen },
    { text: BotCommands.movies },
  ];
}
