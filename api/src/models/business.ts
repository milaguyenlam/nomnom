import { Document, Model, Schema, model } from 'mongoose';

interface IPost {
  caption: string;
  post_url: string;
  image_url: string;
  price: number;
}
interface IBusiness {
  name: string;
  location: {
    address: string;
  };
  tags: string[];
  priceLevel: number;
  googleRating: number;
  socialMedia: {
    instagram_link: string;
    website_link: string;
  };
  posts: IPost[];
}

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});
interface IBusinessDocument extends Document, IBusiness {
  distance: number;
}
interface IBusinessModel extends Model<IBusinessDocument> {
  build(obj: IBusiness): IBusinessDocument;
}

businessSchema.statics.build = (obj: IBusiness) => {
  return new Business(obj);
};

const Business = model<IBusinessDocument, IBusinessModel>(
  'Business',
  businessSchema
);

export default Business;
