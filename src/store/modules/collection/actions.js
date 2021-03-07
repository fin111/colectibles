export default {
  async addCollection(context, data) {
    const collectionData = {
      name: data.name,
      desc: data.desc,
      url: data.url,
      tag: data.tag
    };

    const response = await fetch('https://collections-76711-default-rtdb.europe-west1.firebasedatabase.app/collections.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(collectionData)
    });

    if(!response.ok) {
      // error ...
    }

    context.commit('addCollection', collectionData)
  },

  async loadCollection(context) {
    const response = await fetch('https://collections-76711-default-rtdb.europe-west1.firebasedatabase.app/collections.json');

    const responseData = await response.json();

    if (!response.ok) {
          // error ...
    }
    
    const collections = [];

    for (const id in responseData) {
      const collection = {
        id: id,
        name: responseData[id].name,
        desc: responseData[id].desc,
        url: responseData[id].url,
        tag: responseData[id].tag
      };
      collections.push(collection);
    }
    context.commit('setCollection', collections);
  }
};
