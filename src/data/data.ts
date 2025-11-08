import type { Data } from 'family-chart'

/*
 * GUIDE
 * - eng (english)
 * - char (characters): simp (simplified) / trad (traditional)
 * - phon (phonetic):
 *    - mandarin: py (pinyin) / zy (zhuyin)
 *    - cantonese: jp (jyutping) / yale
 */

export const data: Data = [
  {
    id: '1',
    data: {
      eng: 'Me',
      engSubtitle: '',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '我',
            trad: '我'
          },
          phon: {
            py: 'wǒ',
            zy: 'ㄨㄛ'
          }
        },
        cantonese: {
          char: {
            simp: '我',
            trad: '我'
          },
          phon: {
            jp: 'ngo5',
            yale: 'ngóh'
          }
        }
      }
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: []
    }
  },
  {
    id: '2',
    data: {
      eng: 'Mom',
      engSubtitle: '',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '妈妈',
            trad: '媽媽'
          },
          phon: {
            py: 'mā ma',
            zy: 'ㄇㄚ ˙ㄇㄚ'
          }
        },
        cantonese: {
          char: {
            simp: '妈妈',
            trad: '媽媽'
          },
          phon: {
            jp: 'maa4 maa1',
            yale: 'màh mā'
          }
        }
      }
    },
    rels: {
      parents: ['6', '7'],
      spouses: ['3'],
      children: ['8', '9', '1', '10', '11']
    }
  },
  {
    id: '3',
    data: {
      eng: 'Dad',
      engSubtitle: '',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '爸爸',
            trad: '爸爸'
          },
          phon: {
            py: 'bà ba',
            zy: 'ㄅㄚˋ ˙ㄅㄚ'
          }
        },
        cantonese: {
          char: {
            simp: '爸爸',
            trad: '爸爸'
          },
          phon: {
            jp: 'baa4 baa1',
            yale: 'bàh bā'
          }
        }
      }
    },
    rels: {
      parents: ['4', '5'],
      spouses: ['2'],
      children: ['8', '9', '1', '10', '11']
    }
  },
  {
    id: '4',
    data: {
      eng: 'Grandpa',
      engSubtitle: '(Paternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '爷爷',
            trad: '爺爺'
          },
          phon: {
            py: 'yé ye',
            zy: 'ㄧㄝˊ ˙ㄧㄝ'
          }
        },
        cantonese: {
          char: {
            simp: '爷爷',
            trad: '爺爺'
          },
          phon: {
            jp: 'je4 je2',
            yale: 'yèh yé'
          }
        }
      }
    },
    rels: {
      parents: [],
      spouses: ['5'],
      children: ['15', '14', '16', '3']
    }
  },
  {
    id: '5',
    data: {
      eng: 'Grandma',
      engSubtitle: '(Paternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '奶奶',
            trad: '奶奶'
          },
          phon: {
            py: 'nǎi nai',
            zy: 'ㄋㄞˇ ˙ㄋㄞ'
          }
        },
        cantonese: {
          char: {
            simp: '奶奶',
            trad: '奶奶'
          },
          phon: {
            jp: 'naai4 naai2',
            yale: 'náaih náai'
          }
        }
      }
    },
    rels: {
      parents: [],
      spouses: ['4'],
      children: ['15', '14', '16', '3']
    }
  },
  {
    id: '6',
    data: {
      eng: 'Grandpa',
      engSubtitle: '(Maternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '外公',
            trad: '外公'
          },
          phon: {
            py: 'wài gōng',
            zy: 'ㄨㄞˋ ㄍㄨㄥ'
          }
        },
        cantonese: {
          char: {
            simp: '外公',
            trad: '外公'
          },
          phon: {
            jp: 'ngoi6 gung1',
            yale: 'ngoih gūng'
          }
        }
      }
    },
    rels: {
      parents: [],
      spouses: ['7'],
      children: ['2', '13', '12']
    }
  },
  {
    id: '7',
    data: {
      eng: 'Grandma',
      engSubtitle: '(Maternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '外婆',
            trad: '外婆'
          },
          phon: {
            py: 'wài pó',
            zy: 'ㄨㄞˋ ㄆㄛˊ'
          }
        },
        cantonese: {
          char: {
            simp: '外婆',
            trad: '外婆'
          },
          phon: {
            jp: 'ngoi6 po4',
            yale: 'ngoih pòh'
          }
        }
      }
    },
    rels: {
      parents: [],
      spouses: ['6'],
      children: ['2', '13', '12']
    }
  },
  {
    id: '8',
    data: {
      eng: 'Younger brother',
      engSubtitle: '',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '弟弟',
            trad: '弟弟'
          },
          phon: {
            py: 'dì di',
            zy: 'ㄉㄧˋ ˙ㄉㄧ'
          }
        },
        cantonese: {
          char: {
            simp: '弟弟',
            trad: '弟弟'
          },
          phon: {
            jp: 'dai6 dai6',
            yale: 'dàih dái'
          }
        }
      }
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: []
    }
  },
  {
    id: '9',
    data: {
      eng: 'Younger sister',
      engSubtitle: '',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '妹妹',
            trad: '妹妹'
          },
          phon: {
            py: 'mèi mei',
            zy: 'ㄇㄟˋ ˙ㄇㄟ'
          }
        },
        cantonese: {
          char: {
            simp: '妹妹',
            trad: '妹妹'
          },
          phon: {
            jp: 'mui6 mui6',
            yale: 'mùih múi'
          }
        }
      }
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: []
    }
  },
  {
    id: '10',
    data: {
      eng: 'Older brother',
      engSubtitle: '',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '哥哥',
            trad: '哥哥'
          },
          phon: {
            py: 'gē ge',
            zy: 'ㄍㄜ ˙ㄍㄜ'
          }
        },
        cantonese: {
          char: {
            simp: '哥哥',
            trad: '哥哥'
          },
          phon: {
            jp: 'go1 go1',
            yale: 'gòh gō'
          }
        }
      }
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: []
    }
  },
  {
    id: '11',
    data: {
      eng: 'Older sister',
      engSubtitle: '',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '姐姐',
            trad: '姐姐'
          },
          phon: {
            py: 'jiě jie',
            zy: 'ㄐㄧㄝˇ ˙ㄐㄧㄝ'
          }
        },
        cantonese: {
          char: {
            simp: '姐姐',
            trad: '姐姐'
          },
          phon: {
            jp: 'ze2 ze2',
            yale: 'jèh jē'
          }
        }
      }
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: []
    }
  },
  {
    id: '12',
    data: {
      eng: 'Aunt',
      engSubtitle: '(Maternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '姨妈',
            trad: '姨媽'
          },
          phon: {
            py: 'yí mā',
            zy: 'ㄧˊ ㄇㄚ'
          }
        },
        cantonese: {
          char: {
            simp: '姨妈',
            trad: '姨媽'
          },
          phon: {
            jp: 'ji4 maa1',
            yale: 'yìh mā'
          }
        }
      }
    },
    rels: {
      parents: ['6', '7'],
      spouses: [],
      children: []
    }
  },
  {
    id: '13',
    data: {
      eng: 'Uncle',
      engSubtitle: '(Maternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '舅舅',
            trad: '舅舅'
          },
          phon: {
            py: 'jiù jiu',
            zy: 'ㄐㄧㄡˋ ˙ㄐㄧㄡ'
          }
        },
        cantonese: {
          char: {
            simp: '舅父',
            trad: '舅父'
          },
          phon: {
            jp: 'kau5 fu6',
            yale: 'káuh fú'
          }
        }
      }
    },
    rels: {
      parents: ['6', '7'],
      spouses: [],
      children: []
    }
  },
  {
    id: '14',
    data: {
      eng: 'Aunt',
      engSubtitle: '(Paternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: {
            simp: '姑姑',
            trad: '姑姑'
          },
          phon: {
            py: 'gū gu',
            zy: 'ㄍㄨ ˙ㄍㄨ'
          }
        },
        cantonese: {
          char: {
            simp: '姑妈',
            trad: '姑媽'
          },
          phon: {
            jp: 'gu1 maa1',
            yale: 'gū mā'
          }
        }
      }
    },
    rels: {
      parents: ['4', '5'],
      spouses: [],
      children: []
    }
  },
  {
    id: '15',
    data: {
      eng: 'Younger uncle',
      engSubtitle: '(Paternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '叔叔',
            trad: '叔叔'
          },
          phon: {
            py: 'shū shu',
            zy: 'ㄕㄨ ˙ㄕㄨ'
          }
        },
        cantonese: {
          char: {
            simp: '叔叔',
            trad: '叔叔'
          },
          phon: {
            jp: 'suk1 suk1',
            yale: 'sūk sūk'
          }
        }
      }
    },
    rels: {
      parents: ['4', '5'],
      spouses: [],
      children: []
    }
  },
  {
    id: '16',
    data: {
      eng: 'Older uncle',
      engSubtitle: '(Paternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: {
            simp: '伯伯',
            trad: '伯伯'
          },
          phon: {
            py: 'bó bo',
            zy: 'ㄅㄛˊ ˙ㄅㄛ'
          }
        },
        cantonese: {
          char: {
            simp: '伯伯',
            trad: '伯伯'
          },
          phon: {
            jp: 'baak3 baak3',
            yale: 'baak baak'
          }
        }
      }
    },
    rels: {
      parents: ['4', '5'],
      spouses: [],
      children: []
    }
  }
]