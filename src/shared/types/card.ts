export type TCard = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  createdBy: string;
  ownedById: string;
};

export type TSlicedCard = Omit<TCard, "createdBy" | "ownedById" | "description">;