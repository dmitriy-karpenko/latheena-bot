import mongoose = require('mongoose');
import { FoodMenuSchema, IFoodMenu, IFoodMenuDTO } from './models/FoodMenu';
import { InitialFoodMenu } from '../testData/foodMenu';

export class MongoDAL {
  private static instance: MongoDAL;
  private static db: mongoose.Connection = mongoose.connection;
  public static isConnected = false;

  public static foodCategories: string[];

  private constructor(url: string) {
    this.initConnection(url);
  }

  public static getInstance(url: string): MongoDAL {
    if (!MongoDAL.instance) {
      MongoDAL.instance = new MongoDAL(url);
    }
    return MongoDAL.instance;
  }

  public async initConnection(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
      });
      MongoDAL.db.on('error', (error) => {
        console.log('connection error:', error);
        reject(false);
      });
      MongoDAL.db.once('open', () => {
        MongoDAL.isConnected = true;
        resolve(true);
      });
    });
  }

  public FoodMenu = mongoose.model('FoodMenu', FoodMenuSchema);

  /*
    Just for the testing purposes
   */
  public async setTestFoodData() {
    let currentFoodMenu = (await this.FoodMenu.findOne().lean()) as
      | IFoodMenu
      | boolean;
    if (!currentFoodMenu) {
      // this.FoodMenu.findOneAndUpdate({ name: 'Sushi' }, { count: 3 });
      const sushiItem = new this.FoodMenu(InitialFoodMenu);
      try {
        currentFoodMenu = await sushiItem.save();
      } catch (e) {
        currentFoodMenu = false;
        console.log('Error while saving initial data', e);
      }
    }
    return currentFoodMenu;
  }

  public async getFoodCategories() {
    const foodMenu = await this.FoodMenu.findOne({}).lean();
    return foodMenu.categories;
  }
}
