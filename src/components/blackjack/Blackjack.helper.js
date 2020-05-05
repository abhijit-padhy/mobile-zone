let _deck = {
  1: {
    name: "ace",
    value: 1
  },
  2: {
    name: "2",
    value: 2
  },
  3: {
    name: "3",
    value: 3
  },
  4: {
    name: "4",
    value: 4
  },
  5: {
    name: "5",
    value: 5
  },
  6: {
    name: "6",
    value: 6
  },
  7: {
    name: "7",
    value: 7
  },
  8: {
    name: "8",
    value: 8
  },
  9: {
    name: "9",
    value: 9
  },
  10: {
    name: "10",
    value: 10
  },
  11: {
    name: "jack",
    value: 10
  },
  12: {
    name: "queen",
    value: 10
  },
  13: {
    name: "king",
    value: 10
  },
}

export const Deck = _deck; //JSON.parse(JSON.stringify(_deck));

export const CardTypes = ["clubs", "spades", "hearts", "diamonds"];

export const getCard = (name, type) => 
  '/mobile-zone/assets/cards-png/'+name+'_of_'+type+'.png';