export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(item => {
      return {
        id: item._id.toString(),
        ...item
      }
    }).map(({_id, ...rest}) => rest);

    return mappedArray;
  }

  export const replaceMongoIdInObject = (obj) => {
    if (!obj) return null;

    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }

  export const getSlug = (title) => {
    if (!title) return null;

    const slug = title.toLowerCase().replace(/ /g, -'')
    .replace(/[^\w-]+/g, '');

    return slug;
  }