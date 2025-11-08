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
  {id: '1',
    data: {
      eng: 'Me',
      gender: 'M',
      char: {
        simp: '我',
        trad: '我'
      },
      phon: {
        mandarin: {
          py: 'wǒ',
          zy: 'ㄨㄛ'
        },
        cantonese: {
          jp: 'ngo5',
          yale: 'ngóh'
        }
      },
    },
    rels: {
      parents: ['2', '3'],
      spouses: [],
      children: [],
    },
  },
  {
    id: '2',
    data: {
      eng: 'Mother',
      gender: 'F',
      char: {
        simp: '妈妈',
        trad: '媽媽'
      },
      phon: {
        mandarin: {
          py: 'māmā',
          zy: 'ㄇㄚ ㄇㄚ'
        },
        cantonese: {
          jp: 'maa4 maa1',
          yale: 'màh mā'
        }
      },
    },
    rels: {
      parents: [],
      spouses: ['3'],
      children: ['1'],
    },
  },
  {
    id: '3',
    data: {
      eng: 'Father',
      gender: 'M',
      char: {
        simp: '爸爸',
        trad: '爸爸'
      },
      phon: {
        mandarin: {
          py: 'bàba',
          zy: 'ㄅㄚˋ ㄅㄚˋ'
        },
        cantonese: {
          jp: 'baa4 baa1',
          yale: 'bàh bā'
        }
      },
    },
    rels: {
      parents: [],
      spouses: ['2'],
      children: ['1'],
    },
  },
]