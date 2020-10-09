import Friend from './model';

export const getAllFriends = () => {
  return new Promise((resolve, reject) => {
    Friend.find()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getFriend = (id) => {
  return new Promise((resolve, reject) => {
    Friend.findOne({ _id: id })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createFriend = (name, number) => {
  return new Promise((resolve, reject) => {
    if (!name || !number) {
      reject(new Error('you must provide a name and number'));
    } else {
      Friend.create({ name, number })
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

export const updateFriend = (id, name, number) => {
  return new Promise((resolve, reject) => {
    if (!name || !number || !id) {
      reject(new Error('you must provide an id, name, and number'));
    } else {
      Friend.updateOne({ _id: id }, { name, number })
        .then(() => {
          resolve({ id, name, number });
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

export const deleteFriend = (id) => {
  return new Promise((resolve, reject) => {
    Friend.deleteOne({ _id: id })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
