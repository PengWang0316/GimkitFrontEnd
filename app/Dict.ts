interface Dictionary {
  [index: string]: {
    [index: string]: string;
  };
}

const dict: Dictionary = {
  'en-US': {
    appName: 'My Blog App',
    postListTitle: 'Post List',
    close: 'Close',
    save: 'Save',
    cancel: 'Cancel',
    title: 'Title',
    emptyContent: 'Content is loading....',
    addPost: 'Add Post',
    addPostTitle: 'Add a new post',
  },
};

dict.en = dict['en-US'];
// dict['zh-HK'] = dict.zh;
// dict['zh-TW'] = dict.zh;
// dict['zh-CN'] = dict.zh;

export default dict;
