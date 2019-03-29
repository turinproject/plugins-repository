import config from 'data/SiteConfig';

export default class Helpers {
  static getCategoryName(categoryId) {
    const categories = config.categories[0].options;
    return categories.filter(category => category.id === categoryId)[0].name;
  }
}