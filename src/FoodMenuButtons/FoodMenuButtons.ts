import { Markup } from 'telegraf';
import { Constants } from '../common/constants';
import { MongoDAL } from '../db/MongoDAL';
import { MarkUpButton } from '../common/models';

const database = MongoDAL.getInstance(Constants.DB_CONNECTION_STRING);

export class FoodMenuButtons {
  public static MainMenuKeyboardMarkup = Markup.keyboard([
    Constants.MainMenuKeyboardButtons,
  ]);

  static createFoodCategoriesMenuButtons = (
    foodCategories: any[]
  ): MarkUpButton[] => {
    return foodCategories.map((category) => ({ text: category.categoryName }));
  };

  public static getFoodCategoriesMenuKeyboardMarkup = async () => {
    const foodCategories = await database.getFoodCategories();
    const markUpButtons = FoodMenuButtons.createFoodCategoriesMenuButtons(
      foodCategories
    );
    return Markup.keyboard([markUpButtons]);
  };
}
