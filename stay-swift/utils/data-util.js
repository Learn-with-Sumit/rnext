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
    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }

  export const isDateInbetween = (date, from, to) => {
    return (new Date(date).getTime() >= new Date(from).getTime() && new Date(date).getTime() <= new Date(to).getTime());
  }




