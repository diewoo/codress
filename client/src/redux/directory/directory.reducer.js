const INITIAL_STATE = {
  sections: [
    {
      title: 'Sombreros',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/sombreros'
    },
    {
      title: 'casacas',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/casacas'
    },
    {
      title: 'zapatillas',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/zapatilas'
    },
    {
      title: 'mujeres',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/mujeres'
    },
    {
      title: 'hombres',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/hombres'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
