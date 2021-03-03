import { IFoodMenuDTO } from '../db/models/FoodMenu';

export const InitialFoodMenu: IFoodMenuDTO = {
  categories: [
    {
      categoryId: 'mexicanFood',
      categoryName: 'Mexican food',
      mealIds: ['quesadilla', 'fajita'],
    },
    {
      categoryId: 'japaneseFood',
      categoryName: 'Japanese food',
      mealIds: ['sushi', 'miso'],
    },
  ],
  meals: [
    {
      mealID: 'quesadilla',
      mealName: 'Quesadilla',
      variations: [
        {
          variationName: 'chicken',
          price: '800LKR',
        },
        {
          variationName: 'prawn',
          price: '100LKR',
        },
      ],
      categories: ['mexicanFood'],
    },
    {
      mealID: 'fajita',
      mealName: 'Fajita',
      variations: [
        {
          variationName: 'chicken',
          price: '1000LKR',
        },
        {
          variationName: 'prawn',
          price: '1200LKR',
        },
      ],
      categories: ['mexicanFood'],
    },
    {
      mealID: 'sushi',
      mealName: 'Sushi',
      variations: [
        {
          variationName: 'dragon',
          price: '1000LKR',
        },
        {
          variationName: 'california',
          price: '1200LKR',
        },
      ],
      categories: ['japaneseFood'],
    },
    {
      mealID: 'miso',
      mealName: 'Miso',
      variations: [
        {
          variationName: 'soup',
          price: '900LKR',
        },
      ],
      categories: ['japaneseFood'],
    },
  ],
};
