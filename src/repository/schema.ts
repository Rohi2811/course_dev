export interface Course {
    _id?: string;
    name: string;
    categories: string[];
    subCategories: string[];
  }
  
  export interface Category {
    _id?: string;
    name: string;
  }
  
  export interface SubCategory {
    _id?: string;
    name: string;
    categoryId: string; // Reference to category
  }
  