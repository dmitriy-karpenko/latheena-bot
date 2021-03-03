import { Document, Schema } from 'mongoose';

interface Category {
  categoryId: string;
  categoryName: string;
  mealIds: string[];
}

interface Variation {
  variationName: string;
  price: string;
}

interface Meal {
  mealID: string;
  mealName: string;
  variations: Variation[];
  categories: string[];
}

export interface IFoodMenu extends Document {
  categories: Category[];
  meals: Meal[];
}

export interface IFoodMenuDTO {
  categories: Category[];
  meals: Meal[];
}

export const FoodMenuSchema = new Schema<IFoodMenu>({
  categories: [
    {
      categoryId: String,
      categoryName: String,
      mealIds: [String],
    },
  ],
  meals: [
    {
      mealId: String,
      mealName: String,
      variations: [
        {
          variationName: String,
          price: String,
        },
      ],
      categories: [String],
    },
  ],
});
