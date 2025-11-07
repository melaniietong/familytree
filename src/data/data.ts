import type { Data } from 'family-chart'

/*
 * GUIDE
 * - eng (english)
 * - char (characters): simp (simplified) / trad (traditional)
 * - phon (phonetics):
 *    - man (mandarin): py (pinyin) / zy (zhuyin)
 *    - can (cantonese): jp (jyutping) / yale
 */

export const data: Data = [
  {
    id: '1',
    data: {
      eng: 'Me',
      gender: 'M',
      char: {
        simp: '我',
        trad: '我'
      },
      phon: {
        man: {
          py: 'wǒ',
          zy: 'ㄨㄛ'
        },
        can: {
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
        man: {
          py: 'māmā',
          zy: 'ㄇㄚ ㄇㄚ'
        },
        can: {
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
        man: {
          py: 'bàba',
          zy: 'ㄅㄚˋ ㄅㄚˋ'
        },
        can: {
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