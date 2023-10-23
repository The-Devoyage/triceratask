export const getRandomImage = (height: number = 200, width: number = 300) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${randomNumber}/${width}/${height}`;
};

export const getRandomAvatar = () => {
  const rand = Math.floor(Math.random() * 1000);
  //Default set in API Trigger as well.
  return `https://source.boringavatars.com/beam/500/${rand}?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
};
