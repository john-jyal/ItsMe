import React, { useState } from 'react';

const Work0826 = () => {
  const articles = [
    {
      name: '발탄',
      title: '마수군단장',
      img:
        'https://w.namu.la/s/64f946dbe970ac953f4996de530c46eb6c0e3337a0a304defb4c4908431c3b5009eaa49cf24f8da1969f8fbceafa1b93748f03f1a2d160318b5842ce4eaab7ea00955b81ca831cef073dd9cd5062ba2e498a05a3158267d7beb9cca68594eac0',
      desc: '발탄이 어떻게 군단장 ㅋㅋ',
    },
    {
      name: '비아키스',
      title: '욕망군단장',
      img:
        'https://w.namu.la/s/25eb509cba9db05bcf09b9d2edbb893fbbc5684a8784e5f6abaa5ae59912374f04cf97ae26957fbfad5c21fb11eae72cc0449da3ea8d845207931de3fa99ce1515ca66da14a13daa20e8ae87bf006052bbffb6364f789cc3a55b6ed75f1d29eb',
      desc: '성우가 고생한케이스',
    },
    {
      name: '쿠크루삥뽕',
      title: '광기군단장',
      img:
        'https://w.namu.la/s/7e970a45eb2cbc63e34e6a3a92ead15cf69b23204b6c4862023896ad27462a839031ffe3891b0d687bdbf78b7d15265ed633a15ff4865b01a8da80287b46000ab862a811ae361710126089a7f406b46344d4a71bd8a9d3a0656daf11feabe9b1',
      desc: '빙고 킹받네',
    },
    {
      name: '아브렐슈드',
      title: '몽환군단장',
      img:
        'https://w.namu.la/s/5ac297594a07639f77cf992808e5a6d5e7cec3ca6fbf087be47e271532aedb2d155b9b31fb3467ea50dcee2265eeeb6579f61e7040c466dc666102a5406f8b9195738d8dd53c74af2730e46c608b15d23e4e49feb8ad779a3a3c491dd3e97961',
      desc: '섭주님 등장하십니다',
    },
  ];
  const [article, setArticle] = useState({});
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className="title-area">
        <p align="center" style={{ borderBottom: 'solid 1px' }}>
          로아 궁당장
        </p>
        {console.log('rendered')}
      </div>
      <div className="btn-group-area">
        {articles.map((boss, index) => {
          return (
            <button
              key={`btn-${index}`}
              onClick={() => setArticle(articles[index])}
            >
              {boss.name}
            </button>
          );
        })}
      </div>
      {Object.keys(article).length !== 0 && (
        <div
          className="content-area"
          style={{
            display: 'grid',
            gridTemplateColumns: '20% 40% 1fr',
          }}
        >
          <div>
            <h1>{article.name}</h1>
            <h2>The {article.title}</h2>
          </div>
          <div className="img-area">
            <img src={article.img} alt="" />
          </div>
          <article>{article.desc}</article>
        </div>
      )}
    </div>
  );
};

export default Work0826;
// import React, { useState } from 'react';
// import Contents from './Contents';
//
// const Work0826 = () => {
//   return (
//     <div style={{ backgroundColor: '#fff' }}>
//       <div className="title-area">
//         <p align="center" style={{ borderBottom: 'solid 1px' }}>
//           로아 궁당장
//         </p>
//         {console.log('rendered')}
//       </div>
//       <Contents />
//     </div>
//   );
// };
//
// export default Work0826;
