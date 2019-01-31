export const fetchUser = userId => {
   return $.ajax({  
      method: 'GET',
      url: `/api/users/${userId}`,
   })
};

export const updateUser = (userId, pic) => (
   $.ajax({
      method: 'PATCH',
      url: `api/users/${userId}`,
      data: pic,
      contentType: false,
      processData: false,
   })
);