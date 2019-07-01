interface Dictionary {
  [index: string]: {
    [index: string]: string;
  };
}

const dict: Dictionary = {
  'en-US': {
  },
};

dict.en = dict['en-US'];
// dict['zh-HK'] = dict.zh;
// dict['zh-TW'] = dict.zh;
// dict['zh-CN'] = dict.zh;

export default dict;
