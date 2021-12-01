import React, { useState } from 'react';

const Work0826 = () => {
  const articles = [
    {
      name: '발탄',
      title: '마수군단장',
      img: 'data:image/jpeg;base64,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',
      desc: '발탄이 어떻게 군단장 ㅋㅋ',
    },
    {
      name: '비아키스',
      title: '욕망군단장',
      img: 'https://w.namu.la/s/25eb509cba9db05bcf09b9d2edbb893fbbc5684a8784e5f6abaa5ae59912374f04cf97ae26957fbfad5c21fb11eae72cc0449da3ea8d845207931de3fa99ce1515ca66da14a13daa20e8ae87bf006052bbffb6364f789cc3a55b6ed75f1d29eb',
      desc: '성우가 고생한케이스',
    },
    {
      name: '쿠크루삥뽕',
      title: '광기군단장',
      img: 'https://w.namu.la/s/7e970a45eb2cbc63e34e6a3a92ead15cf69b23204b6c4862023896ad27462a839031ffe3891b0d687bdbf78b7d15265ed633a15ff4865b01a8da80287b46000ab862a811ae361710126089a7f406b46344d4a71bd8a9d3a0656daf11feabe9b1',
      desc: '빙고 킹받네',
    },
    {
      name: '아브렐슈드',
      title: '몽환군단장',
      img: 'https://w.namu.la/s/5ac297594a07639f77cf992808e5a6d5e7cec3ca6fbf087be47e271532aedb2d155b9b31fb3467ea50dcee2265eeeb6579f61e7040c466dc666102a5406f8b9195738d8dd53c74af2730e46c608b15d23e4e49feb8ad779a3a3c491dd3e97961',
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
