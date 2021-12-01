const dummy = [
  {
    id: 0,
    title: '1번',
    desc: '1번이 선택되었습니다',
  },
  {
    id: 1,
    title: '2번',
    desc: '2번이 선택되었습니다',
  },
  {
    id: 2,
    title: '3번',
    desc: '3번이 선택되었습니다',
  },
  {
    id: 3,
    title: '4번',
    desc: '4번이 선택되었습니다',
  },
];

export const loadData = (id) => {
  const time = 1000 + Math.floor(Math.random() * 2000);

  return new Promise((resolve) => {
    setTimeout(() => resolve(dummy.find((user) => user.id === id)), time);
  });
};
