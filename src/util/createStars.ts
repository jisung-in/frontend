export const createStars = (totalStars: number) => {
  let stars = "";
  for (let i = 0; i < Math.ceil(totalStars); i++) {
    stars += "★";
  }

  return stars;
};
