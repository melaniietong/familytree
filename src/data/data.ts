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
          char: { simp: '我', trad: '我' },
          phon: { py: 'wǒ', zy: 'ㄨㄛ' }
        },
        cantonese: {
          char: { simp: '我', trad: '我' },
          phon: { jp: 'ngo5', yale: 'ngóh' }
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
      eng: 'Mother',
      engSubtitle: '',
      gender: 'F',
      language: {
        mandarin: {
          char: { simp: '母亲', trad: '母親' },
          phon: { py: 'mǔ qīn', zy: 'ㄇㄨˇ ㄑㄧㄣ' },
          variations: [
            {
              char: { simp: '母', trad: '母' },
              phon: { py: 'mǔ', zy: 'ㄇㄨ' },
              description: 'Classical'
            },
            {
              char: { simp: '妈妈', trad: '媽媽' },
              phon: { py: 'mā ma', zy: 'ㄇㄚ ˙ㄇㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '妈', trad: '媽' },
              phon: { py: 'mā', zy: 'ㄇㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '老妈', trad: '老媽' },
              phon: { py: 'lǎo mā', zy: 'ㄌㄠˇ ㄇㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '妈咪', trad: '媽咪' },
              phon: { py: 'mā mi', zy: 'ㄇㄚ ˙ㄇㄧ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '母亲', trad: '母親' },
          phon: { jp: 'mou5 can1', yale: 'móuh chān' },
          variations: [
            {
              char: { simp: '母', trad: '母' },
              phon: { jp: 'mou5', yale: 'móuh' },
              description: 'Classical'
            },
            {
              char: { simp: '妈妈', trad: '媽媽' },
              phon: { jp: 'maa4 maa1', yale: 'màh mā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '妈', trad: '媽' },
              phon: { jp: 'maa1', yale: 'mā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿妈', trad: '阿媽' },
              phon: { jp: 'aa3 maa1', yale: 'a mā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '老妈', trad: '老媽' },
              phon: { jp: 'lou5 maa1', yale: 'lóuh mā]' },
              description: 'Colloquial'
            },
            {
              char: { simp: '妈咪', trad: '媽咪' },
              phon: { jp: 'maa1 mi4', yale: 'mā mìh' },
              description: 'Colloquial'
            }
          ]
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
      eng: 'Father',
      engSubtitle: '',
      gender: 'M',
      language: {
        mandarin: {
          char: { simp: '父亲', trad: '父親' },
          phon: { py: 'fù qīn', zy: 'ㄈㄨˋ ㄑㄧㄣ' },
          variations: [
            {
              char: { simp: '父', trad: '父' },
              phon: { py: 'fù', zy: 'ㄈㄨˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '爷', trad: '爺' },
              phon: { py: 'yé', zy: 'ㄧㄝˊ' },
              description: 'Classical'
            },
            {
              char: { simp: '爸爸', trad: '爸爸' },
              phon: { py: 'bà ba', zy: 'ㄅㄚˋ ˙ㄅㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爸', trad: '爸' },
              phon: { py: 'bà', zy: 'ㄅㄚˋ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爹', trad: '爹' },
              phon: { py: 'diē', zy: 'ㄉㄧㄝ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爹哋', trad: '爹哋' },
              phon: { py: 'diē dì', zy: 'ㄉㄧㄝ ㄉㄧˋ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '老爸', trad: '老爸' },
              phon: { py: 'lǎo bà', zy: 'ㄌㄠˇ ㄅㄚˋ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '父亲', trad: '父親' },
          phon: { jp: 'fu6 can1', yale: 'fuh chān' },
          variations: [
            {
              char: { simp: '父', trad: '父' },
              phon: { jp: 'fu6', yale: 'fuh' },
              description: 'Classical'
            },
            {
              char: { simp: '爷', trad: '爺' },
              phon: { jp: 'je4', yale: 'yèh' },
              description: 'Classical'
            },
            {
              char: { simp: '爸爸', trad: '爸爸' },
              phon: { jp: 'baa4 baa1', yale: 'bàh bā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爸', trad: '爸' },
              phon: { jp: 'baa1', yale: 'bā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爹', trad: '爹' },
              phon: { jp: 'de1', yale: 'dē' },
              description: 'Colloquial'
            },
            {
              char: { simp: '爹哋', trad: '爹哋' },
              phon: { jp: 'de1 di4', yale: 'dē dìh' },
              description: 'Colloquial'
            },
            {
              char: { simp: '老豆', trad: '老豆' },
              phon: { jp: 'lou5 dau6', yale: 'lóuh dauh' },
              description: 'Colloquial'
            }
          ]
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
      eng: 'Grandfather',
      engSubtitle: '(Paternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: { simp: '祖父', trad: '祖父' },
          phon: { py: 'zǔ fù', zy: 'ㄗㄨˇ ㄈㄨˋ' },
          variations: [
            {
              char: { simp: '爷爷', trad: '爺爺' },
              phon: { py: 'yé ye', zy: 'ㄧㄝˊ ˙ㄧㄝ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿公', trad: '阿公' },
              phon: { py: 'ā gōng', zy: 'ㄚ ㄍㄨㄥ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿爷', trad: '阿爺' },
              phon: { py: 'ā yé', zy: 'ㄚ ㄧㄝˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '祖父', trad: '祖父' },
          phon: { jp: 'zou2 fu6', yale: 'jóu fuh' },
          variations: [
            {
              char: { simp: '爷爷', trad: '爺爺' },
              phon: { jp: 'je4 je2', yale: 'yèh yé' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿公', trad: '阿公' },
              phon: { jp: 'aa3 gung1', yale: 'a gūng' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿爷', trad: '阿爺' },
              phon: { jp: 'aa3 je4', yale: 'a yèh' },
              description: 'Colloquial'
            }
          ]
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
      eng: 'Grandmother',
      engSubtitle: '(Paternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: { simp: '祖母', trad: '祖母' },
          phon: { py: 'zǔ mǔ', zy: 'ㄗㄨˇ ㄇㄨˇ' },
          variations: [
            {
              char: { simp: '奶奶', trad: '奶奶' },
              phon: { py: 'nǎi nai', zy: 'ㄋㄞˇ ˙ㄋㄞ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '奶', trad: '奶' },
              phon: { py: 'nǎi', zy: 'ㄋㄞˇ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿婆', trad: '阿婆' },
              phon: { py: 'ā pó', zy: 'ㄚ ㄆㄛˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '祖母', trad: '祖母' },
          phon: { jp: 'zou2 mou5', yale: 'jóu móuh' },
          variations: [
            {
              char: { simp: '奶奶', trad: '奶奶' },
              phon: { jp: 'naai4 naai2', yale: 'náaih náai' },
              description: 'Colloquial'
            },
            {
              char: { simp: '奶', trad: '奶' },
              phon: { jp: 'naai5', yale: 'náaih' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿嫲', trad: '阿嫲' },
              phon: { jp: 'aa3 maa4', yale: 'a màh' },
              description: 'Colloquial'
            },
            {
              char: { simp: '嫲嫲', trad: '嫲嫲' },
              phon: { jp: 'maa4 maa4', yale: 'màh màh' },
              description: 'Colloquial'
            },
            {
              char: { simp: '嫲', trad: '嫲' },
              phon: { jp: 'maa4', yale: 'màh' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿婆', trad: '阿婆' },
              phon: { jp: 'aa3 po4', yale: 'a pòh' },
              description: 'Colloquial'
            }
          ]
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
      eng: 'Grandfather',
      engSubtitle: '(Maternal)',
      gender: 'M',
      language: {
        mandarin: {
          char: { simp: '外祖父', trad: '外祖父' },
          phon: { py: 'wài zǔ fù', zy: 'ㄨㄞˋ ㄗㄨˇ ㄈㄨˋ' },
          variations: [
            {
              char: { simp: '外公', trad: '外公' },
              phon: { py: 'wài gōng', zy: 'ㄨㄞˋ ㄍㄨㄥ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姥爷', trad: '姥爺' },
              phon: { py: 'lǎo ye', zy: 'ㄌㄠˇ ˙ㄧㄝ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '公公', trad: '公公' },
              phon: { py: 'gōng gong', zy: 'ㄍㄨㄥ ˙ㄍㄨㄥ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿公', trad: '阿公' },
              phon: { py: 'ā gōng', zy: 'ㄚ ㄍㄨㄥ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '外爷', trad: '外爺' },
              phon: { py: 'wài yé', zy: 'ㄨㄞˋ ㄧㄝˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '外祖父', trad: '外祖父' },
          phon: { jp: 'ngoi6 zou2 fu6', yale: 'ngoih jóu fuh' },
          variations: [
            {
              char: { simp: '外公', trad: '外公' },
              phon: { jp: 'wài gōng', yale: 'ㄨㄞˋ ㄍㄨㄥ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '公公', trad: '公公' },
              phon: { jp: 'gung1 gung1', yale: 'gūng gūng' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿公', trad: '阿公' },
              phon: { jp: 'aa3 gung1', yale: 'a gūng' },
              description: 'Colloquial'
            }
          ]
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
      eng: 'Grandmother',
      engSubtitle: '(Maternal)',
      gender: 'F',
      language: {
        mandarin: {
          char: { simp: '外祖母', trad: '外祖母' },
          phon: { py: 'wài zǔ mǔ', zy: 'ㄨㄞˋ ㄗㄨˇ ㄇㄨˇ' },
          variations: [
            {
              char: { simp: '外王母', trad: '外王母' },
              phon: { py: 'wài wáng mǔ', zy: 'ㄨㄞˋ ㄨㄤˊ ㄇㄨˇ' },
              description: 'Classical'
            },
            {
              char: { simp: '外婆', trad: '外婆' },
              phon: { py: 'wài pó', zy: 'ㄨㄞˋ ㄆㄛˊ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姥姥', trad: '姥姥' },
              phon: { py: 'lǎo lao', zy: 'ㄌㄠˇ ˙ㄌㄠ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '婆婆', trad: '婆婆' },
              phon: { py: 'pó po', zy: 'ㄆㄛˊ ˙ㄆㄛ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿婆', trad: '阿婆' },
              phon: { py: 'ā pó', zy: 'ㄚ ㄆㄛˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '外祖母', trad: '外祖母' },
          phon: { jp: 'ngoi6 zou2 mou5', yale: 'ngoih jóu móuh' },
          variations: [
            {
              char: { simp: '外王母', trad: '外王母' },
              phon: { jp: 'ngoi6 wong4 mou5', yale: 'ngoih wòhng móuh' },
              description: 'Classical'
            },
            {
              char: { simp: '外婆', trad: '外婆' },
              phon: { jp: 'ngoi6 po4', yale: 'ngoih pòh' },
              description: 'Colloquial'
            },
            {
              char: { simp: '婆婆', trad: '婆婆' },
              phon: { jp: 'po4 po4', yale: 'pòh pó' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿婆', trad: '阿婆' },
              phon: { jp: 'aa3 po4', yale: 'a pòh' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '弟弟', trad: '弟弟' },
          phon: { py: 'dì di', zy: 'ㄉㄧˋ ˙ㄉㄧ' },
          variations: [
            {
              char: { simp: '弟', trad: '弟' },
              phon: { py: 'dì', zy: 'ㄉㄧˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '兄弟', trad: '兄弟' },
              phon: { py: 'xiōng dì', zy: 'ㄒㄩㄥ ㄉㄧˋ' },
              description: 'General'
            },
            {
              char: { simp: '阿弟', trad: '阿弟' },
              phon: { py: 'ā dì', zy: 'ㄚ ㄉㄧˋ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '弟弟', trad: '弟弟' },
          phon: { jp: 'dai6 dai6', yale: 'dàih dái' },
          variations: [
            {
              char: { simp: '弟', trad: '弟' },
              phon: { jp: 'dai6', yale: 'daih' },
              description: 'Classical'
            },
            {
              char: { simp: '兄弟', trad: '兄弟' },
              phon: { jp: 'hing1 dai6', yale: 'hīng daih' },
              description: 'General'
            },
            {
              char: { simp: '细佬', trad: '細佬' },
              phon: { jp: 'sai3 lou2', yale: 'sai lóu' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿弟', trad: '阿弟' },
              phon: { jp: 'a1 dai6', yale: 'a daih' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '妹妹', trad: '妹妹' },
          phon: { py: 'mèi mei', zy: 'ㄇㄟˋ ˙ㄇㄟ' },
          variations: [
            {
              char: { simp: '妹', trad: '妹' },
              phon: { py: 'mèi', zy: 'ㄇㄟˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '女弟', trad: '女弟' },
              phon: { py: 'nǚ dì', zy: 'ㄋㄩˇ ㄉㄧˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '妹子', trad: '妹子' },
              phon: { py: 'mèi zi', zy: 'ㄇㄟˋ ˙ㄗ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿妹', trad: '阿妹' },
              phon: { py: 'ā mèi', zy: 'ㄚ ㄇㄟˋ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '妹妹', trad: '妹妹' },
          phon: { jp: 'mui6 mui6', yale: 'mùih múi' },
          variations: [
            {
              char: { simp: '妹', trad: '妹' },
              phon: { jp: 'mui6', yale: 'muih' },
              description: 'Classical'
            },
            {
              char: { simp: '女弟', trad: '女弟' },
              phon: { jp: 'neoi5 dai6', yale: 'néuih daih' },
              description: 'Classical'
            },
            {
              char: { simp: '妹子', trad: '妹子' },
              phon: { jp: 'mui6 zi2', yale: 'muih jí' },
              description: 'Colloquial'
            },
            {
              char: { simp: '细妹', trad: '細妹' },
              phon: { jp: 'sai3 mui6', yale: 'sai múi' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿妹', trad: '阿妹' },
              phon: { jp: 'aa3 mui6', yale: 'a múi' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '哥哥', trad: '哥哥' },
          phon: { py: 'gē ge', zy: 'ㄍㄜ ˙ㄍㄜ' },
          variations: [
            {
              char: { simp: '兄', trad: '兄' },
              phon: { py: 'xiōng', zy: 'ㄒㄩㄥ' },
              description: 'Classical'
            },
            {
              char: { simp: '兄长', trad: '兄長' },
              phon: { py: 'xiōng zhǎng', zy: 'ㄒㄩㄥ ㄓㄤˇ' },
              description: 'Alternative'
            },
            {
              char: { simp: '哥', trad: '哥' },
              phon: { py: 'gē', zy: 'ㄍㄜ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '哥哥', trad: '哥哥' },
          phon: { jp: 'go1 go1', yale: 'gòh gō' },
          variations: [
            {
              char: { simp: '兄', trad: '兄' },
              phon: { jp: 'hing1', yale: 'hīng' },
              description: 'Classical'
            },
            {
              char: { simp: '兄长', trad: '兄長' },
              phon: { jp: 'hing1 zoeng2', yale: 'hīng jéung' },
              description: 'Alternative'
            },
            {
              char: { simp: '哥', trad: '哥' },
              phon: { jp: 'go1', yale: 'gō' },
              description: 'Colloquial'
            },
            {
              char: { simp: '大佬', trad: '大佬' },
              phon: { jp: 'daai6 lou2', yale: 'daaih lóu' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿哥', trad: '阿哥' },
              phon: { jp: 'aa3 go1', yale: 'a gō' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '姐姐', trad: '姐姐' },
          phon: { py: 'jiě jie', zy: 'ㄐㄧㄝˇ ˙ㄐㄧㄝ' },
          variations: [
            {
              char: { simp: '姊', trad: '姊' },
              phon: { py: 'zǐ', zy: 'ㄗˇ' },
              description: 'Classical'
            },
            {
              char: { simp: '姐', trad: '姐' },
              phon: { py: 'jiě', zy: 'ㄐㄧㄝˇ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '姐姐', trad: '姐姐' },
          phon: { jp: 'ze2 ze2', yale: 'jèh jē' },
          variations: [
            {
              char: { simp: '姊', trad: '姊' },
              phon: { jp: 'zi2', yale: 'jí' },
              description: 'Classical'
            },
            {
              char: { simp: '姐', trad: '姐' },
              phon: { jp: 'ze2', yale: 'jé' },
              description: 'Colloquial'
            },
            {
              char: { simp: '家姐', trad: '家姐' },
              phon: { jp: 'gaa1 ze2', yale: 'gā jē' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿姐', trad: '阿姐' },
              phon: { jp: 'aa3 ze2', yale: 'a jē' },
              description: 'Colloquial'
            },
            {
              char: { simp: '大姊', trad: '大姊' },
              phon: { jp: 'daai6 zi2', yale: 'daaih jí' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '姨母', trad: '姨母' },
          phon: { py: 'yí mǔ', zy: 'ㄧˊ ㄇㄨˇ' },
          variations: [
            {
              char: { simp: '从母', trad: '從母' },
              phon: { py: 'cóng mǔ', zy: 'ㄘㄨㄥˊ ㄇㄨˇ' },
              description: 'Classical'
            },
            {
              char: { simp: '姨妈', trad: '姨媽' },
              phon: { py: 'yí mā', zy: 'ㄧˊ ㄇㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿姨', trad: '阿姨' },
              phon: { py: 'ā yí', zy: 'ㄚ ㄧˊ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姨姨', trad: '姨姨' },
              phon: { py: 'yí yí', zy: 'ㄧˊ ㄧˊ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姨', trad: '姨' },
              phon: { py: 'yí', zy: 'ㄧˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '姨母', trad: '姨母' },
          phon: { jp: 'ji4 mou5', yale: 'yìh móuh' },
          variations: [
            {
              char: { simp: '从母', trad: '從母' },
              phon: { jp: 'cung4 mou5', yale: 'chùhng móuh' },
              description: 'Classical'
            },
            {
              char: { simp: '姨妈', trad: '姨媽' },
              phon: { jp: 'ji4 maa1', yale: 'yìh mā' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿姨', trad: '阿姨' },
              phon: { jp: 'aa3 ji4', yale: 'a yī' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姨姨', trad: '姨姨' },
              phon: { py: 'ji4 ji4', zy: 'yī yī' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姨', trad: '姨' },
              phon: { py: 'ji4', zy: 'yìh' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '舅父', trad: '舅父' },
          phon: { py: 'jiù fù', zy: 'ㄐㄧㄡˋ ㄈㄨˋ' },
          variations: [
            {
              char: { simp: '母舅', trad: '母舅' },
              phon: { py: 'mǔ jiù', zy: 'ㄇㄨˇ ㄐㄧㄡˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '舅', trad: '舅' },
              phon: { py: 'jiù', zy: 'ㄐㄧㄡˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '舅舅', trad: '舅舅' },
              phon: { py: 'jiù jiu', zy: 'ㄐㄧㄡˋ ˙ㄐㄧㄡ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿舅', trad: '阿舅' },
              phon: { py: 'ā jiù', zy: 'ㄚ ㄐㄧㄡˋ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '舅父', trad: '舅父' },
          phon: { jp: 'kau5 fu6', yale: 'káuh fú' },
          variations: [
            {
              char: { simp: '母舅', trad: '母舅' },
              phon: { jp: 'mou5 kau5', yale: 'móuh káuh' },
              description: 'Classical'
            },
            {
              char: { simp: '舅', trad: '舅' },
              phon: { jp: 'kau5', yale: 'káuh' },
              description: 'Classical'
            },
            {
              char: { simp: '舅父', trad: '舅父' },
              phon: { jp: 'kau5 fu6', yale: 'káuh fú' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿舅', trad: '阿舅' },
              phon: { jp: 'aa3 kau5', yale: 'a káuh' },
              description: 'Colloquial'
            }
          ]
        }
      }
    },
    rels: {
      parents: ['6', '7'],
      spouses: ['17'],
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
          char: { simp: '姑母', trad: '姑母' },
          phon: { py: 'gū mǔ', zy: 'ㄍㄨ ㄇㄨˇ' },
          variations: [
            {
              char: { simp: '姑妈', trad: '姑媽' },
              phon: { py: 'gū mā', zy: 'ㄍㄨ ㄇㄚ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姑姑', trad: '姑姑' },
              phon: { py: 'gū gu', zy: 'ㄍㄨ ˙ㄍㄨ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '姑', trad: '姑' },
              phon: { py: 'gū', zy: 'ㄍㄨ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '姑母', trad: '姑母' },
          phon: { jp: 'gu1 mou5', yale: 'gū móuh' },
          variations: [
            {
              char: { simp: '姑妈', trad: '姑媽' },
              phon: { jp: 'gu1 maa1', yale: 'gū mā' },
              description: 'Colloquial (Older)'
            },
            {
              char: { simp: '姑姐', trad: '姑姐' },
              phon: { jp: 'gu1 ze2', yale: 'gū jē' },
              description: 'Colloquial (Younger)'
            }
          ]
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
          char: { simp: '叔父', trad: '叔父' },
          phon: { py: 'shū fù', zy: 'ㄕㄨ ㄈㄨˋ' },
          variations: [
            {
              char: { simp: '季父', trad: '季父' },
              phon: { py: 'jì fù', zy: 'ㄐㄧˋ ㄈㄨˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '叔', trad: '叔' },
              phon: { py: 'shū', zy: 'ㄕㄨ' },
              description: 'Classical'
            },
            {
              char: { simp: '叔叔', trad: '叔叔' },
              phon: { py: 'shū shu', zy: 'ㄕㄨ ˙ㄕㄨ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '叔父', trad: '叔父' },
          phon: { jp: 'suk1 fu6', yale: 'sūk fuh' },
          variations: [
            {
              char: { simp: '季父', trad: '季父' },
              phon: { jp: 'gwai3 fu6', yale: 'gwai fuh' },
              description: 'Classical'
            },
            {
              char: { simp: '叔', trad: '叔' },
              phon: { jp: 'suk1', yale: 'sūk' },
              description: 'Classical'
            },
            {
              char: { simp: '叔叔', trad: '叔叔' },
              phon: { jp: 'suk1 suk1', yale: 'sūk sūk' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿叔', trad: '阿叔' },
              phon: { jp: 'aa3 suk1', yale: 'a sūk' },
              description: 'Colloquial'
            }
          ]
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
          char: { simp: '伯父', trad: '伯父' },
          phon: { py: 'bó fù', zy: 'ㄅㄛˊ ㄈㄨˋ' },
          variations: [
            {
              char: { simp: '世父', trad: '世父' },
              phon: { py: 'shì fù', zy: 'ㄕˋ ㄈㄨˋ' },
              description: 'Classical'
            },
            {
              char: { simp: '伯伯', trad: '伯伯' },
              phon: { py: 'bó bo', zy: 'ㄅㄛˊ ˙ㄅㄛ' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿伯', trad: '阿伯' },
              phon: { py: 'ā bó', zy: 'ㄚ ㄅㄛˊ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '伯父', trad: '伯父' },
          phon: { jp: 'baak3 fu6', yale: 'baak fuh' },
          variations: [
            {
              char: { simp: '世父', trad: '世父' },
              phon: { jp: 'sai3 fu6', yale: 'sai fuh' },
              description: 'Classical'
            },
            {
              char: { simp: '伯伯', trad: '伯伯' },
              phon: { jp: 'baak3 baak3', yale: 'baak baak' },
              description: 'Colloquial'
            },
            {
              char: { simp: '阿伯', trad: '阿伯' },
              phon: { jp: 'aa3 baak3', yale: 'a baak' },
              description: 'Colloquial'
            }
          ]
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
    id: '17',
    data: {
      eng: 'Aunt',
      engSubtitle: '(Maternal uncle\'s wife)',
      gender: 'F',
      language: {
        mandarin: {
          char: { simp: '舅母', trad: '舅母' },
          phon: { py: 'jiù mǔ', zy: 'ㄐㄧㄡˋ ㄇㄨˇ' },
          variations: [
            {
              char: { simp: '舅妈', trad: '舅媽' },
              phon: { py: 'jiù mā', zy: 'ㄐㄧㄡˋ ㄇㄚ' },
              description: 'Colloquial'
            }
          ]
        },
        cantonese: {
          char: { simp: '舅母', trad: '舅母' },
          phon: { jp: 'kau5 mou5', yale: 'káuh móuh' },
          variations: [
            {
              char: { simp: '舅妈', trad: '舅媽' },
              phon: { jp: 'kau5 maa1', yale: 'káuh mā' },
              description: 'Colloquial'
            }
          ]
        }
      }
    },
    rels: {
      parents: [],
      spouses: ['13'],
      children: []
    }
  }
]